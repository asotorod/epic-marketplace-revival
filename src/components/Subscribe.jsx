import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Subscribe.css';

export default function Subscribe() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="subscribe" id="subscribe" ref={ref}>
      <div className="container subscribe-inner">
        <motion.div
          className="subscribe-text"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading" style={{ color: 'var(--off-white)' }}>
            Get the{' '}
            <span style={{ color: 'var(--accent)' }}>Free First Chapter</span>
          </h2>
          <p>
            Discover the vision behind Epic Marketplace Revival before you commit.
            Enter your details and we&rsquo;ll send the first chapter straight to
            your inbox — plus exclusive updates on events, workshops, and new resources.
          </p>
        </motion.div>

        <motion.div
          className="subscribe-form-wrap"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {submitted ? (
            <div className="subscribe-success">
              <h3>Thank You!</h3>
              <p>Check your inbox — the first chapter is on its way.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="subscribe-form">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn-gold subscribe-btn">
                Send Me the Chapter
              </button>
              <p className="subscribe-privacy">
                We respect your privacy. No spam, unsubscribe anytime.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
