import React from "react";

function Service({ service, setTreatment }) {
  const { name, slots } = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <h2 className="text-xl font-bold text-secondary">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">Try Another Date</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 0 ? "Spaces" : "Space"} Available
        </p>
        <div className="card-actions justify-center mt-3">
          <label
            disabled={slots.length === 0}
            htmlFor="booking-modal"
            className="btn btn-sm btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary"
            onClick={() => setTreatment(service)}
          >
            Book Appointment
          </label>
          {/* <button
            disabled={slots.length === 0}
            className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary"
            onClick={() => setTreatment(service)}
          >
            Book Appointment
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Service;
