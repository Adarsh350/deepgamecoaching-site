'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';

const WA_URL = 'https://wa.me/971525203533';

const privatePackages = [
  { sessions: 4, total: 540, perSession: 135, saving: 10, label: 'Starter' },
  { sessions: 6, total: 810, perSession: 135, saving: 10, label: 'Standard' },
  { sessions: 12, total: 1500, perSession: 125, saving: 17, label: 'Committed', highlight: true },
  { sessions: 20, total: 2400, perSession: 120, saving: 20, label: 'Annual' },
];

const groupPackages = [
  { sessions: 5, total: 500, perSession: 100, saving: 9, label: 'Starter' },
  { sessions: 10, total: 950, perSession: 95, saving: 14, label: 'Standard', highlight: true },
  { sessions: 15, total: 1350, perSession: 90, saving: 18, label: 'Extended' },
  { sessions: 20, total: 1760, perSession: 88, saving: 20, label: 'Annual' },
];

const faqs = [
  {
    q: 'Is there a free intro call?',
    a: 'Yes — a 20-minute call via WhatsApp with Adarsh directly, at no charge and with no commitment. He will learn your level, your goals, and whether coaching makes sense for you.',
  },
  {
    q: 'What does the 100 AED trial session include?',
    a: 'One full 60-minute coaching session with Adarsh, personally taught. If you then book any package, the trial session counts as session one — so a 12-session package becomes 13 sessions for the same price.',
  },
  {
    q: 'What is included in every session?',
    a: 'All sessions are taught personally by Adarsh — no assistants or substitutes. Each session includes structured training on your specific weaknesses, opening work tailored to your playing style, and session notes. Online sessions include game recordings.',
  },
  {
    q: 'What is the difference between 1-on-1 and group coaching?',
    a: '1-on-1 sessions give you Adarsh\'s full attention for the entire session and are fully customised to your game. Group sessions (maximum 4 students) are structured around shared level and goals — still small enough for individual feedback, at a lower per-session rate.',
  },
  {
    q: 'Do you offer coaching for schools or corporate groups?',
    a: 'Yes. Adarsh offers chess coaching for schools and corporate teams in Abu Dhabi and Dubai. Format, schedule, and pricing are customised to the group. Message via WhatsApp to discuss.',
  },
];

export default function PricingPageClient() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {/* HERO */}
      <section
        aria-label="Page header"
        style={{
          position: 'relative',
          paddingTop: 'calc(var(--nav-height) + 80px)',
          paddingBottom: '80px',
          textAlign: 'center',
          background: 'var(--bg)',
          overflow: 'hidden',
        }}
      >
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 28px, rgba(201,160,82,0.025) 28px, rgba(201,160,82,0.025) 29px)', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 60%, var(--bg) 100%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.p
            className="s-label"
            style={{ justifyContent: 'center' }}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            Pricing
          </motion.p>
          <motion.h1
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(44px, 6vw, 68px)', fontWeight: 400, color: 'var(--cream)', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '20px' }}
          >
            Transparent pricing.<br />No surprises.
          </motion.h1>
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontSize: '16px', fontWeight: 300, color: 'var(--cream-muted)', lineHeight: 1.75, maxWidth: '500px', margin: '0 auto 36px' }}
          >
            All sessions are taught personally by Adarsh — not handed off to junior coaches. Rates below reflect that.
          </motion.p>
          <motion.div
            initial={shouldReduceMotion ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'center' }}
          >
            <div className="gold-rule" style={{ margin: '0 auto' }} />
          </motion.div>
        </div>
      </section>

      {/* TRIAL SESSION CALLOUT */}
      <section aria-label="Trial session" style={{ padding: '0 0 var(--section)', background: 'var(--bg)' }}>
        <div className="container">
          <AnimatedSection variant="scale">
            <div style={{
              background: 'var(--bg-alt)',
              border: '1px solid var(--gold-border)',
              borderRadius: '2px',
              padding: '48px 44px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '32px',
              alignItems: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 80% at 0% 50%, rgba(201,160,82,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '10px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '12px' }}>Start here</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 400, color: 'var(--cream)', lineHeight: 1.15, marginBottom: '16px' }}>
                  Free 20-min intro call
                </h2>
                <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--cream-muted)', lineHeight: 1.8 }}>
                  Before anything else — a free call with Adarsh. He learns your level, your goals, and recommends the right program. No pitch, no commitment.
                </p>
              </div>
              <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '56px', fontWeight: 400, color: 'var(--gold)', lineHeight: 1 }}>Free</span>
                  <span style={{ fontSize: '13px', fontWeight: 300, color: 'var(--cream-muted)' }}>20 minutes · WhatsApp or Zoom</span>
                </div>
                <div style={{ height: '1px', background: 'var(--border)' }} />
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '40px', fontWeight: 400, color: 'var(--cream)', lineHeight: 1 }}>100 <span style={{ fontSize: '20px', color: 'var(--cream-muted)' }}>AED</span></span>
                  <span style={{ fontSize: '13px', fontWeight: 300, color: 'var(--cream-muted)' }}>trial session · no commitment</span>
                </div>
                <p style={{ fontSize: '11px', fontWeight: 300, color: 'var(--cream-muted)', lineHeight: 1.6 }}>
                  The 100 AED trial counts as session one if you book a package — so a 12-session package becomes 13 sessions for the same price.
                </p>
                <motion.a
                  href={WA_URL}
                  className="btn btn-gold"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ alignSelf: 'flex-start' }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Message Adarsh
                </motion.a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 1-ON-1 PRICING */}
      <section aria-labelledby="private-heading" style={{ padding: 'var(--section) 0', background: 'var(--bg-alt)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <AnimatedSection style={{ marginBottom: '56px' }}>
            <p className="s-label">1-on-1 Private Coaching</p>
            <h2 id="private-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(34px, 4vw, 50px)', fontWeight: 400, color: 'var(--cream)', lineHeight: 1.1, letterSpacing: '-0.01em', maxWidth: '600px' }}>
              Your full hour. Adarsh's full attention.
            </h2>
            <p style={{ fontSize: '15px', fontWeight: 300, color: 'var(--cream-muted)', lineHeight: 1.8, maxWidth: '520px', marginTop: '16px' }}>
              Private sessions are fully customised to your game — your weaknesses, your opening repertoire, your tournament goals. Available online or in-person in Abu Dhabi and Dubai.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'baseline', gap: '8px', marginTop: '24px', padding: '12px 20px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '2px' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: 400, color: 'var(--gold)', lineHeight: 1 }}>150</span>
              <span style={{ fontSize: '13px', color: 'var(--cream-muted)', fontWeight: 300 }}>AED / session · pay as you go</span>
            </div>
          </AnimatedSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2px', background: 'var(--border)' }}>
            {privatePackages.map((pkg, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div style={{
                  background: pkg.highlight ? 'var(--bg-card)' : 'var(--bg)',
                  padding: '36px 28px 40px',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                  {pkg.highlight && (
                    <motion.div
                      initial={shouldReduceMotion ? false : { scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: i * 0.08 + 0.2 }}
                      style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'var(--gold)', transformOrigin: 'left' }}
                    />
                  )}
                  <p style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: pkg.highlight ? 'var(--gold)' : 'var(--cream-muted)', marginBottom: '8px' }}>
                    {pkg.label}{pkg.highlight ? ' · Most popular' : ''}
                  </p>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 400, color: 'var(--cream)', marginBottom: '20px' }}>
                    {pkg.sessions} sessions
                  </p>
                  <div style={{ marginBottom: '8px' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '38px', fontWeight: 400, color: 'var(--gold)', lineHeight: 1 }}>{pkg.total.toLocaleString()}</span>
                    <span style={{ fontSize: '14px', color: 'var(--cream-muted)', marginLeft: '6px' }}>AED</span>
                  </div>
                  <p style={{ fontSize: '12px', fontWeight: 300, color: 'var(--cream-muted)', marginBottom: '16px' }}>
                    {pkg.perSession} AED per session
                  </p>
                  <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
                    <span style={{ fontSize: '11px', fontWeight: 500, color: 'var(--gold)', letterSpacing: '0.08em' }}>Save {pkg.saving}%</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection style={{ marginTop: '24px' }}>
            <p style={{ fontSize: '12px', fontWeight: 300, color: 'var(--cream-muted)', lineHeight: 1.7 }}>
              All 1-on-1 sessions are 60 minutes. Online via WhatsApp video, Zoom, or Google Meet. In-person in Abu Dhabi or Dubai. Sessions never expire.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* GROUP PRICING */}
      <section aria-labelledby="group-heading" style={{ padding: 'var(--section) 0', background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <AnimatedSection style={{ marginBottom: '56px' }}>
            <p className="s-label">Group Coaching</p>
            <h2 id="group-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(34px, 4vw, 50px)', fontWeight: 400, color: 'var(--cream)', lineHeight: 1.1, letterSpacing: '-0.01em', maxWidth: '600px' }}>
              Small groups. Real attention.
            </h2>
            <p style={{ fontSize: '15px', fontWeight: 300, color: 'var(--cream-muted)', lineHeight: 1.8, maxWidth: '520px', marginTop: '16px' }}>
              Maximum 4 students per group — small enough that Adarsh can review your games and give individual feedback in every session. Grouped by level and goal.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'baseline', gap: '8px', marginTop: '24px', padding: '12px 20px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '2px' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: 400, color: 'var(--gold)', lineHeight: 1 }}>110</span>
              <span style={{ fontSize: '13px', color: 'var(--cream-muted)', fontWeight: 300 }}>AED / session · pay as you go</span>
            </div>
          </AnimatedSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2px', background: 'var(--border)' }}>
            {groupPackages.map((pkg, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div style={{
                  background: pkg.highlight ? 'var(--bg-card)' : 'var(--bg-alt)',
                  padding: '36px 28px 40px',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                  {pkg.highlight && (
                    <motion.div
                      initial={shouldReduceMotion ? false : { scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: i * 0.08 + 0.2 }}
                      style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'var(--gold)', transformOrigin: 'left' }}
                    />
                  )}
                  <p style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: pkg.highlight ? 'var(--gold)' : 'var(--cream-muted)', marginBottom: '8px' }}>
                    {pkg.label}{pkg.highlight ? ' · Most popular' : ''}
                  </p>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 400, color: 'var(--cream)', marginBottom: '20px' }}>
                    {pkg.sessions} sessions
                  </p>
                  <div style={{ marginBottom: '8px' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '38px', fontWeight: 400, color: 'var(--gold)', lineHeight: 1 }}>{pkg.total.toLocaleString()}</span>
                    <span style={{ fontSize: '14px', color: 'var(--cream-muted)', marginLeft: '6px' }}>AED</span>
                  </div>
                  <p style={{ fontSize: '12px', fontWeight: 300, color: 'var(--cream-muted)', marginBottom: '16px' }}>
                    {pkg.perSession} AED per session
                  </p>
                  <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
                    <span style={{ fontSize: '11px', fontWeight: 500, color: 'var(--gold)', letterSpacing: '0.08em' }}>Save {pkg.saving}%</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection style={{ marginTop: '24px' }}>
            <p style={{ fontSize: '12px', fontWeight: 300, color: 'var(--cream-muted)', lineHeight: 1.7 }}>
              Group sessions are 60 minutes. Maximum 4 students — always. Sessions never expire.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SCHOOLS & CORPORATE */}
      <section aria-labelledby="corporate-heading" style={{ padding: 'var(--section) 0', background: 'var(--bg-alt)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <AnimatedSection variant="fadeLeft">
              <p className="s-label">Schools &amp; Corporate</p>
              <h2 id="corporate-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 46px)', fontWeight: 400, color: 'var(--cream)', lineHeight: 1.15, letterSpacing: '-0.01em', marginBottom: '20px' }}>
                Chess for your team<br />or school.
              </h2>
              <p style={{ fontSize: '15px', fontWeight: 300, color: 'var(--cream-muted)', lineHeight: 1.8, marginBottom: '20px' }}>
                Adarsh offers structured chess programs for schools and corporate teams in Abu Dhabi and Dubai. Whether it is an after-school chess club, a team-building workshop, or an ongoing curriculum, format and pricing are fully customised to your group.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
                {[
                  'After-school chess programs for students',
                  'Corporate team-building chess workshops',
                  'Structured multi-week curricula',
                  'All levels — beginners through to competitive players',
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: '14px', fontWeight: 300, color: 'var(--cream-muted)', paddingLeft: '20px', position: 'relative', lineHeight: 1.6 }}>
                    <span aria-hidden="true" style={{ position: 'absolute', left: 0, top: '10px', width: '8px', height: '1px', background: 'var(--gold)', display: 'block' }} />
                    {item}
                  </li>
                ))}
              </ul>
              <motion.a
                href={WA_URL}
                className="btn btn-gold"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Enquire via WhatsApp
              </motion.a>
            </AnimatedSection>

            <AnimatedSection delay={0.1} variant="fadeRight">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', background: 'var(--border)' }}>
                {[
                  { label: 'Group size', value: 'Flexible — from 4 to classroom size' },
                  { label: 'Format', value: 'In-person (Abu Dhabi / Dubai) or online' },
                  { label: 'Duration', value: 'One-off workshop or ongoing program' },
                  { label: 'Pricing', value: 'Custom — quoted per group and format' },
                ].map((row, i) => (
                  <div key={i} style={{ background: 'var(--bg-card)', padding: '20px 24px', display: 'grid', gridTemplateColumns: '140px 1fr', gap: '16px', alignItems: 'start' }}>
                    <span style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', paddingTop: '2px' }}>{row.label}</span>
                    <span style={{ fontSize: '14px', fontWeight: 300, color: 'var(--cream-soft)', lineHeight: 1.6 }}>{row.value}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-heading" style={{ padding: 'var(--section) 0', background: 'var(--bg)' }}>
        <div className="container">
          <AnimatedSection style={{ marginBottom: '64px' }}>
            <p className="s-label">Common Questions</p>
            <h2 id="faq-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(34px, 4vw, 48px)', fontWeight: 400, color: 'var(--cream)', lineHeight: 1.1, letterSpacing: '-0.01em', maxWidth: '600px' }}>
              Everything you need to know.
            </h2>
          </AnimatedSection>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, maxWidth: '760px' }}>
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <div style={{ borderTop: '1px solid var(--border)', padding: '28px 0', paddingTop: i === 0 ? 0 : undefined, borderTopWidth: i === 0 ? 0 : undefined }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 400, color: 'var(--cream)', marginBottom: '12px', lineHeight: 1.2 }}>{faq.q}</h3>
                  <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--cream-muted)', lineHeight: 1.8 }}>{faq.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section aria-label="Book a session" style={{ padding: 'var(--section) 0', background: 'var(--bg-alt)', borderTop: '1px solid var(--border)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(201,160,82,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container">
          <AnimatedSection variant="scale" style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 400, color: 'var(--cream)', lineHeight: 1.1, letterSpacing: '-0.01em', marginBottom: '16px' }}>
              Start with a free call.
            </h2>
            <p style={{ fontSize: '16px', fontWeight: 300, color: 'rgba(240,235,224,0.7)', lineHeight: 1.75, maxWidth: '440px', margin: '0 auto 36px' }}>
              20 minutes with Adarsh. He will look at your game, find where you are losing, and tell you exactly which program fits.
            </p>
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
                Book a Free Intro
              </motion.a>
              <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                <Link href="/programs" className="btn btn-outline">View Programs</Link>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
