import QuoteRequestCard from "@/components/dashboard/quote-request-card";
import SortBy from "@/components/dashboard/sortBy";
import { dummyQuoteRequests as quoteRequests } from "@/lib/dummyData";

function QuoteRequests() {
  return (
    <section className="-mx-10  bg-gradient-to-br from-neutral-50 to-indigo-200 pb-10 ">
      <div className=" lg:p-10">
        <div className=" flex lg:flex-row flex-col pt-10 lg:pt-2 px-4 lg:px-10  gap-4 w-full  lg:items-center justify-between">
          <h1 className="text-2xl   font-bold">Quote Requests</h1>
          <div className="flex  mt-3 gap-2 items-center lg:gap-6 justify-between  mb-4">
            <SortBy />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-6 px-4 lg:px-10">
        {quoteRequests.map((quoteRequest) => (
          <QuoteRequestCard key={quoteRequest.id} quoteRequest={quoteRequest} />
        ))}
      </div>
    </section>
  );
}

export default QuoteRequests;
