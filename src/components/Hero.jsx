import React, { useEffect, useRef } from "react";
import "./Hero.css";

/* Use publicly available face photos via randomuser */
const AVATARS = [
  { id: 1, src: "https://randomuser.me/api/portraits/men/32.jpg",  cls: "avatar--a" },
  { id: 2, src: "https://randomuser.me/api/portraits/men/75.jpg",  cls: "avatar--b" },
  { id: 3, src: "https://randomuser.me/api/portraits/men/41.jpg",  cls: "avatar--c" },
  { id: 4, src: "https://randomuser.me/api/portraits/men/22.jpg",  cls: "avatar--d" },
  { id: 5, src: "https://randomuser.me/api/portraits/men/55.jpg",  cls: "avatar--e" },
  { id: 6, src: "https://randomuser.me/api/portraits/women/44.jpg",cls: "avatar--f" },
  { id: 7, src: "https://randomuser.me/api/portraits/men/10.jpg",  cls: "avatar--g" },
  { id: 8, src: "https://randomuser.me/api/portraits/women/28.jpg",cls: "avatar--h" },
];

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const onMove = (e) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } = hero.getBoundingClientRect();
      const xPct = (clientX - left) / width - 0.5;
      const yPct = (clientY - top) / height - 0.5;
      hero.querySelectorAll(".avatar-item").forEach((el, i) => {
        const depth = 0.5 + (i % 3) * 0.3;
        el.style.transform = `translate(${xPct * 18 * depth}px, ${yPct * 18 * depth}px)`;
      });
    };
    hero.addEventListener("mousemove", onMove);
    return () => hero.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      {/* Decorative squiggle */}
      <div className="hero__squiggle" aria-hidden="true">
        <svg viewBox="0 0 100 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M60 10 C20 60, 80 100, 40 150 C0 200, 70 240, 30 290"
            stroke="#1a1a1a"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M70 10 C30 60, 90 100, 50 150 C10 200, 80 240, 40 290"
            stroke="#e05a4e"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* Purple teardrop decoration */}
      <div className="hero__teardrop" aria-hidden="true" />

      {/* Main headline */}
      <div className="hero__content">
        <h1 className="hero__title">
          The <span className="hl hl--yellow">thinkers</span> and<br />
          doers were <span className="hl hl--pink">changing</span><br />
          the <span className="hl hl--green">status</span> Quo with
        </h1>
        <p className="hero__sub">
          We are a team of strategists, designers communicators, researchers. Togeather,<br />
          we belive that progress only hghappens when you refuse to play things safe.
        </p>
      </div>

      {/* Floating avatars */}
      <div className="hero__avatars" aria-hidden="true">
        {AVATARS.map((av) => (
          <div key={av.id} className={`avatar-item ${av.cls}`}>
            <img src={av.src} alt="" loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}
