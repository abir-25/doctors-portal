import React from "react";

function InfoCard({ img }) {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl bg-accent">
      <figure>
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
}

export default InfoCard;
