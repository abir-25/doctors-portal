import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Payment = () => {
  const { id } = useParams();
  const [bookingData, setBookingData] = useState(null);
  useEffect(() => {
    const url = `http://localhost:5000/bookings/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookingData(data));
  }, [id]);

  return <div>Payment: {bookingData?.patientName}</div>;
};

export default Payment;
