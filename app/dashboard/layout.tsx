import HeaderNavLinks from "@/components/dashboard/dashboard-navlinks";
import { getUserFromSession } from "@/utils/session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";
async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUserFromSession(await cookies());

  if (!user) {
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
