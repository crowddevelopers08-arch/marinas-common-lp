import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Marina's Clinic - Gastro, Laparoscopic & Bariatric Surgery in Chennai",
  description:
    "Book a focused consultation with Dr. Preethi Mrinalini for hernia, gallstones, acid reflux, piles, obesity and more in Nungambakkam, Chennai.",
  icons: {
    icon: [
      {
        url: "https://res.cloudinary.com/dxntva1vn/image/upload/v1794027007/Marina-logo_tjcywr.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "https://res.cloudinary.com/dxntva1vn/image/upload/v1794027007/Marina-logo_tjcywr.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    apple:
      "https://res.cloudinary.com/dxntva1vn/image/upload/v1794027007/Marina-logo_tjcywr.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${fraunces.variable} h-full scroll-smooth antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full overflow-x-hidden bg-white font-[family-name:var(--font-jakarta)] leading-[1.6] text-[#14241f] antialiased"
      >
        {/* Google Ads Global Site Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18174223501"
          strategy="afterInteractive"
        />

        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-18174223501');

            // Phone Call Conversion Tracking
            gtag('config', 'AW-18174223501/TNojCL3KxcocEI3JktpD', {
              phone_conversion_number: '09884000171'
            });
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
