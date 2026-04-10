import React from "react";
import "./Tomorrow.css";

export default function Tomorrow() {
  return (
    <section className="tomorrow">
      {/* Pink radial glow blob */}
      <div className="tomorrow__blob" aria-hidden="true" />

      <div className="tomorrow__inner">
        {/* Left: text */}
        <div className="tomorrow__text">
          <h2 className="tomorrow__title">
            <span className="hl--underline-yellow">Tomorrow</span> should<br />
            be better than{" "}
            <span className="hl hl--green-sm">today</span>
          </h2>
          <p className="tomorrow__body">
            We are a team of strategists, designers communicators, researchers.
            Togeather, we belive that progress only happens when you refuse
            to play things safe.
          </p>
          <a href="#" className="read-more">
            Read more <span className="read-more__line" aria-hidden="true" />
          </a>
        </div>

        {/* Right: circular image + red triangle */}
        <div className="tomorrow__visual">
          <div className="tomorrow__red-triangle" aria-hidden="true" />
          <div className="tomorrow__circle">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&auto=format&fit=crop"
              alt="Team meeting"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
