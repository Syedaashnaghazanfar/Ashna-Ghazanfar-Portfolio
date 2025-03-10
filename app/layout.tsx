import type { Metadata } from "next";
import { Sansita } from "next/font/google";

import "./globals.css";

const sansita = Sansita({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
  variable: "--font-sansita", // Custom CSS variable
});


export const metadata: Metadata = {
  title: "Ashna Ghazanfar",
  description: "Frontend Developer | Next.js | TypeScript | Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       className={sansita.variable}
      >
        {children}
      </body>
    </html>
  );
}
