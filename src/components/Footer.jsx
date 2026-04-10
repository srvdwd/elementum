import React from "react";
import "./Footer.css";

const COLS = [
  {
    heading: "Company",
    links: ["Home", "Studio", "Service", "Blog"],
  },
  {
    heading: "Terms & Policies",
    links: ["Privacy Policy", "Terms & Conditions", "Explore", "Accesibility"],
  },
  {
    heading: "Follow Us",
    links: ["Instagram", "LinkedIn", "Youtube", "Twitter"],
  },
  {
    heading: "Terms & Policies",
    isContact: true,
    address: "1498w Fluton ste, STE\n2D Chicago, IL 63867.",
    phone: "(123) 456789000",
    email: "info@elementum.com",
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__cols">
          {COLS.map((col, i) => (
            <div key={i} className="footer__col">
              <h4 className="footer__col-heading">{col.heading}</h4>
              {col.isContact ? (
                <div className="footer__contact">
                  <p>{col.address}</p>
                  <p>{col.phone}</p>
                  <p>{col.email}</p>
                </div>
              ) : (
                <ul className="footer__links">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="footer__link">{link}</a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="footer__bottom">
        <p className="footer__copy">©2023 Elementum. All rights reserved</p>
      </div>
    </footer>
  );
}
