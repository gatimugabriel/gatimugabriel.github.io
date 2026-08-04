import { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, Link, useSearchParams } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import { blogs } from '../data/blogs';

function Blog() {
  const { tag: selectedTag } = useParams();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('q') || '';
  const sortOrder = searchParams.get('sort') || 'newest';

  // Extract unique tags
  const allTags = useMemo(() => {
    const tags = new Set();
    blogs.forEach((b) => b.tags.forEach((t) => tags.add(t)));
    return Array.from(tags).sort();
  }, []);

  const filteredAndSortedBlogs = useMemo(() => {
    return blogs
      .filter((blog) => {
        const matchesSearch =
          blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesTag = selectedTag ? blog.tags.includes(selectedTag) : true;
        return matchesSearch && matchesTag;
      })
      .sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
      });
  }, [searchQuery, selectedTag, sortOrder]);

  const pinnedBlogs = useMemo(() => blogs.filter((b) => b.pinned), []);
  const showPinned = !searchQuery && !selectedTag && pinnedBlogs.length > 0;

  return (
    <div className="pb-16 min-h-[80vh] flex flex-col gap-12 pt-12">
      {!selectedTag && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Engineering Blog</h1>
          <p className="text-lg text-stone-600 dark:text-stone-400 max-w-2xl">
            Thoughts, learnings, and deep dives into software engineering, architecture, and performance.
          </p>
        </motion.div>
      )}

      {selectedTag && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Posts tagged "<span className="text-accent">{selectedTag}</span>"
          </h1>
          <p className="text-lg text-stone-600 dark:text-stone-400 max-w-2xl">
            Showing all articles related to {selectedTag}.
          </p>
        </motion.div>
      )}

      {/* Pinned Section */}
      <AnimatePresence>
        {showPinned && (
          <motion.section
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-6 pb-6">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent"></span>
                Featured Posts
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {pinnedBlogs.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} isFeatured={true} />
                ))}
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Tags Filter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="flex flex-wrap gap-2"
      >
        <Link
          to="/blog"
          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
            !selectedTag
              ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900'
              : 'bg-stone-100 text-stone-600 hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-300 dark:hover:bg-stone-700'
          }`}
        >
          All
        </Link>
        {allTags.map((tag) => (
          <Link
            key={tag}
            to={`/tags/${encodeURIComponent(tag)}`}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              selectedTag === tag
                ? 'bg-accent text-white'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-300 dark:hover:bg-stone-700'
            }`}
          >
            {tag}
          </Link>
        ))}
      </motion.div>

      {/* Blog List */}
      <section className="flex flex-col gap-6">
        <AnimatePresence mode="popLayout">
          {filteredAndSortedBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </AnimatePresence>

        {filteredAndSortedBlogs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-12 text-center text-stone-500"
          >
            <p>No posts found matching your criteria.</p>
          </motion.div>
        )}
      </section>
    </div>
  );
}

export default Blog;
