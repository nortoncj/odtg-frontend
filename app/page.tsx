"use client";

import React, { useEffect, useRef, useState } from "react";
import logo from "@/public/otdg-logo-light.png";
import logo_reverse from "@/public/odtg-logo-reverse.png";
import headshot from "@/public/headshot2.jpg"


const LOGO_SRC = logo.src

const CAPABILITY_STATEMENT_PDF = "@/public/docs/ODTG_Capability_Statement.pdf"

const PORTRAIT_SRC = headshot.src

const FOOTER_LOGO_SRC = logo_reverse.src
 

const styles = `
:root{
  --navy:#0b2341;
  --navy-deep:#06162b;
  --navy-soft:#16365e;
  --gold:#d4af37;
  --gold-dark:#a8871f;
  --ink:#1f2937;
  --muted:#4b5563;
  --light:#f5f7fa;
  --white:#ffffff;
  --radius:18px;
  --shadow:0 14px 40px rgba(11,35,65,.10);
}
*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
@media (prefers-reduced-motion:reduce){html{scroll-behavior:auto}*{transition:none!important;animation:none!important}}
body{font-family:'Montserrat',Arial,sans-serif;color:var(--ink);line-height:1.65;background:var(--white)}
img{max-width:100%;display:block}
a{color:var(--navy)}
.container{width:100%;max-width:1200px;margin:0 auto;padding:0 20px}
.skip-link{position:absolute;left:-9999px;top:10px;background:var(--gold);color:#000;padding:10px 16px;border-radius:8px;font-weight:700;z-index:999}
.skip-link:focus{left:10px}
:focus-visible{outline:3px solid var(--gold);outline-offset:3px}

/* Header */
header{position:sticky;top:0;left:0;width:100%;z-index:50;background:var(--white);box-shadow:0 2px 18px rgba(11,35,65,.10);border-bottom:3px solid var(--gold)}
.navbar{display:flex;justify-content:space-between;align-items:center;padding:12px 20px}
.logo{display:block;line-height:0}
.logo img{height:72px;width:auto}
.nav-links{display:flex;gap:26px;list-style:none}
.nav-links a{color:var(--navy);text-decoration:none;font-weight:600;font-size:.95rem}
.nav-links a:hover{color:var(--gold-dark)}
.nav-toggle{display:none;background:none;border:2px solid var(--navy);color:var(--navy);border-radius:8px;padding:6px 12px;font:inherit;font-weight:700;cursor:pointer}

/* Hero */
.hero{min-height:calc(100vh - 85px);display:flex;align-items:center;color:var(--white);
  background-color:var(--navy-deep);
  background-image:linear-gradient(120deg,var(--navy-deep) 0%,var(--navy) 60%,var(--navy-soft) 100%);
  padding:90px 0 80px;position:relative;overflow:hidden}
.hero .container{position:relative;z-index:2}
.hero-media{position:absolute;top:0;right:0;width:48%;height:100%;clip-path:polygon(14% 0,100% 0,100% 100%,0 100%);z-index:1}
.hero-media img{width:100%;height:100%;object-fit:cover;object-position:28% 20%}
.hero-media::after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(6,22,43,.55) 0%,rgba(6,22,43,0) 40%)}
.hero-media::before{content:"";position:absolute;left:0;top:0;width:6px;height:100%;background:var(--gold);transform:skewX(-8deg);transform-origin:top left;z-index:2}
.hero-content{max-width:600px}
@media (max-width:1000px){.hero-media{width:100%;clip-path:none;opacity:.28}.hero-media::after{background:rgba(6,22,43,.4)}.hero-media::before{display:none}.hero-content{max-width:780px}}
.tagline{display:block;font-style:italic;font-weight:600;color:var(--gold);font-size:clamp(1rem,1.8vw,1.2rem);margin-bottom:16px}
.hero .certs{display:block;color:#cfd8e6;font-weight:700;letter-spacing:2px;text-transform:uppercase;font-size:.78rem;margin-top:30px}
.footer-logo img{height:64px;width:auto;margin-bottom:10px}
.eyebrow{display:inline-block;color:var(--gold);font-weight:700;letter-spacing:2px;text-transform:uppercase;font-size:.85rem;margin-bottom:18px}
.hero h1{font-size:clamp(2.2rem,5.5vw,4rem);line-height:1.1;font-weight:800;margin-bottom:22px}
.hero p{font-size:clamp(1.05rem,2vw,1.25rem);margin-bottom:36px;color:#e5e9f0}
.btn{display:inline-block;padding:15px 30px;border-radius:50px;text-decoration:none;font-weight:700;transition:transform .25s,background .25s,color .25s;text-align:center}
.btn-primary{background:var(--gold);color:#111}
.btn-primary:hover{transform:translateY(-3px);background:#e2c04f}
.btn-outline{border:2px solid var(--white);color:var(--white);margin-left:12px}
.btn-outline:hover{background:var(--white);color:var(--navy)}
.btn-navy{background:var(--navy);color:var(--white)}
.btn-navy:hover{background:var(--navy-soft);transform:translateY(-3px)}

/* Trust bar */
.trust{background:var(--navy);color:var(--white);padding:26px 0;border-bottom:4px solid var(--gold)}
.trust-grid{display:grid;grid-template-columns:1.6fr 1fr 1fr 1fr;gap:18px;text-align:center;font-weight:700;font-size:.95rem;align-items:center}
.trust-grid span{color:var(--gold);margin-right:6px}

/* Sections */
section{padding:96px 0;scroll-margin-top:96px}
.section-header{text-align:center;max-width:760px;margin:0 auto 56px}
.section-header h2{font-size:clamp(1.8rem,3.5vw,2.6rem);color:var(--navy);line-height:1.2;margin-bottom:14px}
.section-header p{color:var(--muted);font-size:1.08rem}
.bg-light{background:var(--light)}
.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:28px}
.card{background:var(--white);border-radius:var(--radius);padding:34px;box-shadow:var(--shadow);border-top:4px solid var(--gold);transition:transform .25s}
.card:hover{transform:translateY(-6px)}
.card h3{color:var(--navy);margin-bottom:12px;font-size:1.2rem}
.card p{color:var(--muted)}
.icon{width:52px;height:52px;border-radius:14px;background:var(--navy);color:var(--gold);display:flex;align-items:center;justify-content:center;margin-bottom:18px}
.icon svg{width:26px;height:26px}

/* Audiences */
.audience-grid{display:grid;grid-template-columns:1.25fr 1fr 1fr;gap:28px}
.audience{border-radius:var(--radius);padding:36px;box-shadow:var(--shadow);background:var(--white);display:flex;flex-direction:column}
.audience.featured{background:var(--navy);color:var(--white)}
.audience.featured h3{color:var(--gold)}
.audience.featured p,.audience.featured li{color:#dbe2ec}
.audience h3{color:var(--navy);font-size:1.3rem;margin-bottom:12px}
.audience ul{list-style:none;margin:16px 0 24px}
.audience li{padding-left:22px;position:relative;margin-bottom:8px;color:var(--muted)}
.audience li::before{content:"";position:absolute;left:0;top:.6em;width:9px;height:9px;border-radius:50%;background:var(--gold)}
.audience .link{margin-top:auto;font-weight:700;text-decoration:none;color:var(--navy)}
.audience.featured .link{color:var(--gold)}
.tag{display:inline-block;background:var(--gold);color:#111;font-size:.75rem;font-weight:800;letter-spacing:1px;text-transform:uppercase;padding:4px 12px;border-radius:50px;margin-bottom:14px;align-self:flex-start}

/* Small business */
.split{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:start}
.split h2{font-size:clamp(1.8rem,3.5vw,2.5rem);color:var(--navy);line-height:1.2;margin-bottom:20px}
.split p{color:var(--muted);margin-bottom:16px}
.check-list{list-style:none;display:grid;grid-template-columns:1fr 1fr;gap:12px 20px;margin:24px 0}
.check-list li{display:flex;gap:10px;font-weight:600;color:var(--ink)}
.check-list li::before{content:"✓";color:var(--white);background:var(--gold-dark);border-radius:50%;min-width:22px;height:22px;display:flex;align-items:center;justify-content:center;font-size:.8rem;font-weight:800}
.industries{background:var(--white);border-radius:var(--radius);padding:36px;box-shadow:var(--shadow)}
.industries h3{color:var(--navy);margin-bottom:18px}
.pills{display:flex;flex-wrap:wrap;gap:10px}
.pills span{background:var(--light);border:1px solid #dde3ec;color:var(--navy);font-weight:600;padding:8px 16px;border-radius:50px;font-size:.92rem}

/* Spotlight */
.spotlight{color:var(--white);background-color:var(--navy-deep);background-image:linear-gradient(135deg,rgba(6,22,43,.93),rgba(22,54,94,.88)),url("https://images.unsplash.com/photo-1631558556874-1d127211f574?auto=format&fit=crop&w=1800&q=80");background-size:cover;background-position:center}
.spotlight .section-header h2{color:var(--white)}
.spotlight .section-header p{color:#cfd8e6}
.spot-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:24px}
.spot-card{background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.15);border-radius:var(--radius);padding:30px;backdrop-filter:blur(4px)}
.spot-card h3{color:var(--gold);font-size:1rem;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:12px}
.spot-card p{color:#e1e7f0}
.focus{margin-top:36px;text-align:center}
.focus .pills{justify-content:center}
.focus .pills span{background:transparent;border-color:var(--gold);color:var(--white)}

/* Track record */
.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;text-align:center}
.stat{padding:30px 18px;border-radius:var(--radius);background:var(--white);box-shadow:var(--shadow)}
.stat .num{font-size:2.8rem;font-weight:800;color:var(--navy);line-height:1}
.stat .num small{font-size:1.4rem;color:var(--gold-dark)}
.stat h3{color:var(--navy);font-size:1rem;margin:10px 0 6px}
.stat p{color:var(--muted);font-size:.92rem}
.past-perf{margin-top:48px;text-align:center}
.past-perf h3{color:var(--navy);margin-bottom:16px}
.past-perf .pills{justify-content:center}

/* About */
.about-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:60px;align-items:center}
.portrait{position:relative;border-radius:var(--radius);overflow:hidden;aspect-ratio:1/1;background:linear-gradient(135deg,var(--navy),var(--navy-soft));box-shadow:var(--shadow)}
.portrait .initials{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:5rem;font-weight:800;color:var(--gold)}
.portrait img{position:relative;width:100%;height:100%;object-fit:cover}
.portrait::after{content:"";position:absolute;left:0;bottom:0;width:100%;height:6px;background:var(--gold)}
.about h2{font-size:clamp(1.8rem,3.5vw,2.5rem);color:var(--navy);line-height:1.2;margin-bottom:8px}
.about .role{color:var(--gold-dark);font-weight:700;margin-bottom:20px}
.about p{color:var(--muted);margin-bottom:16px}
.creds{display:flex;flex-wrap:wrap;gap:10px;margin-top:22px}
.creds span{background:var(--navy);color:var(--white);font-weight:600;font-size:.85rem;padding:7px 14px;border-radius:50px}

/* Community */
.community{text-align:center}
.community .cards{text-align:left}

/* Assessment / CTA */
.cta{color:var(--white);text-align:center;background-color:var(--navy);
  background-image:linear-gradient(rgba(11,35,65,.88),rgba(11,35,65,.88)),url("https://images.unsplash.com/photo-1622675363311-3e1904dc1885?auto=format&fit=crop&w=1800&q=80");
  background-size:cover;background-position:center}
.cta h2{font-size:clamp(1.9rem,4vw,3rem);line-height:1.2;margin-bottom:18px}
.cta > .container > p{font-size:1.12rem;max-width:720px;margin:0 auto 34px;color:#dbe2ec}
.assess{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;max-width:960px;margin:0 auto 40px}
.assess div{background:rgba(255,255,255,.08);border:1px solid rgba(212,175,55,.5);border-radius:14px;padding:18px;font-weight:600}

/* Contact */
.contact-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.contact-card{text-align:center;background:var(--white);border-radius:var(--radius);padding:32px;box-shadow:var(--shadow)}
.contact-card h3{color:var(--navy);margin-bottom:8px}
.contact-card a{font-weight:700;text-decoration:none;word-break:break-word}
.contact-card p{color:var(--muted)}

footer{background:var(--navy-deep);color:#c9d2df;padding:40px 0;font-size:.9rem}
.footer-grid{display:flex;justify-content:space-between;flex-wrap:wrap;gap:20px;align-items:center}
footer strong{color:var(--white)}
footer .gold{color:var(--gold)}

/* Photos */
.photo-band{position:relative;padding:110px 0;color:var(--white);text-align:center;background-color:var(--navy);
  background-image:linear-gradient(rgba(6,22,43,.78),rgba(6,22,43,.78)),url("https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?auto=format&fit=crop&w=1800&q=80");
  background-size:cover;background-position:center}
.photo-band blockquote{max-width:820px;margin:0 auto;font-size:clamp(1.3rem,2.6vw,1.9rem);font-weight:700;line-height:1.4}
.photo-band blockquote span{color:var(--gold)}
.photo-band p{margin-top:18px;color:#cfd8e6;font-weight:600;letter-spacing:1px;text-transform:uppercase;font-size:.85rem}
.industries-photo{margin:-36px -36px 28px;height:220px;background:var(--navy);border-radius:var(--radius) var(--radius) 0 0;overflow:hidden}
.industries-photo img,.card-photo img{width:100%;height:100%;object-fit:cover;object-position:center 22%}
.card-photo{margin:-34px -34px 24px;height:190px;background:var(--navy);border-radius:calc(var(--radius) - 4px) calc(var(--radius) - 4px) 0 0;overflow:hidden}
.community .card{border-top:none;overflow:hidden}

/* Audience photo cards */
.aud-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px}
.aud-card{background:var(--white);border-radius:var(--radius);box-shadow:var(--shadow);overflow:hidden;display:flex;flex-direction:column;border-bottom:5px solid var(--gold);transition:transform .25s}
.aud-card:hover{transform:translateY(-6px)}
.aud-photo{height:210px;background:var(--navy);position:relative}
.aud-photo img{width:100%;height:100%;object-fit:cover;object-position:center 22%}
.aud-photo .tag{position:absolute;left:18px;bottom:16px;margin:0}
.aud-body{padding:30px;display:flex;flex-direction:column;flex:1}
.aud-body h3{color:var(--navy);font-size:1.3rem;margin-bottom:10px}
.aud-body p{color:var(--muted)}
.aud-body ul{list-style:none;margin:16px 0 22px}
.aud-body li{padding-left:22px;position:relative;margin-bottom:8px;color:var(--ink);font-weight:500}
.aud-body li::before{content:"";position:absolute;left:0;top:.6em;width:9px;height:9px;border-radius:50%;background:var(--gold)}
.aud-body .link{margin-top:auto;font-weight:700;text-decoration:none;color:var(--navy)}

/* Feature sections (wealth, government) */
.feature{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center}
.feature.reverse .feature-media{order:2}
.feature-media{position:relative;isolation:isolate}
.feature-media .main{border-radius:var(--radius);overflow:hidden;aspect-ratio:4/3;background:var(--navy);box-shadow:var(--shadow)}
.feature-media .main img{width:100%;height:100%;object-fit:cover;object-position:center 30%}
.feature-media::before{content:"";position:absolute;inset:22px -22px -22px 22px;border:3px solid var(--gold);border-radius:var(--radius);z-index:-1}
.feature.reverse .feature-media::before{inset:22px 22px -22px -22px}
.feature h2{font-size:clamp(1.8rem,3.5vw,2.5rem);color:var(--navy);line-height:1.2;margin-bottom:18px}
.feature p{color:var(--muted);margin-bottom:16px}
.feature .badge-row{display:flex;flex-wrap:wrap;gap:10px;margin:20px 0 26px}
.feature .badge-row span{background:var(--navy);color:var(--white);font-weight:600;font-size:.85rem;padding:7px 14px;border-radius:50px}
.navy-section{background:var(--navy);color:var(--white)}
.navy-section h2{color:var(--white)}
.navy-section p{color:#cfd8e6}
.navy-section .check-list li{color:var(--white)}
.navy-section .badge-row span{background:var(--gold);color:#111}
.navy-section .feature-media .main{box-shadow:0 20px 50px rgba(0,0,0,.35)}

/* Company data panel */
.company-data{margin-top:64px;display:grid;grid-template-columns:.8fr 1.2fr 1.2fr;gap:28px;background:rgba(255,255,255,.06);border:1px solid rgba(212,175,55,.45);border-radius:var(--radius);padding:34px}
.company-data h3{color:var(--gold);font-size:1rem;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:14px}
.company-data dl{display:grid;grid-template-columns:auto 1fr;gap:6px 16px}
.company-data dt{color:#9fb0c8;font-weight:600}
.company-data dd{color:var(--white);font-weight:700}
.company-data ul{list-style:none}
.company-data li{color:#dbe2ec;font-size:.92rem;margin-bottom:6px}
.company-data li strong{color:var(--white);margin-right:6px}
@media (max-width:1000px){.company-data{grid-template-columns:1fr}}

/* Community strip */
.community-strip{padding:70px 0;color:var(--white);text-align:center;background-color:var(--navy-deep);
  background-image:linear-gradient(rgba(6,22,43,.85),rgba(6,22,43,.85)),url("https://images.unsplash.com/photo-1618420138990-25842589a7c4?auto=format&fit=crop&w=1800&q=80");background-size:cover;background-position:center}
.community-strip h2{font-size:clamp(1.5rem,3vw,2.1rem);margin-bottom:12px}
.community-strip p{max-width:760px;margin:0 auto;color:#d6deea}

/* Responsive */
@media (max-width:1000px){
  .audience-grid,.spot-grid,.aud-grid{grid-template-columns:1fr}
  .feature{grid-template-columns:1fr;gap:44px}
  .feature.reverse .feature-media{order:0}
  .feature-media::before{display:none}
  .split,.about-grid{grid-template-columns:1fr;gap:40px}
  .stats,.assess{grid-template-columns:repeat(2,1fr)}
  .contact-grid{grid-template-columns:1fr}
  .portrait{max-width:420px;margin:0 auto}
}
@media (max-width:760px){
  .nav-toggle{display:block}
  .nav-links{display:none;position:absolute;top:72px;right:16px;left:16px;flex-direction:column;gap:0;background:var(--navy);border-radius:14px;padding:10px;box-shadow:var(--shadow)}
  .nav-links.open{display:flex}
  .nav-links a{display:block;padding:12px 14px;color:var(--white)}
  .logo img{height:44px}
  .nav-links{top:70px}
  .trust-grid{grid-template-columns:repeat(2,1fr)}
  .check-list{grid-template-columns:1fr}
  section{padding:72px 0}
}
@media (max-width:520px){
  .btn{display:block;margin:0 0 14px}
  .btn-outline{margin-left:0}
  .trust-grid,.stats,.assess{grid-template-columns:1fr}
}

/* Service detail sections */
.svc .icon{margin-bottom:22px}
.svc h2{font-size:clamp(1.7rem,3.2vw,2.3rem);color:var(--navy);line-height:1.2;margin-bottom:16px}
.svc .lead{font-size:1.1rem;color:var(--ink);font-weight:600;margin-bottom:16px}
.svc p{color:var(--muted);margin-bottom:16px}
.svc .check-list{grid-template-columns:1fr}
.deliver{border-radius:var(--radius);padding:34px;box-shadow:var(--shadow);border-top:4px solid var(--gold)}
.bg-light .deliver{background:var(--white)}
section:not(.bg-light) .deliver{background:var(--light)}
.deliver-photo{margin:-34px -34px 26px;height:200px;background:var(--navy);border-radius:var(--radius) var(--radius) 0 0;overflow:hidden}
.deliver-photo img{width:100%;height:100%;object-fit:cover;object-position:center 30%}
.deliver h3{color:var(--navy);margin-bottom:16px;font-size:1.05rem;text-transform:uppercase;letter-spacing:1.2px}
.deliver ul{list-style:none}
.deliver li{padding-left:24px;position:relative;margin-bottom:10px;color:var(--ink);font-weight:500}
.deliver li::before{content:"";position:absolute;left:0;top:.55em;width:10px;height:10px;border-radius:2px;background:var(--gold)}
.deliver .fit{margin-top:24px;padding-top:20px;border-top:1px solid #e2e7ef}
.deliver .fit h3{margin-bottom:10px}
.deliver .fit p{color:var(--muted);font-size:.95rem;margin:0}
.steps-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:22px;max-width:1040px;margin:0 auto}
.step-card{background:rgba(255,255,255,.07);border:1px solid rgba(212,175,55,.5);border-radius:var(--radius);padding:28px;text-align:left}
.step-card .step-num{color:var(--gold);font-weight:800;letter-spacing:2px;font-size:.8rem;text-transform:uppercase}
.step-card h3{color:var(--white);margin:10px 0 8px;font-size:1.15rem}
.step-card p{color:#d6deea;font-size:.95rem;margin:0}
@media (max-width:1000px){.steps-grid{grid-template-columns:repeat(2,1fr)}}
@media (max-width:560px){.steps-grid{grid-template-columns:1fr}}

/* Dropdown nav */
.nav-links .caret{font-size:.7em;color:var(--gold-dark)}
.has-sub{position:relative;padding-bottom:14px;margin-bottom:-14px}
.sub-menu{display:none;position:absolute;top:100%;left:50%;transform:translateX(-50%);
  background:var(--white);min-width:260px;list-style:none;padding:10px 0;z-index:70;
  border-radius:12px;box-shadow:0 16px 40px rgba(11,35,65,.18);border-top:3px solid var(--gold)}
.has-sub:hover .sub-menu,.has-sub:focus-within .sub-menu{display:block}
.sub-menu li{display:block}
.sub-menu a{display:block;padding:10px 20px;font-size:.92rem;white-space:nowrap}
.sub-menu a:hover{background:var(--light);color:var(--navy)}
@media (max-width:760px){
  .has-sub{padding-bottom:0;margin-bottom:0}
  .nav-links .caret{display:none}
  .sub-menu{display:block;position:static;transform:none;min-width:0;background:transparent;
    box-shadow:none;border-top:none;border-left:2px solid var(--gold);margin:0 0 6px 16px;padding:0}
  .sub-menu a{color:#cfd8e6;font-size:.88rem;padding:8px 14px}
  .sub-menu a:hover{background:rgba(255,255,255,.08);color:var(--white)}
}
`;

// Count-up numbers (skipped if the visitor prefers reduced motion)
function Counter({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState<number>(target);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    )
      return;
    let t: ReturnType<typeof setInterval> | undefined;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          let n = 0;
          const step = Math.max(1, Math.ceil(target / 30));
          setValue(0);
          t = setInterval(() => {
            n = Math.min(target, n + step);
            setValue(n);
            if (n >= target && t) clearInterval(t);
          }, 40);
          io.unobserve(e.target);
        });
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (t) clearInterval(t);
    };
  }, [target]);

  return (
    <span className="counter" data-target={target} ref={ref}>
      {value}
    </span>
  );
}

export default function FinalIndex() {
  // Mobile menu
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenuOnLinkClick = (e: React.MouseEvent<HTMLUListElement>) => {
    if ((e.target as HTMLElement).closest("a")) setMenuOpen(false);
  };

  return (
    <>
      <title>Workflow &amp; Operational Improvement Consulting | ODTG</title>
      <meta
        name="description"
        content="ODTG helps small businesses, wealth advisory practices, and government contractors streamline workflows, stabilize operations, and implement practical process improvements. SBA-certified SDVOSB, WOSB, and VOSB."
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <style>{styles}</style>

      <a className="skip-link" href="#main">
        Skip to main content
      </a>

      <header>
        <nav className="container navbar" aria-label="Main">
          <a href="#top" className="logo">
            <img
              src={LOGO_SRC}
              alt="Optimal Digital Transformation Group"
              width="700"
              height="189"
            />
          </a>
          <button
            className="nav-toggle"
            aria-expanded={menuOpen}
            aria-controls="nav-links"
            onClick={() => setMenuOpen((o) => !o)}
          >
            Menu
          </button>
          <ul
            className={menuOpen ? "nav-links open" : "nav-links"}
            id="nav-links"
            onClick={closeMenuOnLinkClick}
          >
            <li className="has-sub">
              <a href="#services">
                Services{" "}
                <span className="caret" aria-hidden="true">
                  &#9662;
                </span>
              </a>
              <ul className="sub-menu" aria-label="Services">
                <li>
                  <a href="#workflow-analysis">
                    Workflow Analysis &amp; Redesign
                  </a>
                </li>
                <li>
                  <a href="#process-improvement">Process Improvement</a>
                </li>
                <li>
                  <a href="#operations-advisory">Operations Advisory</a>
                </li>
                <li>
                  <a href="#project-program-advisory">
                    Project &amp; Program Advisory
                  </a>
                </li>
              </ul>
            </li>
            <li className="has-sub">
              <a href="#who-we-serve">
                Who We Serve{" "}
                <span className="caret" aria-hidden="true">
                  &#9662;
                </span>
              </a>
              <ul className="sub-menu" aria-label="Who We Serve">
                <li>
                  <a href="#small-business">Small Business</a>
                </li>
                <li>
                  <a href="#wealth-advisors">Wealth Advisors</a>
                </li>
                <li>
                  <a href="#government">Government</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="main">
        {/* HERO */}
        <section className="hero" id="top">
          <div className="hero-media" aria-hidden="true">
            <img
              src="https://images.unsplash.com/photo-1573496130103-a442a3754d0e?auto=format&fit=crop&w=1400&q=80"
              alt=""
            />
          </div>
          <div className="container">
            <div className="hero-content">
              <span className="tagline">
                Innovating with Structure. Modernizing with Confidence.
              </span>
              <h1>Transforming Workflows. Improving Results.</h1>
              <p>
                Helping small businesses, wealth advisory practices, and
                government contractors streamline operations, fix what&apos;s
                slowing them down, and put practical solutions in place that
                deliver measurable outcomes.
              </p>
              <a href="#assessment" className="btn btn-primary">
                Get a Free Workflow Assessment
              </a>{" "}
              <a href="#who-we-serve" className="btn btn-outline">
                See How We Help
              </a>
              <span className="certs">
                SBA-Certified Service-Disabled Veteran-Owned Small Business
                &bull; Woman-Owned &bull; Veteran-Owned
              </span>
            </div>
          </div>
        </section>

        {/* TRUST BAR */}
        <div
          className="trust"
          role="region"
          aria-label="Certifications and credentials"
        >
          <div className="container trust-grid">
            <div>
              <span aria-hidden="true">★</span>SBA-Certified Service-Disabled
              Veteran-Owned Small Business
            </div>
            <div>
              <span aria-hidden="true">★</span>Woman-Owned (WOSB)
            </div>
            <div>
              <span aria-hidden="true">★</span>Navy Veteran-Led
            </div>
            <div>
              <span aria-hidden="true">★</span>18 Years in Operations &amp;
              Records
            </div>
          </div>
        </div>

        {/* WHO WE SERVE */}
        <section id="who-we-serve">
          <div className="container">
            <div className="section-header">
              <h2>Who We Serve</h2>
              <p>
                Three kinds of organizations, one shared problem: processes that
                haven&apos;t kept pace with the work.
              </p>
            </div>
            <div className="aud-grid">
              <article className="aud-card">
                <div className="aud-photo">
                  <img
                    src="https://images.unsplash.com/photo-1631217871099-88310a909a32?auto=format&fit=crop&w=900&q=80"
                    alt="Physician greeting a patient in her practice office"
                    loading="lazy"
                  />
                  <span className="tag">Small Business</span>
                </div>
                <div className="aud-body">
                  <h3>Small Businesses &amp; Professional Practices</h3>
                  <p>
                    Busy front doors, struggling back offices. We stabilize the
                    operations behind your growth.
                  </p>
                  <ul>
                    <li>Medical &amp; chiropractic practices</li>
                    <li>Professional services firms</li>
                    <li>Owner-operated businesses</li>
                  </ul>
                  <a href="#small-business" className="link">
                    Small business solutions →
                  </a>
                </div>
              </article>
              <article className="aud-card">
                <div className="aud-photo">
                  <img
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80"
                    alt="Advisor meeting with a client in an office"
                    loading="lazy"
                  />
                  <span className="tag">Wealth Advisors</span>
                </div>
                <div className="aud-body">
                  <h3>Wealth Advisors &amp; Financial Practices</h3>
                  <p>
                    Built by a former registered representative who knows how an
                    advisory practice really runs.
                  </p>
                  <ul>
                    <li>Client onboarding &amp; service workflows</li>
                    <li>Book of business organization</li>
                    <li>Compliance-ready SOPs</li>
                  </ul>
                  <a href="#wealth-advisors" className="link">
                    Advisor practice solutions →
                  </a>
                </div>
              </article>
              <article className="aud-card">
                <div className="aud-photo">
                  <img
                    src="https://images.unsplash.com/photo-1594581979864-36977b15d0dc?auto=format&fit=crop&w=900&q=80"
                    alt="United States Capitol at golden hour"
                    loading="lazy"
                  />
                  <span className="tag">Government</span>
                </div>
                <div className="aud-body">
                  <h3>Government Contractors &amp; Agencies</h3>
                  <p>
                    A certified SDVOSB and WOSB partner for primes and agencies
                    that need workflow and records expertise.
                  </p>
                  <ul>
                    <li>SDVOSB / WOSB subcontracting</li>
                    <li>Records management &amp; Section 508</li>
                    <li>Process documentation &amp; modernization</li>
                  </ul>
                  <a href="#government" className="link">
                    Government solutions →
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* CORE SERVICES */}
        <section id="services" className="bg-light">
          <div className="container">
            <div className="section-header">
              <h2>Four Core Services. One Goal: Better Performance.</h2>
              <p>
                Every engagement draws on the same disciplined approach, scaled
                to your size and budget. Click any service for the full picture
                &mdash; what we do, what you get, and whether it fits.
              </p>
            </div>
            <div className="cards">
              <article className="card">
                <div className="icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="14" width="7" height="7" rx="1" />
                    <path d="M10 6.5h4a3 3 0 0 1 3 3V14" />
                  </svg>
                </div>
                <h3>Workflow Analysis &amp; Redesign</h3>
                <p>
                  Process modeling and workflow mapping to document how work
                  moves today, find where it breaks, and design a better future
                  state.
                </p>
                <p style={{ marginTop: "16px" }}>
                  <a
                    href="#workflow-analysis"
                    style={{
                      fontWeight: "700",
                      textDecoration: "none",
                      color: "var(--navy)",
                    }}
                  >
                    Learn more &rarr;
                  </a>
                </p>
              </article>
              <article className="card">
                <div className="icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3 17l6-6 4 4 8-8" />
                    <path d="M15 7h6v6" />
                  </svg>
                </div>
                <h3>Process Improvement</h3>
                <p>
                  Cut unnecessary steps, duplication, delays, and handoff
                  problems so teams spend time on the work, not the workaround.
                </p>
                <p style={{ marginTop: "16px" }}>
                  <a
                    href="#process-improvement"
                    style={{
                      fontWeight: "700",
                      textDecoration: "none",
                      color: "var(--navy)",
                    }}
                  >
                    Learn more &rarr;
                  </a>
                </p>
              </article>
              <article className="card">
                <div className="icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
                  </svg>
                </div>
                <h3>Operations Advisory</h3>
                <p>
                  Business analysis of how your people, processes, and systems
                  interact &mdash; with practical recommendations you can
                  actually implement.
                </p>
                <p style={{ marginTop: "16px" }}>
                  <a
                    href="#operations-advisory"
                    style={{
                      fontWeight: "700",
                      textDecoration: "none",
                      color: "var(--navy)",
                    }}
                  >
                    Learn more &rarr;
                  </a>
                </p>
              </article>
              <article className="card">
                <div className="icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="4" width="18" height="17" rx="2" />
                    <path d="M3 9h18M8 2v4M16 2v4M7 14h4M7 17h7" />
                  </svg>
                </div>
                <h3>Project &amp; Program Advisory</h3>
                <p>
                  Structure, planning, and monitoring through implementation
                  &mdash; from advisory to hands-on support &mdash; so change
                  actually sticks.
                </p>
                <p style={{ marginTop: "16px" }}>
                  <a
                    href="#project-program-advisory"
                    style={{
                      fontWeight: "700",
                      textDecoration: "none",
                      color: "var(--navy)",
                    }}
                  >
                    Learn more &rarr;
                  </a>
                </p>
              </article>
            </div>
            <p
              style={{
                textAlign: "center",
                marginTop: "28px",
                color: "var(--muted)",
                fontSize: "15.5px",
              }}
            >
              <strong style={{ color: "var(--navy)" }}>
                Specialized capabilities:
              </strong>{" "}
              business analysis &bull; process modeling &bull; records &amp;
              information management &bull; SOP development &bull; performance
              measurement &bull; Section 508 accessibility compliance
            </p>
          </div>
        </section>

        <section id="workflow-analysis">
          <div className="container split svc">
            <div>
              <div className="icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="7" height="7" rx="1" />
                  <path d="M10 6.5h4a3 3 0 0 1 3 3V14" />
                </svg>
              </div>
              <span className="eyebrow" style={{ color: "var(--gold-dark)" }}>
                Core Service
              </span>
              <h2>Workflow Analysis &amp; Redesign</h2>
              <p className="lead">
                See how work actually moves through your organization &mdash;
                not how it&apos;s supposed to.
              </p>
              <p>
                Through interviews, observation, and process modeling, we
                document your current state end to end: every step, handoff,
                approval, and workaround. Then we find where work slows down,
                stalls, or breaks &mdash; and design a future state that removes
                the friction instead of adding software on top of it.
              </p>
              <ul className="check-list">
                <li>Current-state workflow mapping and process modeling</li>
                <li>Bottleneck and root-cause identification</li>
                <li>Future-state workflow design</li>
                <li>Prioritized implementation roadmap</li>
              </ul>
            </div>
            <aside className="deliver">
              <div className="deliver-photo" aria-hidden="true">
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1000&q=80"
                  alt=""
                />
              </div>
              <h3>What You Get</h3>
              <ul>
                <li>A documented map of how work flows today</li>
                <li>Findings: where time, money, and quality leak</li>
                <li>A redesigned workflow built for your team</li>
                <li>A step-by-step roadmap, sequenced by impact</li>
              </ul>
              <div className="fit">
                <h3>Right for You If&hellip;</h3>
                <p>
                  Work sits in queues, nobody can say exactly where things
                  stand, deadlines slip, or every handoff seems to drop
                  something.
                </p>
              </div>
            </aside>
          </div>
          <p style={{ textAlign: "center", marginTop: "44px" }}>
            <a
              href="#services"
              style={{
                fontWeight: "700",
                textDecoration: "none",
                color: "var(--gold-dark)",
              }}
            >
              &uarr; Back to All Services
            </a>
          </p>
        </section>
        <section id="process-improvement" className="bg-light">
          <div className="container split svc">
            <div>
              <div className="icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 17l6-6 4 4 8-8" />
                  <path d="M15 7h6v6" />
                </svg>
              </div>
              <span className="eyebrow" style={{ color: "var(--gold-dark)" }}>
                Core Service
              </span>
              <h2>Process Improvement</h2>
              <p className="lead">
                Cut the steps that add no value, so your team spends time on the
                work &mdash; not the workaround.
              </p>
              <p>
                We target duplication, delays, rework, and unclear ownership,
                then standardize what works. That includes writing it down:
                clear, usable SOPs and process documentation that survive staff
                turnover and make training new people faster. Improvements are
                measured, so you know what changed &mdash; not just that
                something did.
              </p>
              <ul className="check-list">
                <li>Elimination of duplicate steps, delays, and rework</li>
                <li>
                  Standard operating procedures (SOPs) and process documentation
                </li>
                <li>Performance measures that track the improvement</li>
                <li>Quick wins implemented early, not just recommended</li>
              </ul>
            </div>
            <aside className="deliver">
              <div className="deliver-photo" aria-hidden="true">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80"
                  alt=""
                />
              </div>
              <h3>What You Get</h3>
              <ul>
                <li>Streamlined procedures your team actually follows</li>
                <li>A documented SOP library for key processes</li>
                <li>Baseline and follow-up performance measures</li>
                <li>Early fixes delivered during the engagement</li>
              </ul>
              <div className="fit">
                <h3>Right for You If&hellip;</h3>
                <p>
                  The same errors keep recurring, procedures live in
                  people&apos;s heads, onboarding takes too long, or two people
                  do the same task two different ways.
                </p>
              </div>
            </aside>
          </div>
          <p style={{ textAlign: "center", marginTop: "44px" }}>
            <a
              href="#services"
              style={{
                fontWeight: "700",
                textDecoration: "none",
                color: "var(--gold-dark)",
              }}
            >
              &uarr; Back to All Services
            </a>
          </p>
        </section>
        <section id="operations-advisory">
          <div className="container split svc">
            <div>
              <div className="icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
                </svg>
              </div>
              <span className="eyebrow" style={{ color: "var(--gold-dark)" }}>
                Core Service
              </span>
              <h2>Operations Advisory</h2>
              <p className="lead">
                Business analysis of how your people, processes, and systems
                interact &mdash; with recommendations you can actually
                implement.
              </p>
              <p>
                Operations problems rarely live in one department. We assess the
                whole operation &mdash; staffing and roles, process health,
                software and reporting, compliance obligations &mdash; and give
                you practical, prioritized recommendations sized to your budget.
                For organizations that want ongoing counsel, we serve as a
                standing operations advisor to leadership.
              </p>
              <ul className="check-list">
                <li>Whole-operation assessment: people, process, systems</li>
                <li>Software migration and technology-change readiness</li>
                <li>Reporting and performance visibility for leadership</li>
                <li>Compliance-aware operations for regulated environments</li>
              </ul>
            </div>
            <aside className="deliver">
              <div className="deliver-photo" aria-hidden="true">
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1000&q=80"
                  alt=""
                />
              </div>
              <h3>What You Get</h3>
              <ul>
                <li>An objective operations assessment</li>
                <li>Prioritized, practical recommendations</li>
                <li>
                  A reporting rhythm that gives leadership real visibility
                </li>
                <li>
                  Ongoing advisory support, when you want a partner on call
                </li>
              </ul>
              <div className="fit">
                <h3>Right for You If&hellip;</h3>
                <p>
                  Growth has outpaced your operations, a software change is
                  looming (or went badly), or leadership can&apos;t get reliable
                  numbers without chasing them.
                </p>
              </div>
            </aside>
          </div>
          <p style={{ textAlign: "center", marginTop: "44px" }}>
            <a
              href="#services"
              style={{
                fontWeight: "700",
                textDecoration: "none",
                color: "var(--gold-dark)",
              }}
            >
              &uarr; Back to All Services
            </a>
          </p>
        </section>
        <section id="project-program-advisory" className="bg-light">
          <div className="container split svc">
            <div>
              <div className="icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="4" width="18" height="17" rx="2" />
                  <path d="M3 9h18M8 2v4M16 2v4M7 14h4M7 17h7" />
                </svg>
              </div>
              <span className="eyebrow" style={{ color: "var(--gold-dark)" }}>
                Core Service
              </span>
              <h2>Project &amp; Program Advisory</h2>
              <p className="lead">
                Structure, planning, and monitoring through implementation
                &mdash; so change actually sticks.
              </p>
              <p>
                Good recommendations fail without disciplined follow-through. We
                help leadership structure improvement initiatives as real
                projects: scope, schedule, owners, risks, and status you can
                trust. From advisory through hands-on project and program
                support, we stay through implementation &mdash; applying
                certified Scrum (PSM) and formal project management discipline,
                scaled to the size of the effort.
              </p>
              <ul className="check-list">
                <li>Project and program structure, planning, and scheduling</li>
                <li>Status reporting and governance leadership can rely on</li>
                <li>Risk identification and tracking</li>
                <li>Hands-on implementation support through completion</li>
              </ul>
            </div>
            <aside className="deliver">
              <div className="deliver-photo" aria-hidden="true">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80"
                  alt=""
                />
              </div>
              <h3>What You Get</h3>
              <ul>
                <li>A project plan with owners, milestones, and dates</li>
                <li>Clear, honest status reporting</li>
                <li>A risk register that gets ahead of surprises</li>
                <li>Change that is implemented, measured, and sustained</li>
              </ul>
              <div className="fit">
                <h3>Right for You If&hellip;</h3>
                <p>
                  Past improvement efforts fizzled after the report, initiatives
                  compete for the same people, or you need delivery discipline
                  without hiring a full-time PM.
                </p>
              </div>
            </aside>
          </div>
          <p style={{ textAlign: "center", marginTop: "44px" }}>
            <a
              href="#services"
              style={{
                fontWeight: "700",
                textDecoration: "none",
                color: "var(--gold-dark)",
              }}
            >
              &uarr; Back to All Services
            </a>
          </p>
        </section>
        <section className="navy-section" id="how-we-engage">
          <div className="container">
            <div className="section-header">
              <h2 style={{ color: "var(--white)" }}>How an Engagement Works</h2>
              <p style={{ color: "#cfd8e6" }}>
                Four phases, whatever the service. You always know where we are
                and what comes next.
              </p>
            </div>
            <div className="steps-grid">
              <div className="step-card">
                <span className="step-num">Phase 1</span>
                <h3>Assess</h3>
                <p>
                  We listen first, then map the current state and diagnose
                  what&apos;s really slowing you down &mdash; the problem, not
                  just the symptom.
                </p>
              </div>
              <div className="step-card">
                <span className="step-num">Phase 2</span>
                <h3>Stabilize</h3>
                <p>
                  Quick, practical fixes go in early to stop the bleeding while
                  the larger redesign takes shape.
                </p>
              </div>
              <div className="step-card">
                <span className="step-num">Phase 3</span>
                <h3>Improve</h3>
                <p>
                  Redesigned workflows, documented procedures, and measurable
                  changes &mdash; implemented with your team, not handed off in
                  a binder.
                </p>
              </div>
              <div className="step-card">
                <span className="step-num">Phase 4</span>
                <h3>Sustain</h3>
                <p>
                  Performance measures, reporting rhythms, and follow-through
                  support so the improvement holds after we leave.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PHOTO BAND */}
        <section className="photo-band" aria-label="Our approach">
          <div className="container">
            <blockquote>
              We map how work <span>actually</span> moves, not how it&apos;s
              supposed to, then fix what&apos;s slowing you down.
            </blockquote>
            <p>Assess &bull; Stabilize &bull; Improve &bull; Sustain</p>
          </div>
        </section>

        {/* SMALL BUSINESS */}
        <section id="small-business">
          <div className="container split">
            <div>
              <span className="eyebrow" style={{ color: "var(--gold-dark)" }}>
                Small Business Solutions
              </span>
              <h2>Helping Small Businesses Run Smarter</h2>
              <p>
                Growing businesses rarely struggle for lack of customers. They
                struggle when operations haven&apos;t kept pace with growth.
              </p>
              <p>
                Workflow bottlenecks, undocumented procedures, staff turnover,
                rushed software migrations, and poor reporting quietly drain
                productivity and cash. ODTG finds the gaps, puts interim fixes
                in place fast, and builds the processes that keep your business
                running smoothly.
              </p>
              <h3 style={{ color: "var(--navy)", marginTop: "28px" }}>
                Common Challenges We Solve
              </h3>
              <ul className="check-list">
                <li>Inefficient workflows</li>
                <li>Software migration disruptions</li>
                <li>Undocumented procedures</li>
                <li>Inconsistent staff processes</li>
                <li>Poor reporting visibility</li>
                <li>Vendor accountability gaps</li>
              </ul>
              <a href="#assessment" className="btn btn-navy">
                Start With a Free Assessment
              </a>
            </div>
            <div className="industries">
              <div className="industries-photo">
                <img
                  src="https://images.unsplash.com/photo-1631217873436-b0fa88e71f0a?auto=format&fit=crop&w=900&q=80"
                  alt="Physician reviewing information on a tablet with patients"
                  loading="lazy"
                />
              </div>
              <h3>Industries Served</h3>
              <div className="pills">
                <span>Medical Practices</span>
                <span>Chiropractic Offices</span>
                <span>Professional Services</span>
                <span>Financial Advisors</span>
                <span>Insurance Agencies</span>
                <span>Veteran-Owned Businesses</span>
                <span>Government Contractors</span>
              </div>
              <h3 style={{ marginTop: "32px" }}>How an Engagement Works</h3>
              <ol style={{ paddingLeft: "20px", color: "var(--muted)" }}>
                <li style={{ marginBottom: "10px" }}>
                  <strong style={{ color: "var(--navy)" }}>
                    Rapid triage.
                  </strong>{" "}
                  We assess what&apos;s broken and what it&apos;s costing you.
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <strong style={{ color: "var(--navy)" }}>Stabilize.</strong>{" "}
                  Interim procedures stop the bleeding in week one.
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <strong style={{ color: "var(--navy)" }}>Improve.</strong>{" "}
                  Documented processes, training, and accountability.
                </li>
                <li>
                  <strong style={{ color: "var(--navy)" }}>Sustain.</strong>{" "}
                  Ongoing support and reporting, priced to your cash flow.
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* WEALTH ADVISORS */}
        <section id="wealth-advisors" className="bg-light">
          <div className="container feature">
            <div className="feature-media">
              <div className="main">
                <img
                  src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=1200&q=80"
                  alt="Advisor meeting with a client to review her plan"
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              <span className="eyebrow" style={{ color: "var(--gold-dark)" }}>
                Wealth Advisor Solutions
              </span>
              <h2>Spend Less Time on Paperwork and More Time With Clients</h2>
              <p>
                Advisory practices lose hours to scattered client files,
                inconsistent onboarding, and processes that live in one
                assistant&apos;s head. ODTG brings structure to the back office
                so you can grow your book without growing the chaos.
              </p>
              <p>
                Teresa spent six years as a registered representative and still
                holds her FINRA Series 6, so she speaks your language and
                understands the compliance realities you work within.
              </p>
              <ul className="check-list">
                <li>Client onboarding workflows</li>
                <li>Household &amp; book consolidation</li>
                <li>Service request tracking</li>
                <li>Documented SOPs for staff</li>
                <li>CRM &amp; records cleanup</li>
                <li>Review-meeting preparation</li>
              </ul>
              <a href="#assessment" className="btn btn-navy">
                Book a Practice Assessment
              </a>
            </div>
          </div>
        </section>

        {/* GOVERNMENT */}
        <section id="government" className="navy-section">
          <div className="container feature reverse">
            <div className="feature-media">
              <div className="main">
                <img
                  src="https://images.unsplash.com/photo-1573497701240-345a300b8d36?auto=format&fit=crop&w=1200&q=80"
                  alt="Professional team meeting around a conference table"
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              <span className="eyebrow">
                Government &amp; Contractor Solutions
              </span>
              <h2>A Certified Partner for Federal Work</h2>
              <p>
                Primes need qualified small business partners. Agencies need
                workflows that hold up to scrutiny. ODTG brings 18 years of
                federal records and process experience, plus the certifications
                that help you meet your small business goals.
              </p>
              <p>
                As an SBA-certified SDVOSB, ODTG is eligible for
                service-disabled veteran set-aside and sole-source awards.
              </p>
              <div className="badge-row">
                <span>
                  SBA-Certified Service-Disabled Veteran-Owned (SDVOSB)
                </span>
                <span>WOSB</span>
                <span>VOSB</span>
                <span>SAM.gov Registered</span>
              </div>
              <ul className="check-list">
                <li>Workflow analysis &amp; redesign</li>
                <li>Records management</li>
                <li>Section 508 accessibility</li>
                <li>Process documentation &amp; SOPs</li>
                <li>Program &amp; project support</li>
                <li>Teaming &amp; subcontracting</li>
              </ul>
              <a
                href={CAPABILITY_STATEMENT_PDF}
                download="ODTG_Capability_Statement.pdf"
                className="btn btn-primary"
              >
                Download Capability Statement (PDF)
              </a>
            </div>
          </div>
          <div className="container">
            <div className="company-data">
              <div>
                <h3>Company Data</h3>
                <dl>
                  <dt>UEI</dt>
                  <dd>VV97GEJU6616</dd>
                  <dt>CAGE</dt>
                  <dd>22N27</dd>
                  <dt>SAM.gov</dt>
                  <dd>Active</dd>
                  <dt>Location</dt>
                  <dd>Pinellas County, FL</dd>
                </dl>
              </div>
              <div>
                <h3>NAICS Codes</h3>
                <ul>
                  <li>
                    <strong>541611</strong> Administrative &amp; General
                    Management Consulting <em>(primary)</em>
                  </li>
                  <li>
                    <strong>541618</strong> Other Management Consulting
                  </li>
                  <li>
                    <strong>541690</strong> Other Scientific &amp; Technical
                    Consulting
                  </li>
                  <li>
                    <strong>541519</strong> Other Computer Related Services
                  </li>
                  <li>
                    <strong>611430</strong> Professional &amp; Management
                    Development Training
                  </li>
                </ul>
              </div>
              <div>
                <h3>PSC Codes</h3>
                <ul>
                  <li>
                    <strong>R408</strong> Program Management/Support
                  </li>
                  <li>
                    <strong>R410</strong> Program Evaluation/Review/Development
                  </li>
                  <li>
                    <strong>R499</strong> Professional: Other
                  </li>
                  <li>
                    <strong>R605</strong> Administrative: Library
                  </li>
                  <li>
                    <strong>R612</strong> Administrative: Information Retrieval
                  </li>
                  <li>
                    <strong>R699</strong> Administrative: Other
                  </li>
                  <li>
                    <strong>R799</strong> Management: Other
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CLIENT SPOTLIGHT */}
        <section className="spotlight" aria-labelledby="spotlight-title">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Client Spotlight</span>
              <h2 id="spotlight-title">Independent Healthcare Practice</h2>
              <p>
                A busy single-provider practice seeing roughly 130 patients a
                week.
              </p>
            </div>
            <div className="spot-grid">
              <div className="spot-card">
                <h3>The Challenge</h3>
                <p>
                  A rushed transition to a new practice-management platform,
                  with limited training and unfinished templates, broke the
                  office&apos;s workflows. Staff procedures became inconsistent
                  and vendor reporting stopped, leaving a growing administrative
                  backlog.
                </p>
              </div>
              <div className="spot-card">
                <h3>Our Approach</h3>
                <p>
                  ODTG conducted a rapid operational assessment, documented
                  workflow gaps, and put an interim paper-based procedure in
                  place within the first week to restore day-to-day processing
                  while the system was stabilized.
                </p>
              </div>
              <div className="spot-card">
                <h3>The Plan</h3>
                <p>
                  A phased improvement plan covering process stabilization,
                  staff training, vendor accountability, and regular operational
                  reporting, structured around the practice&apos;s cash flow.
                </p>
              </div>
            </div>
            <div className="focus">
              <div className="pills">
                <span>Workflow Assessment</span>
                <span>Process Documentation</span>
                <span>Technology Transition</span>
                <span>Staff Training</span>
                <span>Operational Reporting</span>
              </div>
            </div>
          </div>
        </section>

        {/* TRACK RECORD */}
        <section id="track-record" className="bg-light">
          <div className="container">
            <div className="section-header">
              <h2>Experience You Can Verify</h2>
              <p>
                New firm. Proven operator. ODTG is built on nearly two decades
                of running a certified federal contracting business.
              </p>
            </div>
            <div className="stats">
              <div className="stat">
                <div className="num">
                  <Counter target={18} />
                  <small>yrs</small>
                </div>
                <h3>Federal Records Firm</h3>
                <p>
                  Founded and operated an SBA 8(a)-certified records management
                  company.
                </p>
              </div>
              <div className="stat">
                <div className="num">
                  <Counter target={3} />
                </div>
                <h3>SBA Certifications</h3>
                <p>
                  Service-Disabled Veteran-, Woman-, and Veteran-Owned Small
                  Business.
                </p>
              </div>
              <div className="stat">
                <div className="num">PSM</div>
                <h3>Certified Scrum Master</h3>
                <p>Professional Scrum Master certified through Scrum.org.</p>
              </div>
              <div className="stat">
                <div className="num">ISO</div>
                <h3>Standards-Based Work</h3>
                <p>
                  Claims processing delivered to ISO standards for a third-party
                  administrator.
                </p>
              </div>
            </div>
            <div className="past-perf">
              <h3>Past Performance</h3>
              <div className="pills">
                <span>Florida Department of Health</span>
                <span>Tennessee Emergency Management Agency</span>
                <span>TGH (Third-Party Administrator)</span>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="about">
          <div className="container about-grid">
            <div className="portrait">
              <img
                src={PORTRAIT_SRC}
                alt="Teresa Norton, Principal and Managing Director of ODTG"
                width="900"
                height="900"
              />
            </div>
            <div>
              <span className="eyebrow" style={{ color: "var(--gold-dark)" }}>
                Built on Service. Driven by Results.
              </span>
              <h2>Teresa Norton</h2>
              <p className="role">Principal &amp; Managing Director</p>
              <p>
                Teresa founded ODTG to help organizations solve the operational
                problems that slow growth, drain resources, and limit impact.
              </p>
              <p>
                A Navy veteran, she spent 18 years leading an SBA 8(a)-certified
                federal records management firm, delivering for state agencies
                and healthcare administrators. She later spent six years in
                financial services, giving her a front-row view of how small
                practices run and where their operations break down.
              </p>
              <p>
                Today she brings that mix of federal discipline and
                small-business practicality to every engagement: assess quickly,
                stabilize first, then build processes that last.
              </p>
              <div className="creds">
                <span>U.S. Navy Veteran</span>
                <span>Former 8(a) Firm Owner</span>
                <span>PSM Certified</span>
                <span>FINRA Series 6</span>
              </div>
            </div>
          </div>
        </section>

        {/* COMMUNITY */}
        <section
          id="community"
          className="community-strip"
          aria-labelledby="community-title"
        >
          <div className="container">
            <h2 id="community-title">Rooted in Service</h2>
            <p>
              A Navy veteran-owned firm based in Pinellas County, ODTG gives
              back through leadership roles with local veteran and community
              organizations.
            </p>
          </div>
        </section>

        {/*
        TESTIMONIALS: add this section once you have real, approved client quotes.
        <section class="testimonials">...</section>
      */}

        {/* FREE ASSESSMENT CTA */}
        <section id="assessment" className="cta">
          <div className="container">
            <span className="eyebrow">No Cost. No Obligation.</span>
            <h2>Free 30-Minute Workflow Assessment</h2>
            <p>
              Whether you&apos;re a practice owner, wealth advisor, or
              government contractor, we&apos;ll take a focused look at your
              operations and identify:
            </p>
            <div className="assess">
              <div>Process bottlenecks</div>
              <div>Duplicate effort</div>
              <div>Documentation gaps</div>
              <div>Quick-win improvements</div>
            </div>
            <a
              href="mailto:info@optimaldtg.com?subject=Free%20Workflow%20Assessment"
              className="btn btn-primary"
            >
              Schedule My Free Assessment
            </a>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact">
          <div className="container">
            <div className="section-header">
              <h2>Let&apos;s Talk</h2>
              <p>
                Tell us what&apos;s slowing your organization down. We&apos;ll
                respond within one business day.
              </p>
            </div>
            <div className="contact-grid">
              <div className="contact-card">
                <h3>Email</h3>
                <a href="mailto:info@optimaldtg.com">info@optimaldtg.com</a>
              </div>
              <div className="contact-card">
                <h3>Phone</h3>
                <a href="tel:+18308893539">(830) 889-3539</a>
              </div>
              <div className="contact-card">
                <h3>Location</h3>
                <p>
                  Pinellas County, Florida
                  <br />
                  Serving clients nationwide
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-grid">
          <div className="footer-logo">
            <img
              src={FOOTER_LOGO_SRC}
              alt="Optimal Digital Transformation Group: Innovating with Structure. Modernizing with Confidence."
              width="760"
              height="198"
            />
            <br />
            <strong>Optimal Digital Transformation Group, LLC</strong>
            <br />
            SBA-Certified Service-Disabled Veteran-Owned Small Business (SDVOSB)
            &bull; WOSB &bull; VOSB
          </div>
          <div>
            UEI: <span className="gold">VV97GEJU6616</span> &nbsp;|&nbsp; CAGE:{" "}
            <span className="gold">22N27</span>
          </div>
          <div>&copy; 2026 ODTG. All rights reserved.</div>
        </div>
      </footer>
    </>
  );
}
