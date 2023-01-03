import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

function BookingModal({ date, treatment, setTreatment, refetch }) {
  const [user, loading] = useAuthState(auth);
  const { _id, name, slots } = treatment;
  const formattedDate = format(date, "PP");

  const handleBooking = (event) => {
    event.preventDefault();
    // console.log(_id, name, event.target.slot.value);
    const slot = event.target.slot.value;
    const phone = event.target.phone.value;

    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slot,
      patient: user.email,
      patientName: user.displayName,
      phone,
    };

    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(`Appointment set on ${formattedDate} at ${slot}`);
        } else {
          toast.error(
            `Already have an Appointment on ${data.booking?.date} at ${data.booking?.slot}`
          );
        }
        refetch();
        setTreatment(null);
      });
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <h3 className="font-bold text-lg text-secondary">
            Booking for {name}
          </h3>
          <p className="py-4">
            <form
              onSubmit={handleBooking}
              className="grid grid-cols-1 gap-3 justify-items-center"
            >
              <input
                type="text"
                disabled
                value={format(date, "PP")}
                className="input input-bordered w-full max-w-xs"
              />
              <select
                name="slot"
                className="select select-bordered w-full max-w-xs"
              >
                {slots.map((slot, index) => (
                  <option key={index} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
              <input
                type="text"
                name="name"
                disabled
                value={user?.displayName || ""}
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="text"
                name="email"
                disabled
                value={user?.email || ""}
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="text"
                name="phone"
                placeholder="Your Phone"
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="submit"
                value="Submit"
                className="btn btn-secondary w-full max-w-xs"
              />
            </form>
          </p>
        </div>
      </div>
    </div>
  );
}

export default BookingModal;
