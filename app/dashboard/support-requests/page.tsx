"use client";
import DashboardHeader from "@/components/dashboard/dashboard-header";
import SupportRequestCard from "@/components/dashboard/support-request-card";
import SupportRequestTable from "@/components/dashboard/support-request-table";
import { dummySupportRequests as supportRequests } from "@/lib/dummyData";
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
    <section className="-mx-10 pb-20 bg-gradient-to-br from-neutral-50 to-amber-100 ">
      <DashboardHeader
        view={view}
        onChange={toggleView}
        heading="Support Requests"
      />

      {view === "grid" ? (
        <div className="flex flex-wrap gap-6 px-4 lg:px-10">
          {supportRequests.map((supportRequest) => (
            <SupportRequestCard
              key={supportRequest.id}
              supportRequest={supportRequest}
            />
          ))}
        </div>
      ) : (
        <div className="px-4 lg:px-10">
          <SupportRequestTable supportRequests={supportRequests} />
        </div>
      )}
    </section>
  );
}

export default SupportRequests;
