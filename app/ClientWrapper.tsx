// app/ClientWrapper.tsx
"use client";

import { MenuProvider } from "@/context/useMenu";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MenuProvider>{children}</MenuProvider>;
}
