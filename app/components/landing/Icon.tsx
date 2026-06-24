import { ReactElement } from "react";

export type IconName =
  | "phone"
  | "check"
  | "x"
  | "arrow"
  | "search"
  | "clock"
  | "doc"
  | "shield"
  | "heart"
  | "calendar"
  | "lab"
  | "map"
  | "mail"
  | "bag"
  | "award"
  | "snowflake"
  | "circles"
  | "rings"
  | "instagram"
  | "facebook"
  | "youtube"
  | "whatsapp";

export function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  const common = { strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const paths: Record<IconName, ReactElement> = {
    phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />,
    check: <path d="M5 12l5 5L20 6" />,
    x: <path d="M6 6l12 12M18 6L6 18" />,
    arrow: <path d="M5 12h14M13 5l7 7-7 7" />,
    search: <><circle cx="11" cy="11" r="7" /><path d="M16 16l5 5" {...common} /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" {...common} /></>,
    doc: <><path d="M4 5h16v14H4z" /><path d="M8 9h8M8 13h5" {...common} /></>,
    shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    heart: <><path d="M12 21s-7-4.5-7-10a7 7 0 0 1 14 0c0 5.5-7 10-7 10z" /><path d="M12 8v4M10 10h4" {...common} /></>,
    calendar: <path d="M8 3v4M16 3v4M4 9h16M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" />,
    lab: <path d="M9 3h6v5l4 8a3 3 0 0 1-3 4H8a3 3 0 0 1-3-4l4-8V3z" />,
    map: <><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>,
    mail: <><path d="M4 4h16v16H4z" /><path d="M4 6l8 6 8-6" /></>,
    bag: <><path d="M4 7h16v12H4z" /><path d="M9 7V4h6v3M12 11v4M10 13h4" {...common} /></>,
    award: <><circle cx="12" cy="9" r="6" /><path d="M8.5 14.5 7 23l5-3 5 3-1.5-8.5" {...common} /></>,
    snowflake: <><line x1="12" y1="2" x2="12" y2="22" /><line x1="2" y1="12" x2="22" y2="12" /><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" /><line x1="19.07" y1="4.93" x2="4.93" y2="19.07" /></>,
    circles: <><circle cx="8" cy="8" r="3.2" /><circle cx="16" cy="8" r="3.2" /><circle cx="8" cy="16" r="3.2" /><circle cx="16" cy="16" r="3.2" /></>,
    rings: <><circle cx="9" cy="10" r="5" /><circle cx="15" cy="10" r="5" /><circle cx="12" cy="16" r="5" /></>,
    instagram: <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.3 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .3-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4a3.8 3.8 0 0 1-1.4-.9 3.8 3.8 0 0 1-.9-1.4c-.2-.4-.3-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.3 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 4.9a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8zm6.2-.2a1.1 1.1 0 1 1-2.3 0 1.1 1.1 0 0 1 2.3 0z" />,
    facebook: <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z" />,
    youtube: <path d="M23 12s0-3.2-.4-4.7c-.2-.8-.9-1.5-1.7-1.7C19.4 5.2 12 5.2 12 5.2s-7.4 0-8.9.4c-.8.2-1.5.9-1.7 1.7C1 8.8 1 12 1 12s0 3.2.4 4.7c.2.8.9 1.5 1.7 1.7 1.5.4 8.9.4 8.9.4s7.4 0 8.9-.4c.8-.2 1.5-.9 1.7-1.7.4-1.5.4-4.7.4-4.7zM9.8 15.3V8.7l5.7 3.3-5.7 3.3z" />,
    whatsapp: <path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.5A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.2 1.2-1.7 1.2-.4.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.5-2.6-1.1-4.3-3.8-4.4-4-.1-.2-1-1.4-1-2.6s.6-1.8.8-2.1c.2-.2.5-.3.6-.3h.5c.2 0 .4 0 .5.4.2.5.7 1.7.7 1.8.1.1.1.3 0 .4l-.3.5-.3.3c-.1.1-.3.3-.1.5.1.2.6 1 1.4 1.7 1 .9 1.8 1.1 2 1.2.2.1.4.1.5-.1l.6-.7c.2-.2.3-.2.5-.1l1.6.8c.2.1.4.2.4.3.1.1.1.5-.1 1z" />,
  };
  const filled = ["instagram", "facebook", "youtube", "whatsapp"].includes(name);

  return (
    <svg className={className} viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke={filled ? "none" : "currentColor"} strokeWidth="2">
      {paths[name]}
    </svg>
  );
}
