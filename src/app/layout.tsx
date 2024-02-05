import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getIconURL } from "@/helpers/icon";

export const metadata: Metadata = {
  title: "Gardevoir EX Damage Calculator",
  description: "Calculate damage from the Pokémon TCG card Gardevoir EX deck.",
  icons: [
    {
      rel: "icon",
      url:  getIconURL("Gardevoir Tozei"),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
