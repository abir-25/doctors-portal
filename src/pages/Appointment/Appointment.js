import React, { useState } from "react";
import Footer from "../Shared/Footer";
import AppointmentBanner from "./AppointmentBanner";
import AvailableAppointment from "./AvailableAppointment";

function Appointment() {
  const [date, setDate] = useState(new Date());
  return (
    <div className="px-12">
      <AppointmentBanner date={date} setDate={setDate} />
      <AvailableAppointment date={date} />
      <Footer />
    </div>
  );
}

export default Appointment;
