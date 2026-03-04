import { Instagram } from 'lucide-react';
import './Footer.css';

const LOGO_URL = 'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/TXijyQGsxjVxhnsglC6X/media/698f63fb24813cdd1e526d39.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <img src={LOGO_URL} alt="Epic Marketplace Revival" className="footer-logo" />
            <p>Equipping leaders to do business God&rsquo;s way — with conviction, integrity, and eternal purpose.</p>
            <div className="footer-social">
              <a
                href="https://www.instagram.com/epic_marketplace_revival/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><a href="#welcome">About</a></li>
              <li><a href="#book">The Book</a></li>
              <li><a href="#authors">Authors</a></li>
              <li><a href="#endorsements">Endorsements</a></li>
              <li><a href="#involved">Get Involved</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><a href="https://a.co/d/0hYuihgv" target="_blank" rel="noopener noreferrer">Order the Book</a></li>
              <li><a href="https://epicmarketplacerevival.com/events" target="_blank" rel="noopener noreferrer">Events</a></li>
              <li><a href="https://epicmarketplacerevival.com/contact" target="_blank" rel="noopener noreferrer">Book a Speaker</a></li>
              <li><a href="https://epicmarketplacerevival.com/contact" target="_blank" rel="noopener noreferrer">Bulk Orders</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="footer-col">
            <h4>Connect</h4>
            <ul>
              <li>
                <a href="mailto:info@epicmarketplacerevival.com">info@epicmarketplacerevival.com</a>
              </li>
              <li>
                <a href="tel:+19097384825">(909) 738-4825</a>
              </li>
              <li>
                <a href="https://www.instagram.com/epic_marketplace_revival/" target="_blank" rel="noopener noreferrer">
                  @epic_marketplace_revival
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Epic Marketplace Revival. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <span className="footer-credit">
              Website Design by{' '}
              <a href="https://grodigital.studio/" target="_blank" rel="noopener noreferrer">
                GroDigital Studio
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
