import { format } from "date-fns";
import React from "react";

function BookingModal({ date, treatment, setTreatment }) {
  const { _id, name, slots } = treatment;

  const handleBooking = (event) => {
    event.preventDefault();
    console.log(_id, name, event.target.slot.value);
    setTreatment(null);
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
                {slots.map((slot) => (
                  <option value={slot}>{slot}</option>
                ))}
              </select>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="text"
                name="email"
                placeholder="Your Email"
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
