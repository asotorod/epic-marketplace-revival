import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import './GetInvolved.css';

const items = [
  {
    emoji: '📘',
    title: 'Get the Book',
    description: 'Order your copy and begin your journey into faith-driven business leadership.',
    href: 'https://a.co/d/0hYuihgv',
    external: true,
  },
  {
    emoji: '🧭',
    title: 'Mentorship',
    description: 'Connect with experienced marketplace leaders who can guide your path.',
    href: 'https://epicmarketplacerevival.com/contact',
    external: true,
  },
  {
    emoji: '🎤',
    title: 'Speaking',
    description: 'Invite Walt and Blakney to inspire your organization, conference, or event.',
    href: 'https://epicmarketplacerevival.com/contact',
    external: true,
  },
  {
    emoji: '🛠️',
    title: 'Workshops & Training',
    description: 'Interactive experiences designed to equip teams with kingdom-minded strategies.',
    href: 'https://epicmarketplacerevival.com/events',
    external: true,
  },
  {
    emoji: '💛',
    title: 'Revival Foundation',
    description: 'Support the mission of raising up the next generation of marketplace leaders.',
    href: 'https://epicmarketplacerevival.com/contact',
    external: true,
  },
  {
    emoji: '📦',
    title: 'Bulk Orders',
    description: 'Equip your team, church, or organization with copies at a special rate.',
    href: 'https://epicmarketplacerevival.com/contact',
    external: true,
  },
];

export default function GetInvolved() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="get-involved" id="involved" ref={ref}>
      <div className="container">
        <motion.div
          className="get-involved-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">Take Action</p>
          <h2 className="section-heading">How to Get Involved</h2>
        </motion.div>

        <div className="get-involved-grid">
          {items.map((item, i) => (
            <motion.a
              key={item.title}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className="involved-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.08 * i }}
              whileHover={{ y: -4 }}
            >
              <span className="involved-emoji">{item.emoji}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="involved-link">
                Learn More <ArrowRight size={14} />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
