"use client";

import { redirect, usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";

type Props = {
  children: React.ReactNode;
};

export default function AuthProvider({ children }: Props) {
  const pathName = usePathname();

  const isLoggedIn = false;

  if (!isLoggedIn && !["/login", "/register"].includes(pathName)) {
    redirect("/login");
  }

  return <SessionProvider>{children}</SessionProvider>;
}
