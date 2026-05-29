/* global React */
// Nav + theme switcher + scroll progress

function Icon({ name, size = 16 }) {
  const paths = {
    sun: <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </>,
    moon: <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />,
    auto: <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v18" />
      <path d="M12 3a9 9 0 0 0 0 18z" fill="currentColor" stroke="none" />
    </>,
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    arrowUR: <path d="M7 17L17 7M8 7h9v9" />,
    pin: <>
      <path d="M12 22s7-7.58 7-13a7 7 0 1 0-14 0c0 5.42 7 13 7 13z" />
      <circle cx="12" cy="9" r="2.5" />
    </>,
    plus: <path d="M12 5v14M5 12h14" />,
    star: <path d="M12 2l2.39 7.36H22l-6.18 4.49L18.18 21 12 16.51 5.82 21l2.36-7.15L2 9.36h7.61z" />,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

function ThemeSwitch({ value, onChange }) {
  const isDark = value === 'dark';
  return (
    <button
      type="button"
      className={`lp-theme-toggle${isDark ? ' is-dark' : ''}`}
      onClick={() => onChange(isDark ? 'light' : 'dark')}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      <span className="lp-theme-toggle__track">
        <span className="lp-theme-toggle__thumb">
          <Icon name={isDark ? 'moon' : 'sun'} size={12} />
        </span>
      </span>
    </button>
  );
}

function Nav({ navStyle, theme, setTheme }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onS = () => setScrolled(window.scrollY > 12);
    onS();
    window.addEventListener('scroll', onS, { passive: true });
    return () => window.removeEventListener('scroll', onS);
  }, []);
  return (
    <div className={`lp-nav-wrap${scrolled ? ' is-scrolled' : ''}`} data-style={navStyle}>
      <nav className="lp-nav" aria-label="Primary">
        <a className="lp-nav__brand" href="#top">
          <span className="lp-nav__brand-dot">L</span>
          Lander Arregi
        </a>
        <div className="lp-nav__links" aria-label="Sections">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="lp-nav__ext">
            LinkedIn
            <Icon name="arrowUR" size={12} />
          </a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <ThemeSwitch value={theme} onChange={setTheme} />
        </div>
      </nav>
    </div>
  );
}

function ScrollProgress() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const update = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight);
      if (ref.current) ref.current.style.width = `${Math.min(100, scrolled * 100)}%`;
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, []);
  return (
    <div className="lp-progress" aria-hidden="true">
      <div className="lp-progress__bar" ref={ref} />
    </div>
  );
}

function Grain() {
  // Generate a grainy SVG as data URI once
  const dataUri = React.useMemo(() => {
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.7 0'/></filter><rect width='180' height='180' filter='url(%23n)'/></svg>`;
    return `url("data:image/svg+xml;utf8,${svg.replace(/#/g, '%23')}")`;
  }, []);
  React.useEffect(() => {
    document.documentElement.style.setProperty('--grain-bg', dataUri);
  }, [dataUri]);
  return <div className="lp-grain" aria-hidden="true" />;
}

/**
 * Inline link with a cursor-tracking image preview on hover.
 * Used in About copy for "San Sebastián" etc.
 *
 * The preview is portaled to <body> so it escapes any ancestor
 * with `transform` / `filter` / `will-change` — those properties
 * create a containing block that would otherwise capture our
 * `position: fixed` and break viewport-relative placement.
 */
function HoverImageLink({ src, alt, children, href }) {
  const [hover, setHover] = React.useState(false);
  const [pos, setPos] = React.useState({ x: -9999, y: -9999 });

  const update = React.useCallback((e) => {
    setPos({ x: e.clientX, y: e.clientY });
  }, []);

  // Preview dimensions (kept in sync with CSS) so we can clamp to viewport.
  const PREVIEW_W = 320;
  const PREVIEW_H = 220;
  const OFFSET_X = 20;
  const OFFSET_Y = 18;

  let left = pos.x + OFFSET_X;
  let top  = pos.y + OFFSET_Y;
  if (typeof window !== 'undefined') {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const M = 12; // margin from viewport edge

    // Horizontal: prefer right of cursor; flip to left if it would overflow.
    if (left + PREVIEW_W > vw - M) {
      left = pos.x - PREVIEW_W - OFFSET_X;
    }
    left = Math.min(Math.max(M, left), vw - PREVIEW_W - M);

    // Vertical: prefer below cursor; flip above only if it actually fits.
    const fitsBelow = top + PREVIEW_H <= vh - M;
    const fitsAbove = pos.y - PREVIEW_H - OFFSET_Y >= M;
    if (!fitsBelow && fitsAbove) {
      top = pos.y - PREVIEW_H - OFFSET_Y;
    }
    // Final clamp so it never escapes the viewport even if neither fits.
    top = Math.min(Math.max(M, top), vh - PREVIEW_H - M);
  }

  const preview = (
    <span
      className={`lp-hoverlink__preview${hover ? ' is-on' : ''}`}
      style={{ transform: `translate3d(${left}px, ${top}px, 0)` }}
      aria-hidden="true"
    >
      <img src={src} alt={alt || ''} loading="lazy" />
    </span>
  );

  return (
    <>
      <span
        className="lp-hoverlink"
        role="text"
        onMouseEnter={(e) => { update(e); setHover(true); }}
        onMouseLeave={() => setHover(false)}
        onMouseMove={update}
      >
        {children}
      </span>
      {typeof document !== 'undefined' && ReactDOM.createPortal(preview, document.body)}
    </>
  );
}

Object.assign(window, { Nav, ScrollProgress, Grain, Icon, ThemeSwitch, HoverImageLink });
