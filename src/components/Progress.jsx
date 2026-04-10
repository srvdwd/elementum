import React from "react";
import "./Progress.css";

export default function Progress() {
  return (
    <section className="progress-sec">
      {/* Decorative red wave curve */}
      <div className="progress-sec__wave" aria-hidden="true">
        <svg viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            d="M0 160 C150 60, 300 180, 450 100 C600 20, 700 140, 800 80"
            stroke="#e05a4e"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="progress-sec__inner">
        {/* Left: circular image + red triangles */}
        <div className="progress-sec__visual">
          <div className="progress-sec__tri progress-sec__tri--top" aria-hidden="true" />
          <div className="progress-sec__tri progress-sec__tri--bottom" aria-hidden="true" />
          <div className="progress-sec__circle">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop"
              alt="Team collaborating"
            />
          </div>
        </div>

        {/* Right: text */}
        <div className="progress-sec__text">
          <h2 className="progress-sec__title">
            <span className="hl hl--green-box">See</span> how we can<br />
            help you <span className="hl--underline-yellow2">progress</span>
          </h2>
          <p className="progress-sec__body">
            We add a layer of fearless insights and action that allows change
            makers to accelerate their progress in areas such as brand, design
            digital, comms and social research.
          </p>
          <a href="#" className="read-more">
            Read more <span className="read-more__line" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
