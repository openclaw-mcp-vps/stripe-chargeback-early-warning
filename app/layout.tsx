import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stripe Chargeback Early Warning",
  description: "Detect potential chargebacks before they happen. Monitor Stripe transaction patterns and get alerted to high-risk payments."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d3138939-2d8b-4fc0-8ab2-5df8fe1158a3"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
