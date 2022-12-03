import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";

function MakeAppointment() {
  return (
    <section
      className="flex justify-center items-center"
      style={{ background: `url(${appointment})` }}
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-120px]" src={doctor} alt="" />
      </div>
      <div className="flex-1 text-white lg:p-2 p-10">
        <h3 className="text-xl text-primary font-bold">Appointment</h3>
        <h2 className="text-3xl">Make an Appointment</h2>
        <p className="py-3">
          The most common function of the 's in English is to show possession,
          as in "the cat's bowl." There are other ways to show possession—"the
          bowl of the cat," for example—but 's is the way it's most often done.
          But that isn't all that 's does. Though we recognize that it is deeply
          controversial to say.
        </p>
      </div>
    </section>
  );
}

export default MakeAppointment;
