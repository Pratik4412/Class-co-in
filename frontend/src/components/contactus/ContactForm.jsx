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
    <section className="bg-[#f7f4ee] py-16">
      <div className="container mx-auto px-5 md:px-10 lg:px-20">
        {/* Heading */}
        <div className="mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#9A3B12]">
            | Our Offices
          </h2>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Kandivali */}
          <div
            data-aos="fade-right"
            className="border border-[#9A3B12] rounded-2xl p-6 bg-transparent"
          >
            <h3 className="text-xl font-semibold text-[#9A3B12] mb-3">
              KANDIVALI
            </h3>
            <p className="text-[#5c3b2a] leading-relaxed">
              5A/401, Shraddha Complex, <br />
              Asha Nagar, Thakur Complex, <br />
              Kandivali East, Mumbai – 400101
            </p>
          </div>

          {/* Andheri */}
          <div
            data-aos="fade-left"
            className="border border-[#9A3B12] rounded-2xl p-6 bg-transparent"
          >
            <h3 className="text-xl font-semibold text-[#9A3B12] mb-3">
              ANDHERI
            </h3>
            <p className="text-[#5c3b2a] leading-relaxed">
              1201, Lotus Arc One, New Link Road, <br />
              Opp. Tanishq Showroom, Andheri West, <br />
              Mumbai – 400013
            </p>
          </div>

          {/* Mulund */}
          <div
            data-aos="fade-right"
            className="border border-[#9A3B12] rounded-2xl p-6 bg-transparent"
          >
            <h3 className="text-xl font-semibold text-[#9A3B12] mb-3">
              MULUND
            </h3>
            <p className="text-[#5c3b2a] leading-relaxed">
              724, Ecstasy City of Joy, JSD Road, <br />
              Near Station, Mulund West, <br />
              Mumbai – 400080
            </p>
          </div>

          {/* South Mumbai */}
          <div
            data-aos="fade-left"
            className="border border-[#9A3B12] rounded-2xl p-6 bg-transparent"
          >
            <h3 className="text-xl font-semibold text-[#9A3B12] mb-3">
              SOUTH MUMBAI
            </h3>
            <p className="text-[#5c3b2a] leading-relaxed">
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
