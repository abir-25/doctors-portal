import React from "react";

function PrimaryButton({ btnName }) {
  return (
    <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">
      {btnName}
    </button>
  );
}

export default PrimaryButton;
