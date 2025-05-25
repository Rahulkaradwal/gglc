import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Trash } from "lucide-react";
import { format } from "date-fns";

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

export default function JoinRequestsTableWrapper({
  registrations,
}: {
  registrations: JoinRequestItemProps[];
}) {
  return (
    <div className="w-full overflow-x-auto rounded-lg shadow-lg bg-white">
      <Table>
        <TableHeader className="h-20 bg-gray-100 text-gray-800">
          <TableRow>
            <TableHead className="min-w-[120px] border-r font-semibold">
              Full Name
            </TableHead>
            <TableHead className="min-w-[200px] border-r font-semibold">
              Contact-Email
            </TableHead>

            <TableHead className="min-w-[120px] border-r font-semibold">
              Citizen
            </TableHead>
            <TableHead className="min-w-[80px] border-r font-semibold">
              License
            </TableHead>
            <TableHead className="min-w-[80px] border-r font-semibold">
              Visa
            </TableHead>
            <TableHead className="min-w-[140px] border-r font-semibold">
              Start Date
            </TableHead>
            <TableHead className="min-w-[200px] border-r font-semibold">
              Availability
            </TableHead>
            <TableHead className="min-w-[50px]  font-semibold text-center">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {registrations.map((user, index) => {
            const availableDays = Object.entries(user.availability)
              .filter(([, v]) => v)
              .map(([d]) => d.charAt(0).toUpperCase() + d.slice(1))
              .join(", ");

            return (
              <TableRow
                key={user.id}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-teal-50 transition-colors duration-200`}
              >
                <TableCell className="font-medium border-r text-gray-900">
                  {user.fullName}
                </TableCell>
                <TableCell className="truncate border-r flex justify-between py-5 gap-2 flex-col text-gray-700">
                  <span className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    {user.contactNumber}
                  </span>
                  <span>{user.email}</span>
                </TableCell>

                <TableCell className="border-r text-gray-700">
                  {user.canadianCitizen === "Yes" ? "Canadian" : "Non-Canadian"}
                </TableCell>
                <TableCell className="border-r text-gray-700">
                  {user.licenseType}
                </TableCell>
                <TableCell className="border-r text-gray-700">
                  {user.visaType}
                </TableCell>
                <TableCell className="border-r text-gray-700">
                  {format(user.startDate, "PPP")}
                </TableCell>
                <TableCell className="text-gray-700  overflow-x-scroll border-r ">
                  {availableDays}
                </TableCell>
                <TableCell>
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
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
