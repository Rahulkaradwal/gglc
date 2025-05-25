"use client";
import React from "react";
import { ViewToggle } from "./toggleView";
import SortBy from "./sortBy";

interface Props {
  onChange: (view: "grid" | "list") => void;
  heading: string;
  view: "grid" | "list";
}

function DashboardHeader({ heading, view, onChange }: Props) {
  return (
    <div className=" lg:p-10">
      <div className=" flex lg:flex-row flex-col pt-10 lg:pt-2 px-4 lg:px-10  gap-4 w-full  lg:items-center justify-between">
        <h1 className="text-2xl   font-bold">{heading}</h1>
        <div className="flex  mt-3 gap-2 items-center lg:gap-6 justify-between  mb-4">
          <ViewToggle view={view} onChange={onChange} />
          <SortBy />
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;
