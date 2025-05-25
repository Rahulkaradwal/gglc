"use client";

import DashboardHeader from "@/components/dashboard/dashboard-header";
import JoinRequestsCard from "@/components/dashboard/join-request-card";
import JoinRequestsTableWrapper from "@/components/dashboard/join-request-table";
import { dummyRegistrations as registrations } from "@/lib/dummyData";
import React, { useState, useEffect } from "react";

function JoinRequests() {
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
    <section className="-mx-10 bg-gradient-to-br from-slate-300 to-teal-100 pb-10">
      <DashboardHeader
        heading="Join Requests"
        view={view}
        onChange={toggleView}
      />

      {view === "grid" ? (
        <div className="flex flex-wrap gap-6 px-4 lg:px-10">
          {registrations.map((registration) => (
            <JoinRequestsCard
              key={registration.id}
              registration={registration}
            />
          ))}
        </div>
      ) : (
        <div className="px-4">
          <JoinRequestsTableWrapper registrations={registrations} />
        </div>
      )}
    </section>
  );
}

export default JoinRequests;
