import React, { useState } from "react";
import "./Testimonials.css";

const FLOATING = [
  { src: "https://randomuser.me/api/portraits/men/11.jpg",  cls: "tf--a" },
  { src: "https://randomuser.me/api/portraits/men/33.jpg",  cls: "tf--b" },
  { src: "https://randomuser.me/api/portraits/men/52.jpg",  cls: "tf--c" },
  { src: "https://randomuser.me/api/portraits/men/15.jpg",  cls: "tf--d" },
  { src: "https://randomuser.me/api/portraits/women/60.jpg",cls: "tf--e" },
  { src: "https://randomuser.me/api/portraits/men/78.jpg",  cls: "tf--f" },
];

const TESTIMONIALS = [
  {
    id: 1,
    text: "Elementum delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasnt used, which have also proved to be easy to use and reliable",
  },
  {
    id: 2,
    text: "Working with Elementum was an incredible experience. Their team brought creative energy and technical excellence that transformed our digital presence completely.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="testimonials">
      <div className="testimonials__inner">
        <h2 className="testimonials__heading">
          What our customer<br />
          says <span className="hl hl--green-box2">About Us</span>
        </h2>
        <div className="testimonials__underline" aria-hidden="true" />

        {/* Floating avatars */}
        {FLOATING.map((f, i) => (
          <div key={i} className={`tf-avatar ${f.cls}`} aria-hidden="true">
            <img src={f.src} alt="" loading="lazy" />
          </div>
        ))}

        {/* Quote card */}
        <div className="testimonials__card">
          <span className="testimonials__quote-open">&ldquo;&ldquo;</span>
          <p className="testimonials__text">{TESTIMONIALS[active].text}</p>
          <span className="testimonials__quote-close">&rdquo;&rdquo;</span>
        </div>

        {/* Dots */}
        <div className="testimonials__dots">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              className={`testimonials__dot${i === active ? " testimonials__dot--active" : ""}`}
              onClick={() => setActive(i)}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
