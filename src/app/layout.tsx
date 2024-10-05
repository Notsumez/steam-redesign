import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "../components/header";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '400', '700']
});

export const metadata: Metadata = {
  title: "Steam Redesign",
  description: "Redesign da Steam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={roboto.className}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
