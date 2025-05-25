"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, Trash, MapPin } from "lucide-react";
import { format } from "date-fns";
import { Button } from "../ui/button";

interface SupportRequest {
  id: number;
  contact_reason: string;
  details: string;
  firstName: string;
  lastName: string;
  email: string;
  tracking_number: string;
  country: string;
  province: string;
  location: string;
  issue: string;
}

function SupportRequestCard({
  supportRequest,
}: {
  supportRequest: SupportRequest;
}) {
  return (
    <Card className="w-full lg:w-[27rem] flex flex-col justify-between max-w-md shadow-md hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center justify-between gap-2">
          <span>
            {supportRequest.firstName} {supportRequest.lastName}
          </span>
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <Mail className="w-4 h-4" />
            <span>{supportRequest.email}</span>
          </div>
        </CardTitle>
        <CardDescription className="text-red-500 text-sm font-semibold mt-1">
          {supportRequest.contact_reason}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="text-sm text-gray-700">
          <strong>Tracking Number:</strong> {supportRequest.tracking_number}
        </div>
        <div className="text-sm text-gray-700">
          <strong>Issue:</strong> {supportRequest.issue}
        </div>
        <div className="text-sm text-gray-700">
          <strong>Details:</strong> {supportRequest.details}
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <MapPin className="w-4 h-4" />
          <span>
            {supportRequest.location}, {supportRequest.province},{" "}
            {supportRequest.country}
          </span>
        </div>
      </CardContent>

      <CardFooter className="text-xs text-gray-500 justify-between items-center">
        <span className="font-semibold text-sm text-black">
          Support Request
        </span>
        <span>Received: {format(new Date(), "PPP")}</span>
      </CardFooter>

      <CardFooter className="text-xs text-gray-500 justify-between items-center">
        <Button className="bg-white border-2 hover:bg-green-500 hover:text-white border-gray-200 cursor-pointer text-gray-800">
          <Mail className="w-4 h-4" />
          <span>Send Email</span>
        </Button>
        <Button className="bg-white border-2 border-gray-200 cursor-pointer hover:bg-red-500 hover:text-white text-gray-800">
          <Trash className="w-4 h-4" />
          <span>Delete</span>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default SupportRequestCard;
