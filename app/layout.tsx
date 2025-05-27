"use client";
// import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import { Footer } from "@/components/footer";

import { AuthProvider } from "react-oidc-context";
import cognitoAuthConfig from "@/cognito-config";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// export const metadata: Metadata = {
//   title: "GGLC",
//   description: "Green Gear Shipping Company",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${poppins.variable} antialiased`}>
        <AuthProvider {...cognitoAuthConfig}>
          <Header />
          <div className="px-10">{children}</div>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
