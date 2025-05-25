import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CalendarDays,
  Phone,
  Mail,
  UserCheck,
  Briefcase,
  Trash,
} from "lucide-react";
import { format } from "date-fns";
import { Button } from "../ui/button";

interface JoinRequestItemProps {
  id: number;
  fullName: string;
  contactNumber: number;
  email: string;
  canadianCitizen: string;
  licenseType: string;
  visaType: string;
  startDate: Date;
  availability: {
    [day: string]: boolean;
  };
}

function JoinRequestsCard({
  registration: user,
}: {
  registration: JoinRequestItemProps;
}) {
  const availableDays = Object.entries(user.availability)
    .filter(([, value]) => value)
    .map(([day]) => day.charAt(0).toUpperCase() + day.slice(1))
    .join(", ");

  return (
    <Card className="w-full lg:w-[27rem] justify-between flex flex-col   max-w-md shadow-md hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center justify-between gap-2">
          <span>{user.fullName}</span>
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <Mail className="w-4 h-4" />
            <span>{user.email}</span>
          </div>
        </CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <Phone className="w-4 h-4" />
            <span>{user.contactNumber}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <UserCheck className="w-4 h-4" />
            <span>License: {user.licenseType}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <Briefcase className="w-4 h-4" />
          <span>Visa: {user.visaType}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <CalendarDays className="w-4 h-4" />
          <span>Start Date: {format(user.startDate, "PPP")}</span>
        </div>
        <div className="text-sm text-gray-700">
          <strong>Availability:</strong> {availableDays}
        </div>
      </CardContent>

      <CardFooter className="text-xs text-gray-500 justify-between items-center">
        <span className="font-semibold text-sm text-black">
          {user.canadianCitizen === "Yes" ? "Canadian Citizen" : "Non-Canadian"}
        </span>
        <span>Request Date: {format(new Date(), "PPP")}</span>
      </CardFooter>
      <CardFooter className="text-xs text-gray-500 justify-between items-center">
        <Button className="bg-white border-2 hover:bg-green-500 hover:text-white border-gray-200 cursor-pointer   text-gray-800">
          <Mail className="w-4 h-4" />
          <span>Send Email</span>
        </Button>
        <Button className="bg-white border-2 border-gray-200 cursor-pointer hover:bg-red-500 hover:text-white  text-gray-800">
          <Trash className="w-4 h-4" /> Delete
        </Button>
      </CardFooter>
    </Card>
  );
}

export default JoinRequestsCard;
