import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Authors.css';

const AUTHORS_PHOTO = 'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/TXijyQGsxjVxhnsglC6X/media/69a0a56db50b972a93ce01ca.png';

export default function Authors() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="authors" id="authors" ref={ref}>
      <div className="container authors-inner">
        <motion.div
          className="authors-photo"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="authors-photo-frame">
            <img src={AUTHORS_PHOTO} alt="Walt and Blakney Kallestad" />
          </div>
        </motion.div>

        <motion.div
          className="authors-text"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
        >
          <p className="eyebrow">Meet the Authors</p>
          <h2 className="section-heading">The Voices Behind the Movement</h2>
          <p>
            <strong>Walt and Blakney Kallestad</strong> are a husband-and-wife team whose combined
            experience spans ministry, business, law, and athletics. Walt is an internationally
            recognized author of over 20 books, a sought-after speaker, and the founding pastor
            of Community Church of Joy, one of the fastest-growing churches in America.
          </p>
          <p>
            Blakney is an entrepreneur, attorney, certified PGA professional, and passionate advocate
            for faith in the marketplace. Together, they bring a rare blend of pastoral wisdom and
            real-world business acumen that makes Epic Marketplace Revival more than a book — it&rsquo;s
            a living testimony to what God can do when faith meets the marketplace.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
