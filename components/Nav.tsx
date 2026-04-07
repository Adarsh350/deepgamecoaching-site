'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

const WA_URL = 'https://wa.me/971525203533';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/success-stories', label: 'Success Stories' },
  { href: '/book', label: 'Book a Call' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  }, [pathname]);

  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? 'hidden' : '';
  };

  return (
    <>
      <motion.nav
        initial={shouldReduceMotion ? false : { y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 'var(--nav-height)',
          display: 'flex',
          alignItems: 'center',
          zIndex: 100,
          transition: 'background 300ms var(--ease), backdrop-filter 300ms, border-color 300ms',
          borderBottom: '1px solid',
          borderColor: scrolled ? 'var(--border)' : 'transparent',
          background: scrolled ? 'rgba(10,10,10,0.90)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
        }}
        aria-label="Main navigation"
      >
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--pad)', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }}>
          {/* Logo */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href="/" aria-label="Deep Game Coaching home" style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
              <span style={{ color: 'var(--gold)', fontSize: '22px', lineHeight: 1, flexShrink: 0 }} aria-hidden="true">♞</span>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '19px', fontWeight: 500, letterSpacing: '0.01em', color: 'var(--cream)', whiteSpace: 'nowrap' }}>
                Deep Game <em style={{ fontStyle: 'normal', color: 'var(--gold)' }}>Coaching</em>
              </span>
            </Link>
          </motion.div>

          {/* Desktop links — staggered */}
          <ul style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="nav-desktop-links">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.href}
                initial={shouldReduceMotion ? false : { opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={link.href}
                  style={{
                    fontSize: '12px',
                    fontWeight: 400,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: pathname === link.href ? 'var(--cream)' : 'var(--cream-muted)',
                    transition: 'color 200ms',
                  }}
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-cta-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '12px',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  border: '1px solid var(--gold-border)',
                  padding: '10px 22px',
                  borderRadius: '1px',
                  transition: 'background 200ms, color 200ms',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'var(--gold)'; (e.currentTarget as HTMLAnchorElement).style.color = '#0A0A0A'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--gold)'; }}
              >
                Book a Free Intro
              </a>
            </motion.div>

            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className="hamburger-btn"
              style={{ display: 'none', flexDirection: 'column', gap: '5px', width: '22px', padding: '4px 0', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <span style={{ display: 'block', width: '100%', height: '1px', background: 'var(--cream)', transition: 'all 250ms var(--ease)', transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none' }} />
              <span style={{ display: 'block', width: '100%', height: '1px', background: 'var(--cream)', transition: 'all 250ms var(--ease)', opacity: menuOpen ? 0 : 1 }} />
              <span style={{ display: 'block', width: '100%', height: '1px', background: 'var(--cream)', transition: 'all 250ms var(--ease)', transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none' }} />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              top: 'var(--nav-height)',
              left: 0,
              right: 0,
              background: 'rgba(10,10,10,0.97)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid var(--border)',
              overflow: 'hidden',
              zIndex: 99,
            }}
            role="menu"
            aria-label="Mobile navigation"
          >
            <div style={{ padding: '20px var(--pad) 28px', display: 'flex', flexDirection: 'column' }}>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={shouldReduceMotion ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    role="menuitem"
                    style={{
                      fontSize: '13px',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: pathname === link.href ? 'var(--cream)' : 'var(--cream-soft)',
                      padding: '14px 0',
                      borderBottom: '1px solid var(--border)',
                      display: 'block',
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, delay: navLinks.length * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  role="menuitem"
                  style={{ fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', padding: '14px 0', display: 'block' }}
                >
                  Book a Free Intro →
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop-links { display: none !important; }
          .nav-cta-btn { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
