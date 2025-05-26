import HeaderNavLinks from "@/components/dashboard/dashboard-navlinks";
import React from "react";

function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderNavLinks />
      {children}
    </>
  );
}

export default DashboardLayout;
