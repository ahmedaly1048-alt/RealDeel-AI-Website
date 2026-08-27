"use client";

import { useState } from "react";

const TELEGRAM_URL = "https://t.me/YourBotUsername?start=website";

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

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
          <span className="brand-mark">RD</span>
          <span>ReaLDeeL <strong>AI</strong></span>
        </a>

        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="nav-button"
        >
          Try It Free
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
              href={TELEGRAM_URL}
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
            href={TELEGRAM_URL}
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
          href={TELEGRAM_URL}
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