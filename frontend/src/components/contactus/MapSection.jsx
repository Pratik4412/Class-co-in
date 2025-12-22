import React from "react";

function MapSection() {
  return (
    <div className="container mx-auto px-5 md:px-10 lg:px-20 pb-10">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.582665590758!2d72.85891389678955!3d19.213421999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b731d41b72ef%3A0xe4dfabdc20cab77b!2sShraddha%20Appartment!5e0!3m2!1sen!2sin!4v1766405026869!5m2!1sen!2sin"
        width="100%"
        height="350"
        className="rounded-xl"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default MapSection;
