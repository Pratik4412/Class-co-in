import React from "react";

const TeamsMember = () => {
  return (
    <div className="flex flex-col gap-24 ">
      <div className="team-section">
        <div className="w-full h-full px-5 md:px-10 lg:px-20 py-6 bg-black opacity-70">
          <div className="container mx-auto flex items-center justify-center flex-col gap-12 w-full h-full ">
            <div className="flex items-center flex-col gap-4">
              <h6 className="fadeUp fadeUpDelay3 fadeUp text-base md:text-lg lg:text-xl font-semibold text-white font-paraFont">
                Our pride
              </h6>
              <h1 className="fadeUp fadeUp Delay2 text-2xl md:text-4xl lg:text-6xl font-semibold text-center text-white font-headingFont">
                Senior Pinnacle Squad
              </h1>

              <h6 className="fadeUp fadeUpDelay3 fadeUp text-base md:text-lg lg:text-xl font-semibold text-white font-paraFont">
                Let us introduce you to our amazing team members
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div>
        
      </div>
      {/* <DetaildServices /> */}
      {/* <BussinessSupport /> */}
      {/* <OverviewSa /> */}
    </div>
  );
};

export default TeamsMember;
