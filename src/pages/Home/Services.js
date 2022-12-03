import React from "react";
import Service from "./Service";
import Fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import treatment from "../../assets/images/treatment.png";
import PrimaryButton from "../Shared/PrimaryButton";

function Services() {
  const services = [
    {
      _id: 1,
      name: "Fluoride Treatment",
      description:
        "Fluoride varnish can be applied to both baby teeth and adult teeth by a dentist.",
      img: Fluoride,
    },
    {
      _id: 2,
      name: "Cavity Filling",
      description:
        "A cavity filling brings back the functionality and appearance of the tooth.",
      img: cavity,
    },
    {
      _id: 3,
      name: "Teeth Whitening",
      description:
        "Everyone notices a bright, white, glowing smile and everyone notices.",
      img: whitening,
    },
  ];
  return (
    <div className="my-28">
      <div className="text-center">
        <h3 className="text-primary text-xl font-bold uppercase">
          Our Services
        </h3>
        <h2 className="text-4xl">Service we provide</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-5">
          {services.map((service) => (
            <Service key={service.id} service={service} />
          ))}
        </div>
      </div>
      <div className="mt-20 lg:px-20">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={treatment}
              className="lg:max-w-lg rounded-lg shadow-2xl"
            />
            <div className="lg:ml-12">
              <h1 className="text-5xl font-bold">
                Exceptional Dental Care, on Your Terms
              </h1>
              <p className="py-6">
                We understand that many patients are reluctant to visit the
                dentist due to dental anxiety. Some people put off the dental
                care they need. They often end up with decay or other oral
                health problems. We offer complimentary oral sedation if you
                have anxiety. Our dentists will explain the dental treatment you
                will receive before they begin. Always reassuring, that you feel
                comfortable.
              </p>
              <PrimaryButton btnName="Get Started" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
