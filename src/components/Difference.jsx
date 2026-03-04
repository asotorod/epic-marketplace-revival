import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Difference.css';

const values = [
  {
    emoji: '📖',
    title: 'Foundation',
    description: 'Rooted in timeless biblical principles that have guided leaders for centuries. Every strategy begins with scripture.',
  },
  {
    emoji: '🌍',
    title: 'Impact',
    description: 'Designed to create ripple effects that extend far beyond the boardroom — into families, communities, and nations.',
  },
  {
    emoji: '🤝',
    title: 'Community',
    description: 'A network of like-minded leaders committed to accountability, growth, and doing business with eternal purpose.',
  },
  {
    emoji: '✨',
    title: 'Purpose',
    description: 'Moving beyond profit to significance. Aligning your professional calling with the greater mission God has for your life.',
  },
];

export default function Difference() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="difference" id="difference" ref={ref}>
      <div className="container">
        <motion.div
          className="difference-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">Why It Matters</p>
          <h2 className="section-heading">The Epic Marketplace Revival Difference</h2>
        </motion.div>

        <div className="difference-grid">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              className="difference-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.12 * i }}
            >
              <div className="difference-icon">
                <span>{v.emoji}</span>
              </div>
              <h3>{v.title}</h3>
              <p>{v.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
