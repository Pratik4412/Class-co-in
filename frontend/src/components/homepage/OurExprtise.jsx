import React, { useEffect, useRef, useState } from "react";

const OurExprtise = () => {
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);
  const [years, setYears] = useState(0);
  const [industries, setIndustries] = useState(0);
  const [engagements, setEngagements] = useState(0);

  useEffect(() => {
    const counter = (setter, end, speed) => {
      let start = 0;
      const interval = setInterval(() => {
        start += 1;
        setter(start);
        if (start >= end) clearInterval(interval);
      }, speed);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          counter(setYears, 40, 100);
          counter(setIndustries, 6, 400);
          counter(setEngagements, 500, 10);
        }
      },
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);
  return (
    <section className="bg-primary-50 py-20 overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-5 md:px-10 lg:px-20 flex flex-col md:flex-row items-center gap-16">
        {/* LEFT CONTENT */}
        <div
          data-aos="fade-right"
          data-aos-duration="800"
          className="w-full md:w-[35%] flex flex-col gap-8 text-center md:text-left"
        >
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-primary-800 leading-tight font-headingFont">
            Our Expertise In <br className="hidden md:block" /> Different
            Domains
          </h1>

          <p className="text-base md:text-lg font-paraFont text-gray-700 leading-relaxed">
            Our expertise spans across diverse industries, enabling us to
            deliver practical, compliant, and future-ready solutions tailored to
            each client’s unique business environment.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="text-xl font-semibold text-primary-700">
                {years}+
              </h3>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="text-xl font-semibold text-primary-700">
                {industries}+
              </h3>
              <p className="text-sm text-gray-600">Industries</p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="text-xl font-semibold text-primary-700">
                {engagements}+
              </h3>
              <p className="text-sm text-gray-600">Engagements</p>
            </div>
          </div>
        </div>

        {/* RIGHT ZIG-ZAG CARDS */}
        <div className="w-full md:w-[55%] flex flex-col gap-6">
          {/* CARD 1 */}
          <div className="flex justify-end">
            <div
              data-aos="fade-right"
              data-aos-delay="100"
              className="
                  w-full sm:w-[460px]
                  bg-white rounded-xl p-6
                  shadow-md hover:shadow-2xl
                  transition-all duration-500
                  hover:-translate-y-2
                "
            >
              <h2 className="text-xl font-headingFont font-semibold text-primary-800">
                Convenience & Accessibility
              </h2>
              <p className="text-base font-paraFont text-gray-700 mt-1">
                Seamless access to expert solutions aligned with your
                operational and compliance needs.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="flex justify-start">
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="
                  w-full sm:w-[460px]
                  bg-primary-color text-white rounded-xl p-6
                  shadow-md hover:shadow-2xl
                  transition-all duration-500
                  hover:-translate-y-2
                "
            >
              <h2 className="text-xl font-headingFont font-semibold">
                Customer Satisfaction
              </h2>
              <p className="text-base font-paraFont opacity-90 mt-1">
                A client-first approach focused on long-term partnerships and
                consistent value delivery.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="flex justify-end">
            <div
              data-aos="fade-right"
              data-aos-delay="300"
              className="
                  w-full sm:w-[460px]
                  bg-white rounded-xl p-6
                  shadow-md hover:shadow-2xl
                  transition-all duration-500
                  hover:-translate-y-2
                "
            >
              <h2 className="text-xl font-headingFont font-semibold text-primary-800">
                Quality & Precision
              </h2>
              <p className="text-base font-paraFont text-gray-700 mt-1">
                High standards of accuracy, compliance, and professional
                excellence in every engagement.
              </p>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="flex justify-start">
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="
                  w-full sm:w-[460px]
                  bg-primary-color text-white rounded-xl p-6
                  shadow-md hover:shadow-2xl
                  transition-all duration-500
                  hover:-translate-y-2
                "
            >
              <h2 className="text-xl font-headingFont font-semibold">
                Industry Expertise
              </h2>
              <p className="text-base font-paraFont opacity-90 mt-1">
                Extensive experience across multiple domains delivering
                measurable business impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurExprtise;
