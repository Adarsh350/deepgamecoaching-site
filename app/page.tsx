'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';

const WA_URL = 'https://wa.me/971525203533';

const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section
        aria-label="Hero"
        style={{
          position: 'relative',
          minHeight: '100svh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: 'var(--nav-height)',
          overflow: 'hidden',
        }}
      >
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, var(--bg) 60%, var(--bg-alt) 100%)' }} />
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(240,235,224,0.018) 59px, rgba(240,235,224,0.018) 60px), repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(240,235,224,0.018) 59px, rgba(240,235,224,0.018) 60px)',
          pointerEvents: 'none',
        }} />
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 0.045, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'absolute', right: '-30px', top: '50%', transform: 'translateY(-50%)',
            fontSize: '340px', fontFamily: 'var(--font-display)', color: 'var(--gold)',
            lineHeight: 1, pointerEvents: 'none', userSelect: 'none',
          }}
        >
          ♞
        </motion.div>

        <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: 'var(--container-max)', margin: '0 auto', padding: '80px var(--pad)' }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '11px', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '28px' }}
          >
            <span style={{ width: '24px', height: '1px', background: 'var(--gold)', display: 'block' }} />
            Private Chess Coaching · UAE
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(52px, 7vw, 84px)',
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              color: 'var(--cream)',
              maxWidth: '700px',
              marginBottom: '28px',
            }}
          >
            Private chess coaching<br />by a UAE champion.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontSize: '16px', fontWeight: 300, color: 'var(--cream-muted)', lineHeight: 1.8, maxWidth: '560px', marginBottom: '40px' }}
          >
            1-on-1 and small group sessions with Adarsh Shankar — a multi-time UAE champion and FIDE-rated player. Abu Dhabi, Dubai, or online. Every session personally coached.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}
          >
            <a href={WA_URL} className="btn btn-gold" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              Book a Free Intro
            </a>
            <Link href="/programs" className="btn btn-outline">Explore Programs →</Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}
          >
            {['FIDE Rated · Lichess Top 6%', 'Abu Dhabi Cluster Champion', '1-on-1 & Small Group Only'].map((pill, i) => (
              <span key={i} style={{ fontSize: '11px', fontWeight: 400, letterSpacing: '0.07em', color: 'var(--cream-muted)', border: '1px solid var(--border-soft)', padding: '6px 14px', borderRadius: '100px', whiteSpace: 'nowrap' }}>
                {pill}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROOF BAR */}
      <div role="region" aria-label="Credentials" style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', alignItems: 'stretch', overflowX: 'auto', scrollbarWidth: 'none' }}>
          {[
            'Multi-time UAE Cluster Champion',
            'Inter-School Champion',
            'Lichess Blitz Top 6% Globally',
            'FIDE Rated',
            '10+ Years Competitive Experience',
          ].map((text, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '20px 36px', borderRight: '1px solid var(--border)', flexShrink: 0, whiteSpace: 'nowrap' }}>
              <svg style={{ color: 'var(--gold)', flexShrink: 0 }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
              <span style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--cream-soft)' }}>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* PROGRAMS SECTION */}
      <section aria-labelledby="programs-h2" style={{ padding: 'var(--section) 0', background: 'var(--bg-alt)' }}>
        <div className="container">
          <AnimatedSection style={{ marginBottom: '52px' }}>
            <p className="s-label">Coaching Programs</p>
            <h2 id="programs-h2" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(34px, 4vw, 52px)', fontWeight: 400, color: 'var(--cream)', lineHeight: 1.1, letterSpacing: '-0.01em', marginBottom: '16px' }}>
              One coach. Three structured paths.
            </h2>
            <p style={{ fontSize: '16px', fontWeight: 300, color: 'var(--cream-muted)', lineHeight: 1.75, maxWidth: '600px' }}>
              Whether you&apos;re picking up a chess piece for the first time or preparing for UAE championships, there&apos;s a program built for exactly where you are.
            </p>
          </AnimatedSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '44px' }}>
            {[
              { tier: 'Beginners', title: 'Foundations', desc: 'Adarsh starts from the very beginning — pieces, rules, tactics, and playing your first real game. No experience needed. Learn the right habits from day one.' },
              { tier: 'Improvers', title: 'Development', desc: 'Plug the gaps in your game, sharpen your tactical eye, and prepare for tournaments under structured coaching. For players who want to compete seriously.' },
              { tier: 'Competitors', title: 'Mastery', desc: 'Game analysis, opening preparation, tournament strategy, and the edge-sharpening techniques from UAE championship level. For competitive players who want to win.' },
            ].map((prog, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderLeft: '3px solid var(--gold)', padding: '36px 28px', borderRadius: '2px', height: '100%' }}>
                  <p style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.13em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '6px' }}>{prog.tier}</p>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 500, color: 'var(--cream)', marginBottom: '14px' }}>{prog.title}</h3>
                  <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--cream-muted)', lineHeight: 1.8 }}>{prog.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection style={{ textAlign: 'center' }}>
            <Link href="/programs" className="text-link">View Full Programs →</Link>
          </AnimatedSection>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section aria-labelledby="testi-heading" style={{ padding: 'var(--section) 0', background: 'var(--bg-alt)', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(201,160,82,0.03) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: '-40px', left: 'var(--pad)', fontFamily: 'var(--font-display)', fontSize: '300px', fontWeight: 600, color: 'var(--gold)', opacity: 0.05, lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}>&ldquo;</div>
        <div className="container">
          <AnimatedSection style={{ position: 'relative', zIndex: 2, maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <div className="gold-rule" style={{ margin: '0 auto 40px' }} />
            <blockquote>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 32px)', fontStyle: 'italic', fontWeight: 400, color: 'var(--cream-soft)', lineHeight: 1.55, marginBottom: '32px' }}>
                &ldquo;Adarsh is an extremely talented chess player but I would say his bigger strength is coaching. He is the most patient coach I have worked with and my rating has improved from 700 to 1500 in 1 year under his coaching.&rdquo;
              </p>
              <footer style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.13em', textTransform: 'uppercase', color: 'var(--cream-muted)', marginBottom: '28px' }}>
                — <strong style={{ color: 'var(--gold)', fontWeight: 500 }}>Amritanshi</strong> · Rating: 700 → 1500 in one year · Cornell University
              </footer>
            </blockquote>
            <div className="gold-rule" style={{ margin: '0 auto 32px' }} />
            <Link href="/success-stories" className="text-link">Read more student stories →</Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ABOUT SNAPSHOT */}
      <section aria-labelledby="about-h2" style={{ padding: 'var(--section) 0', background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
            <AnimatedSection>
              <p className="s-label">About the Coach</p>
              <h2 id="about-h2" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 50px)', fontWeight: 400, color: 'var(--cream)', lineHeight: 1.15, letterSpacing: '-0.01em', marginBottom: '20px' }}>
                Coached by someone who knows what winning takes.
              </h2>
              <p style={{ fontSize: '15px', fontWeight: 300, color: 'var(--cream-muted)', lineHeight: 1.85, marginBottom: '32px' }}>
                Adarsh Shankar is a multi-time UAE Abu Dhabi Cluster Champion and inter-school chess champion with a FIDE rating and Lichess ratings that place him in the global top 6%. He has coached students from zero experience to tournament competitors across the UAE, India, and the United States.
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '32px' }}>
                {[{ num: '2101', label: 'Lichess Blitz' }, { num: '2264', label: 'Lichess Rapid' }, { num: '10+', label: 'Yrs Coaching' }].map((stat, i) => (
                  <div key={i} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', padding: '16px 20px', borderRadius: '2px', flex: 1, minWidth: '110px' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: 500, color: 'var(--gold)', display: 'block', lineHeight: 1, marginBottom: '5px' }}>{stat.num}</span>
                    <span style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--cream-muted)' }}>{stat.label}</span>
                  </div>
                ))}
              </div>
              <Link href="/about" className="text-link">Learn More About Adarsh →</Link>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div style={{ width: '100%', aspectRatio: '3/4', borderRadius: '4px', background: 'var(--bg-surface)', border: '1px solid var(--border-soft)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '14px' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '140px', color: 'var(--gold)', opacity: 0.15, lineHeight: 1 }}>♞</span>
                <span style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--cream-muted)' }}>Adarsh Shankar</span>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section aria-labelledby="cta-h2" style={{ padding: 'var(--section) 0', background: 'var(--bg-alt)', borderTop: '1px solid var(--border)', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(201,160,82,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container">
          <AnimatedSection style={{ position: 'relative', zIndex: 2 }}>
            <h2 id="cta-h2" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 58px)', fontWeight: 400, color: 'var(--cream)', lineHeight: 1.1, marginBottom: '16px' }}>
              Ready to make your move?
            </h2>
            <p style={{ fontSize: '16px', fontWeight: 300, color: 'rgba(240,235,224,0.7)', marginBottom: '36px', maxWidth: '440px', marginLeft: 'auto', marginRight: 'auto' }}>
              Book a free 20-minute intro call with Adarsh. We&apos;ll look at your game, find where you&apos;re losing, and see if coaching is the right fit. No pitch, no commitment.
            </p>
            <a href={WA_URL} className="btn btn-gold" target="_blank" rel="noopener noreferrer" style={{ fontSize: '13px', minHeight: '54px', padding: '0 40px' }}>
              <WhatsAppIcon />
              Book a Free Intro
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
