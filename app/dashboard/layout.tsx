import RouteProtector from "@/components/auth/RouteProtector";
import HeaderNavLinks from "@/components/dashboard/dashboard-navlinks";
import React from "react";

function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RouteProtector>
      <div className="-px-10">
        <HeaderNavLinks />
        {children}
      </div>
    </RouteProtector>
  );
}

export default DashboardLayout;
