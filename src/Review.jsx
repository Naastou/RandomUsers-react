import { useState } from "react";
import reviews from "./data";
import { FaQuoteLeft } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Review = () => {
  const [people, setPeople] = useState(0);
  const { name, job, image, text } = reviews[people];
  const prevPerson = () => {
    people < 1 ? setPeople(reviews.length - 1) : setPeople(0);
  };
  const nextPerson = () => {
    people < reviews.length - 1 ? setPeople(people + 1) : setPeople(0);
  };
  const randomPerson = () => {
    setPeople(Math.floor(Math.random() * reviews.length));
  };
  return (
    <article className="review">
      <div className="img-container">
        <img className="person-img" src={image} alt={name} />
        <span className="quote-icon">
          {" "}
          <FaQuoteLeft />
        </span>
      </div>

      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button onClick={randomPerson} className="random-btn">
        Surprise Me
      </button>
    </article>
  );
};

export default Review;
