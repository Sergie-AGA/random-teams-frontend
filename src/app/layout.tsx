import "./globals.css";
import type { Metadata } from "next";
import { Orbitron, Open_Sans } from "next/font/google";
import AuthProvider from "./AuthProvider";
import { queryClient } from "../lib/react-query";
import { QueryClientProvider } from "@tanstack/react-query";

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <body
          className={`${orbitron.variable} ${openSans.variable} dark min-w-full min-h-screen pt-5 pb-5`}
        >
          <AuthProvider>{children}</AuthProvider>
        </body>
      </QueryClientProvider>
    </html>
  );
}
