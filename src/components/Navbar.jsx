import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const LOGO_URL = 'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/TXijyQGsxjVxhnsglC6X/media/698f63fb24813cdd1e526d39.png';

const navLinks = [
  { label: 'About', href: '#welcome' },
  { label: 'The Book', href: '#book' },
  { label: 'Get Involved', href: '#involved' },
  { label: 'Authors', href: '#authors' },
  { label: 'Endorsements', href: '#endorsements' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <>
      {/* Utility Bar */}
      <div className="utility-bar">
        <div className="container utility-inner">
          <a href="#subscribe">Join Us Live</a>
          <a href="https://a.co/d/0hYuihgv" target="_blank" rel="noopener noreferrer">Shop</a>
          <a href="https://epicmarketplacerevival.com/contact" target="_blank" rel="noopener noreferrer">Contact</a>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <div className="container navbar-inner">
          <a href="#" className="navbar-logo" onClick={handleNavClick}>
            <img src={LOGO_URL} alt="Epic Marketplace Revival" />
          </a>

          <ul className="navbar-links">
            {navLinks.map(link => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          <a href="https://a.co/d/0hYuihgv" target="_blank" rel="noopener noreferrer" className="btn-gold navbar-cta">
            Get the Book
          </a>

          <button
            className="navbar-hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.35 }}
            >
              <ul>
                {navLinks.map(link => (
                  <li key={link.href}>
                    <a href={link.href} onClick={handleNavClick}>{link.label}</a>
                  </li>
                ))}
              </ul>
              <a
                href="https://a.co/d/0hYuihgv"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold mobile-cta"
                onClick={handleNavClick}
              >
                Get the Book
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
