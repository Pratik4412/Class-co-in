import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function ContactDetails() {
  return (
    <div className="container mx-auto px-5 md:px-10 lg:px-20 flex flex-col gap-10">
      <h1
        className="text-2xl md:text-4xl text-center lg:text-5xl font-semibold bg-[linear-gradient(105.17deg,_#251611_-25.01%,_#FFCA97_42.41%,_#251611_121.11%)]
    bg-clip-text text-transparent"
      >
        Get In Touch
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="flex flex-col items-center gap-2">
          <FaPhone size={28} className="text-secondary-color" />
          <h4 className="font-semibold text-white">Phone</h4>

          <a
            href="tel:+919819082400"
            className="text-gray-300 hover:text-secondary-color transition"
          >
            +91 98190 82400
          </a>
        </div>

        <div className="flex flex-col items-center gap-2">
          <FaEnvelope size={28} className="text-secondary-color" />
          <h4 className="font-semibold text-white">Email</h4>

          <a
            href="mailto:info@classca.in"
            className="text-gray-300 hover:text-secondary-color transition"
          >
            info@classca.in
          </a>
        </div>

        <div className="flex flex-col items-center gap-2">
          <FaMapMarkerAlt size={28} className="text-secondary-color " />
          <h4 className="font-semibold text-white">Office Address</h4>
          <p className="text-gray-300">Mumbai, Maharashtra - 400001</p>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
