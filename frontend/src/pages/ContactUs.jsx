import React from "react";
import ContactDetails from "../components/contactus/ContactDetails";
import ContactForm from "../components/contactus/ContactForm";
import MapSection from "../components/contactus/MapSection";

const ContactUs = () => {
  return (
    <div className="flex flex-col gap-14">
      {/* Top Hero Section */}
      <div className="team-section">
        <div className="px-5 md:px-10 lg:px-20 py-6 md:py-10 bg-[linear-gradient(180deg,rgba(24,15,11,0.65)_0%,rgba(24,15,11,0.45)_50%,rgba(24,15,11,0.75)_100%)] w-full h-full">
          <div className="container mx-auto flex items-center justify-center flex-col gap-12 w-full h-full">
            <div className="flex items-center flex-col gap-4">
              <h1 className="fadeUp fadeUpDelay2 text-2xl md:text-4xl lg:text-6xl font-semibold text-center text-white font-headingFont">
                Contact US
              </h1>

              <h6 className="text-center fadeUp fadeUpDelay3 text-base md:text-lg lg:text-xl font-semibold text-white font-paraFont">
                We're Here To Help — Get In Touch With Our Team
              </h6>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Details Section */}
      <ContactDetails />

      {/* Contact Form */}
      <ContactForm />

      {/* Google Map Section */}
      {/* <MapSection /> */}
    </div>
  );
};

export default ContactUs;
