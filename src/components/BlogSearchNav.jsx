import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

function CustomSelect({ value, onChange, options }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find(o => o.value === value) || options[0];

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 rounded-lg bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:bg-stone-200 dark:focus:bg-stone-800 w-36 text-left flex justify-between items-center transition-colors"
      >
        <span>{selectedOption.label}</span>
        <svg className="w-4 h-4 ml-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-full right-0 mt-1 w-36 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg shadow-lg z-50 py-1 flex flex-col">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className={`w-full text-left px-3 py-2 text-sm transition-colors ${
                value === option.value
                  ? 'text-accent font-medium bg-stone-50 dark:bg-stone-800/50'
                  : 'text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 hover:text-stone-900 dark:hover:text-stone-100'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function BlogSearchNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { scrollY } = useScroll();
  const [navHidden, setNavHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setNavHidden(true);
    } else {
      setNavHidden(false);
    }
  });

  // Show only on /blog (and its subpages) or /tags
  if (!location.pathname.startsWith('/blog') && !location.pathname.startsWith('/tags')) {
    return null;
  }

  const searchQuery = searchParams.get('q') || '';
  const sortOrder = searchParams.get('sort') || 'newest';

  const handleSearch = (e) => {
    const q = e.target.value;
    if (location.pathname !== '/blog') {
      navigate(`/blog?q=${encodeURIComponent(q)}&sort=${sortOrder}`);
    } else {
      setSearchParams(prev => {
        if (q) prev.set('q', q);
        else prev.delete('q');
        return prev;
      });
    }
  };

  const handleSort = (val) => {
    if (location.pathname !== '/blog') {
      navigate(`/blog?q=${encodeURIComponent(searchQuery)}&sort=${val}`);
    } else {
      setSearchParams(prev => {
        prev.set('sort', val);
        return prev;
      });
    }
  };

  return (
    <motion.div
      animate={{ top: navHidden ? 16 : 80 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="sticky z-40 bg-[var(--background)]/80 backdrop-blur-md py-3 px-4 rounded-xl shadow-sm border border-transparent dark:border-stone-800 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center w-full max-w-5xl mx-auto -mt-6 mb-8"
    >
      <div className="relative w-full md:w-96">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
        <input
          type="text"
          placeholder="Search posts..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full pl-9 pr-4 py-2 rounded-lg bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 focus:outline-none focus:ring-2 focus:ring-accent/50 text-sm transition-colors"
        />
      </div>

      <div className="flex gap-4 w-full md:w-auto pb-2 md:pb-0 z-50">
        <CustomSelect
          value={sortOrder}
          onChange={handleSort}
          options={[
            { value: 'newest', label: 'Newest first' },
            { value: 'oldest', label: 'Oldest first' }
          ]}
        />
      </div>
    </motion.div>
  );
}
