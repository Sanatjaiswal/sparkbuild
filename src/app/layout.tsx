import type { Metadata } from "next";
import "./globals.css";
import { CMSProvider } from "@/context/CMSContext";

export const metadata: Metadata = {
  title: "Sparkbuild Construction – Trusted Construction Partner in India",
  description:
    "Sparkbuild delivers reliable, high-quality construction solutions across India and Mahakaushal Area of Madhya Pradesh. Residential, Commercial, Hospital, Industrial and Mega Infrastructure projects.",
  keywords: [
    "Sparkbuild",
    "Construction in Jabalpur",
    "Madhya Pradesh construction",
    "Civil Engineering",
    "Architectural Design",
    "Hospital Construction",
    "Turnkey Builders",
  ],
  icons: {
    icon: "/images/sparkbuild-logo.png",
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
