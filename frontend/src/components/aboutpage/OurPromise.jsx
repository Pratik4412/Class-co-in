import React from "react";
import ourPromi from "../../assets/aboutpage/out-promise.webp";
const OurPromise = () => {
  return (
    <div className="container mx-auto px-5 md:px-10 lg:px-20">
      <div className="flex text-start md:items-center gap-6 md:gap-10 flex-col md:flex-row justify-center">
        <img src={ourPromi} alt="" className="h-[500px] rounded-2xl" />
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h1
            data-aos="fade-up"
            data-aos-delay="400"
            className=" text-center md:text-start text-2xl md:text-4xl lg:text-5xl font-semibold bg-[linear-gradient(105.17deg,_#251611_-25.01%,_#FFCA97_42.41%,_#251611_121.11%)]
    bg-clip-text text-transparent"
          >
            Our Promise
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className=" text-center md:text-start text-lg md:text-xl font-gray-600 font-paraFont text-gray-300"
          >
            M/s C L A S S & Co. LLP (Previously known as M/s. M/s C L A S S &
            Co. LLP (Previously known as M/s. Chaturvedi & Agrawal estd 1984),
            Chartered Accountants, Chaturvedi & Agrawal estd 1984), Chartered
            Accountants, is a well-established compliance and consulting firm is
            a well-established compliance and consulting firm rendering
            comprehensive professional services including rendering
            comprehensive professional services including Accountancy,
            Independent Audit & Assurance, US GAAP Accountancy, Independent
            Audit & Assurance, US GAAP Restatement, Foreign Exchange and
            Regulatory Restatement, Foreign Exchange and Regulatory Consulting,
            Restructuring and Valuations, Corporate Consulting, Restructuring
            and Valuations, Corporate Support, Legal and Secretarial Support,
            Management Support, Legal and Secretarial Support, Management
            Consulting, all sorts of tax consultancy, compliances of Consulting,
            all sorts of tax consultancy, compliances of SEBI & stock exchanges
            etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurPromise;
