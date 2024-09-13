import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className="px-4 my-2  ">
      <Accordion
        title="I want to partner my restaurant with Swiggy"
        answer="send us email"
      />
      <Accordion
        title="What are the mandatory documents needed to list my restaurant on Swiggy?"
        answer="-  Copies of the below documents are mandatory
-  FSSAI Licence OR FSSAI Acknowledgement
-  Pan Card
-  GSTIN Certificate
-  Cancelled Cheque OR bank Passbook
-  Menu"
      />
      <Accordion title="I want to opt-out from Google reserve" answer="Send an email" />
      <Accordion title="After I submit all documents, how long will it take for my restaurant to go live on Swiggy?" answer="After all mandatory documents have been received and verified it takes upto 7-10 working days for the onboarding to be completed and make your restaurant live on the platform." />
      <Accordion title="What is this one time Onboarding fees? Do I have to pay for it while registering?" answer="This is a one-time fee charged towards the system & admin costs incurred during the onboarding process. It is deducted from the weekly payouts after you start receiving orders from Swiggy." />
      <Accordion title="Who should I contact if I need help & support in getting onboarded?" answer="You can connect with Partner Support on 080-67466777/68179777 or write to partnersuport@swiggy.in" />
      <Accordion title="How much commission will I be charged by Swiggy?" answer="The commission charges vary for different cities. You will be able to see the commission applicable for you once the preliminary onboarding details have been filled." />
    </div>
  );
};

export default FAQ;