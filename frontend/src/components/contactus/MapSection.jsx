import React from "react";

function MapSection() {
  return (
    <div className="container mx-auto px-5 md:px-10 lg:px-20 pb-10">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.312521469485!2d72.82935722587726!3d19.137792550028507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b70f4e846cb9%3A0x1130726b095a6f3a!2sMia%20by%20Tanishq%20-%20Andheri%20West%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1767097572852!5m2!1sen!2sin"
        width="100%"
        height="350"
        className="rounded-xl"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default MapSection;
