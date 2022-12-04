import React from "react";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

function AppointmentBanner({ date, setDate }) {
  return (
    <>
      <div
        className="hero min-h-screen mb-10"
        style={{
          background: `url(${chair})`,
          backgroundSize: "cover",
          opacity: "0.1",
          position: "relative",
        }}
      ></div>
      <div
        className="hero-content flex-col lg:flex-row-reverse"
        style={{ position: "absolute", top: "180px", width: "100%", left: "0" }}
      >
        <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="mr-0 lg:mr-12">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
          {/* <p>You have selected </p> */}
        </div>
      </div>
    </>
  );
}

export default AppointmentBanner;
