import React from "react";

const LOGO_SRC = "/otdg-logo-light.png";

const HEADSHOT_SRC = "/headshot2.jpg";

const SBA_BADGE_SRC = "/sdvob.png";

const styles = `
  :root{
    --ink:#16233A;        /* deep navy */
    --paper:#F7F8F6;      /* cool paper white */
    --white:#FFFFFF;
    --brass:#A8842F;      /* restrained brass accent */
    --slate:#525E6E;      /* secondary text */
    --line:#D9DDD8;       /* hairlines */
    --display:'Bitter',Georgia,serif;
    --body:'Public Sans',-apple-system,sans-serif;
    --mono:'IBM Plex Mono',monospace;
  }
  *{margin:0;padding:0;box-sizing:border-box}
  html{scroll-behavior:smooth}
  @media (prefers-reduced-motion:reduce){
    html{scroll-behavior:auto}
    *,*::before,*::after{animation:none!important;transition:none!important}
  }
  body{
    font-family:var(--body);
    color:var(--ink);
    background:var(--paper);
    line-height:1.6;
    font-size:17px;
  }
  a{color:inherit}
  a:focus-visible,button:focus-visible{outline:3px solid var(--brass);outline-offset:3px;border-radius:2px}
  .wrap{max-width:1060px;margin:0 auto;padding:0 24px}
  .eyebrow{
    font-family:var(--mono);
    font-size:12.5px;
    letter-spacing:.14em;
    text-transform:uppercase;
    color:var(--brass);
    font-weight:500;
  }

  /* ---------- header ---------- */
  header{
    background:var(--paper);
    border-bottom:1px solid var(--line);
    position:sticky;top:0;z-index:20;
  }
  .nav{
    display:flex;align-items:center;justify-content:space-between;
    padding:18px 0;
  }
  .logo{
    font-family:var(--display);
    font-weight:700;
    font-size:22px;
    letter-spacing:.01em;
    text-decoration:none;
    display:flex;align-items:baseline;gap:10px;
  }
  .logo small{
    font-family:var(--mono);
    font-weight:400;
    font-size:11px;
    letter-spacing:.12em;
    color:var(--slate);
    text-transform:uppercase;
  }
  .nav-links{display:flex;gap:28px;list-style:none;align-items:center}
  .nav-links a{
    text-decoration:none;font-weight:500;font-size:15px;color:var(--slate);
  }
  .nav-links a:hover{color:var(--ink)}
  .nav-cta{
    background:var(--ink);color:var(--white)!important;
    padding:9px 18px;border-radius:3px;font-weight:600;
  }
  .nav-cta:hover{background:#22334F}
  @media(max-width:720px){.nav-links li:not(:last-child){display:none}}

  /* ---------- hero ---------- */
  .hero{padding:88px 0 64px}
  .hero h1{
    font-family:var(--display);
    font-weight:600;
    font-size:clamp(34px,5.2vw,56px);
    line-height:1.12;
    max-width:16ch;
    margin:18px 0 22px;
  }
  .hero h1 em{font-style:normal;color:var(--brass)}
  .hero p.lede{
    font-size:20px;
    color:var(--slate);
    max-width:56ch;
    margin-bottom:34px;
  }
  .hero .btns{display:flex;gap:14px;flex-wrap:wrap}
  .btn{
    display:inline-block;text-decoration:none;font-weight:600;font-size:16px;
    padding:13px 26px;border-radius:3px;
  }
  .btn-primary{background:var(--ink);color:var(--white)}
  .btn-primary:hover{background:#22334F}
  .btn-ghost{border:1.5px solid var(--ink)}
  .btn-ghost:hover{background:var(--ink);color:var(--white)}

  /* signature: process line */
  .process-line{margin:64px 0 0;overflow-x:auto;padding-bottom:6px}
  .process-line svg{display:block;min-width:680px;width:100%;height:auto}
  .process-line .node-label{
    font-family:var(--mono);font-size:12px;fill:var(--ink);font-weight:500;
  }
  .process-line .node-sub{
    font-family:var(--body);font-size:11px;fill:var(--slate);
  }

  /* ---------- credibility strip ---------- */
  .cred{
    background:var(--ink);color:var(--paper);
    padding:26px 0;
  }
  .cred .wrap{
    display:flex;gap:12px 48px;flex-wrap:wrap;justify-content:space-between;align-items:center;
  }
  .cred span{
    font-family:var(--mono);font-size:13px;letter-spacing:.06em;
    display:flex;align-items:center;gap:10px;
  }
  .cred span::before{
    content:'';width:7px;height:7px;background:var(--brass);border-radius:50%;flex-shrink:0;
  }

  /* ---------- sections ---------- */
  section{padding:80px 0}
  .section-head{max-width:60ch;margin-bottom:48px}
  .section-head h2{
    font-family:var(--display);font-weight:600;
    font-size:clamp(26px,3.4vw,36px);
    margin:14px 0 14px;line-height:1.2;
  }
  .section-head p{color:var(--slate);font-size:18px}

  /* services */
  #services{background:var(--white);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
  .svc-grid{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--line);border:1px solid var(--line)}
  @media(max-width:720px){.svc-grid{grid-template-columns:1fr}}
  .svc{
    background:var(--white);padding:34px 30px;
  }
  .svc:hover{background:var(--paper)}
  .svc .tag{
    font-family:var(--mono);font-size:12px;color:var(--brass);
    letter-spacing:.1em;text-transform:uppercase;
  }
  .svc h3{
    font-family:var(--display);font-weight:600;font-size:21px;
    margin:10px 0 10px;
  }
  .svc p{color:var(--slate);font-size:16px}

  /* also strip */
  .also{
    margin-top:40px;
    border-left:3px solid var(--brass);
    padding:6px 0 6px 22px;
  }
  .also p{color:var(--slate);font-size:16px;max-width:70ch}
  .also strong{color:var(--ink)}

  /* how it works */
  .steps{display:grid;grid-template-columns:repeat(3,1fr);gap:36px}
  @media(max-width:760px){.steps{grid-template-columns:1fr}}
  .step .num{
    font-family:var(--mono);font-size:13px;color:var(--brass);
    letter-spacing:.1em;display:block;margin-bottom:10px;
  }
  .step h3{font-family:var(--display);font-size:19px;font-weight:600;margin-bottom:8px}
  .step p{color:var(--slate);font-size:16px}

  /* about */
  #about{background:var(--white);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
  .about-grid{display:grid;grid-template-columns:1.2fr .8fr;gap:64px;align-items:start}
  @media(max-width:820px){.about-grid{grid-template-columns:1fr;gap:40px}}
  .about-grid p{margin-bottom:18px;color:var(--slate)}
  .about-grid p strong{color:var(--ink)}
  .facts{
    border:1px solid var(--line);background:var(--paper);
    padding:28px;
  }
  .facts h3{
    font-family:var(--mono);font-size:12.5px;letter-spacing:.12em;
    text-transform:uppercase;color:var(--brass);font-weight:500;margin-bottom:18px;
  }
  .facts ul{list-style:none}
  .facts li{
    padding:11px 0;border-bottom:1px solid var(--line);
    font-size:15.5px;display:flex;justify-content:space-between;gap:16px;
  }
  .facts li:last-child{border-bottom:none}
  .facts li span:first-child{color:var(--slate)}
  .facts li span:last-child{font-weight:600;text-align:right}

  /* contact */
  #contact .card{
    background:var(--ink);color:var(--paper);
    padding:56px 48px;border-radius:4px;
    display:grid;grid-template-columns:1.3fr .7fr;gap:48px;align-items:center;
  }
  @media(max-width:760px){#contact .card{grid-template-columns:1fr;padding:40px 28px}}
  #contact h2{
    font-family:var(--display);font-weight:600;
    font-size:clamp(24px,3vw,32px);margin:12px 0 14px;line-height:1.25;
  }
  #contact p{color:#B9C2D0;font-size:17px;max-width:48ch}
  #contact .btn-primary{background:var(--brass);color:var(--ink);font-weight:700}
  #contact .btn-primary:hover{background:#C39A3E}
  .contact-lines{font-family:var(--mono);font-size:14px;line-height:2.2;color:#B9C2D0}
  .contact-lines a{color:var(--paper);text-decoration:none;border-bottom:1px solid var(--brass)}

  footer{padding:32px 0 44px;border-top:1px solid var(--line)}
  footer .wrap{
    display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;
    font-size:13.5px;color:var(--slate);
  }
  footer .mono{font-family:var(--mono);font-size:12px;letter-spacing:.06em}
`;

export default function OdtgLandingPage() {
  return (
    <>
      <title>ODTG — Workflow &amp; Operational Improvement Advisory</title>
      <meta
        name="description"
        content="Optimal Digital Transformation Group (ODTG), LLC — a Service-Disabled Veteran-Owned Small Business helping organizations fix how work gets done."
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Bitter:wght@500;600;700&family=Public+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <style>{styles}</style>

      <header>
        <div className="wrap nav">
          <a
            className="logo"
            href="#top"
            aria-label="Optimal Digital Transformation Group home"
          >
            <img
              src={LOGO_SRC}
              alt="Optimal Digital Transformation Group — Innovating with Structure. Modernizing with Confidence."
              style={{ height: "52px", width: "auto", display: "block" }}
            />
          </a>
          <ul className="nav-links">
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#who">Who we serve</a>
            </li>
            <li>
              <a href="#how">How it works</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a className="nav-cta" href="#contact">
                Start a conversation
              </a>
            </li>
          </ul>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <div className="hero">
          <div className="wrap">
            <span className="eyebrow">
              Optimal Digital Transformation Group, LLC
            </span>
            <h1>
              We help organizations fix <em>how work gets done.</em>
            </h1>
            <p className="lede">
              ODTG is an SBA-certified Service-Disabled Veteran-Owned and
              Women-Owned Small Business that helps federal agencies, wealth
              advisory practices, and growing organizations see how work
              actually flows, find the bottlenecks, and build practical
              processes that improve performance.
            </p>
            <div className="btns">
              <a className="btn btn-primary" href="#contact">
                Start a conversation
              </a>
              <a className="btn btn-ghost" href="#services">
                See what we do
              </a>
            </div>

            {/* Signature: the work itself, as a diagram */}
            <div
              className="process-line"
              role="img"
              aria-label="Process diagram: map the current state, identify bottlenecks, redesign the workflow, measure performance."
            >
              <svg viewBox="0 0 900 120" xmlns="http://www.w3.org/2000/svg">
                <line
                  x1="40"
                  y1="46"
                  x2="860"
                  y2="46"
                  stroke="#D9DDD8"
                  strokeWidth="2"
                />
                {/* node 1 */}
                <circle cx="70" cy="46" r="9" fill="#16233A" />
                <text x="70" y="84" textAnchor="middle" className="node-label">
                  MAP
                </text>
                <text x="70" y="102" textAnchor="middle" className="node-sub">
                  current state
                </text>
                {/* node 2: the bottleneck */}
                <circle
                  cx="330"
                  cy="46"
                  r="9"
                  fill="none"
                  stroke="#A8842F"
                  strokeWidth="3"
                />
                <text
                  x="330"
                  y="84"
                  textAnchor="middle"
                  className="node-label"
                  fill="#A8842F"
                >
                  FIND
                </text>
                <text x="330" y="102" textAnchor="middle" className="node-sub">
                  the bottlenecks
                </text>
                {/* node 3 */}
                <circle cx="590" cy="46" r="9" fill="#16233A" />
                <text x="590" y="84" textAnchor="middle" className="node-label">
                  REDESIGN
                </text>
                <text x="590" y="102" textAnchor="middle" className="node-sub">
                  the workflow
                </text>
                {/* node 4 */}
                <circle cx="830" cy="46" r="9" fill="#16233A" />
                <text x="830" y="84" textAnchor="middle" className="node-label">
                  MEASURE
                </text>
                <text x="830" y="102" textAnchor="middle" className="node-sub">
                  what improved
                </text>
                {/* arrowheads */}
                <path d="M195 46 l-10 -6 v12 z" fill="#525E6E" />
                <path d="M455 46 l-10 -6 v12 z" fill="#525E6E" />
                <path d="M705 46 l-10 -6 v12 z" fill="#525E6E" />
              </svg>
            </div>
          </div>
        </div>

        {/* CREDIBILITY STRIP */}
        <div className="cred">
          <div className="wrap">
            <span>SBA-Certified SDVOSB · WOSB · VOSB</span>
            <span>Woman- &amp; Veteran-Owned, Founder-Led</span>
            <span>15 Years Leading an 8(a) Federal Firm</span>
            <span>Financial Services Industry Experience</span>
          </div>
        </div>

        {/* SERVICES */}
        <section id="services">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">What we do</span>
              <h2>Workflow &amp; Operational Improvement Advisory</h2>
              <p>
                In plain terms: when work is slow, confusing, duplicated, or
                stuck, we figure out why — and help you fix it. Four core
                service lines:
              </p>
            </div>

            <div className="svc-grid">
              <div className="svc">
                <span className="tag">Service line 01</span>
                <h3>Workflow Analysis &amp; Redesign</h3>
                <p>
                  Through process modeling and workflow mapping, we document how
                  work actually moves through your organization today, identify
                  where it slows down or breaks, and design a better future
                  state.
                </p>
              </div>
              <div className="svc">
                <span className="tag">Service line 02</span>
                <h3>Process Improvement</h3>
                <p>
                  We reduce unnecessary steps, duplication, delays, and handoff
                  problems — organizational improvement that lets your team
                  spend time on the work, not the workaround.
                </p>
              </div>
              <div className="svc">
                <span className="tag">Service line 03</span>
                <h3>Operations Advisory</h3>
                <p>
                  Grounded in business analysis, we assess how your people,
                  processes, and systems interact — and recommend practical
                  improvements you can actually implement.
                </p>
              </div>
              <div className="svc">
                <span className="tag">Service line 04</span>
                <h3>Project &amp; Program Advisory</h3>
                <p>
                  From advisory through hands-on project and program support, we
                  help leadership structure, plan, and monitor the
                  implementation of improvements — so change actually sticks.
                </p>
              </div>
            </div>

            <div className="also">
              <p>
                <strong>Specialized capabilities:</strong> business analysis,
                process modeling, records management, SOP and process
                documentation, performance measurement, project/program support,
                and Section 508 accessibility compliance.
              </p>
            </div>
          </div>
        </section>

        {/* WHO WE SERVE */}
        <section id="who">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Who we serve</span>
              <h2>Two worlds. The same underlying problem.</h2>
              <p>
                Whether you run a federal program or a wealth advisory practice,
                work gets stuck in the same places: unclear processes, missing
                documentation, and handoffs that fall through the cracks.
              </p>
            </div>
            <div className="svc-grid">
              <div className="svc">
                <span className="tag">Federal agencies &amp; contractors</span>
                <h3>Compliance-driven operations</h3>
                <p>
                  We help agencies and contractors document processes, manage
                  records, modernize workflows, and meet Section 508
                  accessibility requirements — with the perspective of a founder
                  who ran an 8(a)-certified federal firm for 15 years.
                </p>
              </div>
              <div className="svc">
                <span className="tag">
                  Wealth advisors &amp; financial practices
                </span>
                <h3>Practices that run on process</h3>
                <p>
                  Advisory practices lose hours to client onboarding, review
                  prep, service requests, and compliance documentation. Having
                  worked as a registered representative, we know the workflow
                  behind the client relationship — and how to streamline it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">How an engagement works</span>
              <h2>Simple to start. Practical by design.</h2>
            </div>
            <div className="steps">
              <div className="step">
                <span className="num">STEP 1 — LISTEN</span>
                <h3>We start with a conversation</h3>
                <p>
                  You describe what&apos;s slow, stuck, or frustrating. We ask
                  questions until we understand the real problem — not just the
                  symptom.
                </p>
              </div>
              <div className="step">
                <span className="num">STEP 2 — ASSESS</span>
                <h3>We map and diagnose</h3>
                <p>
                  We document how work flows today, where it bottlenecks, and
                  what it&apos;s costing you in time, rework, and missed
                  deadlines.
                </p>
              </div>
              <div className="step">
                <span className="num">STEP 3 — DELIVER</span>
                <h3>You get a practical plan</h3>
                <p>
                  Clear recommendations, documented processes, and support
                  through implementation. No jargon, no shelf-ware reports.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">About ODTG</span>
              <h2>
                Founder-led, veteran-owned, and grounded in real federal
                experience.
              </h2>
            </div>
            <div className="about-grid">
              <div>
                <figure
                  style={{
                    float: "left",
                    margin: "0 26px 12px 0",
                    width: "200px",
                  }}
                >
                  <img
                    src={HEADSHOT_SRC}
                    alt="Teresa Norton, Principal & Managing Director of ODTG, in front of an American flag"
                    style={{
                      width: "200px",
                      height: "auto",
                      display: "block",
                      borderRadius: "6px",
                      border: "2px solid var(--brass)",
                    }}
                  />
                  <figcaption
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "11.5px",
                      color: "var(--slate)",
                      marginTop: "8px",
                      lineHeight: 1.5,
                    }}
                  >
                    Teresa Norton
                    <br />
                    Principal &amp; Managing Director
                  </figcaption>
                </figure>
                <p>
                  ODTG was founded by{" "}
                  <strong>
                    Teresa Norton, Principal &amp; Managing Director
                  </strong>{" "}
                  — a U.S. Navy veteran who spent 15 years running an{" "}
                  <strong>
                    SBA 8(a)-certified federal records management firm
                  </strong>
                  , working inside the same compliance-driven environments our
                  federal clients navigate every day. That background means we
                  understand federal requirements from the inside, not from a
                  textbook.
                </p>
                <p>
                  Teresa also spent several years as a{" "}
                  <strong>
                    registered representative in the financial services industry
                  </strong>
                  , giving ODTG firsthand knowledge of how advisory practices
                  operate — the client workflows, the documentation demands, and
                  the compliance pressure behind every relationship.
                </p>
                <p>
                  Clients hire ODTG for{" "}
                  <strong>
                    judgment, experience, credibility, and methodology
                  </strong>{" "}
                  — and for our ability to understand their problems in their
                  own language, then translate them into workflows that actually
                  work.
                </p>
              </div>
              <aside className="facts">
                <img
                  src={SBA_BADGE_SRC}
                  alt="U.S. Small Business Administration — Service-Disabled Veteran-Owned Certified badge"
                  style={{
                    width: "150px",
                    height: "auto",
                    display: "block",
                    margin: "0 auto 24px",
                  }}
                />
                <h3>At a glance</h3>
                <ul>
                  <li>
                    <span>Structure</span>
                    <span>LLC, Founder-Led</span>
                  </li>
                  <li>
                    <span>Principal</span>
                    <span>Teresa Norton</span>
                  </li>
                  <li>
                    <span>SBA Certifications</span>
                    <span>SDVOSB · WOSB · VOSB</span>
                  </li>
                  <li>
                    <span>Founder</span>
                    <span>U.S. Navy Veteran</span>
                  </li>
                  <li>
                    <span>Prior firm</span>
                    <span>8(a) Certified, 15 Years</span>
                  </li>
                  <li>
                    <span>Markets</span>
                    <span>Federal &amp; Financial Services</span>
                  </li>
                  <li>
                    <span>UEI</span>
                    <span>VV97GEJU6616</span>
                  </li>
                  <li>
                    <span>CAGE</span>
                    <span>22N27</span>
                  </li>
                  <li>
                    <span>SAM.gov</span>
                    <span>Active</span>
                  </li>
                  <li>
                    <span>Based in</span>
                    <span>Pinellas County, FL</span>
                  </li>
                </ul>
              </aside>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact">
          <div className="wrap">
            <div className="card">
              <div>
                <span className="eyebrow">Get in touch</span>
                <h2>Tell us what&apos;s slowing your organization down.</h2>
                <p>
                  The first conversation is free, and it usually takes less than
                  30 minutes to know whether we can help.
                </p>
              </div>
              <div>
                <p className="contact-lines">
                  <a href="mailto:info@optimaldtg.com">info@optimaldtg.com</a>
                  <br />
                  <a href="tel:+17272437226" style={{ border: "none" }}>
                    (727) 243-7226
                  </a>
                  <br />
                  Pinellas County, Florida
                </p>
                <br />
                <a
                  className="btn btn-primary"
                  href="mailto:info@optimaldtg.com"
                >
                  Send us a message
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <span>
            © 2026 Optimal Digital Transformation Group (ODTG), LLC. All rights
            reserved.
          </span>
          <span className="mono">
            SBA-CERTIFIED SDVOSB · WOSB · VOSB · UEI VV97GEJU6616 · CAGE 22N27 ·
            SAM.GOV ACTIVE
          </span>
        </div>
      </footer>
    </>
  );
}
