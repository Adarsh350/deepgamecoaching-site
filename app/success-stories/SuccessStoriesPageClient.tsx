'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useInView, animate, useMotionValue, useReducedMotion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';

const WA_URL = 'https://wa.me/971525203533';

// Count-up for numeric values, plain fade for text values
function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const shouldReduceMotion = useReducedMotion();
  const rawNum = parseFloat(value.replace(/[^0-9.]/g, ''));
  const isNumeric = !isNaN(rawNum) && value.trim().match(/^[\d.]+/);
  const suffix = value.replace(/^[\d.]+/, '');
  const motionVal = useMotionValue(0);
  const [display, setDisplay] = useState(isNumeric ? '0' : value);

  useEffect(() => {
    if (!inView) return;
    if (!isNumeric || shouldReduceMotion) { setDisplay(value); return; }
    const controls = animate(motionVal, rawNum, {
      duration: 1.5,
      ease: 'easeOut',
      onUpdate: v => setDisplay(Math.round(v).toString()),
    });
    return controls.stop;
  }, [inView, isNumeric, rawNum, motionVal, shouldReduceMotion, value]);

  return <span ref={ref}>{display}{isNumeric ? suffix : ''}</span>;
}

const testimonials = [
  {
    num: 'I',
    quote: "I have spent over 7 years training with Adarsh and he's been both an excellent coach and an immense support for me. When we started I knew nothing at all about chess and now I'm rated over 1900 on Lichess, one of the organizers at Bangalore Chess Club and actively playing and even winning local tournaments.",
    name: 'Sharanya Mathur',
    role: 'Treasurer, Bangalore Chess Club',
  },
  {
    num: 'II',
    quote: "I had Adarsh train me while I was competing for the Girls U14 UAE Clusters and U19 UAE Cluster and won both events. He is an excellent chess coach but even a better tournament strategist. He helped me develop my game by making my strengths stronger and it was very focused individual attention even in a group class.",
    name: 'Anchal Gupta',
    role: 'Former Girls Team Captain, Abu Dhabi Indian School\nUAE Cluster Champion · San Francisco Chess Club',
  },
  {
    num: 'III',
    quote: "Adarsh provided chess coaching for my 6 year old son. He worked with him for a year and after his coaching he has been winning tournaments at school and is very happy and excited to play chess even more than before. He did one-on-one coaching with my son and my son has since improved leaps and bounds.",
    name: 'Dr. Yogesh Shastri',
    role: 'Leading Doctor, Abu Dhabi',
  },
  {
    num: 'IV',
    quote: "Adarsh is an extremely talented chess player but I would say his bigger strength is coaching. He is the most patient coach I have worked with and my rating has improved from 700 to 1500 in 1 year under his coaching.",
    name: 'Amritanshi Saxena',
    role: 'Student, Cornell University',
  },
  {
    num: 'V',
    quote: "I had Adarsh train me for both the U14 Mixed and U19 Mixed UAE Chess Tournaments and under his coaching I was able to bag prizes in all 4 years that I competed. His approach to tactics and developing your own style of play is something I haven't seen anywhere else.",
    name: 'Jonathan Figy',
    role: 'UAE Men\'s Cricketer',
  },
];

const stats = [
  { number: '5+', label: 'Years — students stay because it works' },
  { number: '3', label: 'Countries — UAE, India & beyond' },
  { number: 'All', label: 'Levels — complete beginners to FIDE-rated' },
  { number: 'Max 4', label: 'Per group — you get real attention' },
];

const progressCards = [
  { rating: '0 → 1900+', student: 'Sharanya Mathur — Lichess', detail: '7 years of training from zero chess knowledge. Now organizer at Bangalore Chess Club, winning local tournaments.' },
  { rating: '700 → 1500', student: 'Amritanshi Saxena — Lichess', detail: 'Under 1 year of coaching. Cornell University student.' },
  { rating: 'U14 & U19 Champion', student: 'Anchal Gupta — UAE Clusters', detail: 'Won both Girls U14 and U19 UAE Cluster Championships under Adarsh\'s tournament preparation.' },
];

export default function SuccessStoriesPage() {
  const shouldReduceMotion = useReducedMotion();

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
            <motion.p
              className="s-label"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              style={{ marginBottom: '24px' }}
            >
              Student Results
            </motion.p>
            <motion.h1
              initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(44px, 6vw, 68px)', fontWeight: 400, color: 'var(--cream)', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '24px' }}
            >
              Trained by Adarsh.<br />Here&rsquo;s what changed.
            </motion.h1>
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontSize: '16px', fontWeight: 300, color: 'var(--cream-muted)', lineHeight: 1.75, maxWidth: '480px', marginBottom: '36px' }}
            >
              Words from students at every level — school players, competitive adults, complete beginners.
            </motion.p>
            {/* Gold rule draws in */}
            <motion.div
              initial={shouldReduceMotion ? false : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'left' }}
            >
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
              <motion.div
                key={i}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{ textAlign: 'center', padding: '0 24px', position: 'relative' }}
              >
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '36px', fontWeight: 400, fontStyle: 'italic', color: 'var(--gold)', lineHeight: 1.1, marginBottom: '8px' }}>
                  <CountUp value={stat.number} />
                </div>
                <div style={{ fontSize: '11px', fontWeight: 400, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--cream-muted)' }}>{stat.label}</div>
              </motion.div>
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
              <AnimatedSection variant={i % 2 === 0 ? 'fadeLeft' : 'fadeRight'}>
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
                    <motion.div
                      initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                      style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '72px 64px 72px 0' }}
                    >
                      <p style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: 500, color: 'var(--cream)', letterSpacing: '0.02em', marginBottom: '10px' }}>{t.name}</p>
                      <p style={{ fontSize: '11px', fontWeight: 400, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--cream-muted)', lineHeight: 1.8, whiteSpace: 'pre-line' }}>{t.role}</p>
                      {/* Animated gold accent bar */}
                      <motion.div
                        initial={shouldReduceMotion ? false : { scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        style={{ width: '32px', height: '2px', background: 'var(--gold)', marginTop: '24px', opacity: 0.7, transformOrigin: 'left' }}
                      />
                    </motion.div>
                  )}

                  <div style={{
                    position: 'relative',
                    padding: i % 2 === 0 ? '72px 64px 72px 0' : '72px 0 72px 64px',
                    borderRight: i % 2 === 0 ? '3px solid var(--gold-border)' : 'none',
                    borderLeft: i % 2 !== 0 ? '3px solid var(--gold-border)' : 'none',
                  }}>
                    <span aria-hidden="true" style={{ position: 'absolute', fontFamily: 'var(--font-display)', fontSize: '180px', fontWeight: 300, color: 'var(--cream)', opacity: 0.04, lineHeight: 1, top: '40px', right: i % 2 === 0 ? '40px' : 'auto', left: i % 2 !== 0 ? '40px' : 'auto', userSelect: 'none', pointerEvents: 'none', letterSpacing: '-0.06em' }}>{t.num}</span>
                    <span aria-hidden="true" style={{ position: 'absolute', fontFamily: 'var(--font-display)', fontSize: '120px', color: 'var(--gold)', lineHeight: 0.7, top: '56px', left: i % 2 === 0 ? 0 : '64px', opacity: 0.55, userSelect: 'none', pointerEvents: 'none' }}>&ldquo;</span>
                    <motion.blockquote
                      initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                      style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(22px, 2.4vw, 30px)', fontWeight: 300, color: 'var(--cream-soft)', lineHeight: 1.55, position: 'relative', zIndex: 1, paddingTop: '24px' }}
                    >
                      {t.quote}
                    </motion.blockquote>
                  </div>

                  {i % 2 === 0 && (
                    <motion.div
                      initial={shouldReduceMotion ? false : { opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                      style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '72px 0 72px 64px' }}
                    >
                      <p style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: 500, color: 'var(--cream)', letterSpacing: '0.02em', marginBottom: '10px' }}>{t.name}</p>
                      <p style={{ fontSize: '11px', fontWeight: 400, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--cream-muted)', lineHeight: 1.8, whiteSpace: 'pre-line' }}>{t.role}</p>
                      <motion.div
                        initial={shouldReduceMotion ? false : { scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        style={{ width: '32px', height: '2px', background: 'var(--gold)', marginTop: '24px', opacity: 0.7, transformOrigin: 'left' }}
                      />
                    </motion.div>
                  )}
                </article>
              </AnimatedSection>

              {i < testimonials.length - 1 && (
                <motion.div
                  initial={shouldReduceMotion ? false : { scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  style={{ height: '1px', background: 'linear-gradient(90deg, transparent, var(--gold-border) 30%, var(--gold-border) 70%, transparent)', transformOrigin: 'left' }}
                />
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
              <motion.div
                key={i}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                style={{ background: 'var(--bg-card)', padding: '36px 32px 40px', position: 'relative', overflow: 'hidden' }}
              >
                {/* Gold top bar draws in */}
                <motion.div
                  initial={shouldReduceMotion ? false : { scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.1 + 0.2, ease: [0.16, 1, 0.3, 1] }}
                  style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'var(--gold)', transformOrigin: 'left' }}
                />
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '36px', fontWeight: 400, color: 'var(--gold)', letterSpacing: '-0.01em', marginBottom: '4px', lineHeight: 1.1 }}>{card.rating}</div>
                <div style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--cream-muted)', marginBottom: '20px' }}>{card.student}</div>
                <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--cream-soft)', lineHeight: 1.7, borderTop: '1px solid var(--border)', paddingTop: '20px' }}>{card.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section aria-label="Why students stay" style={{ padding: 'var(--section) 0', background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '80px', alignItems: 'start' }}>
            <AnimatedSection variant="fadeLeft">
              <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '36px' }}>Why Students Stay</p>
              {['Direct access to the coach — no assistants, no deputies.', 'Structured progression, not random game reviews.', 'Honest assessment of weaknesses, not just encouragement.'].map((text, i) => (
                <motion.div
                  key={i}
                  initial={shouldReduceMotion ? false : { opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '18px', padding: '20px 0', borderBottom: '1px solid var(--border)', borderTop: i === 0 ? '1px solid var(--border)' : 'none' }}
                >
                  <div aria-hidden="true" style={{ width: '20px', height: '1px', background: 'var(--gold)', flexShrink: 0, marginTop: '12px' }} />
                  <p style={{ fontSize: '15px', fontWeight: 300, color: 'var(--cream-soft)', lineHeight: 1.7 }}>{text}</p>
                </motion.div>
              ))}
            </AnimatedSection>

            <AnimatedSection delay={0.1} variant="fadeRight">
              <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '36px' }}>Who This Is For</p>
              {['Competitive players wanting real, measurable results.', "Beginners who want a proper foundation, not just rules.", 'Busy adults who need efficiency, not filler sessions.'].map((text, i) => (
                <motion.div
                  key={i}
                  initial={shouldReduceMotion ? false : { opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '18px', padding: '20px 0', borderBottom: '1px solid var(--border)', borderTop: i === 0 ? '1px solid var(--border)' : 'none' }}
                >
                  <div aria-hidden="true" style={{ width: '20px', height: '1px', background: 'var(--gold)', flexShrink: 0, marginTop: '12px' }} />
                  <p style={{ fontSize: '15px', fontWeight: 300, color: 'var(--cream-soft)', lineHeight: 1.7 }}>{text}</p>
                </motion.div>
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
            <AnimatedSection variant="scale">
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 400, color: 'var(--cream)', letterSpacing: '-0.01em', lineHeight: 1.15, maxWidth: '620px', margin: '0 auto 20px' }}>
                Train with a coach who&rsquo;s been where you want to go.
              </h2>
              <p style={{ fontSize: '15px', fontWeight: 300, color: 'var(--cream-muted)', marginBottom: '44px' }}>Limited spots. Book your introductory call.</p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <motion.a
                  href={WA_URL}
                  className="btn btn-gold"
                  target="_blank"
                  rel="noopener noreferrer"
                  animate={shouldReduceMotion ? {} : {
                    boxShadow: ['0 0 0px rgba(201,160,82,0)', '0 0 28px rgba(201,160,82,0.45)', '0 0 0px rgba(201,160,82,0)'],
                  }}
                  transition={{ boxShadow: { repeat: Infinity, duration: 2.8, ease: 'easeInOut' } }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Book a Session
                </motion.a>
                <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                  <Link href="/programs" className="btn btn-outline">See Programs</Link>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
