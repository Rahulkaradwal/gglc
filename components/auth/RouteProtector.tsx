// components/RequireAuth.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "react-oidc-context";
import Loader from "../loader";

export default function RouteProtector({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, isLoading, error } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      router.push("/login");
    }
  }, [isAuthenticated, isLoading, error, router]);

  if (isLoading)
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader />
      </div>
    );

  return isAuthenticated ? <>{children}</> : null;
}
