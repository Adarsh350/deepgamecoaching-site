'use client';

import type { Metadata } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';

const WA_URL = 'https://wa.me/971525203533';

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section
        aria-labelledby="hero-heading"
        style={{
          height: '380px',
          display: 'flex',
          alignItems: 'center',
          paddingTop: 'var(--nav-height)',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: 'var(--bg-alt)',
          backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 28px, rgba(201,160,82,0.03) 28px, rgba(201,160,82,0.03) 29px)',
        }}
      >
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 60%, var(--bg) 100%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', width: '100%' }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <p className="s-label" style={{ justifyContent: 'center', marginBottom: '20px' }}>The Coach</p>
            <h1 id="hero-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(44px, 6vw, 64px)', fontWeight: 400, color: 'var(--cream)', lineHeight: 1.05, letterSpacing: '-0.01em', marginBottom: '16px' }}>Adarsh Shankar</h1>
            <p style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', fontWeight: 300, color: 'var(--cream-muted)', letterSpacing: '0.05em', marginBottom: '28px' }}>FIDE-rated. Multi-time UAE champion. Based in Abu Dhabi.</p>
            <div className="gold-rule" style={{ margin: '0 auto' }} />
          </motion.div>
        </div>
      </section>

      {/* BIO SECTION */}
      <section aria-labelledby="bio-heading" style={{ padding: 'var(--section) 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '80px', alignItems: 'start' }}>
            <div>
              <AnimatedSection>
                <p className="s-label">Background</p>
              </AnimatedSection>
              <AnimatedSection delay={0.05} style={{ fontSize: '16px', fontWeight: 300, color: 'var(--cream-soft)', lineHeight: 1.85 }}>
                <p>I&apos;ve played chess competitively since childhood — through school tournaments, college circuits, and open events across India and the UAE. I&apos;m FIDE-rated and active on Lichess (handle: adarshshankar).</p>
                <p style={{ marginTop: '1.5em' }}>I started coaching because I noticed a gap: most instructors either teach theory without feel, or game positions without structure. I do both — building pattern recognition and calculating ability together, layered on top of strong opening repertoires suited to each student&apos;s style.</p>
                <p style={{ marginTop: '1.5em' }}>I keep my groups small on purpose — maximum 4 students. Every student gets direct, personalised attention — not a one-size-fits-all syllabus.</p>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.1}>
              <div style={{ position: 'relative' }}>
                <div style={{ width: '100%', aspectRatio: '3/4', background: 'var(--bg-surface)', border: '1px solid var(--gold-border)', borderRadius: '1px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '14px' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '140px', color: 'var(--gold)', opacity: 0.15, lineHeight: 1 }}>♞</span>
                  <span style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--cream-muted)' }}>Adarsh Shankar</span>
                </div>
                <div aria-hidden="true" style={{ position: 'absolute', inset: '12px -12px -12px 12px', border: '1px solid var(--gold-border)', borderRadius: '1px', opacity: 0.4, pointerEvents: 'none' }} />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CREDENTIALS BAR */}
      <section aria-label="Credentials" style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '48px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0' }}>
            {[
              { label: 'FIDE Rated', sub: 'Active competitive player' },
              { label: 'Lichess: adarshshankar', sub: 'Open profile, verifiable games' },
              { label: 'Private Tutor License', sub: 'UAE-registered, compliant' },
            ].map((cred, i) => (
              <AnimatedSection key={i} delay={i * 0.1} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 40px', borderLeft: i > 0 ? '1px solid var(--border-soft)' : 'none' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontStyle: 'italic', fontWeight: 400, color: 'var(--gold)', marginBottom: '8px', lineHeight: 1.2 }}>{cred.label}</p>
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', fontWeight: 300, color: 'var(--cream-muted)', letterSpacing: '0.04em' }}>{cred.sub}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section aria-labelledby="philosophy-heading" style={{ padding: 'var(--section) 0' }}>
        <div className="container">
          <AnimatedSection style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p className="s-label" style={{ justifyContent: 'center' }}>Philosophy</p>
            <h2 id="philosophy-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 4.5vw, 48px)', fontWeight: 400, color: 'var(--cream)', lineHeight: 1.1 }}>Chess is a skill, not a talent.</h2>
          </AnimatedSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Pattern First', body: 'I teach you to see before you calculate. Positions become familiar before the variations.' },
              { title: 'Style-Matched Repertoire', body: 'Your opening lines are chosen for your personality — tactical or positional, sharp or solid.' },
              { title: 'Honest Feedback', body: "I tell you where you actually lose games, not where you think you do." },
            ].map((card, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderLeft: '3px solid var(--gold)', padding: '28px 24px', borderRadius: '1px', height: '100%' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 500, color: 'var(--cream)', marginBottom: '14px', lineHeight: 1.2 }}>{card.title}</h3>
                  <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--cream-muted)', lineHeight: 1.8 }}>{card.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section aria-labelledby="experience-heading" style={{ padding: 'var(--section) 0', background: 'var(--bg-alt)' }}>
        <div className="container">
          <div style={{ marginBottom: '72px' }}>
            <AnimatedSection>
              <p className="s-label">Experience</p>
              <h2 id="experience-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 400, color: 'var(--cream)', lineHeight: 1.15 }}>
                From tournament tables<br />to coaching boards.
              </h2>
            </AnimatedSection>
          </div>

          <div style={{ position: 'relative', paddingLeft: '48px' }} role="list">
            <div aria-hidden="true" style={{ position: 'absolute', left: 0, top: '8px', bottom: '8px', width: '1px', background: 'linear-gradient(to bottom, var(--gold-border), transparent)' }} />
            {[
              { era: 'Early Years', title: 'Competitive Play', body: 'School circuits, college tournaments, and open events across India and the UAE. Built the pattern library and opening knowledge that now forms the backbone of every coaching session.' },
              { era: 'First sessions', title: 'Private Coaching Begins', body: 'Started 1-on-1 coaching informally. Early students included school-level competitive players preparing for inter-school and regional events.' },
              { era: 'Formalised', title: 'Deep Game Coaching', body: 'Structured 1-on-1 programs and small group sessions (maximum 4 students) with a defined curriculum and measurable progress milestones.' },
              { era: 'Now', title: 'Current', body: 'Abu Dhabi-based, available for in-person sessions locally and online for students internationally. Actively coaching and playing — both inform each other.' },
            ].map((entry, i) => (
              <AnimatedSection key={i} delay={i * 0.1} style={{ position: 'relative', paddingBottom: i < 3 ? '52px' : 0 }}>
                <div aria-hidden="true" style={{ position: 'absolute', left: '-52px', top: '6px', width: '9px', height: '9px', borderRadius: '50%', background: 'var(--gold)', boxShadow: '0 0 0 3px rgba(201,160,82,0.15)' }} />
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '10px' }}>{entry.era}</p>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: 400, color: 'var(--cream)', lineHeight: 1.2, marginBottom: '10px' }}>{entry.title}</h3>
                <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--cream-muted)', lineHeight: 1.8, maxWidth: '580px' }}>{entry.body}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section aria-labelledby="cta-heading" style={{ padding: 'var(--section) 0', textAlign: 'center', position: 'relative', overflow: 'hidden', background: 'var(--bg-alt)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <AnimatedSection style={{ position: 'relative', zIndex: 1 }}>
            <h2 id="cta-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 400, color: 'var(--cream)', lineHeight: 1.1, marginBottom: '16px' }}>Ready to train with Adarsh?</h2>
            <p style={{ fontSize: '16px', fontWeight: 300, color: 'rgba(240,235,224,0.7)', marginBottom: '40px' }}>Book a free 20-minute intro call. We&apos;ll look at your game, find where you&apos;re losing, and see if coaching is the right fit.</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <a href={WA_URL} className="btn btn-gold" target="_blank" rel="noopener noreferrer">Book a Free Intro</a>
              <Link href="/programs" className="btn btn-outline">View Programs</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
