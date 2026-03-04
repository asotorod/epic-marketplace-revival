import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './FinalCTA.css';

export default function FinalCTA() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="final-cta" ref={ref}>
      <div className="container">
        <motion.div
          className="final-cta-content"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            The Marketplace Is Where Real Influence Happens
          </h2>
          <p>
            Don&rsquo;t wait for permission to lead with purpose. The world needs business
            leaders who build with conviction, serve with integrity, and transform lives
            for eternity.
          </p>
          <a href="#hero" className="btn-dark">
            Join the Movement →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
