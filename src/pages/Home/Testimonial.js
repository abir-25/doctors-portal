import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import Review from "./Review";

function Testimonial() {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      review:
        "Amazon was one of the first online stores to allow consumers to post reviews of products in 1995, and it remains one of the most important resources for consumers looking to make informed purchase decisions.",
      img: people1,
      location: "California",
    },
    {
      _id: 2,
      name: "Henry Reails",
      review:
        "Geared toward U.S.-based service businesses, Angie's List is a 'higher-end' review site, because users actually have to pay for membership. But you get what you pay for. The reviews, given on an A–F scale",
      img: people2,
      location: "America",
    },
    {
      _id: 3,
      name: "Em,ma Peterson",
      review:
        "Have customers working in academia? Better yet, are they located in Australia? Choice is a member-funded review website based in Australia. It independently evaluates academic resources — like libraries",
      img: people3,
      location: "Argentina",
    },
  ];
  return (
    <section className="lg:py-28 pb-0 pt-28">
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl text-primary font-bold">Testimonials</h4>
          <h2 className="text-3xl">What Our Patients Say</h2>
        </div>
        <img className="w-24 lg:w-48" src={quote} alt="" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-5">
        {reviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
}

export default Testimonial;
