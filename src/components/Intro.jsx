import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Intro() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div className="relative h-fit mb-32 flex items-center justify-start flex-col text-center overflow-hidden rounded-3xl pt-20 md:mt-4 bg-stone-0 dark:bg-stone-950 dark:border-none border-none border-stone-200 dark:border-stone-800">

      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 opacity-0 md:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(120,119,198,0.1), transparent 40%)`
        }}
      />

      {/* Grid Background */}
      <div className="absolute inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yKSIvPjwvc3ZnPg==')] [mask-image:linear-gradient(to_bottom,white,transparent)]" />

      <div className="relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200/50 dark:bg-stone-800/50 border border-stone-300 dark:border-stone-700 text-sm font-medium mb-8 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-green-500" />
          Open to opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          className="text-5xl md:text-8xl mb-6 font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-stone-900 to-stone-500 dark:from-stone-100 dark:to-stone-500"
        >
          Gabriel Gatimu
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="text-md md:text-xl mb-8 font-medium text-stone-600 dark:text-stone-400 max-w-2xl mx-auto"
        >
          Software Engineer building performant, scalable, and resilient systems.
        </motion.p>

        {/* <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="text-xl md:text-2xl mb-8 font-medium text-stone-600 dark:text-stone-400 max-w-2xl mx-auto"
        >
          I build things
        </motion.p> */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            to="/blog"
            className="px-8 py-3 rounded-full bg-stone-900 dark:bg-stone-100 text-stone-50 dark:text-stone-900 font-semibold hover:scale-[1.02] active:scale-[0.98] transition-transform duration-150 ease-out shadow-lg shadow-stone-900/20 dark:shadow-stone-100/10"
          >
            Engineering Blog
          </Link>
          <a
            href="https://github.com/gatimugabriel"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 rounded-full border border-stone-300 dark:border-stone-700 bg-white/50 dark:bg-stone-900/50 backdrop-blur-md font-semibold hover:bg-stone-100 dark:hover:bg-stone-800 hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 ease-out"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/gabrielgatimu"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 rounded-full border border-stone-300 dark:border-stone-700 bg-white/50 dark:bg-stone-900/50 backdrop-blur-md font-semibold hover:bg-stone-100 dark:hover:bg-stone-800 hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 ease-out"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Intro;
