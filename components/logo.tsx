// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const Logo = () => {
//   return (
//     <Link className="flex  items-center gap-2" href="/">
//       <Image src="/logo.png" alt="logo" width={50} height={50} />
//       <div className="text-2xl  hidden md:text-lg md:block font-bold text-green-700 italic">
//         <p>GREEN GEAR </p>
//         <p>LOGISTICS & COURIERS</p>
//       </div>
//     </Link>
//   );
// };

// export default Logo;

// components/logo.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image src="/logo.png" alt="Green Gear Logo" width={50} height={50} />
      <div className="hidden md:block">
        <p className="text-xl font-bold text-green-700 italic leading-tight">
          GREEN GEAR
        </p>
        <p className="text-sm font-semibold text-green-600">
          LOGISTICS & COURIERS
        </p>
      </div>
    </Link>
  );
};

export default Logo;
