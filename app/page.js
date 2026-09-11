"use client";

import { useEffect, useState } from "react";

// Direct WhatsApp chat - used for the top-right nav button specifically,
// since not everyone has Telegram. Prefilled with a starter message.
const WHATSAPP_URL =
  "https://wa.me/2348034434011?text=" +
  encodeURIComponent("Hi, I'm interested in RealDeel AI Trading Bot!");

// One tracked channel invite link per source - clicking any of these opens
// Telegram's native "Request to Join" popup directly (no bot chat first).
const CHANNEL_LINKS = {
  ig: "https://t.me/+x7RWkjDU0SoxNTY8",
  fb: "https://t.me/+shUUrGpELkdkODhk",
  x: "https://t.me/+BLwrnCE9KVJiMzc0",
  tiktok: "https://t.me/+V6N9f_gqx5tkYzY0",
  landing: "https://t.me/+zFFTWUnQvTthNmE0",
};

const DEFAULT_SOURCE = "landing";

// Reads ?src=ig (preferred - put this on every ad/bio link pointing here)
// or falls back to loosely matching common utm_source values, so this still
// works even if ads were tagged with utm_source=instagram/facebook/etc.
// instead of the exact "ig"/"fb"/"x"/"tiktok" keys.
function detectSource() {
  if (typeof window === "undefined") return DEFAULT_SOURCE;

  const params = new URLSearchParams(window.location.search);
  const raw = (params.get("src") || params.get("utm_source") || "")
    .trim()
    .toLowerCase();

  if (CHANNEL_LINKS[raw]) return raw;

  if (raw.includes("insta")) return "ig";
  if (raw.includes("facebook") || raw === "fb") return "fb";
  if (raw.includes("twitter") || raw === "x") return "x";
  if (raw.includes("tiktok")) return "tiktok";

  return DEFAULT_SOURCE;
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);
  const [channelUrl, setChannelUrl] = useState(CHANNEL_LINKS[DEFAULT_SOURCE]);

  useEffect(() => {
    setChannelUrl(CHANNEL_LINKS[detectSource()]);
  }, []);

  const faqs = [
    {
      question: "Is the AI trading bot really free to use?",
      answer:
        "There is no subscription fee charged for access to the RealDeel AI bot. A compatible trading account and server/VPS infrastructure may be required.",
    },
    {
      question: "Do I need any trading experience to use ReaLDeel AI Bot?",
      answer:
        "No. Even with zero knowledge and experience, you can use the bot because everything is automated. We will share materials that can improve your trading knowledge (ebooks and videos) if you wish to know more about trading.",
    },
    {
      question: "Do I need to manually place trades?",
      answer:
        "No. Once the system is configured and activated, trade execution is automated according to the bot's programmed strategy.",
    },
    {
      question: "Do I remain in control of my trading account?",
      answer:
        "Yes. Your funds remain in your compatible trading account. You retain control of your account and are responsible for your account decisions.",
    },
    {
      question: "Can I withdraw my funds?",
      answer:
        "Withdrawal processing is completely handled by you. It is instant and there are no charges.",
    },
    {
      question: "What do I need to get started?",
      answer:
        "Start the RealDeel AI onboarding process on Telegram. You will be guided through compatibility, setup requirements, and activation by our support.",
    },
  ];

  return (
    <main>
      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#" className="brand">
          <img src="/realdeel logo.jpeg" alt="ReaLDeeL AI Logo" style={{ height: '82px', width: 'auto' }} />
        </a>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="nav-button nav-button-whatsapp"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-1.746-.874-2.892-1.56-4.042-3.539-.306-.526.306-.489.874-1.627.099-.199.05-.372-.05-.52-.099-.15-.596-1.437-.818-1.968-.216-.516-.436-.446-.6-.455h-.51c-.173 0-.446.065-.678.293-.232.229-.882.867-.882 2.115s.906 2.454 1.033 2.625c.126.172 1.75 2.68 4.26 3.65 2.51.97 2.51.647 3.32.57.81-.075 2.613-1.07 2.98-2.108.365-1.037.365-1.928.256-2.114-.11-.198-.3-.297-.6-.446z" />
            <path d="M12 2C6.477 2 2 6.477 2 12c0 1.82.49 3.53 1.34 5.006L2 22l5.146-1.35A9.94 9.94 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.94 7.94 0 01-4.06-1.11l-.29-.17-3.06.8.82-2.99-.19-.31A7.96 7.96 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" />
          </svg>
          WhatsApp
        </a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="eyebrow">AUTOMATED TRADING TECHNOLOGY</div>

          <h1>
            LET AI HANDLE
            <span> THE TRADING.</span>
            <br />
            YOU STAY IN CONTROL.
          </h1>

          <p className="hero-text">
            Experience automated trade execution with the RealDeel AI trading
            system. The bot follows its configured strategy while your trading
            account remains yours.
          </p>

          <div className="hero-actions">
            <a
              href={channelUrl}
              target="_blank"
              rel="noreferrer"
              className="primary-button"
            >
              🤖 TRY THE BOT FREE
            </a>
          </div>

          <p className="small-note">
            No subscription fee for using the bot. A compatible trading account
            and server/VPS infrastructure may be required.
          </p>
        </div>

        <div className="hero-visual">
          <div className="glow"></div>

          <div className="bot-card">
            <div className="bot-status">
              <span className="status-dot"></span>
              AI SYSTEM ACTIVE
            </div>

            <div className="chart">
              <div className="chart-grid"></div>

              <div className="candles">
                {[42, 68, 35, 82, 55, 92, 48, 76, 60, 96, 72, 110].map(
                  (height, index) => (
                    <span
                      key={index}
                      className={`candle ${index % 3 === 0 ? "down" : ""}`}
                      style={{ height: `${height}px` }}
                    ></span>
                  )
                )}
              </div>

              <div className="chart-line"></div>
            </div>

            <div className="bot-footer">
              <div>
                <small>MODE</small>
                <strong>AUTOMATED</strong>
              </div>
              <div>
                <small>EXECUTION</small>
                <strong>AI MANAGED</strong>
              </div>
            </div>
          </div>

          <div className="floating-card card-one">
            <span>🤖</span>
            <div>
              <small>TRADE EXECUTION</small>
              <strong>Automated</strong>
            </div>
          </div>

          <div className="floating-card card-two">
            <span>🔐</span>
            <div>
              <small>ACCOUNT</small>
              <strong>You Control It</strong>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section benefits">
        <div className="section-heading">
          <div className="eyebrow">WHY REALDEEL AI</div>
          <h2> <p>AI EXECUTES.</p> <p> YOU REMAIN IN CONTROL.</p> </h2>
          <p>
            A structured automated approach designed to reduce manual execution
            and emotional decision-making.
          </p>
        </div>

        <div className="benefit-grid">
          <article className="benefit-card">
            <div className="icon">🤖</div>
            <h3>Automated Execution</h3>
            <p>
              The system can execute trades automatically according to its
              configured strategy.
            </p>
          </article>

          <article className="benefit-card">
            <div className="icon">🧠</div>
            <h3>Rule-Based Decisions</h3>
            <p>
              The system follows programmed logic rather than fear, greed,
              hesitation, or impulsive decisions.
            </p>
          </article>

          <article className="benefit-card">
            <div className="icon">🔐</div>
            <h3>Your Account, Your Control</h3>
            <p>
              Your trading capital remains in your compatible trading account.
            </p>
          </article>

          <article className="benefit-card">
            <div className="icon">💸</div>
            <h3>Access to Your Funds</h3>
            <p>
              You can manage your account and request withdrawals through your
              broker, subject to applicable terms and processing procedures.
            </p>
          </article>
        </div>
      </section>

      {/* CONTROL SECTION */}
      <section className="control-section">
        <div className="control-content">
          <div className="eyebrow light">AUTOMATION WITHOUT GIVING UP CONTROL</div>

          <h2>YOUR FUNDS STAY IN YOUR TRADING ACCOUNT.</h2>

          <p>
            RealDeel AI is designed to automate trading activity. Your broker account remains separate, allowing only you to access
            your balance and manage your account.
          </p>

          <div className="control-points">
            <span>✓ Monitor your account</span>
            <span>✓ Manage your balance</span>
            <span>✓ Withdraw profits instantly!</span>
          </div>

          <a
            href={channelUrl}
            target="_blank"
            rel="noreferrer"
            className="gold-button"
          >
            START ON TELEGRAM →
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq-section">
        <div className="section-heading">
          <div className="eyebrow">QUESTIONS</div>
          <h2>FREQUENTLY ASKED QUESTIONS</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${openFaq === index ? "open" : ""}`}
              key={faq.question}
            >
              <button
                onClick={() =>
                  setOpenFaq(openFaq === index ? null : index)
                }
              >
                {faq.question}
                <span>{openFaq === index ? "−" : "+"}</span>
              </button>

              {openFaq === index && <p>{faq.answer}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="eyebrow light">REALDEEL AI</div>

        <h2>READY TO EXPLORE AUTOMATED TRADING?</h2>

        <p>
          Start your guided onboarding and learn what you need to get started.
        </p>

        <a
          href={channelUrl}
          target="_blank"
          rel="noreferrer"
          className="primary-button"
        >
          🤖 TRY THE BOT FREE
        </a>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-brand">
          <span className="brand-mark">RD</span>
          ReaLDeeL <strong>AI</strong>
        </div>

        <p>
          Automated trading involves risk. Past or simulated performance does
          not guarantee future results.
        </p>

        <p className="copyright">
          © {new Date().getFullYear()} RealDeel AI. All rights reserved.
        </p>
      </footer>
    </main>
  );
}