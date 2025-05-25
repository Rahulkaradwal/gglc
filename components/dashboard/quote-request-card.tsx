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
import { Phone, Mail, UserCheck, Briefcase, Trash } from "lucide-react";
import { format } from "date-fns";
import { Button } from "../ui/button";

interface QuoteRequest {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  contact_reason: string;
  delivery_reason: string;
  shipping_volume: string;
  contact_number: number;
  help: string;
}

function QuoteRequestCard({ quoteRequest }: { quoteRequest: QuoteRequest }) {
  return (
    <Card className="w-full lg:w-[27rem] flex flex-col justify-between max-w-md shadow-md hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center justify-between gap-2">
          <span>
            {quoteRequest.firstName} {quoteRequest.lastName}
          </span>
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <Mail className="w-4 h-4" />
            <span>{quoteRequest.email}</span>
          </div>
        </CardTitle>
        <CardDescription className="text-gray-500 text-sm mt-1">
          {quoteRequest.contact_reason}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <Phone className="w-4 h-4" />
          <span>{quoteRequest.contact_number}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <Briefcase className="w-4 h-4" />
          <span>{quoteRequest.delivery_reason}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <UserCheck className="w-4 h-4" />
          <span>Shipping Volume: {quoteRequest.shipping_volume}</span>
        </div>
        <div className="text-sm text-gray-700">
          <strong>Help:</strong> {quoteRequest.help}
        </div>
      </CardContent>

      <CardFooter className="text-xs text-gray-500 justify-between items-center">
        <span className="font-semibold text-sm text-black">Quote Request</span>
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

export default QuoteRequestCard;
