import React from 'react'
import Image from 'next/image'
import { PiMedal, PiBank, PiAnchor } from 'react-icons/pi'

export default function Footer() {
  return (
    <footer className="odtg-footer">
      <div className="odtg-container odtg-footer__inner">
        <a href="#top" className="odtg-logo">
          <Image
            width={100}
            height={100}
            src="/odtg-icon.png"
            alt="ODTG — Optimal Digital Transformation Group"
            className="odtg-logo__img"
          />
          <div className="">
            <h1 className="font-bold text-base text-xs md:text-xl ">
              Optimal{" "}
              <span className="text-(--gold)">Digital Transormation Group</span>
            </h1>
            <small className="text-muted text-(--text-tiny)">
                Innovating with Structure. Modernizing with Confidence.
              </small>
          </div>
        </a>
        <div className="odtg-footer__links">
          <a href="#what">What We Do</a>
          <a href="#how">How It Works</a>
          <a href="#who">Who We Work With</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="odtg-footer__badges">
          <span>
            <PiMedal size={14} /> SBA-CERTIFIED SDVOSB · WOSB · VOSB · UEI
            VV97GEJU6616 · CAGE 22N27 · SAM.GOV ACTIVE
          </span>
          <span>
            <PiAnchor size={14} /> U.S. Navy Veteran
          </span>
          <span>
            <PiBank size={14} /> Federal & Commercial
          </span>
        </div>
      </div>
      <div className="odtg-container odtg-footer__base">
        <span>© 2026 ODTG, LLC.</span>
        <div className="odtg-footer__legal">
          <a href="#">Privacy</a>
          <a href="#">Accessibility</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}
