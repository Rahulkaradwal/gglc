import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Mail, Trash } from "lucide-react";

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

export default function SupportRequestTable({
  supportRequests,
}: {
  supportRequests: SupportRequest[];
}) {
  return (
    <div className="w-full overflow-x-auto rounded-lg shadow-lg bg-white">
      <Table>
        <TableHeader className="h-20 bg-gray-100 text-gray-800">
          <TableRow>
            <TableHead className="min-w-[100px] border-r font-semibold">
              Full Name
            </TableHead>
            <TableHead className="min-w-[200px] border-r font-semibold">
              Email
            </TableHead>
            <TableHead className="min-w-[100px] border-r font-semibold">
              Tracking #
            </TableHead>
            <TableHead className="min-w-[200px] border-r font-semibold">
              Issue
            </TableHead>
            <TableHead className="mix-w-[400px] border-r font-semibold">
              Details
            </TableHead>
            <TableHead className="min-w-[80px] border-r font-semibold">
              Location
            </TableHead>
            <TableHead className="min-w-[50px] text-center font-semibold">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {supportRequests.map((request, index) => (
            <TableRow
              key={request.id}
              className={`${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-teal-50 transition-colors duration-200`}
            >
              <TableCell className="w-[150px] whitespace-normal break-words border-r text-gray-700">
                {request.firstName} {request.lastName}
              </TableCell>
              <TableCell className="w-[100px] whitespace-normal break-words border-r text-gray-700">
                {request.email}
              </TableCell>
              <TableCell className="w-[50px] whitespace-normal break-words border-r text-gray-700">
                {request.tracking_number}
              </TableCell>
              <TableCell className="w-[200px] whitespace-normal break-words border-r text-gray-700">
                {request.issue}
              </TableCell>

              <TableCell className="w-[400px] whitespace-normal break-words border-r text-gray-700">
                {request.details}
              </TableCell>

              <TableCell className="w-[80px] whitespace-normal break-words border-r text-gray-700">
                {request.location}
              </TableCell>
              <TableCell className="w-[50px] whitespace-normal break-words border-r text-gray-700">
                <div className="flex flex-col items-center gap-2">
                  <Button
                    size="sm"
                    className="bg-green-100 cursor-pointer text-green-700 hover:bg-green-600 hover:text-white w-8 h-8 p-0"
                  >
                    <Mail className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    className="bg-red-100 text-red-700 cursor-pointer hover:bg-red-600 hover:text-white w-8 h-8 p-0"
                  >
                    <Trash className="w-4 h-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
