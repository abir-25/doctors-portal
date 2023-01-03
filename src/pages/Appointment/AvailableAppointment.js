import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Loading } from "../Shared/Loading";
import BookingModal from "./BookingModal";
import Service from "./Service";

function AvailableAppointment({ date }) {
  const [treatment, setTreatment] = useState(null);

  const formattedDate = format(date, "PP");
  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["available", formattedDate], () =>
    fetch(`http://localhost:5000/available?date=${formattedDate}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h2 className="text-xl text-secondary text-center my-12">
        Available Appointment on: {format(date, "PP")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services?.map((service) => (
          <Service
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          />
        ))}
      </div>

      {treatment && (
        <BookingModal
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
          refetch={refetch}
        />
      )}
    </div>
  );
}

export default AvailableAppointment;
