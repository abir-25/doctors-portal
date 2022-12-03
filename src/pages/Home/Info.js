import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

function Info() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <InfoCard
        bgColor="bg-gradient-to-r from-secondary to-primary"
        cardTitle="Opening Hours"
        img={clock}
      />
      <InfoCard
        bgColor="bg-[#3A4256]"
        cardTitle="Our Locations"
        img={marker}
      />
      <InfoCard
        bgColor="bg-gradient-to-r from-secondary to-primary"
        cardTitle="Contact Us"
        img={phone}
      />
    </div>
  );
}

export default Info;
