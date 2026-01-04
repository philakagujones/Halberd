"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

const NAV_ITEMS = [
  { id: "how-we-work", label: "How We Work" },
  { id: "our-philosophy", label: "Our Philosophy" },
];

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // simple reveal on scroll
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".reveal"));
    const onScroll = () => {
      const threshold = window.innerHeight * 0.85;
      els.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < threshold) {
          el.classList.add("is-visible");
        }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavClick = (id) => {
    scrollToId(id);
    setMobileOpen(false);
  };

  return (
    <div className={styles.page}>
      {/* NAVBAR */}
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerInner}>
            <div
              onClick={() => handleNavClick("hero")}
              style={{ cursor: "pointer" }}
            >
              <Image
                src="/halberd-logo.png"
                alt="Halberd Solutions Logo"
                width={150}    // adjust to desire, have to keep both proportional tho
                height={84.38}   
                priority
              />
            </div>

            <nav className={styles.navMain}>
              <div className={styles.navLinks}>
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={styles.navLink}
                    onClick={() => handleNavClick(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <button
                type="button"
                className="button button-secondary"
                onClick={() => handleNavClick("work-with-halberd")}
              >
                Work with Halberd
              </button>
            </nav>

            <button
              type="button"
              className={styles.navToggle}
              aria-label="Toggle navigation"
              onClick={() => setMobileOpen((o) => !o)}
            >
              <div className={styles.navToggleBars}>
                <span />
                <span />
                <span />
              </div>
            </button>
          </div>

          {mobileOpen && (
            <div className="container">
              <div className={styles.navMobile}>
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={styles.navLink}
                    style={{ textAlign: "left" }}
                    onClick={() => handleNavClick(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  type="button"
                  className="button button-secondary"
                  onClick={() => handleNavClick("work-with-halberd")}
                  style={{ alignSelf: "flex-start", marginTop: "0.5rem" }}
                >
                  Work with Halberd
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className={styles.hero}>
        <div className="container">
          <div className={`reveal ${styles.heroInner}`}>
            <div className={styles.heroLeft}>
              <h1 className={`heading-xl ${styles.heroTitle}`}>
                Your startup survived the incident. Now, let’s make sure you
                survive the recovery.
              </h1>
              <p className={`body-lg ${styles.heroBody}`}>
                Halberd serves as the “interim CRO” for startups recovering from
                operational failures or vendor issues. We build the governance, privacy, 
                and cyber controls you needed yesterday, so you can get back to building value.
              </p>
              <div className={styles.heroCTA}>
                <button
                  type="button"
                  className="button button-primary"
                  onClick={() => handleNavClick("contact")}
                >
                  Book Your No-Judgement Triage
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING / OFFER */}
      <section
        id="work-with-halberd"
        className={`${styles.pricingSection} section`}
      >
        <div className="container">
          <div className={`card reveal ${styles.pricingCard}`}>
            {/* LEFT COLUMN – OVERVIEW */}
            <div className={styles.pricingCol}>
              <div className={styles.pricingLeftTitle}>
                Operational Risk Management
              </div>
              <p className={styles.pricingLeftBody}>
                Work with a team of risk professionals who will audit your present and
                build for your future, without sacrificing your agility.
              </p>
            </div>

            {/* MIDDLE COLUMN – WHAT YOU GET */}
            <div className={styles.pricingCol}>
              <div className={styles.pricingWhatTitle}>What you get:</div>
              <ul className={styles.pricingWhatList}>
                <li>Complete data &amp; vendor risk assessment</li>
                <li>
                  Creation of "The Core 5" Policy Documents (Privacy, Access, Incident Response, Vendor, Data)
                </li>
                <li>Remediation roadmap</li>
                <li>Monthly vendor security reviews</li>
                <li>
                  Fractional CRO availability for board meetings and investor Q&A
                </li>
              </ul>
            </div>

            {/* RIGHT COLUMN – PLANS */}
            <div className={styles.pricingColRight}>
              <div className={styles.pricingOption}>
                <div className={styles.pricingPlanTitle}>
                  The “Compliance &amp; Control” Retainer
                </div>
                <p className={styles.pricingMeta}>
                  Best for: Startups that need ongoing oversight without the headcount.
                </p>
                <p className={styles.pricingPrice}>$5,000 / month</p>
                <p className={styles.pricingMeta}>
                  · 3 month minimum
                </p>
              </div>

              <div className={styles.pricingOption}>
                <div className={styles.pricingPlanTitle}>
                  The “Rapid Triage” Sprint (30 days)
                </div>
                <p className={styles.pricingMeta}>
                  Best for: Startups reeling from a recent scare or preparing for a specific audit.
                </p>
                <p className={styles.pricingPrice}>$12,000</p>
                <p className={styles.pricingMeta}>
                  · One-time
                </p>
              </div>
            </div>
          </div>
  

          <div className={`reveal ${styles.pricingBelow}`}>
            <div className="pill">
              <span><strong>→</strong></span>
              <span><strong>90% less than</strong> a senior risk manager salary</span>
              <span><strong>→</strong></span>
              <span>
                <strong>Less than 1%</strong> of the cost of breaches and third-party
                failures
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION (OUR PHILOSOPHY 1) */}
      <section
        id="our-philosophy"
        className={`${styles.problemSection} section`}
      >
        <div className="container">
          <div className={`reveal ${styles.problemInner}`}>
            <p className="eyebrow">Problem</p>
            <h2 className={styles.problemTitle}>
              IGNORING OPERATIONAL RISK WORKS… UNTIL IT DOESN’T.
            </h2>
            <p className={styles.problemSubtitle}>
              You thought you were too small to be a target. You thought your
              vendors could never do wrong. Then reality hit.
            </p>
            <h2 className={styles.problemTitle2}>
              Now you're facing:
            </h2>
            <div className={styles.problemCards}>
              <article className={styles.problemCard}>
                <div className={styles.problemCardTop}></div>
                <h3 className={styles.problemCardTitle}>VENDOR BLINDNESS</h3>
                <p className={styles.problemCardBody}>
                  You have no idea if third parties are living up to expectations, pose a concentration risk, 
                  or if their tools have access to your critical data.
                </p>
              </article>
              <article className={styles.problemCard}>
                <div className={styles.problemCardTop2}></div>
                <h3 className={styles.problemCardTitle}>DATA CHAOS</h3>
                <p className={styles.problemCardBody}>
                  You don’t know where your sensitive IP lives, how it gets there, and who has permission to see it.
                </p>
              </article>
              <article className={styles.problemCard}>
                <div className={styles.problemCardTop3}></div>
                <h3 className={styles.problemCardTitle}>REACTIVE PANIC</h3>
                <p className={styles.problemCardBody}>
                  Every time a risk emerges, it freezes your company. Your whole team drops what they're doing to 
                  fight fires because there is no playbook.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* TRAP STRIP (OUR PHILOSOPHY 2) */}
      <section className={`${styles.trapSection} section`}>
        <div className="container">
          <div className={`reveal ${styles.trapInner}`}>
            <p className={styles.trapTitle}>The trap</p>
            <p className={styles.trapBody}>
              <strong>You know you need structure, but you can’t afford a $250k
              enterprise CRO or a Big Four consulting firm to spend six months
              writing PowerPoint slides.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* HOW WE WORK / SERVICES */}
      <section
        id="how-we-work"
        className={`${styles.servicesSection} section`}
      >
        <div className="container">
          <div className={`reveal ${styles.servicesIntro}`}>
            <p className="eyebrow">How can we help?</p>
            <h2 className="heading-lg">
              PRACTICAL GOVERNANCE. DEPLOYED IN WEEKS, NOT MONTHS.
            </h2>
            <p className="body-lg" style={{ marginTop: "0.8rem" }}>
              Halberd is the “Operational Triage” team for lean startups. We don't just tell you what 
              went wrong: we implement the controls to ensure it doesn't happen again.
            </p>
            <h2 className="heading-m">
              We replace "hope" with documented process.
            </h2>
          </div>

          <div className={`reveal ${styles.servicesCards}`}>
  
            <article className={styles.serviceCard}>
              <h3 className={styles.serviceCardTitle}>
                Data Privacy & Cyber Governance
              </h3>

              <p className={styles.serviceLead}>
                We map your data flow and lock down your perimeter.
              </p>

              <hr className={styles.serviceDivider} />

              <ul className={styles.serviceList}>
                <li>Data Mapping: We inventory exactly what data you collect and where it lives.</li>
                <li>Access Control Implementation: We deploy RBAC so interns don’t have admin keys.</li>
                <li>Privacy Framework: We write and deploy your internal data-handling policies to ensure you aren't liable for negligence.</li>
              </ul>
            </article>


            <article className={styles.serviceCard}>
              <h3 className={styles.serviceCardTitle}>
                Third-Party Risk Containment (TPRM)
              </h3>

              <p className={styles.serviceLead}>
                We vet your supply chain, so you stop inheriting other people's risks.
              </p>

              <hr className={styles.serviceDivider} />

              <ul className={styles.serviceList}>
                <li>Vendor Audit: We review your most critical vendors, partnerships, and/or agreements to identify security gaps.</li>
                <li>Contract Triage: We help you renegotiate third-party contracts to enforce SLAs, protect operations, and mitigate risks.</li>
                <li>Offboarding Protocols: We ensure that when you fire a vendor, it's done seamlessly.</li>
              </ul>
            </article>


            <article className={styles.serviceCard}>
              <h3 className={styles.serviceCardTitle}>
                Operational Resilience Playbooks
              </h3>

              <p className={styles.serviceLead}>
                We write the manual for “what to do when things break.”
              </p>

              <hr className={styles.serviceDivider} />

              <ul className={styles.serviceList}>
                <li>Incident Response Plan: A step-by-step guide for your team during a breach, outage, or risk event.</li>
                <li>Business Continuity Planning: Protocols to keep the business running even if a key system goes down.</li>
                <li>Centre of Governance: We create a committee of risk champions within your organization to break down silos, unearth insight, and promote ongoing risk planning.</li>
              </ul>
            </article>

          </div>
        </div>
      </section>

      {/* CTA STRIP + CONTACT */}
      <section id="contact" className={`${styles.ctaSection} section`}>
        <div className="container">
          <div className={`reveal ${styles.ctaInner}`}>
            <p className={styles.ctaTitle}>Let’s talk</p>
            <h2 className={`heading-lg ${styles.ctaHeading}`}>
              Get in touch with some of the industry’s finest.
            </h2>
            <div style={{ marginTop: "1.5rem" }}>
              <button
                type="button"
                className="button button-primary"
                onClick={() => scrollToId("contact")}
              >
                Book Your No-Judgement Triage
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerInner}>
            <div>
              <div className={styles.footerBrandName}>Halberd Solutions</div> {/* should probably logo here */}
              <span>© {new Date().getFullYear()} all rights reserved</span>
              <p className={styles.footerSmall}>
                (social links here)
              </p>
            </div>

            <div>
              <div className={styles.footerColumnTitle}>Navigation</div>
              <ul className={styles.footerList}>
                <li onClick={() => handleNavClick("how-we-work")}>
                  Our Team
                </li>
                <li onClick={() => handleNavClick("our-philosophy")}>
                  Resources
                </li>
                <li onClick={() => handleNavClick("work-with-halberd")}>
                  Areas of Practice
                </li>
                <li onClick={() => handleNavClick("work-with-halberd")}>
                  Contact Us
                </li>
              </ul>
            </div>

            <div>
              <div className={styles.footerColumnTitle}>Information</div>
              <ul className={styles.footerList}>
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
              </ul>
            </div>
          </div>

          {/* <div className={styles.footerBottom}>
            <span>© {new Date().getFullYear()} all rights reserved</span>
          </div> */}
        </div>
      </footer>
    </div>
  );
}