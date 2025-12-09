import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function ContactDetails() {
  return (
    <div className="container mx-auto px-5 md:px-10 lg:px-20 flex flex-col gap-6">
      <h2 className="text-2xl md:text-3xl font-bold font-headingFont text-center">
        Get In Touch
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="flex flex-col items-center gap-2">
          <FaPhone size={28} className="text-primaryColor" />
          <h4 className="font-semibold">Phone</h4>
          <p>+91 98765 43210</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <FaEnvelope size={28} className="text-primaryColor" />
          <h4 className="font-semibold">Email</h4>
          <p>info@classandco.com</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <FaMapMarkerAlt size={28} className="text-primaryColor" />
          <h4 className="font-semibold">Office Address</h4>
          <p>Mumbai, Maharashtra - 400001</p>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
