// Google Apps Script - ONE webhook for ALL forms. Nothing of the original flow is removed.
//   - "marinas-common"  form  -> "marinas-common" sheet  (NEW - this project; ONLY this tab)
//   - "herinas leads"   form  -> "HC-leads" sheet  (original flow, unchanged, default)
//   - "Bariatric leads" form  -> "BC-leads" sheet  (original, unchanged)
//   - "BC-VSL-Lead"     form  -> "BC-VSL-Leads" sheet  (unchanged)
//   - "HC-VSL-Leads"    form  -> "HC-VSL-Leads" sheet  (unchanged)
// Every lead from the OLD forms is ALSO written to the legacy "Submissions" sheet, EXCEPT the
// BC-VSL, HC-VSL and marinas-common forms, which go ONLY to their own tab.
// Deploy as Web app (Execute as: Me, Who has access: Anyone) and put the /exec URL in
// GOOGLE_APPS_SCRIPT_URL in .env.

const SUBMISSIONS_SHEET = "Submissions";
const MARINAS_SHEET = "marinas-common";
const HC_SHEET = "HC-leads";
const BC_SHEET = "BC-leads";
const BC_VSL_SHEET = "BC-VSL-Leads";
const HC_VSL_SHEET = "HC-VSL-Leads";

const SUBMISSIONS_HEADERS = [
  "Timestamp",
  "Source",
  "Name",
  "Phone",
  "Email",
  "Condition",
  "Preferred Time",
  "Note",
  "URL",
  "TeleCRM",
];

// marinas-common tab uses the same columns the Next.js route sends
const MARINAS_HEADERS = SUBMISSIONS_HEADERS;

const HC_HEADERS = [
  "Timestamp",
  "Form Name",
  "Source",
  "First Name",
  "Last Name",
  "Email",
  "Phone",
  "Location",
  "Appointment Date",
  "Appointment Time",
  "Symptom Type",
  "Surgery Advised",
  "Previous Consult",
  "Page URL",
  "TeleCRM",
];

// BC-leads uses the same columns as HC-leads
const BC_HEADERS = HC_HEADERS;

// HC-VSL-Leads: columns match what the HC VSL landing page form sends
const HC_VSL_HEADERS = [
  "Timestamp",
  "Form Name",
  "Source",
  "Name",
  "Phone",
  "Email",
  "Condition",
  "Page URL",
  "Payment ID",
  "Payment Status",
  "TeleCRM",
];

// "Marinas Common", "marinas_common ", "MARINAS-COMMON" all match "marinas-common"
function normName(s) {
  return String(s).toLowerCase().replace(/[\s_\-]+/g, "");
}

function findSheet(ss, name) {
  const exact = ss.getSheetByName(name);
  if (exact) return exact;
  const want = normName(name);
  const sheets = ss.getSheets();
  for (let i = 0; i < sheets.length; i++) {
    if (normName(sheets[i].getName()) === want) return sheets[i];
  }
  return null;
}

function getSheet(name, headers) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = findSheet(ss, name);

  if (!sheet) {
    sheet = ss.insertSheet(name);
  }

  const firstRow = sheet.getRange(1, 1, 1, headers.length).getValues()[0];
  if (!firstRow.some(String)) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  }

  return sheet;
}

function doPost(e) {
  try {
    const body = e && e.postData && e.postData.contents
      ? JSON.parse(e.postData.contents)
      : {};

    const formKey = String(body.formName || "").toLowerCase();

    // marinas-common form -> marinas-common tab ONLY.
    const isMarinas = formKey === "marinas-common";

    // Bariatric form -> BC-leads. Anything else -> HC-leads (original behaviour).
    const isBariatric = formKey === "bariatric leads";

    // BC-VSL form -> BC-VSL-Leads.
    const isBcVsl = formKey === "bc-vsl-lead";

    // HC-VSL form -> HC-VSL-Leads.
    const isHcVsl = formKey === "hc-vsl-leads";

    const timestamp = body.timestamp || new Date();
    const source = body.source || (isMarinas ? "Marinas-Common" : isHcVsl ? "HCVSL-Form" : isBcVsl ? "BC-VSL-Forms" : isBariatric ? "Bariatric-BC" : "Herinas-HC");
    const fullName = [body.firstName, body.lastName].filter(Boolean).join(" ") || body.name || "";
    const preferredTime = [body.appointmentDate, body.appointmentTime].filter(Boolean).join(" ") || body.appointmentDateTime || "";
    const note = [
      body.location ? "Location: " + body.location : "",
      body.hadSurgery ? "Surgery advised: " + body.hadSurgery : "",
      body.prevConsult ? "Prev consult: " + body.prevConsult : "",
    ].filter(Boolean).join(" | ") || body.note || "";

    // Row for the legacy "Submissions" sheet AND the new "marinas-common" sheet (same columns)
    const submissionsRow = [
      timestamp,
      source,
      fullName,
      body.phone ? String(body.phone) : "",
      body.email || "",
      body.symptomType || body.condition || body.concern || "",
      preferredTime,
      note,
      body.pageUrl || body.url || "",
      body.telecrm || "",
    ];

    // Form-specific sheet row (HC-leads or BC-leads or BC-VSL-Leads)
    const leadRow = [
      timestamp,
      body.formName || (isBcVsl ? "BC-VSL-Lead" : isBariatric ? "Bariatric leads" : "herinas leads"),
      source,
      body.firstName || "",
      body.lastName || "",
      body.email || "",
      body.phone ? String(body.phone) : "",
      body.location || "",
      body.appointmentDate || "",
      body.appointmentTime || "",
      body.symptomType || "",
      body.hadSurgery || "",
      body.prevConsult || "",
      body.pageUrl || body.url || "",
      body.telecrm || "",
    ];

    // HC-VSL-Leads row
    const hcVslRow = [
      timestamp,
      body.formName || "HC-VSL-Leads",
      source,
      fullName,
      body.phone ? String(body.phone) : "",
      body.email || "",
      body.concern || body.condition || body.symptomType || "",
      body.pageUrl || body.url || "",
      body.paymentId || "",
      body.paymentStatus || "",
      body.telecrm || "",
    ];

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      if (isMarinas) {
        // marinas-common: ONLY its own tab, nothing else.
        getSheet(MARINAS_SHEET, MARINAS_HEADERS).appendRow(submissionsRow);
      } else {
        // BC-VSL and HC-VSL forms go ONLY to their own tab; every other form still also goes to Submissions.
        if (!isBcVsl && !isHcVsl) {
          getSheet(SUBMISSIONS_SHEET, SUBMISSIONS_HEADERS).appendRow(submissionsRow);
        }
        if (isHcVsl) {
          getSheet(HC_VSL_SHEET, HC_VSL_HEADERS).appendRow(hcVslRow);
        } else if (isBcVsl) {
          getSheet(BC_VSL_SHEET, BC_HEADERS).appendRow(leadRow);
        } else if (isBariatric) {
          getSheet(BC_SHEET, BC_HEADERS).appendRow(leadRow);
        } else {
          getSheet(HC_SHEET, HC_HEADERS).appendRow(leadRow);
        }
      }
    } finally {
      lock.releaseLock();
    }

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ success: true, message: "Submissions + marinas-common + HC-leads + BC-leads + BC-VSL-Leads + HC-VSL-Leads webhook is live" }))
    .setMimeType(ContentService.MimeType.JSON);
}

// Run this ONCE from the Apps Script editor (select testMarinas -> Run) to check the tab.
// It writes one TEST row into the marinas-common tab only. Delete the row afterwards.
function testMarinas() {
  const fake = {
    postData: {
      contents: JSON.stringify({
        formName: "marinas-common",
        source: "TEST",
        name: "Test Lead",
        phone: "9999999999",
        concern: "test",
        pageUrl: "test",
      }),
    },
  };
  Logger.log(doPost(fake).getContent());
  Logger.log("Sheets: " + SpreadsheetApp.getActiveSpreadsheet().getSheets().map(function (s) { return "[" + s.getName() + "]"; }).join(" "));
}
