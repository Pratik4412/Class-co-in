import React, { useEffect, useRef, useState } from "react";
import whoAre from "../../assets/aboutpage/who-we-are.svg";
const WhoWeAre = () => {
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);
  const [years, setYears] = useState(0);
  const [clients, setClients] = useState(0);
  const [experienced, setExperienced] = useState(0);

  useEffect(() => {
    const couter = (setter, end, speed) => {
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

          couter(setYears, 40, 100);
          couter(setClients, 500, 10);
          couter(setExperienced, 6, 400);
        }
      },
      { threshold: 0.4 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);
  return (
    <div>
      <div className="container mx-auto px-5 md:px-10 lg:px-20 flex flex-col gap-8">
        <div className="md:relative flex flex-col gap-4">
          <div className="flex md:items-start flex-col md:flex-row text-start gap-5 md:gap-10 ">
            <div className="lg:w-1/2 flex items-center lg:justify-end justify-center">
              <img
                src={whoAre}
                alt="whoAre"
                className="rounded-2xl h-full lg:h-[500px]"
              />
            </div>
            <div className="flex flex-col gap-6 py-5 lg:w-1/2">
              <h1
                data-aos="fade-up"
                data-aos-duration="400"
                className="text-center md:text-start text-2xl md:text-4xl lg:text-5xl font-semibold bg-[linear-gradient(105.17deg,_#251611_-25.01%,_#FFCA97_42.41%,_#251611_121.11%)] bg-clip-text text-transparent"
              >
                Who We Are
              </h1>
              <p
                data-aos="fade-up"
                data-aos-duration="400"
                className="text-center md:text-start text-sm md:text-base font-paraFont text-gray-300"
              >
                {/* C L A S S & Co. LLP is a multi-disciplinary Chartered
                Accountancy firm offering audit, taxation, regulatory
                compliance, and advisory services. We work closely with
                businesses to provide practical, transparent, and value-driven
                solutions tailored to evolving regulatory and commercial
                environments. */}
                M/s C L A S S & Co. LLP (Previously known as M/s. Chaturvedi &
                Agrawal estd 1984), Chartered Accountants, is a well-established
                compliance and consulting firm rendering comprehensive
                professional services including Accountancy, Independent Audit &
                Assurance, US GAAP Restatement, Foreign Exchange and Regulatory
                Consulting, Restructuring and Valuations, Corporate Support,
                Legal and Secretarial Support, Management Consulting, all sorts
                of tax consultancy, compliances of SEBI & Stock Exchanges etc,.
              </p>
              <p
                data-aos="fade-up"
                data-aos-duration="400"
                className="text-center md:text-start text-sm md:text-base font-paraFont text-gray-300"
              >
                C L A S S & Co. LLP believes in providing Chartered Accounting
                Services through a motivated workforce, client retention, high
                integrity, dedication, sincerity, and professionalism. The firm
                is headquartered in Mumbai with a spacious office in Kandivali
                East and follows a modern, risk-based audit approach.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="bg-[#281F1C] shadow-lg md:absolute bottom-0 right-0 rounded-lg p-5 flex flex-col md:flex-row items-center gap-4 "
            ref={sectionRef}
          >
            <div className="w-full md:w-fit flex flex-col gap-2">
              <h1 className=" text-center md:text-start text-2xl md:text-4xl lg:text-5xl font-semibold text-white">
                {years}+
              </h1>
              <p className=" text-center md:text-start text-base font-paraFont text-gray-300">
                Years of Legacy
              </p>
            </div>
            <div className="bg-gray-200 w-full md:w-[2px] h-[1px] md:h-[80px]"></div>
            <div className="w-full md:w-fit flex flex-col gap-2">
              <h1 className="text-center md:text-start text-2xl md:text-4xl lg:text-5xl font-semibold text-white">
                {clients}+
              </h1>
              <p className=" text-center md:text-start text-base font-paraFont text-gray-300">
                Clients Served
              </p>
            </div>
            <div className="bg-gray-200 w-full md:w-[2px] h-[1px] md:h-[80px]"></div>
            <div className="w-full md:w-fit flex flex-col gap-2">
              <h1 className=" text-center md:text-start text-2xl md:text-4xl lg:text-5xl font-semibold text-white">
                {experienced}
              </h1>
              <p className=" text-center md:text-start text-base font-paraFont text-gray-300">
                Experienced Partners
              </p>
            </div>
            <div className="bg-gray-200 w-full md:w-[2px] h-[1px] md:h-[80px]"></div>
            <div className="w-full md:w-fit flex flex-col gap-2">
              <h1 className=" text-center md:text-start text-xl md:text-2xl font-semibold text-white">
                We put our customers at the <br /> heart of everything we do
              </h1>
              {/* <p className=" text-center md:text-start text-base font-paraFont text-gray-300">
                Satisfied Users Over The Globe
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
