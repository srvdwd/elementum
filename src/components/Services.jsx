import React, { useState } from "react";
import "./Services.css";

const SERVICES = [
  {
    id: 1,
    category: "Office of multiple interest content",
    title: "Colaborative & partnership",
  },
  {
    id: 2,
    category: "The hanger US Air force digital experimental",
    title: "We talk about our weight",
  },
  {
    id: 3,
    category: "Delta faucet content, social, digital",
    title: "Piloting digital confidence",
  },
];

export default function Services() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="services">
      <div className="services__inner">
        <h2 className="services__heading">
          What we <span className="hl hl--green-sm">can</span><br />
          offer you!
        </h2>
        <div className="services__underline" aria-hidden="true" />

        <ul className="services__list">
          {SERVICES.map((s) => (
            <li
              key={s.id}
              className={`services__item${hovered === s.id ? " services__item--hovered" : ""}`}
              onMouseEnter={() => setHovered(s.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="services__divider" />
              <div className="services__row">
                <span className="services__category">{s.category}</span>
                <span className="services__title">{s.title}</span>
                <span className="services__arrow" aria-hidden="true">
                  <svg width="32" height="14" viewBox="0 0 32 14" fill="none">
                    <line x1="0" y1="7" x2="26" y2="7" stroke="currentColor" strokeWidth="1.5" />
                    <polyline points="20,1 27,7 20,13" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  </svg>
                </span>
              </div>
            </li>
          ))}
          <div className="services__divider" />
        </ul>
      </div>
    </section>
  );
}
