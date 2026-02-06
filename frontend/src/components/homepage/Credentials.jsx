import React from "react";
import {
  FaCheckCircle,
  FaUniversity,
  FaClipboardCheck,
  FaStar,
  FaCertificate,
  FaBuilding,
} from "react-icons/fa";
import { LuSearchCheck } from "react-icons/lu";

const Credentials = () => {
  const credentials = [
    {
      icon: FaUniversity,
      title: "RBI Empanelment",
      description: "Reserve Bank of India",
      detail: "UCN No. 956975",
      gradientFrom: "from-primary-200",
      gradientTo: "to-primary-300",
      iconColor: "text-primary-700",
    },
    {
      icon: FaClipboardCheck,
      title: "C&AG Empanelment",
      description: "Comptroller & Auditor General of India",
      detail: "Regulatory Audits",
      gradientFrom: "from-secondary-200",
      gradientTo: "to-secondary-300",
      iconColor: "text-secondary-700",
    },
    {
      icon: FaStar,
      title: "ICAI Category I",
      description: "Audit Firm Recognition",
      detail: "Premium Status",
      gradientFrom: "from-primary-200",
      gradientTo: "to-secondary-200",
      iconColor: "text-secondary-600",
    },
    {
      icon: FaCertificate,
      title: "ISO Certified",
      description: "Quality Management System",
      detail: "International Standards",
      gradientFrom: "from-secondary-200",
      gradientTo: "to-primary-200",
      iconColor: "text-primary-600",
    },
    {
      icon: LuSearchCheck,
      title: "Peer Reviewed",
      description: "ICAI Guidelines Compliant",
      detail: "Quality Assured",
      gradientFrom: "from-primary-200",
      gradientTo: "to-secondary-200",
      iconColor: "text-primary-700",
    },
    {
      icon: FaBuilding,
      title: "MSME Registered",
      description: "Udyam Registration",
      detail: "Government Recognized",
      gradientFrom: "from-secondary-200",
      gradientTo: "to-secondary-300",
      iconColor: "text-secondary-700",
    },
  ];

  return (
    <section className="px-5 md:px-10 lg:px-20 py-12 md:py-16 bg-[#281F1C]">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 fadeUp">
          <div className="inline-block mb-4">
            <span className="text-secondary-600 font-semibold text-sm md:text-base uppercase tracking-wider px-4 py-2 bg-[#180F0B] rounded-full">
              Recognised • Certified • Trusted
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold bg-[linear-gradient(105.17deg,_#251611_-25.01%,_#FFCA97_42.41%,_#251611_121.11%)] bg-clip-text text-transparent font-headingFont leading-tight">
            Our Credentials & Empanelments
          </h2>
          <p className="text-sm md:text-base text-gray-400 font-paraFont max-w-3xl mx-auto leading-relaxed mt-2">
            CLASS & Co. LLP holds key empanelments and certifications that
            reflect its professional standing and regulatory credibility.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {credentials.map((credential, index) => {
            const IconComponent = credential.icon;
            return (
              <div
                key={index}
                className={`
                  group relative
                  bg-[#180F0B] rounded-xl p-6 md:p-8
                  border-2 border-transparent
                  hover:border-secondary-400
                  hover:shadow-[0_8px_30px_rgba(202,179,108,0.25)]
                  transition-all duration-500 ease-out
                  transform hover:-translate-y-2
                  fadeUp
                `}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon Circle */}
                <div
                  className={`
                    w-16 h-16 md:w-20 md:h-20 
                    rounded-full 
                    bg-gradient-to-br ${credential.gradientFrom} ${credential.gradientTo}
                    flex items-center justify-center 
                    mb-4 
                    group-hover:scale-110 group-hover:rotate-6
                    transition-all duration-300
                    shadow-md
                  `}
                >
                  <IconComponent
                    className={`text-2xl md:text-3xl ${credential.iconColor}`}
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-100 font-headingFont mb-2">
                  {credential.title}
                </h3>
                <p className="text-gray-400 font-paraFont mb-1 text-sm md:text-base">
                  {credential.description}
                </p>
                <p className="text-secondary-300 font-semibold text-xs md:text-sm">
                  {credential.detail}
                </p>

                {/* Decorative element */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-secondary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom Badge */}
        <div className="text-center fadeUp fadeUpDelay3">
          <div className="inline-block bg-[#180F0B] rounded-2xl px-8 py-6 shadow-lg border border-primary-200">
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <FaCheckCircle className="text-secondary-300 text-2xl" />
              <p className="text-gray-200 font-semibold text-base md:text-lg font-paraFont">
                Enabling complex and regulated assignments across sectors
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;
