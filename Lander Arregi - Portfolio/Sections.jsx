/* global React, Icon */
// About, Experience, Skills, Contact, Footer

function About() {
  return (
    <section className="lp-section lp-about" id="about">
      <div className="lp-wrap">
        <div className="lp-section__head lp-reveal">
          <span className="lp-kicker">About me</span>
          <span className="lp-kicker-line" />
        </div>

        <div className="lp-about__grid">
          <div className="lp-about__copy lp-reveal">
            <h2 className="lp-about__h">
              I grew up by the Bay of Biscay, learned the craft in Tallinn, and now design from Barcelona.
            </h2>
            <div className="lp-about__body">
              <p>
                I was born in the beautiful coast city of <HoverImageLink src="https://images.unsplash.com/photo-1591129841117-3adfd313e34f?w=1400&q=80&auto=format&fit=crop" alt="La Concha bay, San Sebastián">San Sebastián</HoverImageLink>, on the northern coast of Spain. The place where I did most of my studies and where I grew a deep love for gastronomy, nature, and Basque culture.
              </p>
              <p>
                I'm a product designer — Basque by birth, shaped by seven winters in Estonia. I came to design through curiosity about how people actually use the things we build for them, and I've stayed because that question never stops being interesting.
              </p>
              <p>
                My practice leans on research, data, and quiet iteration. I'd rather watch five people stumble through a flow than argue about a button colour. The work that lands well usually starts boring and ends obvious.
              </p>
              <p>
                Outside of work I climb, hike, and shoot photo and video — slow hobbies that reward patience. They keep me honest about how long good things actually take.
              </p>
            </div>

          </div>

          <div className="lp-about__portrait lp-reveal" data-delay="1">
            <div className="lp-about__portrait-frame">
              <img src="assets/about-portrait.jpg" alt="Portrait of Lander Arregi" />
            </div>
          </div>
        </div>

        <div className="lp-about__hobbies">
          <div className="lp-section__head lp-reveal" style={{ marginTop: '24px' }}>
            <span className="lp-kicker">Off the clock</span>
            <span className="lp-kicker-line" />
          </div>
          <div className="lp-about__photos">
            <figure className="lp-about__photo lp-about__photo--tall lp-reveal">
              <img src="assets/hobby-1.jpg" alt="Hiking in the Basque country" />
              <figcaption>Climbing, Valencia</figcaption>
            </figure>
            <figure className="lp-about__photo lp-reveal" data-delay="1">
              <img src="assets/hobby-2.jpg" alt="Climbing route" />
              <figcaption>Ice skating in Estonia</figcaption>
            </figure>
            <figure className="lp-about__photo lp-reveal" data-delay="2">
              <img src="assets/hobby-3.jpg" alt="Coastline" />
              <figcaption>Northern lights  Tallinn</figcaption>
            </figure>
            <figure className="lp-about__photo lp-about__photo--wide lp-reveal" data-delay="3">
              <img src="assets/hobby-4.jpg" alt="Forest" />
              <figcaption>Climbing in Leonidio, Greece</figcaption>
            </figure>
          </div>

          <div className="lp-about__cta lp-reveal">
            <a
              href="https://instagram.com/larregi"
              target="_blank"
              rel="noopener noreferrer"
              className="lp-about__ig">
              
              <span className="lp-about__ig-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
                </svg>
              </span>
              See more on Instagram
              <span className="lp-about__ig-arrow">
                <Icon name="arrowUR" size={14} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>);

}

const ROLES = [
{ year: '2020 — Now', company: 'Mooncascade OÜ', role: 'Senior UX / UI Designer', place: 'Tallinn · Remote' },
{ year: '2020', company: 'Fitlap OÜ', role: 'Product Designer', place: 'Tallinn, Estonia' },
{ year: '2020', company: 'Helmes AS', role: 'UX / UI Designer', place: 'Tallinn, Estonia' },
{ year: '2017 — 2019', company: "The Mo'Joes OÜ", role: 'Visual Content · UI', place: 'Tallinn, Estonia' }];


function Experience() {
  return (
    <section className="lp-section" id="experience">
      <div className="lp-wrap">
        <div className="lp-section__head lp-reveal">
          <span className="lp-kicker">Experience</span>
          <span className="lp-kicker-line" />
          <span className="lp-kicker" style={{ flex: '0 0 auto' }}>8 yrs</span>
        </div>
        <div className="lp-resume">
          {ROLES.map((r) =>
          <div className="lp-resume__row lp-reveal" key={r.company + r.year}>
              <div className="lp-resume__year">{r.year}</div>
              <div className="lp-resume__co">{r.company}</div>
              <div className="lp-resume__role">{r.role}</div>
              <div className="lp-resume__place">{r.place}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

const SKILLS = {
  Discovery: [
  ['User research', 'Interviews · Surveys'],
  ['Usability testing', 'Moderated · Remote'],
  ['Strategy', 'Roadmaps · Scope'],
  ['Design thinking', 'Workshops']],

  Craft: [
  ['UX design', 'IA · Flows'],
  ['UI design', 'Visual · Type'],
  ['Prototyping', 'Figma · Framer'],
  ['Design systems', 'Tokens · Libraries']]

};

function Skills() {
  return (
    <section className="lp-section" id="skills">
      <div className="lp-wrap">
        <div className="lp-section__head lp-reveal">
          <span className="lp-kicker">Skill set</span>
          <span className="lp-kicker-line" />
          <span className="lp-kicker" style={{ flex: '0 0 auto' }}>How I work</span>
        </div>
        <div className="lp-skills">
          {Object.entries(SKILLS).map(([group, items]) =>
          <div className="lp-skills__group lp-reveal" key={group}>
              <h4>{group}</h4>
              <ul className="lp-skills__list">
                {items.map(([k, v]) =>
              <li key={k}>
                    <span>{k}</span>
                    <span>{v}</span>
                  </li>
              )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function Contact() {
  return (
    <section className="lp-section" id="contact">
      <div className="lp-wrap">
        <div className="lp-contact lp-reveal">
          <span className="lp-kicker">Get in touch</span>
          <h2 className="lp-contact__h">
            Have a product you'd like to make people love?
          </h2>
          <div className="lp-contact__row">
            <a className="lp-contact__btn" href="mailto:hello@larregi.com">
              lander.arregiz@gmail.com
              <span className="lp-contact__btn-arrow"><Icon name="arrowUR" size={14} /></span>
            </a>
            <a className="lp-contact__ghost" href="#cv">
              Download CV
              <Icon name="arrow" size={14} />
            </a>
          </div>
          <div className="lp-contact__decor" aria-hidden="true" />
        </div>
      </div>
    </section>);

}

function Footer() {
  return (
    <footer className="lp-footer">
      <div className="lp-wrap">
        <div className="lp-footer__wordmark">Lander Arregi</div>
        <div className="lp-footer__row">
          <div className="lp-footer__col">
            <h5>About</h5>
            <p>Senior product designer based in Barcelona, working remotely with teams worldwide.</p>
          </div>
          <div className="lp-footer__col">
            <h5>Elsewhere</h5>
            <a href="#linkedin">LinkedIn ↗</a>
            <a href="#dribbble">Instagram ↗</a>
            <a href="#read">Delete--</a>
          </div>
          <div className="lp-footer__col">
            <h5>Sections</h5>
            <a href="#work">Selected work</a>
            <a href="#experience">Experience</a>
            <a href="#skills">About</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="lp-footer__col">
            <h5>Contact</h5>
            <a href="mailto:hello@larregi.com">lander.arregiz@gmail.com</a>
            <p>Delete---</p>
          </div>
        </div>
        <div className="lp-footer__base">
          <span>© 2026 Lander Arregi · Barcelona</span>
          <span>v2.0 · Built in HTML</span>
        </div>
      </div>
    </footer>);

}

Object.assign(window, { About, Experience, Skills, Contact, Footer });