'use client';

import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';

const WA_URL = 'https://wa.me/971525203533';

const WhatsAppIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

// Magnetic hover element — content is attracted toward cursor
function MagneticWrap({ children, strength = 0.25 }: { children: React.ReactNode; strength?: number }) {
  const shouldReduceMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useSpring(mouseX, { stiffness: 200, damping: 20 });
  const y = useSpring(mouseY, { stiffness: 200, damping: 20 });

  if (shouldReduceMotion) return <>{children}</>;

  return (
    <motion.div
      style={{ x, y, display: 'inline-block' }}
      onMouseMove={e => {
        const rect = e.currentTarget.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        mouseX.set((e.clientX - cx) * strength);
        mouseY.set((e.clientY - cy) * strength);
      }}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
    >
      {children}
    </motion.div>
  );
}

const steps = [
  { n: '1', title: 'Message Adarsh on WhatsApp', desc: "Reach out directly via WhatsApp to say you're interested. Adarsh will respond personally and help you schedule a free 20-minute intro call at a time that works for you." },
  { n: '2', title: 'Talk about your goals', desc: "On the intro call, Adarsh will learn about your current level, what you want to achieve, and how you learn best. There's no pitch — just an honest conversation about whether coaching makes sense for you." },
  { n: '3', title: 'Start coaching', desc: "If it's a good fit, you'll schedule your first session and get started. Sessions are structured from day one — no wasted time." },
];

export default function BookPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {/* PAGE HERO */}
      <section
        aria-label="Page header"
        style={{
          position: 'relative',
          height: '360px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          paddingTop: 'var(--nav-height)',
          overflow: 'hidden',
        }}
      >
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, var(--bg-alt) 0%, var(--bg) 100%)' }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(240,235,224,0.016) 59px, rgba(240,235,224,0.016) 60px), repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(240,235,224,0.016) 59px, rgba(240,235,224,0.016) 60px)', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '300px', background: 'radial-gradient(ellipse at center, rgba(201,160,82,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '640px', padding: '0 var(--pad)' }}>
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '11px', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px' }}
            >
              <motion.span
                initial={shouldReduceMotion ? false : { scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.02, ease: [0.16, 1, 0.3, 1] }}
                style={{ width: '20px', height: '1px', background: 'var(--gold)', display: 'block', transformOrigin: 'left' }}
              />
              Get In Touch
              <motion.span
                initial={shouldReduceMotion ? false : { scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                style={{ width: '20px', height: '1px', background: 'var(--gold)', display: 'block', transformOrigin: 'right' }}
              />
            </motion.p>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 400, color: 'var(--cream)', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '16px' }}>
              Let&rsquo;s start with a conversation.
            </h1>
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              style={{ fontSize: '15px', fontWeight: 300, color: 'var(--cream-muted)', lineHeight: 1.7 }}
            >
              20 minutes. No commitment. Just chess.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTACT CONTENT */}
      <section aria-labelledby="contact-main-heading" style={{ padding: 'var(--section) 0', background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', maxWidth: '960px', margin: '0 auto' }}>

            {/* LEFT: HOW TO BOOK */}
            <AnimatedSection variant="fadeLeft">
              <p className="s-label">Book Your Session</p>
              <h2 id="contact-main-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 400, color: 'var(--cream)', lineHeight: 1.15, letterSpacing: '-0.01em', marginBottom: '36px' }}>
                Three easy steps
              </h2>

              {/* Sequential spring step reveals */}
              <ol style={{ display: 'flex', flexDirection: 'column', gap: 0, marginBottom: '40px' }} aria-label="How to book a session">
                {steps.map((step, i) => (
                  <motion.li
                    key={i}
                    initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 280, damping: 24, delay: i * 0.15 }}
                    style={{
                      display: 'flex', gap: '20px',
                      padding: '24px 0',
                      borderBottom: i < 2 ? '1px solid var(--border)' : 'none',
                      paddingTop: i === 0 ? 0 : undefined,
                    }}
                  >
                    <motion.span
                      initial={shouldReduceMotion ? false : { scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 0.5 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 400, damping: 16, delay: i * 0.15 + 0.1 }}
                      style={{
                        fontFamily: 'var(--font-display)', fontSize: '36px', fontWeight: 300,
                        color: 'var(--gold)', lineHeight: 1, flexShrink: 0, width: '40px', marginTop: '2px',
                        display: 'inline-block',
                      }}
                    >
                      {step.n}
                    </motion.span>
                    <div>
                      <p style={{ fontSize: '15px', fontWeight: 500, color: 'var(--cream)', marginBottom: '6px', letterSpacing: '0.01em' }}>{step.title}</p>
                      <p style={{ fontSize: '13px', fontWeight: 300, color: 'var(--cream-muted)', lineHeight: 1.75 }}>{step.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ol>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
                <motion.a
                  href={WA_URL}
                  className="btn btn-gold"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ minHeight: '54px', padding: '0 36px', fontSize: '13px' }}
                  animate={shouldReduceMotion ? {} : {
                    boxShadow: ['0 0 0px rgba(201,160,82,0)', '0 0 28px rgba(201,160,82,0.45)', '0 0 0px rgba(201,160,82,0)'],
                  }}
                  transition={{ boxShadow: { repeat: Infinity, duration: 2.8, ease: 'easeInOut', delay: 0.8 } }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <WhatsAppIcon size={18} />
                  Message Adarsh Now
                </motion.a>
                <p style={{ fontSize: '12px', color: 'var(--cream-muted)', fontWeight: 300, letterSpacing: '0.03em' }}>Adarsh typically responds within a few hours.</p>
              </div>
            </AnimatedSection>

            {/* RIGHT: SESSION DETAILS */}
            <AnimatedSection delay={0.12} variant="fadeRight">
              <p className="s-label">Session Details</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 400, color: 'var(--cream)', lineHeight: 1.15, letterSpacing: '-0.01em', marginBottom: '36px' }}>
                What Adarsh offers
              </h2>
              <dl style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {[
                  { key: 'Session Format', val: <><strong style={{ fontWeight: 500, color: 'var(--cream)' }}>1-on-1</strong> sessions, or small groups of <strong style={{ fontWeight: 500, color: 'var(--cream)' }}>up to 4 students</strong>. All sessions are taught personally by Adarsh — no assistants, no substitutes.</> },
                  { key: 'Online', val: <>Via WhatsApp video, Zoom, or Google Meet. Available to students <strong style={{ fontWeight: 500, color: 'var(--cream)' }}>internationally</strong> — wherever you are in the world.</> },
                  { key: 'In-Person', val: <><strong style={{ fontWeight: 500, color: 'var(--cream)' }}>Abu Dhabi and Dubai, UAE.</strong> Home visits available on request. Contact Adarsh to arrange a convenient location.</> },
                  { key: 'Response Time', val: <>Adarsh typically replies <strong style={{ fontWeight: 500, color: 'var(--cream)' }}>within a few hours</strong> on WhatsApp. For urgent enquiries, message directly at +971 52 520 3533.</> },
                  { key: 'Levels', val: <>Complete beginners through to tournament competitors. See the <Link href="/programs" style={{ color: 'var(--gold)', borderBottom: '1px solid var(--gold-border)' }}>Coaching page</Link> for detailed program info.</> },
                ].map((row, i) => (
                  <motion.div
                    key={i}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    style={{ display: 'grid', gridTemplateColumns: '130px 1fr', gap: '20px', padding: '20px 0', borderBottom: i < 4 ? '1px solid var(--border)' : 'none', paddingTop: i === 0 ? 0 : undefined, alignItems: 'start' }}
                  >
                    <dt style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', paddingTop: '3px', flexShrink: 0 }}>{row.key}</dt>
                    <dd style={{ fontSize: '14px', fontWeight: 300, color: 'var(--cream-soft)', lineHeight: 1.7 }}>{row.val}</dd>
                  </motion.div>
                ))}
              </dl>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* REASSURANCE STRIP */}
      <div style={{ padding: '48px 0', background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2px', background: 'var(--border)', border: '1px solid var(--border)', borderRadius: '2px', overflow: 'hidden' }}>
            {[
              { title: 'No commitment required', desc: "The intro call is completely free. There's no obligation to continue — it's just a conversation." },
              { title: 'Always Adarsh, always personal', desc: 'You will never be handed off to a junior coach. Every session is run personally by Adarsh.' },
              { title: 'Flexible scheduling', desc: 'Sessions are scheduled around your availability. Online students across all time zones are welcome.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={shouldReduceMotion ? {} : { y: -3 }}
                style={{ background: 'var(--bg-card)', padding: '28px 24px', display: 'flex', alignItems: 'flex-start', gap: '14px' }}
              >
                <motion.div
                  initial={shouldReduceMotion ? false : { scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 400, damping: 16, delay: i * 0.1 + 0.2 }}
                  style={{ width: '36px', height: '36px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--gold-dim)', border: '1px solid var(--gold-border)', borderRadius: '2px', color: 'var(--gold)', marginTop: '2px' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </motion.div>
                <div>
                  <p style={{ fontSize: '13px', fontWeight: 500, color: 'var(--cream)', marginBottom: '5px', letterSpacing: '0.01em' }}>{item.title}</p>
                  <p style={{ fontSize: '12px', fontWeight: 300, color: 'var(--cream-muted)', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CONTACT INFO STRIP */}
      <section aria-label="Contact information" style={{ padding: '64px 0', background: 'var(--bg-alt)', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
        <div className="container">
          <AnimatedSection style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)' }}
            >
              Reach Adarsh directly
            </motion.p>

            {/* Magnetic phone number */}
            <MagneticWrap strength={0.2}>
              <motion.a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp +971 52 520 3533"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ color: 'var(--gold)' }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 400, color: 'var(--cream)', transition: 'color 200ms', textDecoration: 'none' }}
              >
                <WhatsAppIcon size={32} />
                +971 52 520 3533
              </motion.a>
            </MagneticWrap>

            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 }}
              style={{ fontSize: '13px', fontWeight: 300, color: 'var(--cream-muted)', letterSpacing: '0.05em' }}
            >
              Abu Dhabi, UAE &nbsp;·&nbsp; Dubai, UAE &nbsp;·&nbsp; Online Worldwide
            </motion.p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
