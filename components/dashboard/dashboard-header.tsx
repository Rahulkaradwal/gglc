"use client";
import React from "react";
import { ViewToggle } from "./toggleView";
import SortBy from "./sortBy";

interface Props {
  // onChange?: (view: "grid" | "list") => void;
  heading: string;
}

function DashboardHeader({ heading }: Props) {
  const handleViewChange = (view: "grid" | "list") => {
    console.log("Current view:", view);
    // Use state to conditionally render list/grid view
  };
  return (
    <div className=" p-10">
      <div className="flex lg:px-10  gap-4 w-full  items-center justify-between">
        <h1 className="lg:text-2xl text-lg font-bold">{heading}</h1>
        <div className="flex mt-3 gap-2 items-center lg:gap-6 justify-between mb-4">
          <ViewToggle onChange={handleViewChange} />
          <SortBy />
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;
