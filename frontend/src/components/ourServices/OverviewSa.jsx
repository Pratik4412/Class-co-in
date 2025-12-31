import React, { useState } from "react";
import { servicesTabs } from "../../data/text";
import ourTeamside from "../../assets/aboutpage/out-promise.webp";
const OverviewSa = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-secondary-50 py-14 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold text-[var(--primary-700)]">
            Comprehensive Business Services Overview
          </h2>
          <p className="mt-3 md:mt-4 max-w-2xl mx-auto text-sm sm:text-base text-[var(--primary-600)]">
            A complete ecosystem of professional financial, advisory and
            compliance services for your business growth.
          </p>
        </div>

        {/* Tabs (Scrollable on Mobile) */}
        <div className="relative mb-10 md:mb-12">
          <div className="flex gap-3 overflow-x-auto scrollbar-hide px-1 sm:px-0 md:justify-center">
            {servicesTabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`whitespace-nowrap px-4 py-2 text-sm font-medium rounded-full transition-all
                  ${
                    activeTab === index
                      ? "bg-[var(--primary-700)] text-white shadow-md"
                      : "bg-white text-[var(--primary-600)] hover:bg-[var(--primary-50)]"
                  }`}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="flex items-center gap-5">
          <div
            data-aos="fade-up"
            className=" rounded-xl md:rounded-2xl 
          p-5 sm:p-6 md:p-8  mx-auto"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-[var(--primary-700)] mb-3 md:mb-4">
              {servicesTabs[activeTab].title}
            </h3>

            <p className="mb-4 text-sm sm:text-base text-[var(--primary-600)]">
              <strong>Overview:</strong> {servicesTabs[activeTab].overview}
            </p>

            <p className="mb-5 text-sm sm:text-base text-[var(--primary-600)]">
              <strong>Why it matters:</strong> {servicesTabs[activeTab].why}
            </p>

            <div className="mb-5">
              <h4 className="font-semibold text-[var(--primary-700)] mb-2">
                Our services include:
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-[var(--primary-600)]">
                {servicesTabs[activeTab].services.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <p className="mb-6 text-sm sm:text-base text-[var(--primary-600)]">
              <strong>Who we serve:</strong> {servicesTabs[activeTab].serve}
            </p>

            {/* CTA */}
            <button
              className="
              w-full md:w-auto
              px-6 py-3 rounded-lg
              bg-[var(--primary-700)] text-white
              font-medium text-sm sm:text-base
              hover:opacity-90 transition
            "
            >
              {servicesTabs[activeTab].cta}
            </button>
          </div>
          <img
            src={ourTeamside}
            alt="ourTeamside"
            className="rounded-xl md:block hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default OverviewSa;
