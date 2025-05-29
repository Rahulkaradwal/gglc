// "use client";

// import { Amplify } from "aws-amplify";
// import outputs from "@/amplify_outputs.json";

// Amplify.configure(outputs, { ssr: true });

// export default function ConfigureAmplify() {
//   return null;
// }

// components/ConfigureAmplifyClient.tsx
"use client";

import { useEffect } from "react";
import { Amplify } from "aws-amplify";
import config from "@/amplify_outputs.json";

export default function ConfigureAmplifyClient() {
  useEffect(() => {
    Amplify.configure(config);
  }, []);

  return null;
}
