import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const AccordionItems = [
  {
    id: 1,
    title: "How can I get an ETA for my delivery?",
    desc: (
      <>
        You can engage with our chatbot to verify the status of your parcel and
        get an estimated time of arrival (ETA). Additionally, you can refer to
        the parcel status list available on our website in the FAQ section to
        understand what to do in case of a delay. If your parcel is overdue, the
        chatbot will assist you in creating a support ticket.
        <br />
        <br />
        Visit{" "}
        <Link
          className="text-green-700"
          href="https://www.greengears.ca/support/"
        >
          www.greengears.ca/support/
        </Link>{" "}
        to use the chatbot and check the FAQ section for the parcel status list.
      </>
    ),
  },
  {
    id: 2,
    title:
      "I've ordered an item, and there are no updates on my tracking number. How can I find out the ETA?",
    desc: (
      <>
        When you place an order, the vendor needs time to process and prepare
        your parcel for shipment before handing it over to greengears. During
        this time, the vendor updates the parcel&apos;s status. greengears can
        only provide an accurate Estimated Time of Arrival (ETA) once we have
        received the parcel from the vendor.
        <br />
        <br />
        If there are no updates on your tracking number, it likely means the
        vendor is still processing your order. We recommend contacting the
        vendor directly for the latest status of your shipment. Once greengears
        receives your parcel, we will update the tracking information and
        provide an ETA.
      </>
    ),
  },
  {
    id: 3,
    title:
      "How can I update my delivery information (unit number, gate/buzz code, phone number, or delivery instructions)?",
    desc: (
      <>
        To update your delivery information, please follow these steps:
        <br />
        <br />
        1. <strong>Submit a Support Ticket:</strong> Visit{" "}
        <Link
          href="https://www.greengears.ca/support/"
          className="text-green-700"
        >
          www.greengears.ca/support/
        </Link>{" "}
        to submit a ticket.
        <br />
        <br />
        2. <strong>Include Necessary Details:</strong> Provide your tracking
        number and specify the information that needs to be updated (unit
        number, gate/buzz code, phone number, or delivery instructions).
        <br /> <br />
        3. <strong>Confirmation:</strong> Our team will update your information
        and confirm the changes to ensure your delivery is completed
        successfully.
        <br />
        <br />
        By providing accurate delivery information and instructions, we can
        ensure your package is delivered successfully.
      </>
    ),
  },
  {
    id: 4,
    title: "What happens if a delivery attempt fails?",
    desc: (
      <>
        If a delivery attempt fails or is rejected, follow these steps:
        <br />
        <br />
        1. <strong>First Delivery Attempt:</strong> Our driver will
        automatically reattempt delivery within 24-48 hours, so you don&apos;t
        need to take any action initially. This reattempt may be necessary due
        to incorrect information such as phone number, address, missing unit
        number, gate code, or delivery instructions. If you need to update any
        of these details, please submit a support ticket at{" "}
        <Link
          href="https://www.greengears.ca/support/"
          className="text-green-700 "
        >
          www.greengears.ca/support/
        </Link>
        .
        <br />
        <br />
        2. <strong>Second Delivery Attempt:</strong> If the second delivery
        attempt fails, your parcel will be brought back to the warehouse. Once
        your parcel is in the “Storage” parcel status, submit a support ticket
        at{" "}
        <Link
          href="https://www.greengears.ca/support/"
          className="text-green-700 "
        >
          www.greengears.ca/support/
        </Link>
        to arrange a second delivery.
        <br />
        <br />
        3. <strong>Rejected Delivery Attempt:</strong> Delivery attempts may be
        rejected if the address is a PO Box, which we do not deliver to, or if
        there is an incorrect address. If your delivery attempt is rejected,
        please submit a support ticket to update your address or verify your
        contact information and delivery instructions.
        <br />
        <br />
        By providing accurate delivery information and instructions, we can
        ensure your package is delivered successfully.
      </>
    ),
  },
];

function SupportAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {AccordionItems.map((item) => (
        <AccordionItem key={item.id} value={item.id.toString()}>
          <AccordionTrigger className="font-semibold md:text-xl">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="text-sm md:text-base">
            {item.desc}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default SupportAccordion;
