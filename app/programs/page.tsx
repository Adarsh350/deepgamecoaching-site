'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';

const WA_URL = 'https://wa.me/971525203533';

// 3D tilt card
function TiltCard({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) return <div style={{ ...style, position: 'relative' }}>{children}</div>;

  return (
    <motion.div
      style={{ ...style, position: 'relative', transformStyle: 'preserve-3d', perspective: 800 }}
      whileHover={{ scale: 1.025 }}
      onMouseMove={e => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        e.currentTarget.style.transform = `perspective(800px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg) scale(1.025)`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
      }}
      transition={{ scale: { duration: 0.2 } }}
    >
      {children}
    </motion.div>
  );
}

const programs = [
  {
    tag: 'Foundations',
    headline: <>Starting from zero?<br />Perfect.</>,
    desc: "Adarsh starts from the very beginning — pieces, rules, basic tactics, and the right mindset for the game. You'll play your first real game within two sessions, and your first tournament within a year if you want to.",
    items: ["You've never played a real game", "You want to learn properly, not from YouTube clips", "Your child needs a patient and expert coach who starts from the very beginning"],
    numeral: 'I',
    reverse: false,
  },
  {
    tag: 'Development',
    headline: <>Know the game.<br />Ready to compete.</>,
    desc: "You know how to play but feel stuck. Adarsh identifies your specific weaknesses and builds a training plan around your natural playing style — not a generic curriculum.",
    items: ["You've played casually but feel stuck at the same level", "You want to enter your first UAE tournament", "You're losing games and can't figure out why"],
    numeral: 'II',
    reverse: true,
  },
  {
    tag: 'Mastery',
    headline: <>Already competing.<br />Ready to win.</>,
    desc: "You're in tournaments and want results. Game analysis, opening preparation tailored to your style, endgame sharpening, and tournament-tested strategy from UAE championship level.",
    items: ["You compete but keep finishing mid-table", "You want tournament-tested strategy, not generic drills", "You're serious about chess as more than a hobby"],
    numeral: 'III',
    reverse: false,
  },
];

export default function ProgramsPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {/* PAGE HERO */}
      <section style={{
        paddingTop: 'calc(var(--nav-height) + 80px)',
        paddingBottom: '80px',
        textAlign: 'center',
        minHeight: '380px',
        display: 'flex',
        alignItems: 'center',
        background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,160,82,0.06) 0%, transparent 70%)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div className="container" style={{ width: '100%' }}>
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.p
              className="s-label"
              style={{ justifyContent: 'center' }}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              Programs &amp; Sessions
            </motion.p>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(44px, 7vw, 72px)', fontWeight: 400, color: 'var(--cream)', lineHeight: 1.08, letterSpacing: '-0.02em', maxWidth: '760px', margin: '0 auto 24px' }}>
              The Right Program<br />for Where You Are
            </h1>
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ fontSize: '17px', fontWeight: 300, color: 'var(--cream-muted)', lineHeight: 1.75, maxWidth: '520px', margin: '0 auto' }}
            >
              Three structured tracks. All sessions personally taught by Adarsh. All tailored to your game.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* THREE PROGRAMS */}
      <section style={{ padding: 'var(--section) 0', background: 'var(--bg)' }}>
        <div className="container">
          <AnimatedSection style={{ textAlign: 'center', marginBottom: '72px' }}>
            <p className="s-label" style={{ justifyContent: 'center' }}>Coaching Tracks</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 400, color: 'var(--cream)', lineHeight: 1.1, letterSpacing: '-0.01em' }}>Three distinct paths to mastery</h2>
          </AnimatedSection>

          {programs.map((prog, i) => (
            <AnimatedSection
              key={i}
              delay={0.05}
              variant={prog.reverse ? 'fadeRight' : 'fadeLeft'}
              style={{ marginBottom: '32px' }}
            >
              <article style={{
                display: 'grid',
                gridTemplateColumns: prog.reverse ? '200px 1fr' : '1fr 200px',
                border: '1px solid var(--border-soft)',
                background: 'var(--bg-card)',
                overflow: 'hidden',
              }}>
                {prog.reverse && (
                  <div
                    aria-hidden="true"
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: 'var(--bg-surface)', borderRight: '1px solid var(--border)',
                      position: 'relative', overflow: 'hidden', minHeight: '360px',
                    }}
                  >
                    <motion.span
                      initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.7 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                      whileHover={shouldReduceMotion ? {} : { scale: 1.08, opacity: 0.15 }}
                      style={{
                        fontFamily: 'var(--font-display)', fontSize: '200px', fontWeight: 300,
                        color: 'rgba(201,160,82,0.09)', lineHeight: 1, userSelect: 'none', letterSpacing: '-0.05em',
                        display: 'block',
                      }}
                    >
                      {prog.numeral}
                    </motion.span>
                  </div>
                )}

                <div style={{ padding: '60px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <motion.span
                    initial={shouldReduceMotion ? false : { opacity: 0, x: prog.reverse ? 12 : -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    style={{ display: 'inline-block', fontSize: '10px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', border: '1px solid var(--gold-border)', padding: '6px 14px', borderRadius: '1px', marginBottom: '24px', alignSelf: 'flex-start' }}
                  >
                    {prog.tag}
                  </motion.span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 400, color: 'var(--cream)', lineHeight: 1.15, letterSpacing: '-0.01em', marginBottom: '20px' }}>{prog.headline}</h3>
                  <p style={{ fontSize: '15px', fontWeight: 300, color: 'var(--cream-muted)', lineHeight: 1.8, marginBottom: '28px' }}>{prog.desc}</p>

                  <div style={{ marginBottom: '32px' }}>
                    <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--cream-soft)', marginBottom: '14px' }}>This is for you if&hellip;</p>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {prog.items.map((item, j) => (
                        <motion.li
                          key={j}
                          initial={shouldReduceMotion ? false : { opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.35, delay: j * 0.08 + 0.25 }}
                          style={{ fontSize: '14px', fontWeight: 300, color: 'var(--cream-muted)', paddingLeft: '20px', position: 'relative', lineHeight: 1.6 }}
                        >
                          <span aria-hidden="true" style={{ position: 'absolute', left: 0, top: '10px', width: '8px', height: '1px', background: 'var(--gold)', display: 'block' }} />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <motion.a
                    href={WA_URL}
                    className="btn btn-gold"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ alignSelf: 'flex-start' }}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Get Started
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                  </motion.a>
                </div>

                {!prog.reverse && (
                  <div
                    aria-hidden="true"
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: 'var(--bg-surface)', borderLeft: '1px solid var(--border)',
                      position: 'relative', overflow: 'hidden', minHeight: '360px',
                    }}
                  >
                    <motion.span
                      initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.7 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                      whileHover={shouldReduceMotion ? {} : { scale: 1.08 }}
                      style={{
                        fontFamily: 'var(--font-display)', fontSize: '200px', fontWeight: 300,
                        color: 'rgba(201,160,82,0.09)', lineHeight: 1, userSelect: 'none', letterSpacing: '-0.05em',
                        display: 'block',
                      }}
                    >
                      {prog.numeral}
                    </motion.span>
                  </div>
                )}
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* DEEPGAME DIFFERENCE */}
      <section style={{ padding: 'var(--section) 0', background: 'var(--bg-alt)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <AnimatedSection style={{ marginBottom: '64px' }}>
            <p className="s-label">The DeepGame Difference</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(34px, 4vw, 50px)', fontWeight: 400, color: 'var(--cream)', lineHeight: 1.1, letterSpacing: '-0.01em', maxWidth: '600px' }}>
              Every plan is built by Adarsh —<br />and yours alone.
            </h2>
          </AnimatedSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2px' }}>
            {[
              { title: 'Playing Style Identification', body: 'Within your first month, Adarsh maps exactly how you think and play. Aggressive, positional, tactical — we find your natural style and build on it.' },
              { title: 'Strength-First Training', body: "Most coaches teach generic chess. Adarsh finds what you're already good at and makes it lethal. You improve faster." },
              { title: 'Session Tracking', body: "Every session is logged. Every game reviewed. You'll always know exactly where you've grown and what's coming next." },
            ].map((feat, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <TiltCard style={{ height: '100%' }}>
                  <div style={{ background: 'var(--bg-card)', padding: '44px 36px', border: '1px solid var(--border)', height: '100%' }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 400, color: 'var(--cream)', marginBottom: '14px', lineHeight: 1.2 }}>{feat.title}</h3>
                    <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--cream-muted)', lineHeight: 1.8 }}>{feat.body}</p>
                  </div>
                </TiltCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FORMAT */}
      <section style={{ padding: 'var(--section) 0', background: 'var(--bg)' }}>
        <div className="container">
          <AnimatedSection style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p className="s-label" style={{ justifyContent: 'center' }}>How We Meet</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(34px, 4vw, 50px)', fontWeight: 400, color: 'var(--cream)', lineHeight: 1.1, letterSpacing: '-0.01em' }}>Online or in person — your choice.</h2>
          </AnimatedSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '28px' }}>
            {[
              { title: 'Online Sessions (1-on-1)', body: 'Live sessions via your preferred platform — WhatsApp video, Zoom, or Google Meet. Full session notes and game recordings included. Available internationally.', cta: 'Book Online' },
              { title: 'In-Person Sessions (1-on-1)', body: 'Meet at a café or common area of your choice in Abu Dhabi or Dubai. Home visits available on request.', cta: 'Book In-Person' },
            ].map((card, i) => (
              <AnimatedSection key={i} delay={i * 0.12} variant={i === 0 ? 'fadeLeft' : 'fadeRight'}>
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { y: -4 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border-soft)', padding: '48px 44px', height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 400, color: 'var(--cream)', marginBottom: '16px', lineHeight: 1.2 }}>{card.title}</h3>
                  <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--cream-muted)', lineHeight: 1.8, marginBottom: '28px', flex: 1 }}>{card.body}</p>
                  <motion.a
                    href={WA_URL}
                    className="btn btn-outline"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ alignSelf: 'flex-start' }}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {card.cta}
                  </motion.a>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection>
            <p style={{ textAlign: 'center', fontSize: '13px', fontWeight: 300, color: 'var(--cream-muted)', borderTop: '1px solid var(--border)', paddingTop: '24px', lineHeight: 1.7 }}>
              <strong style={{ color: 'var(--cream-soft)', fontWeight: 400 }}>Small group sessions (max 4 students)</strong> available on request — all sessions taught personally by Adarsh Shankar.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* THE PROCESS */}
      <section style={{ padding: 'var(--section) 0', background: 'var(--bg-alt)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <AnimatedSection style={{ textAlign: 'center', marginBottom: '72px' }}>
            <p className="s-label" style={{ justifyContent: 'center' }}>The Process</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(34px, 4vw, 50px)', fontWeight: 400, color: 'var(--cream)', lineHeight: 1.1, letterSpacing: '-0.01em' }}>From first message<br />to first session.</h2>
          </AnimatedSection>

          <div style={{ maxWidth: '640px', margin: '0 auto', position: 'relative' }}>
            {/* Process timeline line */}
            <motion.div
              aria-hidden="true"
              initial={shouldReduceMotion ? false : { scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: '0px 0px -80px 0px' }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'absolute', left: '22px', top: '28px', bottom: '28px', width: '1px',
                background: 'linear-gradient(to bottom, var(--gold-border), transparent)',
                transformOrigin: 'top',
              }}
            />

            {[
              { n: '1', title: 'Free intro call', body: '20 minutes on WhatsApp or Zoom with Adarsh directly. He learns where you are and where you want to go.' },
              { n: '2', title: 'Your assessment', body: 'First 2–3 sessions are dedicated to understanding your game, learning style, and goals.' },
              { n: '3', title: 'Custom coaching plan', body: 'Adarsh builds a roadmap specific to you. No two plans are the same.' },
              { n: '4', title: 'Train and track', body: 'Regular sessions, game reviews, and clear milestones so you always see your progress.' },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.13, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: 'flex', gap: '28px', marginBottom: i < 3 ? '48px' : 0, position: 'relative' }}
              >
                {/* Spring-pop numbered circle */}
                <motion.div
                  initial={shouldReduceMotion ? false : { scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 400, damping: 16, delay: i * 0.13 + 0.1 }}
                  style={{
                    width: '44px', height: '44px', border: '1px solid var(--gold-border)', borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 400, color: 'var(--gold)',
                    background: 'var(--bg-alt)', flexShrink: 0, position: 'relative', zIndex: 1,
                  }}
                >
                  {step.n}
                </motion.div>
                <div style={{ paddingTop: '6px' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 400, color: 'var(--cream)', marginBottom: '8px', lineHeight: 1.2 }}>{step.title}</h3>
                  <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--cream-muted)', lineHeight: 1.8 }}>{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 0', background: 'var(--bg-alt)', borderTop: '1px solid var(--border)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(201,160,82,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container">
          <AnimatedSection variant="scale" style={{ position: 'relative', zIndex: 1 }}>
            <p className="s-label" style={{ justifyContent: 'center' }}>Get Started</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(38px, 6vw, 52px)', fontWeight: 400, color: 'var(--cream)', lineHeight: 1.1, letterSpacing: '-0.01em', marginBottom: '20px' }}>
              Ready to start training?
            </h2>
            <p style={{ fontSize: '16px', fontWeight: 300, color: 'rgba(240,235,224,0.7)', lineHeight: 1.75, maxWidth: '460px', margin: '0 auto 36px' }}>
              Book a free 20-minute intro call and find out which program is right for you.
            </p>
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
              Book a Free Intro
            </motion.a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
