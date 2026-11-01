import type { Metadata } from "next";
import "./globals.css";
import { CMSProvider } from "@/context/CMSContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://mphospital.in"),
  title: "MP Hospital & Trauma Centre Jabalpur – Formerly Maxx Hospital | 24x7 Emergency & Orthopedics",
  description:
    "MP Hospital & Trauma Centre (Formerly Maxx Hospital) in Beoharbagh, Jabalpur led by Dr. Abhishek Jain. Leading center for Total Knee/Hip Replacement, Accidental Polytrauma, Sports Injury Arthroscopy, Spine Care, Modular OT, and 24x7 ICU.",
  keywords: [
    "MP Hospital",
    "MP Hospital and Trauma Center",
    "Maxx Hospital Jabalpur",
    "Dr Abhishek Jain",
    "Orthopedic Surgeon Jabalpur",
    "Trauma Hospital Jabalpur",
    "Joint Replacement Jabalpur",
    "Knee Replacement",
    "24x7 Emergency Jabalpur",
    "Arthroscopy Jabalpur",
  ],
  alternates: {
    canonical: "https://mphospital.in",
  },
  openGraph: {
    title: "MP Hospital & Trauma Centre Jabalpur – Formerly Maxx Hospital",
    description: "24x7 Emergency, Accidental Polytrauma, Total Knee/Hip Replacement & ICU Care in Beoharbagh, Jabalpur.",
    url: "https://mphospital.in",
    siteName: "MP Hospital & Trauma Centre",
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/images/mp-hospital-logo.svg",
  },
  verification: {
    google: "googlee4cbd8ada6d64925",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col font-sans bg-white text-neutral-900">
        <CMSProvider>{children}</CMSProvider>
      </body>
    </html>
  );
}
