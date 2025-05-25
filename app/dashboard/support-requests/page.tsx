"use client";
import DashboardHeader from "@/components/dashboard/dashboard-header";
import React, { useEffect, useState } from "react";

function SupportRequests() {
  const [view, setView] = useState<"grid" | "list">("grid");

  // Automatically switch to "grid" on small screens
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleChange = (e: MediaQueryListEvent) => {
      setView(e.matches ? "list" : "grid");
    };

    // Listen for changes
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleView = () => {
    setView((prev) => (prev === "grid" ? "list" : "grid"));
  };
  return (
    <section className="-mx-10 h-[100vh] bg-gradient-to-br from-neutral-50 to-amber-100 ">
      <DashboardHeader
        view={view}
        onChange={toggleView}
        heading="Support Requests"
      />
    </section>
  );
}

export default SupportRequests;
