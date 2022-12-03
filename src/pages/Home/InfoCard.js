import React from "react";

function InfoCard({ bgColor, cardTitle, img }) {
  return (
    <div className={`card lg:card-side shadow-xl text-white ${bgColor}`}>
      <figure className="pl-5">
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{cardTitle}</h2>
        <p>Click the button to listen on Spotify app.</p>
      </div>
    </div>
  );
}

export default InfoCard;
