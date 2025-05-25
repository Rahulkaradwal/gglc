"use client";
import DashboardHeader from "@/components/dashboard/dashboard-header";
import QuoteRequestCard from "@/components/dashboard/quote-request-card";
import { dummyQuoteRequests as quoteRequests } from "@/lib/dummyData";
import { useEffect, useState } from "react";

function QuoteRequests() {
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
    <section className="-mx-10  bg-gradient-to-br from-neutral-50 to-indigo-200 pb-10 ">
      <DashboardHeader
        heading="Quote Requests"
        view={view}
        onChange={toggleView}
      />
      <div className="flex flex-wrap gap-6 px-4 lg:px-10">
        {quoteRequests.map((quoteRequest) => (
          <QuoteRequestCard key={quoteRequest.id} quoteRequest={quoteRequest} />
        ))}
      </div>
    </section>
  );
}

export default QuoteRequests;
