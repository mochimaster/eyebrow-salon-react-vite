import { useState } from "react";
import { reviews } from "../data/salonData";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const review = reviews[index];

  return <section className="section reviews" id="reviews">
    <div className="container">
      <div className="section-heading"><p className="eyebrow">Reviews</p><h2>Our clients about us</h2><p>We are grateful for every review you leave!</p></div>
      <div className="review-slider">
        <p className="quote">{review[2]}</p>
        <h3>{review[0]}</h3><p>Nail master: {review[1]}</p>
        <div className="slider-controls">
          <button onClick={() => setIndex((index - 1 + reviews.length) % reviews.length)}>←</button>
          <button onClick={() => setIndex((index + 1) % reviews.length)}>→</button>
        </div>
      </div>
    </div>
  </section>;
}
