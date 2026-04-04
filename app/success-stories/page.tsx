'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';

const WA_URL = 'https://wa.me/971525203533';

const testimonials = [
  {
    num: 'I',
    quote: "I have spent over 7 years training with Adarsh and he\u2019s been both an excellent trainer and a fantastic human. I\u2019ve improved from 1400 to 1700+ Lichess and am now competing in regional events.",
    name: 'Sharanya',
    role: 'Treasurer, Bangalore Chess Club\nVIT Student',
  },
  {
    num: 'II',
    quote: "I started from scratch and now I\u2019m playing in school tournaments. Adarsh makes it really fun and I always understand why I lose a game.",
    name: 'Anushka',
    role: 'School student, age 11\nAbu Dhabi, UAE',
  },
  {
    num: 'III',
    quote: "I had maybe 6 months of on-and-off learning before I started with Adarsh. Within a year I went from 900 to 1450 on Chess.com. His structured approach is unlike anything I\u2019ve tried before.",
    name: 'Neil',
    role: 'Working professional\nDubai, UAE',
  },
  {
    num: 'IV',
    quote: "Training with Adarsh helped me develop a real repertoire for the first time. I stopped playing random openings and started understanding positions. My tournament results improved significantly.",
    name: 'Arjun',
    role: 'College student\nCompetitive circuit',
  },
  {
    num: 'V',
    quote: "My son started lessons at 8 years old with zero experience. Adarsh is incredibly patient and has made chess something my son genuinely looks forward to every week.",
    name: 'Priya',
    role: 'Parent of student\nAbu Dhabi, UAE',
  },
];

const stats = [
  { number: '5+', label: 'Years — students stay because it works' },
  { number: '3', label: 'Countries — UAE, India & beyond' },
  { number: 'All', label: 'Levels — complete beginners to FIDE-rated' },
  { number: 'Max 4', label: 'Per group — you get real attention' },
];

const progressCards = [
  { rating: '1400 → 1700+', student: 'Sharanya — Lichess', detail: '7 years of training, now competing at regional level in India.' },
  { rating: '900 → 1450', student: 'Neil — Chess.com', detail: 'Under 1 year. From hobbyist to club-level competitor in Dubai.' },
  { rating: 'Zero → Ready', student: 'Anushka — Tournament debut', detail: 'School competitions within months of picking up the pieces for the first time.' },
];

export default function SuccessStoriesPage() {
  return (
    <>
      {/* HERO */}
      <section
        aria-label="Page hero"
        style={{
          position: 'relative',
          minHeight: '380px',
          display: 'flex',
          alignItems: 'flex-end',
          paddingBottom: '72px',
          paddingTop: 'calc(var(--nav-height) + 72px)',
          overflow: 'hidden',
          background: 'var(--bg)',
        }}
      >
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(201,160,82,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(201,160,82,0.035) 1px, transparent 1px)', backgroundSize: '52px 52px', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 80% at 50% 110%, rgba(27,79,46,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '720px' }}>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
              <p className="s-label" style={{ marginBottom: '24px' }}>Student Results</p>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(44px, 6vw, 68px)', fontWeight: 400, color: 'var(--cream)', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '24px' }}>
                Trained by Adarsh.<br />Here&rsquo;s what changed.
              </h1>
              <p style={{ fontSize: '16px', fontWeight: 300, color: 'var(--cream-muted)', lineHeight: 1.75, maxWidth: '480px', marginBottom: '36px' }}>
                Words from students at every level — school players, competitive adults, complete beginners.
              </p>
              <div className="gold-rule" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section aria-label="Key statistics" style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '48px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '32px' }}>
            {stats.map((stat, i) => (
              <AnimatedSection key={i} delay={i * 0.08} style={{ textAlign: 'center', padding: '0 24px', position: 'relative' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '36px', fontWeight: 400, fontStyle: 'italic', color: 'var(--gold)', lineHeight: 1.1, marginBottom: '8px' }}>{stat.number}</div>
                <div style={{ fontSize: '11px', fontWeight: 400, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--cream-muted)' }}>{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section aria-label="Student testimonials" style={{ padding: 'var(--section) 0', background: 'var(--bg)' }}>
        <div className="container">
          <AnimatedSection style={{ textAlign: 'center', marginBottom: '100px' }}>
            <p className="s-label" style={{ justifyContent: 'center' }}>Testimonials</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(38px, 5vw, 52px)', fontWeight: 400, color: 'var(--cream)', letterSpacing: '-0.01em', marginTop: '4px' }}>The students speak.</h2>
          </AnimatedSection>

          {testimonials.map((t, i) => (
            <div key={i}>
              <AnimatedSection>
                <article
                  style={{
                    display: 'grid',
                    gridTemplateColumns: i % 2 === 0 ? '60% 40%' : '40% 60%',
                    minHeight: '280px',
                    overflow: 'hidden',
                  }}
                  aria-label={`Testimonial from ${t.name}`}
                >
                  {i % 2 !== 0 && (
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '72px 64px 72px 0' }}>
                      <p style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: 500, color: 'var(--cream)', letterSpacing: '0.02em', marginBottom: '10px' }}>{t.name}</p>
                      <p style={{ fontSize: '11px', fontWeight: 400, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--cream-muted)', lineHeight: 1.8, whiteSpace: 'pre-line' }}>{t.role}</p>
                      <div style={{ width: '32px', height: '2px', background: 'var(--gold)', marginTop: '24px', opacity: 0.7 }} />
                    </div>
                  )}
                  <div style={{
                    position: 'relative',
                    padding: i % 2 === 0 ? '72px 64px 72px 0' : '72px 0 72px 64px',
                    borderRight: i % 2 === 0 ? '3px solid var(--gold-border)' : 'none',
                    borderLeft: i % 2 !== 0 ? '3px solid var(--gold-border)' : 'none',
                  }}>
                    <span aria-hidden="true" style={{ position: 'absolute', fontFamily: 'var(--font-display)', fontSize: '180px', fontWeight: 300, color: 'var(--cream)', opacity: 0.04, lineHeight: 1, top: '40px', right: i % 2 === 0 ? '40px' : 'auto', left: i % 2 !== 0 ? '40px' : 'auto', userSelect: 'none', pointerEvents: 'none', letterSpacing: '-0.06em' }}>{t.num}</span>
                    <span aria-hidden="true" style={{ position: 'absolute', fontFamily: 'var(--font-display)', fontSize: '120px', color: 'var(--gold)', lineHeight: 0.7, top: '56px', left: i % 2 === 0 ? 0 : '64px', opacity: 0.55, userSelect: 'none', pointerEvents: 'none' }}>&ldquo;</span>
                    <blockquote style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(22px, 2.4vw, 30px)', fontWeight: 300, color: 'var(--cream-soft)', lineHeight: 1.55, position: 'relative', zIndex: 1, paddingTop: '24px' }}>
                      {t.quote}
                    </blockquote>
                  </div>
                  {i % 2 === 0 && (
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '72px 0 72px 64px' }}>
                      <p style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: 500, color: 'var(--cream)', letterSpacing: '0.02em', marginBottom: '10px' }}>{t.name}</p>
                      <p style={{ fontSize: '11px', fontWeight: 400, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--cream-muted)', lineHeight: 1.8, whiteSpace: 'pre-line' }}>{t.role}</p>
                      <div style={{ width: '32px', height: '2px', background: 'var(--gold)', marginTop: '24px', opacity: 0.7 }} />
                    </div>
                  )}
                </article>
              </AnimatedSection>
              {i < testimonials.length - 1 && (
                <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, var(--gold-border) 30%, var(--gold-border) 70%, transparent)' }} />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* PROGRESS STORIES */}
      <section aria-label="Rating progress stories" style={{ padding: 'var(--section) 0', background: 'var(--bg-alt)' }}>
        <div className="container">
          <AnimatedSection style={{ marginBottom: '64px' }}>
            <p className="s-label">Verified Progress</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 400, color: 'var(--cream)', letterSpacing: '-0.01em', marginTop: '4px', maxWidth: '700px' }}>
              Rating gains, tournament debuts, consistent improvement.
            </h2>
          </AnimatedSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1px', background: 'var(--border)' }}>
            {progressCards.map((card, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div style={{ background: 'var(--bg-card)', padding: '36px 32px 40px', borderTop: '2px solid var(--gold)' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '36px', fontWeight: 400, color: 'var(--gold)', letterSpacing: '-0.01em', marginBottom: '4px', lineHeight: 1.1 }}>{card.rating}</div>
                  <div style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--cream-muted)', marginBottom: '20px' }}>{card.student}</div>
                  <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--cream-soft)', lineHeight: 1.7, borderTop: '1px solid var(--border)', paddingTop: '20px' }}>{card.detail}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section aria-label="Why students stay" style={{ padding: 'var(--section) 0', background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '80px', alignItems: 'start' }}>
            <AnimatedSection>
              <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '36px' }}>Why Students Stay</p>
              {['Direct access to the coach — no assistants, no deputies.', 'Structured progression, not random game reviews.', 'Honest assessment of weaknesses, not just encouragement.'].map((text, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '18px', padding: '20px 0', borderBottom: '1px solid var(--border)', borderTop: i === 0 ? '1px solid var(--border)' : 'none' }}>
                  <div aria-hidden="true" style={{ width: '20px', height: '1px', background: 'var(--gold)', flexShrink: 0, marginTop: '12px' }} />
                  <p style={{ fontSize: '15px', fontWeight: 300, color: 'var(--cream-soft)', lineHeight: 1.7 }}>{text}</p>
                </div>
              ))}
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '36px' }}>Who This Is For</p>
              {['Competitive players wanting real, measurable results.', "Beginners who want a proper foundation, not just rules.", 'Busy adults who need efficiency, not filler sessions.'].map((text, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '18px', padding: '20px 0', borderBottom: '1px solid var(--border)', borderTop: i === 0 ? '1px solid var(--border)' : 'none' }}>
                  <div aria-hidden="true" style={{ width: '20px', height: '1px', background: 'var(--gold)', flexShrink: 0, marginTop: '12px' }} />
                  <p style={{ fontSize: '15px', fontWeight: 300, color: 'var(--cream-soft)', lineHeight: 1.7 }}>{text}</p>
                </div>
              ))}
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section aria-label="Book a session" style={{ position: 'relative', padding: 'var(--section) 0', overflow: 'hidden', background: 'var(--bg-alt)', borderTop: '1px solid var(--border)' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(201,160,82,0.06) 0%, transparent 70%)' }} />
        <div className="container">
          <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <AnimatedSection>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 400, color: 'var(--cream)', letterSpacing: '-0.01em', lineHeight: 1.15, maxWidth: '620px', margin: '0 auto 20px' }}>
                Train with a coach who&rsquo;s been where you want to go.
              </h2>
              <p style={{ fontSize: '15px', fontWeight: 300, color: 'var(--cream-muted)', marginBottom: '44px' }}>Limited spots. Book your introductory call.</p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <a href={WA_URL} className="btn btn-gold" target="_blank" rel="noopener noreferrer">Book a Session</a>
                <Link href="/programs" className="btn btn-outline">See Programs</Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
