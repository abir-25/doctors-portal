import React from "react";
import chair from "../../assets/images/chair.png";
import PrimaryButton from "../Shared/PrimaryButton";
function Banner() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse p-0">
        <img
          src={chair}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            With the passage of time, dentistry has expanded and there have been
            availability of specialist doctors in various departments. Currently
            in each department of this center like Dental Implants, Orthodontic
            Treatment, Cosmetic Dentistry
          </p>
          <PrimaryButton btnName="Get Started" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
