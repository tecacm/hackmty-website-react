import { Link, useLocation } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext';
import { withBase } from '../utils/Utils';
import styles from './SiteHeader.module.css';

const NAV_ITEMS = [
  { label: 'About',       labelKey: 'nav.about',      to: '/'           },
  { label: 'Schedule',    labelKey: 'nav.schedule',   to: '/schedule'   },
  { label: 'Sponsors',    labelKey: 'nav.sponsors',   to: '/sponsors'   },
  { label: 'Hall of Fame',labelKey: 'nav.halloffame', to: '/halloffame' },
  { label: 'FAQ',         labelKey: 'nav.faq',        to: '/faq'        },
];

export default function SiteHeader() {
  const { lang, setLang, t } = useI18n();
  const { pathname } = useLocation();

  return (
    <header className={styles.header}>
      {/* MLH badge — overflows 56px header intentionally */}
      <a
        className={styles.mlhBadgeLink}
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="MLH 2026 Hackathon Season"
      >
        <img
          src="https://logged-assets.s3.amazonaws.com/trust-badge/2027/mlh-trust-badge-2027-white.svg"
          alt={t('header.mlhAlt', 'Major League Hacking 2026 Hackathon Season')}
          className={styles.mlhBadgeImg}
        />
      </a>

      {/* Brand logos */}
      <div className={styles.brandBlock}>
        <Link to="/" className={styles.brandLink} aria-label="HackMTY home">
          <img src={withBase('/images/hackmty-logo.webp')} alt="HackMTY" className={styles.hmImg} />
        </Link>
        <div className={styles.divider} />
        <a
          href="https://tec.acm.org/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.brandLink}
          aria-label="Tec ACM Student Chapter"
        >
          <img src={withBase('/images/tec-acm-logo.webp')} alt="Tec ACM Student Chapter" className={styles.tecImg} />
        </a>
      </div>

      {/* Nav links */}
      <nav>
        <ul className={styles.navLinks}>
          {NAV_ITEMS.map(({ label, labelKey, to }) => {
            const isActive = pathname === to || (to !== '/' && pathname.startsWith(to));
            return (
              <li key={to}>
                <Link
                  to={to}
                  className={`${styles.navLink}${isActive ? ' ' + styles.navLinkActive : ''}`}
                >
                  {t(labelKey, label)}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Language toggle + socials */}
      <div className={styles.navRight}>
        <button
          className={styles.langBtn}
          onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
          aria-label={lang === 'en' ? 'Switch to Spanish' : 'Switch to English'}
        >
          {lang === 'en' ? 'ES' : 'EN'}
        </button>
        <div className={styles.socials}>
          <a href="https://instagram.com/hackmty" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="1" y="1" width="22" height="22" rx="5" ry="5" fill="currentColor" />
              <circle cx="12" cy="12" r="4.6" fill="none" stroke="#0e0e10" strokeWidth="2.3" />
              <circle cx="17.6" cy="6.4" r="1.25" fill="#0e0e10" />
            </svg>
          </a>
          <a href="https://facebook.com/hackmty" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
            <img src={withBase('/images/facebook.svg')} alt="" className={styles.socialImg} />
          </a>
          <a href="https://www.linkedin.com/company/tec-acm-student-chapter/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
            <img src={withBase('/images/linkedin.png')} alt="" className={styles.socialImg} />
          </a>
          <a href="https://discord.gg/RCsEZWreN6" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Discord">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="1" y="1" width="22" height="22" rx="5" ry="5" fill="currentColor" />
              <path fill="#0e0e10" transform="translate(3.8 4.5) scale(0.7)" d="M20.32 4.37A19.79 19.79 0 0016.89 3l-.21.42a18.27 18.27 0 015.5 2.77c-1.65-.9-3.45-1.5-5.35-1.84a16.07 16.07 0 00-5.66 0c-1.9.34-3.7.94-5.35 1.84a18.27 18.27 0 015.5-2.77L7.32 3a19.79 19.79 0 00-3.43 1.37C1.83 7.46 1 11.5 1 15.42c1.85 1.45 4.2 2.36 6.6 2.46l.71-1.24c-1-.27-2-.66-2.86-1.18.24-.18.48-.36.71-.55a13.07 13.07 0 0011.7 0c.23.19.47.37.71.55-.86.52-1.86.91-2.86 1.18l.71 1.24c2.4-.1 4.75-1 6.6-2.46.18-3.92-.65-7.96-2.92-11.05zM8.5 13.5a1.96 1.96 0 01-2-2 1.96 1.96 0 012-2 1.96 1.96 0 012 2 1.96 1.96 0 01-2 2zm7 0a1.96 1.96 0 01-2-2 1.96 1.96 0 012-2 1.96 1.96 0 012 2 1.96 1.96 0 01-2 2z" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
