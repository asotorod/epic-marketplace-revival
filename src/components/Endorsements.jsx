import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Endorsements.css';

const endorsements = [
  {
    name: 'John Maxwell',
    role: 'Leadership Author & Speaker',
    quote: 'Walt and Blakney Kallestad have written a book that will ignite a fire in the hearts of business leaders everywhere. Epic Marketplace Revival is a call to action for anyone who believes that their work can be a vehicle for God\'s purposes. This is the kind of leadership our world desperately needs.',
  },
  {
    name: 'Ken Blanchard',
    role: 'Co-author of The One Minute Manager',
    quote: 'This book brilliantly bridges the gap between Sunday faith and Monday work. The Kallestads show that the marketplace isn\'t just a place to earn a living — it\'s a place to live out your calling. Every business leader should read this.',
  },
  {
    name: 'Jerry Colangelo',
    role: 'Sports Executive & Entrepreneur',
    quote: 'Having spent decades in the business world, I can tell you that the principles in this book are not just aspirational — they work. Walt and Blakney have captured something truly special: a roadmap for building a business that honors God and transforms communities.',
  },
  {
    name: 'Rick Warren',
    role: 'Pastor & Author',
    quote: 'Epic Marketplace Revival challenges every believer to see their workplace as their primary mission field. Walt and Blakney write with the authority of experience and the passion of purpose. This book will change how you think about your work.',
  },
  {
    name: 'Dino Prato',
    role: 'CEO & Business Leader',
    quote: 'The Kallestads have created more than a book — they\'ve started a movement. Epic Marketplace Revival gives practical, faith-driven strategies for leaders who want to make an eternal difference through their businesses. A must-read for every entrepreneur.',
  },
  {
    name: 'Verlie Payne',
    role: 'Community Leader & Minister',
    quote: 'This book speaks to the heart of what it means to serve God in every area of life. Walt and Blakney remind us that our work is worship, and that the marketplace is where revival begins. Powerful, practical, and deeply inspiring.',
  },
  {
    name: 'Frank Agnone M.D.',
    role: 'Physician & Author',
    quote: 'As a physician and follower of Christ, I see the principles in this book applying far beyond the boardroom. The Kallestads show that faith-driven leadership transforms not just businesses, but entire communities. This is essential reading.',
  },
  {
    name: 'Bob Belz',
    role: 'Pastor & Leadership Consultant',
    quote: 'Walt and Blakney Kallestad have given us a gift. Epic Marketplace Revival is both a prophetic call and a practical guide for anyone who wants to bring God\'s kingdom values into the business world. Read it, share it, live it.',
  },
  {
    name: 'Esther & Cody Cottle',
    role: 'Entrepreneurs & Ministry Leaders',
    quote: 'This book captures the essence of what it means to be marketplace ministers. The Kallestads write from lived experience, and every page drips with wisdom, encouragement, and actionable insights. We couldn\'t put it down.',
  },
];

function EndorsementCard({ endorsement, index, inView }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className="endorsement-card"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.08 * index }}
    >
      <div className="endorsement-quote-mark">&ldquo;</div>
      <p className={`endorsement-text${expanded ? ' endorsement-text--expanded' : ''}`}>
        {endorsement.quote}
      </p>
      <button
        className="endorsement-toggle"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? 'Read Less' : 'Read More'}
      </button>
      <div className="endorsement-author">
        <span className="endorsement-name">{endorsement.name}</span>
        <span className="endorsement-role">{endorsement.role}</span>
      </div>
    </motion.div>
  );
}

export default function Endorsements() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="endorsements" id="endorsements" ref={ref}>
      <div className="container">
        <motion.div
          className="endorsements-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">Testimonials</p>
          <h2 className="section-heading" style={{ color: 'var(--off-white)' }}>
            Endorsed by Trusted Leaders
          </h2>
        </motion.div>

        <div className="endorsements-grid">
          {endorsements.map((e, i) => (
            <EndorsementCard key={e.name} endorsement={e} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
