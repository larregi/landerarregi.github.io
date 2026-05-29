/* global React, Icon */
// Hero + Marquee

function Hero({ direction }) {
  return (
    <section className="lp-hero" id="top">
      <div className="lp-wrap">
        <div className="lp-hero__row lp-reveal">
          <span className="lp-hero__loc">
            <span className="lp-hero__avail-dot" aria-hidden="true" style={{ width: "16px", height: "16px", textAlign: "center" }} />
            Barcelona, Spain
          </span>
        </div>

        <h1 className="lp-hero__display lp-reveal" data-delay="1">
          Shaping products with <em>data-driven decisions,</em><br />
          iterative design, and <span className="accent">user-centred</span> thinking.
        </h1>

        <div className="lp-hero__sub lp-reveal" data-delay="2">
          <span className="lp-hero__role">
            Senior product designer crafting clarity for fintech, transit and SaaS teams.
          </span>
          <div className="lp-hero__sub-meta">
            <div><b>8+</b>years designing</div>
            <div><b>20+</b>projects</div>
          </div>
        </div>
      </div>
    </section>);

}

function Marquee() {
  const words = ['Lander Arregi', 'Product Designer', 'UX & UI', 'Design Systems', 'Lander Arregi', 'Product Designer', 'UX & UI', 'Design Systems'];
  return (
    <section className="lp-marquee" aria-hidden="true">
      <div className="lp-marquee__track">
        {[...words, ...words].map((w, i) =>
        <span key={i} className="lp-marquee__item">
            {w}
            <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="4" /></svg>
          </span>
        )}
      </div>
    </section>);

}

Object.assign(window, { Hero, Marquee });