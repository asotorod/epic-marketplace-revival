import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import './Pathways.css';

const pathways = [
  {
    title: 'Read the Book',
    subtitle: 'Discover the blueprint for faith-driven business',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=450&fit=crop&crop=faces',
    href: 'https://a.co/d/0hYuihgv',
    external: true,
  },
  {
    title: 'Find Mentorship',
    subtitle: 'Connect with experienced marketplace leaders',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=450&fit=crop',
    href: 'https://epicmarketplacerevival.com/contact',
    external: true,
  },
  {
    title: 'Book a Speaker',
    subtitle: 'Bring the message to your organization',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=450&fit=crop',
    href: 'https://epicmarketplacerevival.com/contact',
    external: true,
  },
  {
    title: 'Workshops & Training',
    subtitle: 'Interactive experiences for teams and leaders',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&h=500&fit=crop',
    href: 'https://epicmarketplacerevival.com/events',
    wide: true,
    external: true,
  },
  {
    title: 'Support the Foundation',
    subtitle: 'Invest in the next generation of leaders',
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=450&fit=crop',
    href: 'https://epicmarketplacerevival.com/contact',
    external: true,
  },
];

export default function Pathways() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="pathways" id="pathways" ref={ref}>
      <div className="container">
        <motion.div
          className="pathways-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">Your Journey</p>
          <h2 className="section-heading">Where Do You Want to Begin Your Journey?</h2>
        </motion.div>

        <div className="pathways-grid">
          {pathways.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.href}
              target={p.external ? '_blank' : undefined}
              rel={p.external ? 'noopener noreferrer' : undefined}
              className={`pathway-card${p.wide ? ' pathway-card--wide' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              whileHover={{ y: -6 }}
            >
              <div className="pathway-img-wrap">
                <img src={p.image} alt={p.title} loading="lazy" />
              </div>
              <div className="pathway-overlay">
                <h3>{p.title}</h3>
                <p>{p.subtitle}</p>
                <span className="pathway-arrow">
                  Learn More <ArrowRight size={16} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
