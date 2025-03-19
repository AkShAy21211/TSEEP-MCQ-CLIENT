import React from "react";

function OnBoarding() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-center p-6">
      {/* Main Content Centered */}
      <div className="flex-grow flex flex-col justify-center">
        {/* Title with Underline */}
        <h1 className="text-[3rem] lg:text-[4.66rem] font-semibold relative leading-tight text-center">
          Welcome to{" "}
          <span className="relative inline-block">
            <span className="relative inline-block">
              <span className="relative inline-block px-2 text-nowrap">
                TSEEP Mastery Box
                <span className="absolute left-0 bottom-3 w-full h-[12px] lg:h-[18px] bg-yellow-400 -z-10"></span>
              </span>
            </span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className=" text-casal font-extralight text-[1.3rem] lg:text-[1.8rem] ">
          Unlock your potential with{" "}
          <span className="font-bold text-gray-900">AI inspired tool</span>
        </p>
      </div>

      {/* Footer Section (Near Bottom, Not Fully Stuck) */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between p-6 border-t border-gray-300">
        {/* Checkbox and Label */}
        <label className="flex items-center space-x-3 text-lg text-gray-900">
          <input
            type="checkbox"
            className="w-5 h-5 accent-blue-600 cursor-pointer"
          />
          <span>
            I confirm that I have read and accept the terms and conditions and
            privacy policy.
          </span>
        </label>

        {/* Button */}
        <button className="mt-4 md:mt-0 px-6 py-2 bg-casal text-white rounded-lg  transition">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default OnBoarding;
