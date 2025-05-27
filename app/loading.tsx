import Loader from "@/components/loader";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="h-[90vh] flex items-center justify-center">
      <Loader />
    </div>
  );
}
