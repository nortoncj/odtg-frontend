import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // title: "OTDG",
  // description: "Optimize your workflow with Optimal Digtial",
  title: "ODTG — Workflow &amp; Operational Improvement Advisory",
  description:
    "Optimal Digital Transformation Group (ODTG), LLC — a Service-Disabled Veteran-Owned Small Business helping organizations fix how work gets done.",
  openGraph: {
    title: "ODTG — Workflow &amp; Operational Improvement Advisory",
    description:
      "Optimal Digital Transformation Group (ODTG), LLC — a Service-Disabled Veteran-Owned Small Business helping organizations fix how work gets done.",
    // title: "ODTG — Optimal Digital Transformation Group",
    // description:
    //   "Service-Disabled Veteran-Owned advisory firm helping federal agencies, contractors, and financial practices fix how work gets done — workflow redesign, records management, and Section 508 compliance.",
    images: [
      {
        url: "/og-image.jpg", // 1200×630, drop in /public
        width: 1200,
        height: 630,
        alt: "ODTG logo with the tagline 'Innovating with Structure. Modernizing with Confidence",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
