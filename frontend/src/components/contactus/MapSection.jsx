import React from "react";

function MapSection() {
  return (
    <div className="container mx-auto px-5 md:px-10 lg:px-20 pb-10">
      <iframe
        title="office-location"
        width="100%"
        height="350"
        className="rounded-xl"
        loading="lazy"
        src="https://www.google.com/maps/embed?pb=!1m18!..."
      ></iframe>
    </div>
  );
}

export default MapSection;
