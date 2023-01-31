import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const { id } = useParams();
  const [bookingData, setBookingData] = useState(null);
  useEffect(() => {
    const url = `http://localhost:5000/bookings/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookingData(data));
  }, [id]);
  return (
    <div>
      <p className="text-3xl"> Payment: for {bookingData?.treatment}</p>
      <p className="text-xl">
        Please pay <strong>${bookingData?.price}</strong> for your appointment
        on {bookingData?.treatment} at {bookingData?.slot}
      </p>

      <div className="w-96 my-12">
        {bookingData && (
          <Elements stripe={stripePromise}>
            <CheckoutForm booking={bookingData} />
          </Elements>
        )}
      </div>
    </div>
  );
};

export default Payment;
