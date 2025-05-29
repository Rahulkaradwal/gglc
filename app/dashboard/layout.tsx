// // app/dashboard/layout.tsx
// import React from "react";
// import { headers, cookies } from "next/headers";
// import { redirect } from "next/navigation";
// import { fetchAuthSession } from "aws-amplify/auth/server";
// import { runWithAmplifyServerContext } from "@/utils/amplifyAdapter";

// import HeaderNavLinks from "@/components/dashboard/dashboard-navlinks";

// export default async function DashboardLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   // Authenticate on the server
//   const isAuthenticated = await runWithAmplifyServerContext({
//     nextServerContext: {
//       request: {
//         headers: headers(),
//         cookies: cookies(),
//       },
//     },
//     operation: async (context) => {
//       try {
//         const session = await fetchAuthSession(context, {});
//         return session.tokens !== undefined;
//       } catch {
//         return false;
//       }
//     },
//   });

//   if (!isAuthenticated) {
//     redirect("/login");
//   }

//   return (
//     <div className="px-10">
//       <HeaderNavLinks />
//       {children}
//     </div>
//   );
// }

// app/dashboard/layout.tsx
import { fetchAuthSession } from "aws-amplify/auth/server";
import { runWithAmplifyServerContext } from "@/utils/amplifyAdapter";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import HeaderNavLinks from "@/components/dashboard/dashboard-navlinks";
import React from "react";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const authenticated = await runWithAmplifyServerContext({
    nextServerContext: {
      cookies,
    },
    operation: async (context) => {
      try {
        const session = await fetchAuthSession(context, {});
        return session.tokens !== undefined;
      } catch (err) {
        console.log("Auth check failed:", err);
        return false;
      }
    },
  });

  if (!authenticated) {
    redirect("/login");
  }

  return (
    <div className="-px-10">
      <HeaderNavLinks />
      {children}
    </div>
  );
}
