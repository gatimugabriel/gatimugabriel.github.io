import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

function Navbar() {
  const location = useLocation();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    // Only hide if scrolled down past 150px and scrolling down
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 p-1.5 rounded-full bg-white/80 dark:bg-stone-900/80 backdrop-blur-md border border-stone-200 dark:border-stone-800 shadow-sm"
    >
      <Link
        to="/"
        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${location.pathname === '/'
          ? 'bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-white'
          : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white'
          }`}
      >
        Home
      </Link>
      <Link
        to="/blog"
        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${location.pathname.startsWith('/blog') || location.pathname.startsWith('/tags')
          ? 'bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-white'
          : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white'
          }`}
      >
        Blog
      </Link>
    </motion.nav>
  );
}

export default Navbar;
