import React, { useState } from "react";
import "./Newsletter.css";

export default function Newsletter() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <section className="newsletter">
      {/* Decorative red squiggle arrows */}
      <div className="newsletter__squiggle" aria-hidden="true">
        <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 20 C60 40, 80 10, 100 30 C120 50, 80 70, 120 90" stroke="#e05a4e" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M110 85 L120 90 L115 100" stroke="#e05a4e" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M70 30 C90 50, 110 20, 130 40 C150 60, 120 80, 160 100" stroke="#e05a4e" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
          <path d="M150 95 L160 100 L155 110" stroke="#e05a4e" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
        </svg>
      </div>

      {/* Purple teardrop decoration */}
      <div className="newsletter__teardrop" aria-hidden="true" />

      <div className="newsletter__inner">
        <h2 className="newsletter__title">
          Subscribe to<br />
          our newsletter
        </h2>
        <p className="newsletter__sub">To make your stay special and even more memorable</p>

        {subscribed ? (
          <p className="newsletter__success">🎉 You're subscribed! Thanks for joining.</p>
        ) : (
          <button
            className="newsletter__btn"
            onClick={() => setSubscribed(true)}
          >
            Subscribe Now
          </button>
        )}
      </div>
    </section>
  );
}
