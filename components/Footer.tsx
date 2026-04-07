import Link from 'next/link';

const WA_URL = 'https://wa.me/971525203533';

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/programs', label: 'Programs' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/success-stories', label: 'Success Stories' },
  { href: '/book', label: 'Book a Call' },
];

export default function Footer() {
  return (
    <footer className="site-footer" aria-label="Site footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <p className="footer-brand">Deep Game <span>Coaching</span></p>
            <p className="footer-tagline">Private 1-on-1 &amp; small group chess coaching by Adarsh Shankar. Abu Dhabi · Dubai · Online.</p>
            <a href={WA_URL} className="footer-wa" target="_blank" rel="noopener noreferrer" aria-label="Contact via WhatsApp">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              WhatsApp
            </a>
          </div>
          <nav aria-label="Footer navigation">
            <div className="footer-nav">
              {footerLinks.map(link => (
                <Link key={link.href} href={link.href}>{link.label}</Link>
              ))}
            </div>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Deep Game Coaching by Adarsh Shankar. All rights reserved.</span>
          <span>Abu Dhabi, UAE</span>
        </div>
      </div>
    </footer>
  );
}
