"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { List, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ViewToggle({
  onChange,
}: {
  onChange?: (view: "grid" | "list") => void;
}) {
  const [view, setView] = useState<"grid" | "list">("grid");

  const toggleView = () => {
    const newView = view === "grid" ? "list" : "grid";
    setView(newView);
    onChange?.(newView);
  };

  return (
    <Button
      onClick={toggleView}
      variant="outline"
      className="lg:flex  hidden items-center cursor-pointer gap-2 rounded-md border px-4 py-2 transition hover:bg-muted"
    >
      <motion.div
        key={view}
        initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {view === "grid" ? (
          <LayoutGrid className="h-5 w-5 text-muted-foreground" />
        ) : (
          <List className="h-5 w-5 text-muted-foreground" />
        )}
      </motion.div>
      <span className="capitalize text-sm text-muted-foreground">
        {view} view
      </span>
    </Button>
  );
}
