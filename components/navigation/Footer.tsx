import React from 'react'
import Image from 'next/image'
import { PiMedal, PiBank, PiAnchor } from 'react-icons/pi'

export default function Footer() {
  return (
    <footer className="odtg-footer">
      <style>{styles}</style>
      <div className="odtg-container odtg-footer__inner">
        <a href="#top" className="odtg-logo">
          <Image
            width={100}
            height={100}
            src="/odtg-icon.png"
            alt="ODTG — Optimal Digital Transformation Group"
            className="odtg-logo__icon"
          />
          <div className="">
            <h1 className="font-bold text-base text-xs md:text-xl ">
              Optimal{" "}
              <span className="text-(--gold)">Digital Transformation Group</span>
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

const styles = `
.odtg-footer { background: var(--navy-900); border-top: 1px solid rgba(255,255,255,.07); padding: 40px 0 26px; }
.odtg-footer__inner { display: flex; align-items: center; justify-content: space-between; gap: 24px; flex-wrap: wrap; padding-bottom: 24px; border-bottom: 1px solid rgba(255,255,255,.07); }
.odtg-footer__links { display: flex; gap: 24px; font-size: 14px; }
.odtg-footer__links a { color: rgba(255,255,255,.72); transition: color .2s ease; }
.odtg-footer__links a:hover { color: var(--gold); }
.odtg-footer__badges { display: flex; gap: 18px; flex-wrap: wrap; }
.odtg-footer__badges span { display: inline-flex; align-items: center; gap: 7px; font-size: 12.5px; color: rgba(255,255,255,.6); }
.odtg-footer__badges svg { color: var(--gold); }
.odtg-footer__base { display: flex; align-items: center; justify-content: space-between; padding-top: 22px; font-size: 12.5px; color: rgba(255,255,255,.5); flex-wrap: wrap; gap: 12px; }
.odtg-footer__legal { display: flex; gap: 18px; }
.odtg-footer__legal a:hover { color: var(--gold); }
`;