/* global React, Icon */
// Projects: sticky scroll (default), alternating, grid

const PROJECTS = [
  {
    id: 'justride',
    n: '01',
    company: 'Masabi',
    title: 'Seamless fare payments across every mode of transport.',
    desc: 'Helped a global mobility platform unify ticketing, validation and payment flows for 100+ transit agencies — research, prototyping and an end-to-end UI refresh.',
    tags: ['Research', 'UX', 'UI', 'Design System'],
    image: 'assets/project-justride-2.png',
  },
  {
    id: 'tickmill',
    n: '02',
    company: 'Tickmill',
    title: 'Bringing transparency to premium trading products.',
    desc: 'Redesigned a complex trading dashboard with clarity-first information architecture and a calm, focused interface for retail traders.',
    tags: ['Clickable Prototype', 'UX', 'UI'],
    image: 'assets/project-justride-1.png',
  },
  {
    id: 'hubpay',
    n: '03',
    company: 'Hubpay',
    title: 'Sending money abroad — without the friction or the fees.',
    desc: 'Reimagined onboarding, transfers and KYC for an MENA-focused fintech. Shipped a multi-currency wallet and a design system that scaled across 6 squads.',
    tags: ['UX', 'UI', 'Design System', 'Prototype'],
    image: 'assets/project-hubpay-1.png',
  },
  {
    id: 'ace',
    n: '04',
    company: 'ACE for Unions',
    title: 'Digitizing trade work for labor unions.',
    desc: 'From user testing through clickable prototype — disrupting how unions onboard contractors, manage projects, and pay members.',
    tags: ['User Testing', 'Wireframing', 'Design System'],
    image: 'assets/project-hubpay-2.png',
  },
];

function StickyWorks() {
  return (
    <section className="lp-section lp-sticky" id="work">
      <div className="lp-wrap">
        <div className="lp-section__head lp-reveal">
          <span className="lp-kicker">Selected work</span>
          <span className="lp-kicker-line" />
          <span className="lp-kicker" style={{ flex: '0 0 auto' }}>2020 — 2026</span>
        </div>

        {PROJECTS.map((p) => (
          <div className="lp-sticky__grid" key={p.id} style={{ marginBottom: 120 }}>
            <div className="lp-sticky__panel lp-reveal">
              <span className="lp-sticky__pill">
                <span className="lp-sticky__num">{p.n}</span>
                <span>/</span>
                <span>{p.company}</span>
              </span>
              <h3 className="lp-sticky__title">{p.title}</h3>
              <p className="lp-sticky__desc">{p.desc}</p>
              <div className="lp-sticky__tags">
                {p.tags.map((t) => <span className="lp-chip" key={t}>{t}</span>)}
              </div>
              <a className="lp-sticky__cta" href={p.id === 'justride' ? 'work/justride.html' : `#${p.id}`}>
                View case study
                <span className="lp-sticky__cta-arrow"><Icon name="arrow" size={12} /></span>
              </a>
            </div>
            <div className="lp-sticky__media lp-reveal" data-delay="1">
              <div className="lp-sticky__shot">
                <img src={p.image} alt={`${p.company} preview`} loading="lazy" />
              </div>
              <div className="lp-sticky__shot">
                <img src={p.image} alt="" aria-hidden="true" loading="lazy" style={{ objectPosition: 'center bottom' }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AlternatingWorks() {
  return (
    <section className="lp-section" id="work">
      <div className="lp-wrap">
        <div className="lp-section__head lp-reveal">
          <span className="lp-kicker">Selected work</span>
          <span className="lp-kicker-line" />
          <span className="lp-kicker" style={{ flex: '0 0 auto' }}>2020 — 2026</span>
        </div>
        <div className="lp-projects">
          {PROJECTS.map((p, i) => (
            <article className={`lp-project${i % 2 ? ' lp-project--flip' : ''} lp-reveal`} key={p.id}>
              <div className="lp-project__meta">
                <div className="lp-project__kicker">{p.n} · {p.company}</div>
                <h3 className="lp-project__headline">{p.title}</h3>
                <div className="lp-project__tags">
                  {p.tags.map((t) => <span className="lp-chip" key={t}>{t}</span>)}
                </div>
                <a className="lp-sticky__cta" href={p.id === 'justride' ? 'work/justride.html' : `#${p.id}`}>
                  View case study
                  <span className="lp-sticky__cta-arrow"><Icon name="arrow" size={12} /></span>
                </a>
              </div>
              <a className="lp-project__media" href={p.id === 'justride' ? 'work/justride.html' : `#${p.id}`} aria-label={`Open ${p.company}`}>
                <img src={p.image} alt={`${p.company} preview`} loading="lazy" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function GridWorks() {
  return (
    <section className="lp-section" id="work">
      <div className="lp-wrap">
        <div className="lp-section__head lp-reveal">
          <span className="lp-kicker">Selected work</span>
          <span className="lp-kicker-line" />
          <span className="lp-kicker" style={{ flex: '0 0 auto' }}>2020 — 2026</span>
        </div>
        <div className="lp-grid">
          {PROJECTS.map((p) => (
            <a className="lp-grid__card lp-reveal" key={p.id} href={p.id === 'justride' ? 'work/justride.html' : `#${p.id}`}>
              <div className="lp-grid__shot">
                <img src={p.image} alt={`${p.company} preview`} loading="lazy" />
              </div>
              <div className="lp-grid__kicker">{p.n} · {p.company}</div>
              <h3 className="lp-grid__title">{p.title}</h3>
              <div className="lp-grid__tags">
                {p.tags.map((t) => <span className="lp-chip" key={t}>{t}</span>)}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Works({ layout }) {
  if (layout === 'alternating') return <AlternatingWorks />;
  if (layout === 'grid') return <GridWorks />;
  return <StickyWorks />;
}

Object.assign(window, { Works });
