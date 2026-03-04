import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Hero.css';

const BOOK_COVER = 'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/TXijyQGsxjVxhnsglC6X/media/698ff37fc08665259ec2d3fa.png';

export default function Hero() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="hero" id="hero" ref={ref}>
      <div className="container hero-inner">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="hero-badge">A Movement, Not Just a Book</span>
          <h1>
            Ready to Do Business{' '}
            <span className="gold-text">God&rsquo;s Way</span>?
          </h1>
          <p className="hero-subtitle">
            Epic Marketplace Revival equips business leaders, entrepreneurs, and emerging
            professionals to build with conviction, integrity, and eternal purpose — boldly
            transforming lives for eternity.
          </p>
          <div className="hero-buttons">
            <a href="https://a.co/d/0hYuihgv" target="_blank" rel="noopener noreferrer" className="btn-gold">
              Get the Book →
            </a>
            <a href="#pathways" className="btn-outline">
              Explore the Movement
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="hero-book-frame">
            <img src={BOOK_COVER} alt="Epic Marketplace Revival book cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
