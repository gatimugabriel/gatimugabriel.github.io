import { useState, useEffect } from 'react';
import GithubSlugger from 'github-slugger';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function TableOfContents({ content }) {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Extract headings from markdown content
    const slugger = new GithubSlugger();
    const headingLines = content.split('\n').filter(line => line.match(/^#{1,3}\s+/));
    
    const parsedHeadings = headingLines.map(line => {
      const level = line.match(/^#+/)[0].length;
      const text = line.replace(/^#+\s+/, '');
      const id = slugger.slug(text);
      return { level, text, id };
    });

    setHeadings(parsedHeadings);
  }, [content]);

  useEffect(() => {
    // Intersection Observer to highlight active heading
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first intersecting entry
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // If multiple are visible, pick the one closest to the top
          const topEntry = visibleEntries.reduce((prev, curr) => {
            return (prev.boundingClientRect.top < curr.boundingClientRect.top) ? prev : curr;
          });
          setActiveId(topEntry.target.id);
        }
      },
      { rootMargin: '-10% 0px -40% 0px', threshold: 1.0 }
    );

    // Observe all heading elements in the document
    headings.forEach(heading => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Smooth scroll to the element, offset by a little bit for the navbar
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Update URL hash without jumping
      window.history.pushState(null, '', `#${id}`);
      setIsOpen(false);
    }
  };

  const TOCContent = (
    <ul className="flex flex-col gap-3 text-sm">
      {headings.map((heading) => (
        <li 
          key={heading.id}
          style={{ paddingLeft: `${(heading.level - 1) * 12}px` }}
        >
          <a
            href={`#${heading.id}`}
            onClick={(e) => handleScroll(e, heading.id)}
            className={`block truncate transition-colors duration-200 ${
              activeId === heading.id
                ? 'text-accent font-medium'
                : 'text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100'
            }`}
          >
            {heading.text}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {/* Desktop View */}
      <div className="hidden lg:block w-64 shrink-0">
        <div className="sticky top-24">
          <h3 className="font-semibold text-lg mb-4 text-stone-900 dark:text-stone-100">On this page</h3>
          {TOCContent}
        </div>
      </div>

      {/* Mobile View (Floating Action Button) */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-16 right-0 mb-2 w-64 p-5 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl shadow-xl"
            >
              <h3 className="font-semibold text-lg mb-4 text-stone-900 dark:text-stone-100">On this page</h3>
              <div className="max-h-[60vh] overflow-y-auto">
                {TOCContent}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center w-12 h-12 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-transform"
          aria-label="Table of Contents"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
    </>
  );
}
