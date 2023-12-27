/* eslint-disable @next/next/no-page-custom-font */
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anas Chammam's Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=McLaren&family=Montserrat:wght@300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-gradient-to-t from-[#242d3d]/90 via-[#242d3d] to-[#242d3d]/90">
        {children}
      </body>
    </html>
  );
}
