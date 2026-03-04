import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Welcome.css';

export default function Welcome() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="welcome" id="welcome" ref={ref}>
      <div className="container">
        <motion.div
          className="welcome-content"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="welcome-icon">
            <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
          <h2 className="section-heading">
            Powerful, Positive Change Starts in the Marketplace
          </h2>
          <p>
            Your work matters more than you think. Every transaction, every relationship, every
            decision carries the potential to touch eternity. Epic Marketplace Revival invites you
            into a movement where faith and business don&rsquo;t just coexist — they amplify one
            another. Whether you lead a team of two or two thousand, this is your invitation to
            build something that outlasts you.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
