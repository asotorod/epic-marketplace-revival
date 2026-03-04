import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './FeaturedBook.css';

const BOOK_COVER = 'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/TXijyQGsxjVxhnsglC6X/media/698ff37fc08665259ec2d3fa.png';

export default function FeaturedBook() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="featured-book" id="book" ref={ref}>
      <div className="container featured-book-inner">
        <motion.div
          className="featured-book-image"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <img src={BOOK_COVER} alt="Epic Marketplace Revival book" />
        </motion.div>

        <motion.div
          className="featured-book-text"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
        >
          <p className="eyebrow">Featured Book</p>
          <h2 className="section-heading">
            Epic Marketplace Revival: Doing Business God&rsquo;s Way
          </h2>
          <p className="featured-book-lead">
            What if the marketplace were heaven&rsquo;s most strategic mission field?
          </p>
          <p>
            In this groundbreaking book, Walt and Blakney Kallestad challenge the sacred-secular
            divide and cast a compelling vision for business as ministry. Drawing from decades of
            leadership experience, biblical wisdom, and real-world marketplace stories, they
            equip readers to transform their professional lives into platforms for eternal impact.
          </p>
          <p>
            Whether you&rsquo;re a seasoned executive or an aspiring entrepreneur, this book
            provides the framework, inspiration, and practical tools to align your business
            with God&rsquo;s purposes — and discover that your greatest ministry may be your
            Monday through Friday.
          </p>
          <a
            href="https://a.co/d/0hYuihgv"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Order Your Copy →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
