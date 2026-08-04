import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MotionLink = motion(Link);

function BlogCard({ blog, isFeatured = false }) {
  // Simple estimation: 200 words per minute
  const readTime = Math.max(1, Math.ceil((blog.content || '').split(/\s+/).length / 200));

  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className={`group relative flex flex-col items-start justify-between pb-8 p-2 border-b ${isFeatured ? 'border-t border-dashed border-accent rounded-md' : 'border-stone-200 dark:border-stone-800 last:border-0'}`}
    >
      <div className="w-full">
        <h3 className="mb-2 text-2xl font-bold leading-tight text-stone-900 dark:text-stone-100 group-hover:text-accent transition-colors">
          <Link to={`/blog/${blog.slug}`}>
            <span className="absolute inset-0" />
            {blog.title}
          </Link>
        </h3>

        <div className="flex items-center gap-2 text-sm text-stone-500 mb-4">
          <time dateTime={blog.date}>
            {new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
          </time>
          <span>&middot;</span>
          <span>{readTime} min read</span>
          {blog.lastUpdated && (
            <>
              <span>&middot;</span>
              <span className="italic text-xs">
                Updated {new Date(blog.lastUpdated).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
              </span>
            </>
          )}
        </div>

        <p className="mt-2 line-clamp-3 text-base leading-relaxed text-stone-600 dark:text-stone-400">
          {blog.excerpt}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap justify-end w-full gap-2 relative z-10">
        {blog.tags.map((tag) => (
          <MotionLink
            key={tag}
            to={`/tags/${encodeURIComponent(tag)}`}
            whileHover="hover"
            initial="initial"
            className="rounded-full bg-stone-100 dark:bg-stone-800 px-3 py-1 text-xs font-medium text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700 hover:text-accent dark:hover:text-accent transition-colors flex overflow-hidden"
          >
            {tag.split('').map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  initial: { y: 0 },
                  hover: { y: -2 }
                }}
                transition={{ duration: 0.2, delay: index * 0.02 }}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </MotionLink>
        ))}
      </div>
    </motion.article>
  );
}

export default BlogCard;
