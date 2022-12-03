import React from "react";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

function Contact() {
  return (
    <div
      className="my-28 py-4 text-center flex flex-col items-center p-2"
      style={{ background: `url(${appointment})` }}
    >
      <h4 className="text-xl text-primary font-bold">Contact Us</h4>
      <h2 className="text-3xl text-white">Stay Connected With Us</h2>
      <div className="flex justify-center mt-9">
        <div class="grid grid-cols-2 gap-4 max-w-xl m-auto">
          <div class="col-span-2 lg:col-span-1">
            <input
              type="text"
              class="border-solid rounded p-3 md:text-xl w-full"
              placeholder="Name"
            />
          </div>

          <div class="col-span-2 lg:col-span-1">
            <input
              type="text"
              class="border-solid rounded p-3 md:text-xl w-full"
              placeholder="Email Address"
            />
          </div>

          <div class="col-span-2">
            <textarea
              cols="30"
              rows="8"
              class="border-solid rounded p-3 md:text-xl w-full"
              placeholder="Message"
            ></textarea>
          </div>
          <PrimaryButton btnName="Submit" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
