import "./globals.css";
import type { Metadata } from "next";
import { Orbitron, Open_Sans } from "next/font/google";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  // if (true) {
  //   redirect("/login");
  // }
  console.log();

  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${openSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
