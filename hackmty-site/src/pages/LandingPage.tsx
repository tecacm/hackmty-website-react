import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './LandingPage.module.css';
import { withBase } from '../utils/Utils';
import { useI18n } from '../i18n/I18nContext';
import Countdown from '../components/Countdown';
import MountainBg from '../components/MountainBg';

const TOTAL_SLIDES = 5;

function LandingPage() {
  const { t } = useI18n();
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  // Carousel auto-advance
  const goTo = useCallback((i: number, manual = false) => {
    const next = ((i % TOTAL_SLIDES) + TOTAL_SLIDES) % TOTAL_SLIDES;
    setCurrentSlide(next);
    if (manual) {
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(() => setCurrentSlide(c => (c + 1) % TOTAL_SLIDES), 6000);
    }
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(() => setCurrentSlide(c => (c + 1) % TOTAL_SLIDES), 6000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  // Konami code easter egg
  useEffect(() => {
    const seq = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
    let i = 0;
    const handler = (e: KeyboardEvent) => {
      const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      if (k === seq[i]) {
        i++;
        if (i === seq.length) {
          document.body.style.transition = 'filter 0.6s';
          document.body.style.filter = 'hue-rotate(45deg)';
          setTimeout(() => { document.body.style.filter = ''; }, 4000);
          i = 0;
        }
      } else { i = 0; }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  // keep goTo reference stable for potential future manual nav
  void goTo;

  return (
    <div className={styles.root}>

      {/* ===================== HERO ===================== */}
      <div ref={heroRef} className={styles.hero}>
        <div className={styles.heroStage}>
          {[1, 2, 3, 4, 5].map((n, idx) => (
            <div
              key={n}
              className={`${styles.slide}${currentSlide === idx ? ' ' + styles.on : ''}`}
            >
              <img src={withBase(`/images/hero-${n}.webp`)} alt="" />
            </div>
          ))}
        </div>

        <img
          src={withBase('/images/hm-shield-hero.webp')}
          alt=""
          className={styles.heroCrest}
          aria-hidden="true"
        />

        <h1 className={styles.heroTitle}>
          HackMTY<span className={styles.apos}>&apos;</span><span className={styles.year}> 26</span>
        </h1>

        <div className={styles.heroWhere}>
          <span className={styles.where}>
            {t('hero.tagline', '36 hour long Hackathon at Tec de Monterrey, Monterrey NL.')}
          </span>
        </div>

        <Countdown
          dateTime="September 11, 2026 18:00:00"
          wordFormat="full"
          numberFormat={false}
          sxBoxProps={{ mt: '44px' }}
        />
      </div>

      {/* Gold Band */}
      <div className={styles.goldBand} aria-hidden="true" />

      {/* ===================== ABOUT ===================== */}
      <section className={styles.aboutSection} id="about">
        <div className={styles.container}>
          <div className={styles.aboutHead}>
            <h2>
              {t('about.heading', 'The largest student hackathon')}{' '}
              <i>{t('about.heading.italic', 'in Latin America.')}</i>
            </h2>
          </div>

          <div className={styles.aboutCards}>

            {/* Card 1 */}
            <article className={styles.aboutCard}>
              <div className={styles.v2Eyebrow}>{t('about.card1.eyebrow', 'What makes us awesome')}</div>
              <div className={styles.v2Icon} aria-hidden="true">
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="8" y="14" width="48" height="30" rx="3" />
                  <path d="M4 50h56l-3 4H7z" />
                  <polyline points="26 24 20 29 26 34" />
                  <polyline points="38 24 44 29 38 34" />
                  <line x1="34" y1="22" x2="30" y2="36" />
                </svg>
              </div>
              <p className={styles.v2Body}>
                {t('about.card1.body', 'We are the largest student hackathon in Mexico. Hosted by Tecnológico de Monterrey, a globally recognized university ranked among the top 200 universities worldwide.')}
              </p>
            </article>

            {/* Card 2 */}
            <article className={styles.aboutCard}>
              <div className={styles.v2Eyebrow}>{t('about.card2.eyebrow', 'All students welcome!')}</div>
              <div className={styles.v2Icon} aria-hidden="true">
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="32" cy="16" r="6" />
                  <path d="M22 36 C 22 31, 26.5 27, 32 27 S 42 31, 42 36" />
                  <circle cx="18" cy="28" r="6" />
                  <path d="M8 48 C 8 43, 12.5 39, 18 39 S 28 43, 28 48" />
                  <circle cx="46" cy="28" r="6" />
                  <path d="M36 48 C 36 43, 40.5 39, 46 39 S 56 43, 56 48" />
                </svg>
              </div>
              <p className={styles.v2Body}>
                {t('about.card2.body', "Whether it's your first hackathon or you're an experienced hacker, HackMTY is perfect for you and there's no entry fee.")}
              </p>
            </article>

            {/* Card 3 — feature (dark) */}
            <article className={`${styles.aboutCard} ${styles.feature}`}>
              <div className={styles.v2Eyebrow}>{t('about.card3.eyebrow', 'Made by Tec ACM')}</div>
              <div className={`${styles.v2Icon} ${styles.tecMark}`} aria-hidden="true">
                <img src={withBase('/images/tec-acm-logo.webp')} alt="" />
              </div>
              <p className={styles.v2Body}>
                {t('about.card3.body', 'HackMTY is built, planned and run end-to-end by Tec ACM, the student chapter of the Association for Computing Machinery at Tec de Monterrey. Make sure to follow us in our social media!')}
              </p>
              <span className={styles.v2Meta}>{t('about.card3.meta', 'Student Chapter · Est. 2015')}</span>
            </article>

            {/* Card 4 */}
            <article className={styles.aboutCard}>
              <div className={styles.v2Eyebrow}>{t('about.card4.eyebrow', 'The 36-hour experience')}</div>
              <div className={styles.v2Icon} aria-hidden="true">
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="32" cy="34" r="22" />
                  <polyline points="32 20 32 34 42 38" />
                  <line x1="25" y1="6" x2="39" y2="6" />
                  <line x1="32" y1="6" x2="32" y2="12" />
                </svg>
              </div>
              <p className={styles.v2Body}>
                {t('about.card4.body', '36 hours of building, mentors on the floor, workshops with our sponsors, snacks at 3 am, and one big demo stage. An official MLH member event.')}
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* ===================== REGISTRATION BANNER ===================== */}
      <section className={styles.regBannerSection} aria-label="Registration status">
        <div className={styles.container}>
          <div className={styles.regBanner} role="status">
            <span className={styles.regBannerText}>{t('reg.status', 'Registration opening soon')}</span>
          </div>
        </div>
      </section>

      {/* ===================== LOCATION ===================== */}
      <section className={styles.location} id="location">
        <div className={styles.container}>
          <div className={styles.locHead}>
            <span className={styles.eyebrow}>{t('location.eyebrow', 'Location')}</span>
            <h2>Arena <i>{t('location.heading.italic', 'Borregos.')}</i></h2>
          </div>

          <div className={styles.locMapBleed}>
            <iframe
              className={styles.mapIframe}
              src="https://maps.google.com/maps?q=Arena%20Borregos%20Tec%20de%20Monterrey&t=m&z=16&output=embed&iwloc=near"
              title={t('location.map.title', 'Arena Borregos location map')}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <aside className={styles.locCard}>
              <div className={styles.locCardTop}>
                <span className={styles.locCardEyebrow}>
                  <span className={styles.dot} />
                  {t('location.card.eyebrow', 'Venue')}
                </span>
                <span className={styles.locCardCoord}>
                  {t('location.card.coord', '25.6515° N / 100.2899° W')}
                </span>
              </div>
              <div className={styles.locCardName}>
                Arena <i>{t('location.card.nameItalic', 'Borregos.')}</i>
              </div>
              <div className={styles.locCardAddr}>
                {t('location.card.address', 'Av. Eugenio Garza Sada 2501 Sur')}<br />
                {t('location.card.address2', 'Tecnológico, 64849 Monterrey, N.L., México')}
              </div>
              <div className={styles.locCardMeta}>
                <div className={styles.locCardRow}>
                  <span className={styles.locCardLbl}>{t('location.card.whenLabel', 'When')}</span>
                  <span className={styles.locCardVal}>{t('location.card.whenValue', 'September 11–13, 2026')}</span>
                </div>
                <div className={styles.locCardRow}>
                  <span className={styles.locCardLbl}>{t('location.card.whereLabel', 'Where')}</span>
                  <span className={styles.locCardVal}>{t('location.card.whereValue', 'Monterrey, Nuevo León')}</span>
                </div>
              </div>
              <a
                className={styles.locCardCta}
                href="https://www.google.com/maps/search/?api=1&query=Arena+Borregos+Tec+de+Monterrey"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('location.card.mapCta', 'View on Google Maps')}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            </aside>
          </div>
        </div>
      </section>

      {/* ===================== WAITLIST ===================== */}
      <section className={styles.waitlist} aria-label="Join the waitlist">
        <div className={styles.container}>
          <h2>
            {t('waitlist.heading', 'Be the first to know')}{' '}
            <i>{t('waitlist.heading.italic', 'when registration opens.')}</i>
          </h2>
          <p className={styles.wlLede}>
            {t('waitlist.lede', "Registration isn't live yet, but you can leave your name and email on our short Google Form and we'll send you a heads-up the second it opens.")}
          </p>
          <a
            className={styles.wlCta}
            href="https://forms.gle/ijusReCzdRE83Aas9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className={styles.wlFormIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="4" y="3" width="16" height="18" rx="2" />
              <line x1="8" y1="8" x2="16" y2="8" />
              <line x1="8" y1="12" x2="16" y2="12" />
              <line x1="8" y1="16" x2="13" y2="16" />
            </svg>
            <span>{t('waitlist.cta', 'Open the Google Form')}</span>
            <svg className={styles.wlArrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
            </svg>
          </a>
          <p className={styles.wlNote}>
            {t('waitlist.note', "Takes about 1 minute · We'll only email you about HackMTY '26")}
          </p>
        </div>
      </section>

      {/* Mountain BG — shows when hero scrolls out of view */}
      <MountainBg elementRef={heroRef} />

    </div>
  );
}

export default LandingPage;
