"use client";

import { Button } from "../ui/button";
import { FaSignOutAlt } from "react-icons/fa";
import { logOut } from "@/lib/authActions";

export default function LogoutForm() {
  return (
    <form action={logOut}>
      <Button className="flex  w-full grow items-center justify-center gap-2 rounded-md  p-3 text-md hover:bg-green-500 font-medium cursor-pointer md:flex-none md:justify-start md:p-2 md:px-3">
        <div className="hidden md:block">Sign Out</div>
        <FaSignOutAlt className="w-3" />
      </Button>
    </form>
  );
}
