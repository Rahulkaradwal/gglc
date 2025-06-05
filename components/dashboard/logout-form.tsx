"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { FaSignOutAlt } from "react-icons/fa";

export default function LogoutForm() {
  const router = useRouter();

  const handleLogout = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/logout", {
        method: "POST",
      });

      if (res.ok) {
        router.push("/login");
      } else {
        console.error("Logout failed");
      }
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <form onSubmit={handleLogout}>
      <Button className="flex w-full grow items-center justify-center gap-2 rounded-md p-3 text-md hover:bg-green-500 font-medium cursor-pointer md:flex-none md:justify-start md:p-2 md:px-3">
        <div className="hidden md:block">Sign Out</div>
        <FaSignOutAlt className="w-3" />
      </Button>
    </form>
  );
}
