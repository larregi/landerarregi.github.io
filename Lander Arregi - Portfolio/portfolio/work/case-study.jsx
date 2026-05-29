/* global React, Icon, Grain */
// Case study layout — Justride

const CASE = {
  slug: 'justride',
  client: 'Masabi',
  year: '2023 — 2024',
  role: 'Senior Product Designer',
  team: 'Lead designer · 2 PMs · 5 engineers',
  duration: '14 months',
  title: ['Seamless fare payments across every', <em key="em"> mode of transport.</em>],
  subtitle: 'Helped a global mobility platform unify ticketing, validation and payment flows for 100+ transit agencies — research, prototyping and an end-to-end UI refresh that scaled across web, mobile and gate hardware.',
  cover: '../assets/project-justride-2.png',
  next: {
    slug: 'tickmill',
    n: '02',
    company: 'Tickmill',
    title: 'Bringing transparency to premium trading products.',
  },
};

const SECTIONS = [
  { id: 'overview',  n: '01', label: 'Overview' },
  { id: 'context',   n: '02', label: 'Context' },
  { id: 'process',   n: '03', label: 'Process' },
  { id: 'solution',  n: '04', label: 'Solution' },
  { id: 'outcomes',  n: '05', label: 'Outcomes' },
  { id: 'gallery',   n: '06', label: 'Gallery' },
];

function CaseNav({ theme, setTheme }) {
  return (
    <div className="cs-nav-wrap">
      <nav className="cs-nav" aria-label="Primary">
        <a className="cs-nav__back" href="../index.html#work">
          <span className="cs-nav__back-arrow"><Icon name="arrow" size={12} /></span>
          Back to works
        </a>
        <ThemeSwitch value={theme} onChange={setTheme} />
      </nav>
    </div>
  );
}

function useScrollSpy(ids, rootMargin = '-40% 0px -55% 0px') {
  const [active, setActive] = React.useState(ids[0]);
  React.useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setActive(e.target.id);
      });
    }, { rootMargin, threshold: 0 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids.join('|'), rootMargin]);
  return active;
}

function SideIndex() {
  const active = useScrollSpy(SECTIONS.map((s) => s.id));
  return (
    <aside className="cs-index" aria-label="On this page">
      <div className="cs-index__kicker">On this page</div>
      <ul className="cs-index__list">
        {SECTIONS.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={`cs-index__item${active === s.id ? ' is-active' : ''}`}
            >
              <span className="cs-index__num">{s.n}</span>
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function CaseStudy() {
  return (
    <div className="cs-shell">
      <SideIndex />
      <div className="cs-content">
        {/* ===== Hero / Overview ===== */}
        <section className="cs-section cs-hero" id="overview">
          <div className="cs-hero__breadcrumb lp-reveal">
            <a href="../index.html">Work</a>
            <Icon name="arrow" size={10} />
            <span>{CASE.client} · Justride</span>
          </div>

          <h1 className="cs-hero__title lp-reveal" data-delay="1">
            {CASE.title}
          </h1>
          <p className="cs-hero__sub lp-reveal" data-delay="2">
            {CASE.subtitle}
          </p>

          <div className="cs-hero__meta lp-reveal" data-delay="3">
            <div>
              <span className="cs-hero__meta-k">Client</span>
              <span className="cs-hero__meta-v">{CASE.client}</span>
            </div>
            <div>
              <span className="cs-hero__meta-k">Year</span>
              <span className="cs-hero__meta-v">{CASE.year}</span>
            </div>
            <div>
              <span className="cs-hero__meta-k">Role</span>
              <span className="cs-hero__meta-v">{CASE.role}</span>
            </div>
            <div>
              <span className="cs-hero__meta-k">Duration</span>
              <span className="cs-hero__meta-v">{CASE.duration}</span>
            </div>
          </div>

          <div className="cs-hero__cover lp-reveal" data-delay="3">
            <img src={CASE.cover} alt="Justride product overview" />
          </div>
        </section>

        {/* ===== Context ===== */}
        <section className="cs-section" id="context">
          <span className="cs-section__kicker">02 · Context</span>
          <h2 className="cs-section__h lp-reveal">A patchwork of fare flows holding back a global platform.</h2>
          <p className="cs-section__lede lp-reveal">
            Masabi's Justride platform powers ticketing for transit agencies from New York to Sydney. After eight years of feature growth, the experience had drifted — different agencies were running on visually inconsistent flows, and shared components were lagging behind product needs.
          </p>

          <div className="cs-prose lp-reveal">
            <div>
              <p>
                I joined as the design lead on a long-arc effort to unify the ticketing, validation, and payment experiences across web, mobile, and gate hardware. The work touched a dozen squads and had to be coordinated with rolling rollouts across 100+ agencies, each with their own brand, fare rules, and rider research.
              </p>
              <p>
                The problem wasn't a redesign — it was alignment. We needed to make consistent decisions that respected the constraints of every agency, while pulling the product into a single, modern visual and interaction language.
              </p>
            </div>
            <div className="cs-stats">
              <div className="cs-stat">
                <span className="cs-stat__v">100+</span>
                <span className="cs-stat__k">Transit agencies running on Justride globally</span>
              </div>
              <div className="cs-stat">
                <span className="cs-stat__v">12</span>
                <span className="cs-stat__k">Product squads coordinated across the rollout</span>
              </div>
              <div className="cs-stat">
                <span className="cs-stat__v">3</span>
                <span className="cs-stat__k">Surfaces unified: web, mobile, validator hardware</span>
              </div>
              <div className="cs-stat">
                <span className="cs-stat__v">200M+</span>
                <span className="cs-stat__k">Annual rider journeys touched by the redesign</span>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Process ===== */}
        <section className="cs-section" id="process">
          <span className="cs-section__kicker">03 · Process</span>
          <h2 className="cs-section__h lp-reveal">From rider research to a shared component library.</h2>
          <p className="cs-section__lede lp-reveal">
            We worked in four overlapping phases. Each one fed the next — and each shipped something usable, so we never went dark for long.
          </p>

          <div className="cs-phases">
            {[
              {
                n: 'Phase 01',
                h: 'Discovery & audit',
                p: 'Reviewed analytics, support tickets and 14 of the highest-traffic agency flows. Held interviews with riders in three cities and shadowed gate staff during peak commute.',
                tags: ['Research', 'Heuristic audit', 'Field study'],
              },
              {
                n: 'Phase 02',
                h: 'IA & flow rewiring',
                p: 'Mapped 38 entry points down to seven canonical task flows. Pruned dead ends, surfaced the most-used fare types, and aligned naming with how riders actually describe their journeys.',
                tags: ['IA', 'Flows', 'Card sort'],
              },
              {
                n: 'Phase 03',
                h: 'Prototyping & testing',
                p: 'Built Figma prototypes for the hero flows — buying, transferring, validating — and tested with 28 riders across age, ability and tech-comfort segments. Three rounds, with measurable improvement each pass.',
                tags: ['Prototypes', 'Usability', '3 rounds'],
              },
              {
                n: 'Phase 04',
                h: 'Design system & rollout',
                p: 'Codified the new patterns into a Figma library and a Storybook component set. Worked alongside frontend leads to migrate squads incrementally — no big-bang launch, no broken agencies.',
                tags: ['Design system', 'Storybook', 'Migration'],
              },
            ].map((ph) => (
              <div className="cs-phase lp-reveal" key={ph.n}>
                <span className="cs-phase__n">{ph.n}</span>
                <h3 className="cs-phase__h">{ph.h}</h3>
                <p className="cs-phase__p">{ph.p}</p>
                <ul className="cs-phase__list">
                  {ph.tags.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ===== Solution ===== */}
        <section className="cs-section" id="solution">
          <span className="cs-section__kicker">04 · Solution</span>
          <h2 className="cs-section__h lp-reveal">Three interlocking surfaces, one rider experience.</h2>
          <p className="cs-section__lede lp-reveal">
            The redesigned product met the rider wherever they were: a fast web checkout, a confident mobile app, and gate hardware that felt instant. Below, the three pieces in detail.
          </p>

          <div className="cs-screens">
            <article className="cs-screen lp-reveal">
              <div className="cs-screen__notes">
                <span className="cs-screen__tag">Mobile app</span>
                <h3 className="cs-screen__h">A wallet rebuilt around the journey, not the ticket.</h3>
                <p className="cs-screen__p">
                  Riders manage active passes, plan trips and reload balance from a single screen. Validation now lives a single tap away, and transfers happen automatically when the rider is in a valid window.
                </p>
              </div>
              <div className="cs-screen__shot">
                <img src="../assets/project-justride-1.png" alt="Justride mobile wallet" />
              </div>
            </article>

            <article className="cs-screen cs-screen--flip lp-reveal">
              <div className="cs-screen__shot">
                <img src="../assets/project-justride-2.png" alt="Justride pass purchase" />
              </div>
              <div className="cs-screen__notes">
                <span className="cs-screen__tag">Web checkout</span>
                <h3 className="cs-screen__h">A two-step purchase that respects every fare rule.</h3>
                <p className="cs-screen__p">
                  Riders pick a pass and pay, full stop. Behind the scenes, agency-specific eligibility, capping and family-group logic runs invisibly. We cut checkout-screen count from 6 → 2 without losing a single fare type.
                </p>
              </div>
            </article>

            <article className="cs-screen lp-reveal">
              <div className="cs-screen__notes">
                <span className="cs-screen__tag">Validator hardware</span>
                <h3 className="cs-screen__h">Gate feedback fast enough to keep the queue moving.</h3>
                <p className="cs-screen__p">
                  A new validator UI surfaces accept / reject decisions in under 350 ms with motion that's legible from a distance. Staff get a calmer override screen, and edge-case states (low signal, multi-pass) finally have a designed home.
                </p>
              </div>
              <div className="cs-screen__shot">
                <img src="../assets/project-justride-2.png" alt="Justride validator screen" style={{ objectPosition: 'center bottom' }} />
              </div>
            </article>
          </div>
        </section>

        {/* ===== Outcomes ===== */}
        <section className="cs-section" id="outcomes">
          <span className="cs-section__kicker">05 · Outcomes</span>
          <h2 className="cs-section__h lp-reveal">Measured against rider time, support load, and dev velocity.</h2>
          <p className="cs-section__lede lp-reveal">
            The redesign rolled out to 28 agencies in its first nine months. The numbers below are aggregated across them — the wins were consistent enough that the rollout sequence kept accelerating.
          </p>

          <div className="cs-outcomes lp-reveal">
            <div className="cs-outcome">
              <span className="cs-outcome__v"><em>−42%</em></span>
              <span className="cs-outcome__k">Time to complete a first ticket purchase, across web + mobile</span>
            </div>
            <div className="cs-outcome">
              <span className="cs-outcome__v"><em>+31%</em></span>
              <span className="cs-outcome__k">Mobile-first riders completing checkout without contacting support</span>
            </div>
            <div className="cs-outcome">
              <span className="cs-outcome__v"><em>3.4×</em></span>
              <span className="cs-outcome__k">Faster build velocity once squads adopted the new component set</span>
            </div>
          </div>

          <figure className="cs-quote lp-reveal">
            <span className="cs-quote__mark" aria-hidden="true">"</span>
            <blockquote className="cs-quote__body">
              The new system gave us back time. We stopped re-designing the same screens for every agency, and started arguing about the right things — the actual rider experience.
            </blockquote>
            <figcaption className="cs-quote__by">
              <span className="cs-quote__avatar">MR</span>
              <div>
                <div className="cs-quote__name">Maria Reilly</div>
                <div className="cs-quote__role">Director of Product, Masabi</div>
              </div>
            </figcaption>
          </figure>
        </section>

        {/* ===== Gallery ===== */}
        <section className="cs-section" id="gallery">
          <span className="cs-section__kicker">06 · Gallery</span>
          <h2 className="cs-section__h lp-reveal">A walk through the shipped work.</h2>

          <div className="cs-gallery">
            <figure className="cs-gallery__item cs-gallery__a lp-reveal">
              <img src="../assets/project-justride-2.png" alt="Hero gallery shot" />
            </figure>
            <figure className="cs-gallery__item cs-gallery__b lp-reveal" data-delay="1">
              <img src="../assets/project-justride-1.png" alt="Mobile flow" />
            </figure>
            <figure className="cs-gallery__item cs-gallery__c lp-reveal" data-delay="1">
              <img src="../assets/project-justride-1.png" alt="Component swatches" />
            </figure>
            <figure className="cs-gallery__item cs-gallery__d lp-reveal" data-delay="2">
              <img src="../assets/project-justride-2.png" alt="Validator detail" />
            </figure>
            <figure className="cs-gallery__item cs-gallery__e lp-reveal" data-delay="2">
              <img src="../assets/project-justride-2.png" alt="Edge case state" style={{ objectPosition: 'right center' }} />
            </figure>
          </div>

          {/* ===== Next project ===== */}
          <a className="cs-next lp-reveal" href={`./${CASE.next.slug}.html`}>
            <div>
              <div className="cs-next__kicker">Next project · {CASE.next.n}</div>
              <h3 className="cs-next__title">{CASE.next.title}</h3>
            </div>
            <span className="cs-next__arrow" aria-hidden="true">
              <Icon name="arrow" size={22} />
            </span>
          </a>
        </section>
      </div>
    </div>
  );
}

Object.assign(window, { CaseStudy, CaseNav });
