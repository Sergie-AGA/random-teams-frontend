import "./globals.css";
import type { Metadata } from "next";
import { Orbitron, Open_Sans } from "next/font/google";
import { redirect } from "next/navigation";

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open_sans",
});

export const metadata: Metadata = {
  title: "Random Teams",
  description: "Creating random teams to do random stuff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (true) {
    redirect("/login");
  }

  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${openSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
