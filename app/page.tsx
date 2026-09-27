"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  PiMapTrifold,
  PiMagnifyingGlass,
  PiTreeStructure,
  PiShieldCheck,
  PiAnchor,
  PiBank,
  PiPersonArmsSpread,
  PiFlowArrow,
  PiGearSix,
  PiUsersThree,
  PiClipboardText,
  PiArrowRight,
  PiEnvelope,
  PiPhone,
  PiMapPin,
  PiChatCircle,
  PiArrowsClockwise,
  PiFileText,
  PiUserMinus,
  PiClock,
  PiShieldWarning,
  PiCompass,
  PiCurrencyDollar,
  PiCheckCircle,
  PiMedal,
} from "react-icons/pi";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";

/**
 * ODTG — Optimal Digital Transformation Group
 * Single-file homepage component.
 *
 * Palette
 *  --navy-900  #0A1B2E   deep base
 *  --navy-800  #0E2438   section base
 *  --navy-700  #16324C   cards on navy
 *  --gold      #E0A93C   accent / CTA
 *  --teal      #2E93A8   icon rings
 *  --cream     #F4F6F8   light sections
 *  --ink       #0A1B2E   headings on light
 */

// ---- Tiny scroll-reveal hook (used sparingly, respects reduced-motion) ----
function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, shown };
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, shown } = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const COLORS = {
  navy900: "#0A1B2E",
  navy800: "#0E2438",
  navy700: "#16324C",
  gold: "#E0A93C",
  teal: "#2E93A8",
  cream: "#F4F6F8",
};

export default function ODTGHomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{
        fontFamily: "'Inter', system-ui, sans-serif",
        color: "#fff",
        background: COLORS.navy900,
      }}
    >
      <style>{styles}</style>

      {/* ============ NAV ============ */}

      <Header />

      {/* ============ HERO ============ */}
      <header id="top" className="odtg-hero">
        <div className="odtg-hero__glow" />
        <div className="odtg-container odtg-hero__inner">
          <div className="odtg-hero__copy">
            <p className="odtg-eyebrow">
              Workflow &amp; Operational Improvement Advisory
            </p>
            <h1 className="odtg-hero__title">
              We help organizations fix how work gets done.
            </h1>
            <p className="odtg-hero__sub">
              ODTG is a Service-Disabled Veteran-Owned Small Business that helps
              federal agencies, insurers, and financial institutions see how
              work actually flows, find the bottlenecks, and build practical
              processes that improve performance.
            </p>
            <div className="odtg-hero__actions">
              <a href="#contact" className="odtg-btn odtg-btn--gold">
                Start a Conversation <PiArrowRight size={16} />
              </a>
              <a href="#what" className="odtg-btn odtg-btn--ghost">
                See What We Do
              </a>
            </div>
          </div>

          <div className="odtg-hero__flow">
            <FlowStep
              icon={<PiMapTrifold size={30} />}
              ring={COLORS.teal}
              label="MAP"
              sub="Current State"
            />
            <PiArrowRight className="odtg-flow__arrow" size={22} />
            <FlowStep
              icon={<PiMagnifyingGlass size={30} />}
              ring={COLORS.teal}
              label="FIND"
              sub={
                <>
                  Bottlenecks,
                  <br />
                  Risk &amp; Friction
                </>
              }
            />
            <PiArrowRight className="odtg-flow__arrow" size={22} />
            <FlowStep
              icon={<PiTreeStructure size={30} />}
              ring={COLORS.gold}
              label="REDESIGN"
              sub={
                <>
                  A Better Way
                  <br />
                  to Work
                </>
              }
              solid
            />
          </div>
        </div>
      </header>

      {/* ============ TRUST STRIP ============ */}
      <div className="odtg-trust">
        <div className="odtg-container odtg-trust__inner">
          <TrustItem icon={<PiShieldCheck size={20} />} label="SDVOSB" />
          <TrustItem
            icon={<PiAnchor size={20} />}
            label={
              <>
                U.S. Navy Veteran,
                <br />
                Founder-Led
              </>
            }
          />
          {/* <TrustItem
            icon={<PiBank size={20} />}
            label={
              <>
                25+ Years in
                <br />
                Federal Contracting
              </>
            }
          /> */}
          <TrustItem
            icon={<PiPersonArmsSpread size={20} />}
            label={
              <>
                Section 508
                <br />
                Accessibility Experience
              </>
            }
          />
        </div>
      </div>

      {/* ============ WHAT WE DO ============ */}
      <section id="what" className="odtg-section odtg-section--light">
        <div className="odtg-container">
          <Reveal>
            <p className="odtg-eyebrow odtg-eyebrow--center odtg-eyebrow--gold">
              What We Do
            </p>
            <h2 className="odtg-h2 odtg-h2--dark odtg-center">
              When work gets slow, confusing, duplicated, or stuck,
              <br />
              we figure out why and help you fix it.
            </h2>
            <p className="odtg-lead odtg-center">
              ODTG helps organizations understand how work actually moves,
              identify where performance breaks down, and design practical
              improvements without forcing a system rip-and-replace.
            </p>
          </Reveal>

          <div className="odtg-grid odtg-grid--2">
            {SERVICES.map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <ServiceCard {...s} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="odtg-capabilities">
              <span className="odtg-capabilities__label">
                Specialized Capabilities
              </span>
              <div className="odtg-capabilities__list">
                {[
                  "Records Management",
                  "SOP & Process Documentation",
                  "Performance Measurement",
                  "Regulatory & Audit Readiness",
                  "Business Analysis",
                  "Process Modeling",
                  "Project/Program Support",
                  "Section 508 Accessibility Compliance",
                ].map((c) => (
                  <span key={c} className="odtg-capabilities__item">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ WHO WE WORK WITH ============ */}
      <section id="who" className="odtg-section odtg-section--navy">
        <div className="odtg-container">
          <Reveal>
            <p className="odtg-eyebrow odtg-eyebrow--center odtg-eyebrow--gold">
              Who We Serve
            </p>
            <h2 className="odtg-h2 odtg-center">
              Two worlds. The same underlying problem.
            </h2>
            <p className="odtg-lead odtg-lead--muted odtg-center">
              Whether you run a federal program or a wealth advisory practice,
              work gets stuck in the same places: unclear processes, missing
              documentation, and handoffs that fall through the cracks.
            </p>
          </Reveal>

          <div className="odtg-grid odtg-grid--2 odtg-who">
            <Reveal>
              <IndustryCard
                img="/gov-capitol.jpg"
                imgAlt="U.S. Capitol building"
                icon={<PiBank size={22} />}
                title="Federal Agencies & Contractors"
                sub="Compliance-Driven Operations"
                items={[
                  "Process documentation",
                  "Records management",
                  "Workflow modernization",
                  "Section 508 accessibility",
                ]}
                cta="Explore Government Advisory"
              />
            </Reveal>
            <Reveal delay={100}>
              <IndustryCard
                img="/fin-tower.jpg"
                imgAlt="Modern glass office tower"
                icon={<PiShieldCheck size={22} />}
                title="Wealth Advisors & Financial Practices"
                sub="Practices That Run on Process"
                items={[
                  "Client onboarding",
                  "Review prep",
                  "Service requests",
                  "Compliance documentation",
                ]}
                cta="Explore Advisory Solutions"
                highlight
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section id="how" className="odtg-section odtg-section--light">
        <div className="odtg-container">
          <Reveal>
            <p className="odtg-eyebrow odtg-eyebrow--center odtg-eyebrow--gold">
              How It Works
            </p>
            <h2 className="odtg-h2 odtg-h2--dark odtg-center">
              Simple to start. Practical by design.
            </h2>
          </Reveal>

          <div className="odtg-steps">
            {STEPS.map((s, i) => (
              <React.Fragment key={s.n}>
                <Reveal delay={i * 100} className="odtg-steps__cell">
                  <StepCard {...s} />
                </Reveal>
                {i < STEPS.length - 1 && (
                  <PiArrowRight className="odtg-steps__arrow" size={22} />
                )}
              </React.Fragment>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="odtg-tags odtg-center">
              {[
                "Cycle Time",
                "Handoffs",
                "Rework",
                "Backlogs",
                "Controls",
                "Risk",
              ].map((t) => (
                <span key={t} className="odtg-tag">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ OPERATIONAL CHALLENGES ============ */}
      {/* <section className="odtg-section odtg-section--navy">
        <div className="odtg-container">
          <Reveal>
            <p className="odtg-eyebrow odtg-eyebrow--center odtg-eyebrow--gold">
              Operational Challenges
            </p>
            <h2 className="odtg-h2 odtg-center">
              The work looks different. The problems often don't.
            </h2>
          </Reveal>
          <div className="odtg-grid odtg-grid--3 odtg-challenges">
            {CHALLENGES.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 80}>
                <ChallengeCard {...c} />
              </Reveal>
            ))}
          </div>
        </div>
      </section> */}

      {/* ============ ABOUT ============ */}
      <section id="about" className="odtg-section odtg-section--light">
        <div className="odtg-container">
          <Reveal>
            <p className="odtg-eyebrow odtg-eyebrow--gold">About ODTG</p>
            <h2 className="odtg-h2 odtg-h2--dark odtg-about__title">
              Founder-led, veteran-owned,
              <br />
              grounded in real federal experience.
            </h2>
          </Reveal>

          <div className="odtg-about">
            <Reveal className="odtg-about__photo">
              <div className="odtg-about__photo-inner">
                <Image
                  height={100}
                  width={100}
                  src="/headshot2.jpg"
                  alt="Teresa Norton, Founder of ODTG"
                />
              </div>
            </Reveal>

            <Reveal delay={80} className="odtg-about__body">
              <h3 className="odtg-about__name">Teresa Norton</h3>
              <p className="odtg-about__role">
                Principal &amp; Managing
                <br />
                Director
              </p>
              <p className="odtg-about__p">
                ODTG was founded by{" "}
                <strong>
                  Teresa Norton, Principal &amp; Managing Director
                </strong>{" "}
                — an experienced U.S. Navy veteran that helps organizations
                manage records, document processes, and modernize how work gets
                done.
              </p>
              <p className="odtg-about__p">
                For 15 years she ran an{" "}
                <strong>
                  SBA 8(a)-certified federal records management firm
                </strong>
                , working inside the same compliance-driven environments our
                federal clients navigate every day. That means we understand
                federal requirements — records management, process
                documentation, and Section 508 accessibility — from the inside,
                not from a textbook.
              </p>
              <p className="odtg-about__p">
                Teresa also spent several years as a{" "}
                <strong>registered representative</strong>
                in financial services, giving ODTG firsthand knowledge of how
                advisory practices operate: client onboarding workflows,
                documentation demands, and the compliance pressure behind every
                relationship.
              </p>
              <p className="odtg-about__p odtg-about__p--em">
                Clients hire ODTG for judgment, experience, credibility, and
                methodology — and for our ability to understand their problems
                in their own language, then translate them into workflows that
                actually work.
              </p>
            </Reveal>

            <Reveal delay={160} className="odtg-glance">
              {/* Cert Image */}
              <Image
                className="flex center mx-auto pb-6"
                src="/sdvob.png"
                alt=""
                height={100}
                width={100}
              />
              <p className="odtg-glance__label">At a Glance</p>
              <dl className="odtg-glance__list">
                {[
                  ["Structure", "LLC, Founder-Led"],
                  ["Principal", "Teresa Norton"],
                  ["SBA Certification", "SDVOSB · WOSB · VOSB"],
                  ["Founder", "U.S. Navy Veteran"],
                  ["Prior Firm", "8(a) Certified, 15 Years"],
                  ["Markets", "Federal & Financial Services"],
                  ["UEI", "VV97GEJU6616"],
                  ["CAGE", "22N27"],
                  ["SAM.gov", "Active"],
                  ["Based In", "Pinellas County, FL"],
                ].map(([k, v]) => (
                  <div key={k} className="odtg-glance__row">
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ WHY ODTG ============ */}
      {/* <section className="odtg-section odtg-section--cream odtg-section--tight">
        <div className="odtg-container">
          <Reveal>
            <p className="odtg-eyebrow odtg-eyebrow--center odtg-eyebrow--gold">
              Why ODTG
            </p>
            <h2 className="odtg-h2 odtg-h2--dark odtg-center odtg-h2--sm">
              Advice you can actually use.
            </h2>
          </Reveal>
          <div className="odtg-grid odtg-grid--4 odtg-why">
            {WHY.map((w, i) => (
              <Reveal key={w.title} delay={(i % 4) * 70}>
                <WhyCard {...w} />
              </Reveal>
            ))}
          </div>
        </div>
      </section> */}

      {/* ============ FINAL CTA ============ */}
      <section id="contact" className="odtg-cta">
        <div className="odtg-cta__glow" />
        <div className="odtg-container odtg-cta__inner">
          <div className="odtg-cta__media">
            <Image
              src="/stock-hero.jpg"
              alt="An ODTG advisor ready to help"
              height={100}
              width={100}
            />
          </div>
          <div className="odtg-cta__body">
            <div className="odtg-cta__copy">
              <h2 className="odtg-cta__title">
                Tell us what's slowing your organization down.
              </h2>
              <p className="odtg-cta__sub">
                The first conversation is free, and it usually takes less than
                30 minutes to know whether we can help.
              </p>
              <div className="odtg-cta__contacts">
                <span>
                  <PiEnvelope size={16} /> info@odtg.example
                </span>
                <span>
                  <PiPhone size={16} /> (727) 243-7226
                </span>
                <span>
                  <PiMapPin size={16} /> Pinellas County, FL
                </span>
              </div>
            </div>
            <a
              href="mailto:info@odtg.example"
              className="odtg-btn odtg-btn--gold odtg-btn--lg"
            >
              Send Us a Message <PiArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <Footer />
    </div>
  );
}

/* ============================= SUBCOMPONENTS ============================= */

function FlowStep({
  icon,
  ring,
  label,
  sub,
  solid = false,
}: {
  icon: React.ReactNode;
  ring: string;
  label: string;
  sub: React.ReactNode;
  solid?: boolean;
}) {
  return (
    <div className="odtg-flow__step">
      <div
        className="odtg-flow__ring"
        style={{
          borderColor: ring,
          background: solid ? "rgba(224,169,60,0.12)" : "rgba(46,147,168,0.08)",
          color: ring,
        }}
      >
        {icon}
      </div>
      <span className="odtg-flow__label" style={{ color: ring }}>
        {label}
      </span>
      <span className="odtg-flow__sub">{sub}</span>
    </div>
  );
}

function TrustItem({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: React.ReactNode;
}) {
  return (
    <div className="odtg-trust__item">
      <span className="odtg-trust__icon">{icon}</span>
      <span className="odtg-trust__label">{label}</span>
    </div>
  );
}

function ServiceCard({
  n,
  icon,
  title,
  body,
  tags,
}: {
  n: string;
  icon: React.ReactNode;
  title: string;
  body?: string;
  tags?: string[];
}) {
  return (
    <div className="odtg-service">
      <div className="odtg-service__top">
        <span className="odtg-service__icon">{icon}</span>
        <span className="odtg-service__n">{n}</span>
      </div>
      <h3 className="odtg-service__title">{title}</h3>
      <p className="odtg-service__body">{body}</p>
      <div className="odtg-service__tags">
        {tags?.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </div>
  );
}

function IndustryCard({
  img,
  imgAlt,
  icon,
  title,
  sub,
  items,
  cta,
  highlight = false,
}: {
  img?: string;
  imgAlt?: string;
  icon: React.ReactNode;
  title: string;
  sub: string;
  items: string[];
  cta: string;
  highlight?: boolean;
}) {
  return (
    <div className={`odtg-industry ${highlight ? "odtg-industry--hl" : ""}`}>
      {img && (
        <div className="odtg-industry__media">
          <Image src={img} alt={imgAlt || ""} width={100} height={100} />
          <span className="odtg-industry__media-veil" />
        </div>
      )}
      <div className="odtg-industry__content">
        <div className="odtg-industry__head">
          <span className="odtg-industry__icon">{icon}</span>
          <div>
            <h3 className="odtg-industry__title">{title}</h3>
            <p className="odtg-industry__sub">{sub}</p>
          </div>
        </div>
        <ul className="odtg-industry__list">
          {items.map((it) => (
            <li key={it}>
              <PiCheckCircle size={15} /> {it}
            </li>
          ))}
        </ul>
        <a href="#contact" className="odtg-industry__cta">
          {cta} <PiArrowRight size={15} />
        </a>
      </div>
    </div>
  );
}

function StepCard({
  n,
  icon,
  title,
  body,
}: {
  n: string;
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="odtg-step">
      <span className="odtg-step__icon">{icon}</span>
      <div className="odtg-step__head">
        <span className="odtg-step__n">{n}</span>
        <span className="odtg-step__title">{title}</span>
      </div>
      <p className="odtg-step__body">{body}</p>
    </div>
  );
}

function ChallengeCard({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="odtg-challenge">
      <span className="odtg-challenge__icon">{icon}</span>
      <div>
        <h3 className="odtg-challenge__title">{title}</h3>
        <p className="odtg-challenge__body">{body}</p>
      </div>
    </div>
  );
}

function WhyCard({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="odtg-why__card">
      <span className="odtg-why__icon">{icon}</span>
      <h3 className="odtg-why__title">{title}</h3>
      <p className="odtg-why__body">{body}</p>
    </div>
  );
}

/* ============================= DATA ============================= */

const SERVICES = [
  {
    n: "01",
    icon: <PiFlowArrow size={24} />,
    title: "Workflow Analysis & Redesign",
    body: "Through process modeling and workflow mapping, we document how work actually moves through your organization today. Identitify where it slows down or breaks and design a better future state.",
    // tags: ["Claims", "Case Management", "Records", "Program Workflows"],
  },
  {
    n: "02",
    icon: <PiGearSix size={24} />,
    title: "Process Improvement",
    body: "We reduce unnecessary steps, duplication, delays, and handoff problems — organizational improvement that lets your team spend time on the work, not the workaround. Cut unnecessary steps, duplication, delays, and handoff problems, whether that's a claims workflow, an underwriting queue, or a case backlog.",
    // tags: ["Underwriting", "Case Backlogs", "Service Operations"],
  },
  {
    n: "03",
    icon: <PiUsersThree size={24} />,
    title: "Operations Advisory",
    body: "Grounded in business analysis, we assess how your people, processes, and systems interact and recommend practical improvements you can actually implement.",
    // tags: ["Operating Models", "Cross-Functional Workflows", "Compliance"],
  },
  {
    n: "04",
    icon: <PiClipboardText size={24} />,
    title: "Project & Program Advisory",
    body: "From advisory through hands-on project and program support, we help leadership structure, plan, and monitor the implementation of improvements — so change actually sticks.",
    // tags: ["Transformation Programs", "Operational Initiatives", "Governance"],
  },
];

const STEPS = [
  {
    n: "01",
    icon: <PiChatCircle size={22} />,
    title: "LISTEN",
    body: "You describe what's slow, stuck, or frustrating. We ask questions until we understand the real problem — not just the symptom.",
  },
  {
    n: "02",
    icon: <PiMagnifyingGlass size={22} />,
    title: "ASSESS",
    body: "We document how work flows today, where it bottlenecks, and what it's costing you in time, rework, and missed deadlines.",
  },
  {
    n: "03",
    icon: <PiClipboardText size={22} />,
    title: "DELIVER",
    body: "Clear recommendations, documented processes, and support through implementation. No jargon, no shelf-ware reports.",
  },
];

const CHALLENGES = [
  {
    icon: <PiArrowsClockwise size={20} />,
    title: "Too Many Handoffs",
    body: "Work moves between teams without clear ownership.",
  },
  {
    icon: <PiArrowsClockwise size={20} />,
    title: "Manual Rework",
    body: "People repeatedly enter, verify, or reconcile information.",
  },
  {
    icon: <PiClock size={20} />,
    title: "Process Backlogs",
    body: "Queues grow faster than teams can resolve them.",
  },
  {
    icon: <PiUserMinus size={20} />,
    title: "Unclear Ownership",
    body: "Nobody knows who owns the next decision.",
  },
  {
    icon: <PiFileText size={20} />,
    title: "Documentation Gaps",
    body: "Processes depend on tribal knowledge.",
  },
  {
    icon: <PiShieldWarning size={20} />,
    title: "Compliance Friction",
    body: "Controls and requirements slow work because they're disconnected from the workflow.",
  },
];

const WHY = [
  {
    icon: <PiCompass size={22} />,
    title: "Independent",
    body: "Recommendations aren't tied to selling software or implementation services.",
  },
  {
    icon: <PiCurrencyDollar size={22} />,
    title: "Practical",
    body: "The work focuses on processes, people, systems, and decisions that can actually change.",
  },
  {
    icon: <PiCheckCircle size={22} />,
    title: "Actionable",
    body: "Every engagement ends with a clear understanding of what should happen next.",
  },
  {
    icon: <PiShieldCheck size={22} />,
    title: "Regulated-Environment Experience",
    body: "Experience working where documentation, controls, compliance, and accountability matter.",
  },
];

/* ============================= STYLES ============================= */

const styles = `
:root {
  --navy-900: ${COLORS.navy900};
  --navy-800: ${COLORS.navy800};
  --navy-700: ${COLORS.navy700};
  --gold: ${COLORS.gold};
  --teal: ${COLORS.teal};
  --cream: ${COLORS.cream};
}
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; }
a { text-decoration: none; color: inherit; }



/* ---------- Buttons ---------- */
.odtg-btn {
  display: inline-flex; align-items: center; gap: 8px;
  font-weight: 600; font-size: 15px; line-height: 1;
  padding: 14px 22px; border-radius: 6px;
  transition: transform .2s ease, box-shadow .2s ease, background .2s ease, color .2s ease;
  cursor: pointer; border: 1px solid transparent; white-space: nowrap;
}
.odtg-btn--gold { background: var(--gold); color: #1a1205; box-shadow: 0 6px 18px rgba(224,169,60,.28); }
.odtg-btn--gold:hover { transform: translateY(-2px); box-shadow: 0 10px 26px rgba(224,169,60,.42); background: #edb84e; }
.odtg-btn--ghost { background: transparent; color: #fff; border-color: rgba(255,255,255,.4); }
.odtg-btn--ghost:hover { background: rgba(255,255,255,.08); border-color: #fff; transform: translateY(-2px); }
.odtg-btn--lg { padding: 17px 28px; font-size: 16px; }
.odtg-btn svg { transition: transform .2s ease; }
.odtg-btn:hover svg { transform: translateX(3px); }

/* ---------- Logo ---------- */
.odtg-logo { display: inline-flex; align-items: center; }
.odtg-logo__img { height: 42px; width: auto; display: block; }
.odtg-footer .odtg-logo__img { height: 38px; }

/* ---------- Nav ---------- */


/* ---------- Hero ---------- */
.odtg-hero { position: relative; overflow: hidden; background: linear-gradient(160deg, #0b1d31 0%, #0a1b2e 55%, #0c2136 100%); padding: 84px 0 70px; }
.odtg-hero__glow { position: absolute; right: -10%; top: -20%; width: 620px; height: 620px; border-radius: 50%; background: radial-gradient(circle, rgba(46,147,168,.22), transparent 62%); pointer-events: none; }
.odtg-hero__inner { position: relative; display: grid; grid-template-columns: 1.15fr .85fr; gap: 48px; align-items: center; }

.odtg-hero__title { font-size: clamp(34px, 4.4vw, 54px); line-height: 1.05; font-weight: 800; letter-spacing: -1px; margin: 16px 0 20px; max-width: 15ch; }
.odtg-hero__sub { font-size: 16.5px; line-height: 1.65; color: rgba(255,255,255,.78); max-width: 52ch; margin: 0 0 30px; }
.odtg-hero__actions { display: flex; gap: 14px; flex-wrap: wrap; }

.odtg-eyebrow { font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--gold); margin: 0; }
.odtg-eyebrow--center { text-align: center; }
.odtg-eyebrow--gold { position: relative; display: inline-block; width: 100%; text-align: center; margin-bottom: 18px; }
.odtg-eyebrow--gold::after { content: ""; display: block; width: 34px; height: 2px; background: var(--gold); margin: 8px auto 0; }

/* Hero flow */
.odtg-hero__flow { display: flex; align-items: flex-start; justify-content: center; gap: 6px; }
.odtg-flow__step { display: flex; flex-direction: column; align-items: center; gap: 10px; text-align: center; width: 118px; }
.odtg-flow__ring { width: 92px; height: 92px; border-radius: 50%; border: 2px solid; display: grid; place-items: center; transition: transform .3s ease, box-shadow .3s ease; }
.odtg-hero__flow:hover .odtg-flow__ring { box-shadow: 0 0 0 6px rgba(255,255,255,.03); }
.odtg-flow__step:hover .odtg-flow__ring { transform: translateY(-4px) scale(1.04); }
.odtg-flow__label { font-weight: 800; font-size: 15px; letter-spacing: 1px; }
.odtg-flow__sub { font-size: 12px; color: rgba(255,255,255,.6); line-height: 1.35; }
.odtg-flow__arrow { color: var(--gold); margin-top: 34px; flex-shrink: 0; }

/* ---------- Trust ---------- */
.odtg-trust { background: var(--navy-800); border-top: 1px solid rgba(255,255,255,.06); border-bottom: 1px solid rgba(255,255,255,.06); }
.odtg-trust__inner { display: flex; justify-content: space-between; gap: 20px; padding: 22px 28px; flex-wrap: wrap; }
.odtg-trust__item { display: flex; align-items: center; gap: 12px; flex: 1; min-width: 200px; justify-content: center; position: relative; }
.odtg-trust__item:not(:last-child)::after { content: ""; position: absolute; right: 0; top: 50%; transform: translateY(-50%); height: 32px; width: 1px; background: rgba(255,255,255,.1); }
.odtg-trust__icon { color: var(--gold); display: grid; place-items: center; }
.odtg-trust__label { font-size: 13px; line-height: 1.35; color: rgba(255,255,255,.85); font-weight: 500; }

/* ---------- Sections ---------- */
.odtg-section { padding: 86px 0; }
.odtg-section--tight { padding: 66px 0; }
.odtg-section--light { background: #fff; color: var(--navy-900); }
.odtg-section--cream { background: var(--cream); color: var(--navy-900); }
.odtg-section--navy { background: linear-gradient(180deg, #0c2035, #0a1b2e); position: relative; }
.odtg-h2 { font-size: clamp(26px, 3.1vw, 36px); line-height: 1.18; font-weight: 800; letter-spacing: -.5px; margin: 0 0 18px; }
.odtg-h2--dark { color: var(--navy-900); }
.odtg-h2--sm { font-size: clamp(22px, 2.4vw, 28px); }
.odtg-center { text-align: center; }
.odtg-lead { font-size: 16px; line-height: 1.6; max-width: 62ch; margin: 0 auto 46px; color: #45566a; }
.odtg-lead--muted { color: rgba(255,255,255,.72); }
.odtg-container { width: 100%; max-width: 1180px; margin: 0 auto; padding: 0 28px; }
/* ---------- Grid ---------- */
.odtg-grid { display: grid; gap: 22px; }
.odtg-grid--2 { grid-template-columns: repeat(2, 1fr); }
.odtg-grid--3 { grid-template-columns: repeat(3, 1fr); }
.odtg-grid--4 { grid-template-columns: repeat(4, 1fr); }

/* ---------- Service cards ---------- */
.odtg-service { background: #fff; border: 1px solid #e6ebf1; border-radius: 12px; padding: 26px 24px; height: 100%; transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease; }
.odtg-service:hover { transform: translateY(-5px); box-shadow: 0 18px 40px rgba(10,27,46,.12); border-color: var(--gold); }
.odtg-service__top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; }
.odtg-service__icon { width: 46px; height: 46px; border-radius: 10px; background: var(--navy-800); color: var(--gold); display: grid; place-items: center; transition: background .25s ease; }
.odtg-service:hover .odtg-service__icon { background: var(--gold); color: var(--navy-900); }
.odtg-service__n { font-size: 26px; font-weight: 800; color: #d9e0e8; }
.odtg-service__title { font-size: 18.5px; font-weight: 700; color: var(--navy-900); margin: 0 0 10px; }
.odtg-service__body { font-size: 14.5px; line-height: 1.6; color: #556579; margin: 0 0 18px; }
.odtg-service__tags { display: flex; flex-wrap: wrap; gap: 8px 14px; }
.odtg-service__tags span { font-size: 11.5px; font-weight: 600; letter-spacing: .4px; text-transform: uppercase; color: var(--teal); position: relative; }
.odtg-service__tags span:not(:last-child)::after { content: "·"; margin-left: 14px; color: #c3ccd6; }

/* ---------- Capabilities ---------- */
.odtg-capabilities { margin-top: 34px; background: #eef3f7; border: 1px solid #dde6ee; border-radius: 12px; padding: 22px 26px; text-align: center; }
.odtg-capabilities__label { display: block; font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--teal); margin-bottom: 14px; }
.odtg-capabilities__list { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px 12px; }
.odtg-capabilities__item { font-size: 13.5px; font-weight: 600; color: var(--navy-900); background: #fff; border: 1px solid #dde6ee; border-radius: 20px; padding: 8px 16px; transition: transform .2s ease, border-color .2s ease; }
.odtg-capabilities__item:hover { transform: translateY(-2px); border-color: var(--gold); }

/* ---------- Who we work with ---------- */
.odtg-who { margin-top: 8px; }
.odtg-industry { border-radius: 14px; overflow: hidden; height: 100%; border: 1px solid rgba(255,255,255,.1); background: rgba(255,255,255,.03); transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease; display: flex; }
.odtg-industry--hl { background: linear-gradient(155deg, rgba(46,147,168,.14), rgba(224,169,60,.06)); border-color: rgba(46,147,168,.4); }
.odtg-industry:hover { transform: translateY(-5px); box-shadow: 0 20px 44px rgba(0,0,0,.35); border-color: var(--gold); }
.odtg-industry:hover .odtg-industry__media img { transform: scale(1.06); }
.odtg-industry__media { position: relative; flex: 0 0 38%; min-height: 260px; overflow: hidden; }
.odtg-industry__media img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; transition: transform .5s ease; }
.odtg-industry__media-veil { position: absolute; inset: 0; background: linear-gradient(120deg, rgba(10,27,46,.15), rgba(10,27,46,.55)); }
.odtg-industry__content { flex: 1; padding: 30px 28px; min-width: 0; }
.odtg-industry__head { display: flex; gap: 14px; align-items: center; margin-bottom: 20px; }
.odtg-industry__icon { width: 46px; height: 46px; border-radius: 10px; display: grid; place-items: center; background: rgba(224,169,60,.14); color: var(--gold); flex-shrink: 0; }
.odtg-industry__title { font-size: 19px; font-weight: 700; margin: 0 0 3px; }
.odtg-industry__sub { font-size: 13px; color: rgba(255,255,255,.6); margin: 0; }
.odtg-industry__list { list-style: none; padding: 0; margin: 0 0 22px; display: grid; gap: 11px; }
.odtg-industry__list li { display: flex; align-items: center; gap: 9px; font-size: 14.5px; color: rgba(255,255,255,.86); }
.odtg-industry__list svg { color: var(--gold); flex-shrink: 0; }
.odtg-industry__cta { display: inline-flex; align-items: center; gap: 7px; font-size: 13.5px; font-weight: 700; color: var(--gold); letter-spacing: .3px; transition: gap .2s ease; }
.odtg-industry__cta:hover { gap: 12px; }

/* ---------- Steps ---------- */
.odtg-steps { display: flex; align-items: stretch; justify-content: center; gap: 8px; margin-bottom: 30px; }
.odtg-steps__cell { flex: 1; max-width: 300px; }
.odtg-steps__arrow { color: var(--gold); align-self: center; flex-shrink: 0; }
.odtg-step { text-align: left; padding: 8px 12px; height: 100%; }
.odtg-step__icon { width: 52px; height: 52px; border-radius: 50%; background: var(--navy-800); color: var(--gold); display: grid; place-items: center; margin-bottom: 16px; transition: transform .25s ease; }
.odtg-steps__cell:hover .odtg-step__icon { transform: scale(1.08) translateY(-2px); }
.odtg-step__head { display: flex; align-items: baseline; gap: 8px; margin-bottom: 8px; }
.odtg-step__n { font-size: 13px; font-weight: 800; color: var(--teal); }
.odtg-step__title { font-size: 17px; font-weight: 700; color: var(--navy-900); letter-spacing: .5px; }
.odtg-step__body { font-size: 14.5px; line-height: 1.6; color: #556579; margin: 0; }

.odtg-tags { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; }
.odtg-tag { font-size: 12px; font-weight: 600; letter-spacing: .4px; text-transform: uppercase; color: var(--teal); border: 1px solid #d5dee7; border-radius: 16px; padding: 6px 14px; transition: border-color .2s ease, color .2s ease; }
.odtg-tag:hover { border-color: var(--gold); color: var(--gold); }

/* ---------- Challenges ---------- */
.odtg-challenges { margin-top: 8px; }
.odtg-challenge { display: flex; gap: 14px; align-items: flex-start; background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.08); border-radius: 12px; padding: 22px 20px; height: 100%; transition: transform .25s ease, border-color .25s ease, background .25s ease; }
.odtg-challenge:hover { transform: translateY(-4px); border-color: var(--gold); background: rgba(255,255,255,.05); }
.odtg-challenge__icon { width: 40px; height: 40px; border-radius: 9px; background: rgba(224,169,60,.12); color: var(--gold); display: grid; place-items: center; flex-shrink: 0; }
.odtg-challenge__title { font-size: 15.5px; font-weight: 700; margin: 2px 0 6px; }
.odtg-challenge__body { font-size: 13.5px; line-height: 1.55; color: rgba(255,255,255,.68); margin: 0; }

/* ---------- About ---------- */
.odtg-about__title { margin-bottom: 40px; }
.odtg-about { display: grid; grid-template-columns: 220px 1fr 260px; gap: 34px; align-items: start; }
.odtg-about__photo-inner { width: 100%; aspect-ratio: 4/5; border-radius: 12px; overflow: hidden; border: 3px solid #fff; box-shadow: 0 14px 34px rgba(10,27,46,.18); background: #0e2438; }
.odtg-about__photo-inner img { width: 100%; height: 100%; object-fit: cover; display: block; }
.odtg-about__name { font-size: 20px; font-weight: 800; color: var(--navy-900); margin: 0 0 4px; }
.odtg-about__role { font-size: 13px; color: var(--teal); font-weight: 600; margin: 0 0 18px; line-height: 1.5; }
.odtg-about__p { font-size: 14.5px; line-height: 1.68; color: #4a5a6d; margin: 0 0 14px; }
.odtg-about__p--em { font-style: italic; color: var(--navy-900); border-left: 3px solid var(--gold); padding-left: 16px; }
.odtg-glance { background: #fff; border: 1px solid #e2e9f0; border-radius: 12px; padding: 22px 20px; box-shadow: 0 10px 28px rgba(10,27,46,.06); }
.odtg-glance__label { font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--gold); margin: 0 0 14px; }
.odtg-glance__list { margin: 0; }
.odtg-glance__row { display: flex; justify-content: space-between; gap: 12px; padding: 9px 0; border-bottom: 1px solid #eef2f6; }
.odtg-glance__row:last-child { border-bottom: none; }
.odtg-glance__row dt { font-size: 13px; color: #7a8798; }
.odtg-glance__row dd { font-size: 13px; font-weight: 700; color: var(--navy-900); margin: 0; text-align: right; }

/* ---------- Why ---------- */
.odtg-why { margin-top: 8px; }
.odtg-why__card { text-align: center; padding: 20px 16px; transition: transform .25s ease; }
.odtg-why__card:hover { transform: translateY(-4px); }
.odtg-why__icon { width: 54px; height: 54px; border-radius: 50%; background: #fff; border: 1px solid #e2e9f0; color: var(--teal); display: grid; place-items: center; margin: 0 auto 16px; box-shadow: 0 8px 20px rgba(10,27,46,.06); transition: background .25s ease, color .25s ease, border-color .25s ease; }
.odtg-why__card:hover .odtg-why__icon { background: var(--gold); color: var(--navy-900); border-color: var(--gold); }
.odtg-why__title { font-size: 12px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase; color: var(--navy-900); margin: 0 0 10px; }
.odtg-why__body { font-size: 13.5px; line-height: 1.55; color: #55657a; margin: 0; }

/* ---------- Final CTA ---------- */
.odtg-cta { position: relative; overflow: hidden; background: linear-gradient(120deg, #0b1d31, #123047); padding: 60px 0; }
.odtg-cta__glow { position: absolute; left: 12%; top: -40%; width: 480px; height: 480px; border-radius: 50%; background: radial-gradient(circle, rgba(224,169,60,.14), transparent 62%); pointer-events: none; }
.odtg-cta__inner { position: relative; display: grid; grid-template-columns: 340px 1fr; gap: 44px; align-items: center; }
.odtg-cta__media { border-radius: 14px; overflow: hidden; aspect-ratio: 16/11; box-shadow: 0 18px 44px rgba(0,0,0,.4); border: 1px solid rgba(255,255,255,.1); }
.odtg-cta__media img { width: 100%; height: 100%; object-fit: cover; display: block; }
.odtg-cta__body { display: flex; align-items: center; justify-content: space-between; gap: 30px; flex-wrap: wrap; }
.odtg-cta__title { font-size: clamp(24px, 2.8vw, 32px); font-weight: 800; margin: 0 0 12px; letter-spacing: -.5px; }
.odtg-cta__sub { font-size: 15.5px; color: rgba(255,255,255,.75); max-width: 48ch; margin: 0 0 18px; line-height: 1.55; }
.odtg-cta__contacts { display: flex; gap: 24px; flex-wrap: wrap; }
.odtg-cta__contacts span { display: inline-flex; align-items: center; gap: 8px; font-size: 14px; color: rgba(255,255,255,.85); }
.odtg-cta__contacts svg { color: var(--gold); }

/* ---------- Footer ---------- */


/* ---------- Responsive ---------- */
@media (max-width: 960px) {
  .odtg-hero__inner { grid-template-columns: 1fr; gap: 40px; }
  .odtg-hero__flow { justify-content: flex-start; }
  .odtg-about { grid-template-columns: 1fr; }
  .odtg-about__photo { max-width: 220px; }
  .odtg-grid--4 { grid-template-columns: repeat(2, 1fr); }
  .odtg-nav__links { display: none; }
  .odtg-cta__inner { grid-template-columns: 1fr; gap: 30px; }
  .odtg-cta__media { max-width: 420px; }
}
@media (max-width: 760px) {
  .odtg-section { padding: 60px 0; }
  .odtg-grid--2, .odtg-grid--3 { grid-template-columns: 1fr; }
  .odtg-steps { flex-direction: column; align-items: stretch; }
  .odtg-steps__arrow { transform: rotate(90deg); align-self: center; }
  .odtg-steps__cell { max-width: 100%; }
  .odtg-trust__item::after { display: none; }
  .odtg-cta__body { flex-direction: column; align-items: flex-start; }
  .odtg-hero__flow { flex-wrap: wrap; gap: 18px; }
  .odtg-flow__arrow { display: none; }
  .odtg-industry { flex-direction: column; }
  .odtg-industry__media { flex-basis: auto; width: 100%; min-height: 180px; }
}
@media (prefers-reduced-motion: reduce) {
  * { scroll-behavior: auto !important; }
  html { scroll-behavior: auto; }
}
`;
