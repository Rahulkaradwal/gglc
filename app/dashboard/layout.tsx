import HeaderNavLinks from "@/components/dashboard/dashboard-navlinks";
import { isAuthenticated } from "@/utils/tokenUtils";
import { redirect } from "next/navigation";

import React from "react";
async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const auth = await isAuthenticated();

  if (!auth.authenticated) {
    redirect("/login");
  }
  return (
    <div className="-px-10">
      <HeaderNavLinks />
      {children}
    </div>
  );
}

export default DashboardLayout;
