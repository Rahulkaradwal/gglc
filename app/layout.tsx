import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import { Footer } from "@/components/footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "GGLC",
  description: "Green Gear Shipping Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${poppins.variable} antialiased`}>
        <Header />
        <div className="px-10">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

// "use client";

// import { usePathname } from "next/navigation";
// // import type { Metadata } from "next";
// import { Poppins } from "next/font/google";
// import "./globals.css";
// import Header from "@/components/header/header";
// import { Footer } from "@/components/footer";

// const poppins = Poppins({
//   variable: "--font-poppins",
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// });

// // export const metadata: Metadata = {
// //   title: "GGLC",
// //   description: "Green Gear Shipping Company",
// // };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const pathname = usePathname();
//   const isDashboard = pathname.startsWith("/dashboard");

//   return (
//     <html lang="en">
//       <body className={`${poppins.className} ${poppins.variable} antialiased`}>
//         {!isDashboard && <Header />}
//         <div className="px-10">{children}</div>
//         {!isDashboard && <Footer />}
//       </body>
//     </html>
//   );
// }
