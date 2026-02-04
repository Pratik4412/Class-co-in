import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function ContactForm() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 120,
    });
  }, []);

  return (
    <section className="bg-[#281F1C] py-16">
      <div className="container mx-auto px-5 md:px-10 lg:px-20">
        {/* Heading */}
        <div className="mb-12" data-aos="fade-up">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold bg-[linear-gradient(105.17deg,_#251611_-25.01%,_#FFCA97_42.41%,_#251611_121.11%)] bg-clip-text text-transparent font-headingFont leading-tight">
            | Our Offices
          </h2>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Kandivali */}
          <div
            data-aos="fade-right"
            className="border border-secondary-color rounded-2xl p-6 bg-transparent"
          >
            <h3 className="text-xl font-semibold bg-[linear-gradient(105.17deg,_#251611_-25.01%,_#FFCA97_42.41%,_#251611_121.11%)] bg-clip-text text-transparent font-headingFont leading-tight mb-3">
              Kandivali (Head Office)
            </h3>
            <p className="text-gray-100 leading-relaxed">
              5A/401, Shraddha Complex, <br />
              Asha Nagar, Thakur Complex, <br />
              Kandivali East, Mumbai – 400101
            </p>
          </div>

          {/* Andheri */}
          <div
            data-aos="fade-left"
            className="border border-secondary-color rounded-2xl p-6 bg-transparent"
          >
            <h3 className="text-xl font-semibold bg-[linear-gradient(105.17deg,_#251611_-25.01%,_#FFCA97_42.41%,_#251611_121.11%)] bg-clip-text text-transparent font-headingFont leading-tight mb-3">
              Andheri
            </h3>
            <p className="text-gray-100 leading-relaxed">
              1201, Lotus Arc One, New Link Road, <br />
              Opp. Tanishq Showroom, Andheri West, <br />
              Mumbai – 400013
            </p>
          </div>

          {/* Mulund */}
          <div
            data-aos="fade-right"
            className="border border-secondary-color rounded-2xl p-6 bg-transparent"
          >
            <h3 className="text-xl font-semibold bg-[linear-gradient(105.17deg,_#251611_-25.01%,_#FFCA97_42.41%,_#251611_121.11%)] bg-clip-text text-transparent font-headingFont leading-tight mb-3">
              Mulund
            </h3>
            <p className="text-gray-100 leading-relaxed">
              724, Ecstasy City of Joy, JSD Road, <br />
              Near Station, Mulund West, <br />
              Mumbai – 400080
            </p>
          </div>

          {/* South Mumbai */}
          <div
            data-aos="fade-left"
            className="border border-secondary-color rounded-2xl p-6 bg-transparent"
          >
            <h3 className="text-xl font-semibold bg-[linear-gradient(105.17deg,_#251611_-25.01%,_#FFCA97_42.41%,_#251611_121.11%)] bg-clip-text text-transparent font-headingFont leading-tight mb-3">
              South Mumbai
            </h3>
            <p className="text-gray-100 leading-relaxed">
              102-B, 1st Floor, New Building, <br />
              Shastri Hall, Tardeo Road, Nana Chowk, <br />
              Near Bhatia Hospital, Mumbai – 400007
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
