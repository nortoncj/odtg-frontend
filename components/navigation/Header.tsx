import React, { useEffect, useState } from "react";
import { PiArrowRight, PiList, PiX } from "react-icons/pi";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#what", label: "What We Do" },
  { href: "#how", label: "How It Works" },
  { href: "#who", label: "Who We Serve" },
  { href: "#about", label: "About" },
];

export default function ODTGHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll + close on Escape while the mobile menu is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <style>{styles}</style>

      <nav className={`odtg-nav ${scrolled ? "odtg-nav--scrolled" : ""}`}>
        <div className="odtg-nav-container odtg-nav__inner flex center">
          <div className="odtg-nav__left">
            <Link
              href="#top"
              className="odtg-logo "
              onClick={() => setOpen(false)}
            >
              <Image
                src="/odtg-icon.png"
                alt="ODTG — Optimal Digital Transformation Group"
                className="odtg-logo__img"
                height={100}
                width={100}
              />{" "}
            </Link>
          </div>

          <div className="my-4 leading-3">
            <h1 className="font-bold text-base text-xs md:text-2xl leading-3">
              Optimal{" "}
              <div className="py-0 my-0 leading-none">
                <span className="text-(--gold) text-sm leading-none">
                  Digital Transformation Group
                </span>
                </div>
            </h1>
            <small className="text-muted text-xs">
              Innovating with Structure. Modernizing with Confidence.
            </small>
                </div>
          {/* Desktop links */}
          <div className="odtg-nav__links center ">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="odtg-btn odtg-btn--gold odtg-nav__cta"
            >
              Start a Conversation <PiArrowRight size={16} />
            </Link>
          </div>

          {/* Hamburger — only shows on mobile via CSS */}
          <button
            className="odtg-nav__toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="odtg-mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <PiX size={26} /> : <PiList size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`odtg-mobile ${open ? "odtg-mobile--open" : ""}`}
        id="odtg-mobile-menu"
        hidden={!open}
      >
        <div className="odtg-mobile__backdrop" onClick={() => setOpen(false)} />
        <div className="odtg-mobile__panel">
          <nav className="odtg-mobile__links">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
          </nav>
          <Link
            href="#contact"
            className="odtg-btn odtg-btn--gold odtg-mobile__cta"
            onClick={() => setOpen(false)}
          >
            Start a Conversation <PiArrowRight size={16} />
          </Link>
        </div>
      </div>
    </>
  );
}

const styles = `
:root { --navy-900: #0A1B2E; --gold: #E0A93C; }

.odtg-nav-container {
max-width: 1180px; margin: 0 auto; padding: 0 28px;}
.odtg-btn {
  display: inline-flex; align-items: center; gap: 8px;
  font-weight: 600; font-size: 15px; line-height: 1;
  padding: 14px 22px; border-radius: 6px; white-space: nowrap;
  transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
  cursor: pointer; border: 1px solid transparent; text-decoration: none;
}
.odtg-btn--gold { background: var(--gold); color: #1a1205; box-shadow: 0 6px 18px rgba(224,169,60,.28); }
.odtg-btn--gold:hover { transform: translateY(-2px); box-shadow: 0 10px 26px rgba(224,169,60,.42); background: #edb84e; }
.odtg-btn svg { transition: transform .2s ease; }
.odtg-btn:hover svg { transform: translateX(3px); }

.odtg-logo { display: inline-flex; align-items: center; text-decoration: none; }
.odtg-logo__img { height: 4.5rem; width: auto; display: block; }
.odtg-logo__icon { height: 50px; width: auto; display: block; }

.odtg-nav {
  position: sticky; top: 0; z-index: 50;
  background: rgba(10,27,46,.72); backdrop-filter: blur(10px);
  border-bottom: 1px solid transparent;
  transition: background .3s ease, border-color .3s ease, box-shadow .3s ease;
}
.odtg-nav--scrolled { background: rgba(10,27,46,.96); border-bottom-color: rgba(255,255,255,.08); box-shadow: 0 6px 24px rgba(0,0,0,.35); }
 

.odtg-nav__links { display: flex; gap: 30px; font-size: 14.5px; font-weight: 500; margin-left: auto; align-items: center; justify-content: space-between; gap: 20px; height: 74px; }
.odtg-nav__links a:not(:last-child) { color: rgba(255,255,255,.82); position: relative; padding: 6px 0; text-decoration: none; transition: color .2s ease; }
.odtg-nav__links a::after:not(:last-child)  { content: ""; position: absolute; left: 0; bottom: 0; height: 2px; width: 0; background: var(--gold); transition: width .25s ease; }
.odtg-nav__links a:hover { color: #fff; }
.odtg-nav__links a:hover::after { width: 100%; }
.odtg-nav__left{
padding-top: 0.2rem;
}

.odtg-nav__cta { margin-left: 4px; height: 2.75rem; }

.odtg-nav__toggle {
  display: none; align-items: center; justify-content: center;
  width: 44px; height: 44px; border: none; background: transparent;
  color: #fff; cursor: pointer; padding: 0; border-radius: 8px;
  transition: background .2s ease;
}
.odtg-nav__toggle:hover { background: rgba(255,255,255,.08); }

/* Mobile drawer */
.odtg-mobile { position: fixed; inset: 0; z-index: 49; }
.odtg-mobile__backdrop {
  position: absolute; inset: 0; background: rgba(6,15,26,.6);
  backdrop-filter: blur(2px); opacity: 0; transition: opacity .3s ease;
}
.odtg-mobile--open .odtg-mobile__backdrop { opacity: 1; }
.odtg-mobile__panel {
  position: absolute; top: 74px; left: 0; right: 0;
  background: rgba(10,27,46,.98); backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255,255,255,.08);
  box-shadow: 0 20px 40px rgba(0,0,0,.4);
  padding: 18px 28px 26px;
  transform: translateY(-12px); opacity: 0;
  transition: transform .28s ease, opacity .28s ease;
}
.odtg-mobile--open .odtg-mobile__panel { transform: translateY(0); opacity: 1; }
.odtg-mobile__links { display: flex; flex-direction: column; }
.odtg-mobile__links a {
  color: rgba(255,255,255,.88); font-size: 17px; font-weight: 500;
  padding: 16px 4px; text-decoration: none;
  border-bottom: 1px solid rgba(255,255,255,.06);
  transition: color .2s ease, padding-left .2s ease;
}
.odtg-mobile__links a:hover { color: var(--gold); padding-left: 10px; }
.odtg-mobile__cta { width: 100%; justify-content: center; margin-top: 22px; padding: 16px; }

@media (prefers-reduced-motion: reduce) {
  .odtg-mobile__backdrop, .odtg-mobile__panel { transition: none; }
}

/* ---- The responsive switch ---- */
@media (max-width: 960px) {
  .odtg-nav__links { display: none; }
  .odtg-nav__cta { display: none; }      /* CTA lives in the drawer on mobile */
  .odtg-nav__toggle { display: inline-flex; }
  .odtg-logo { width: 75px; }
}

`;
