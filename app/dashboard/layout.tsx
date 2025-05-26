import HeaderNavLinks from "@/components/dashboard/dashboard-navlinks";
import React from "react";

function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="-px-10">
      <HeaderNavLinks />
      {children}
    </div>
  );
}

export default DashboardLayout;
