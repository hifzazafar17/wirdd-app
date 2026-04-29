import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wird — وِرد | Hands-Free Dhikr Tracker",
  description:
    "Count every Astaghfirullah you say. Without touching your phone. Like a step counter — but for your soul.",
  openGraph: {
    title: "Wird — وِرد | Hands-Free Dhikr Tracker",
    description:
      "Count every Astaghfirullah you say. Without touching your phone.",
    url: "https://wirdd-app.vercel.app",
    siteName: "Wird",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wird — وِرد",
    description: "The passive dhikr tracker. Like a step counter for your soul.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body>{children}</body>
    </html>
  );
}