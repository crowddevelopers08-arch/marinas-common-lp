import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
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
    icon: "https://res.cloudinary.com/dthj7fakc/image/upload/v1781681953/Marina-logo_v7lcbn.png",
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
      <body suppressHydrationWarning className="min-h-full overflow-x-hidden bg-white font-[family-name:var(--font-jakarta)] leading-[1.6] text-[#14241f] antialiased">
        {children}
      </body>
    </html>
  );
}
