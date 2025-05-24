import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, BarChart2 } from "lucide-react";
import Link from "next/link";
import React from "react";

const DashboardPageItemsData = [
  {
    title: "Join Requests",
    description: "Manage new join requests.",
    event: 12,
    totalEvents: 20,
    color: "bg-gradient-to-br from-slate-300 to-teal-100",
    href: "/dashboard/join-requests",
  },
  {
    title: "Quote Requests",
    description: "Handle quote inquiries.",
    event: 20,
    totalEvents: 30,
    color: "bg-gradient-to-br from-neutral-50 to-indigo-200",
    href: "/dashboard/quote-requests",
  },
  {
    title: "Support Requests",
    description: "Resolve customer issues.",
    event: 8,
    totalEvents: 10,
    color: "bg-gradient-to-br from-neutral-50 to-amber-100",
    href: "/dashboard/support-requests",
  },
];

function Dashboard() {
  return (
    <div className="flex lg:m-[5rem] pt-4 lg:p-[5rem]  items-center justify-between h-100vh flex-col md:flex-row gap-4">
      {DashboardPageItemsData.map((item, index) => (
        <Card
          className={`w-full md:w-1/3 transition-all duration-200 hover:-translate-y-0.5 ${item.color} `}
          key={index}
        >
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center ">
            <BarChart2 className="size-4 mr-2 text-brand-500" />
            <span className="text-sm">Events this month: {item.event}</span>
          </CardContent>
          <CardContent className="flex items-center ">
            <BarChart2 className="size-4 mr-2 text-brand-500" />
            <span className="text-sm">Total events: {item.totalEvents}</span>
          </CardContent>
          <CardFooter className="flex justify-end ">
            <Link
              href={item.href}
              className="border flex items-center hover:gap-2.5 transition-all duration-300 gap-2 border-gray-600 px-3 rounded-md py-2  text-sm"
            >
              View all <ArrowRight className="size-4" />
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default Dashboard;
