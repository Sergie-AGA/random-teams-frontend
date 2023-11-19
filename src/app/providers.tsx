"use client";

import { redirect, usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";

export function Providers(props: { children: React.ReactNode }) {
  const pathName = usePathname();

  const isLoggedIn = false;

  if (!isLoggedIn && !["/login", "/register"].includes(pathName)) {
    redirect("/login");
  }

  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 1000,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>{props.children}</SessionProvider>
      {<ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
}
