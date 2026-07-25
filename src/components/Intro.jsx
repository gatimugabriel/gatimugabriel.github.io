import { motion } from 'framer-motion';

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-24 pb-16">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                className="text-5xl md:text-7xl mb-2 md:mb-4 font-bold tracking-tight"
            >
                G. Gatimu
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
                className="text-lg md:text-2xl mb-6 font-medium text-stone-600 dark:text-stone-400"
            >
                Software Engineer
            </motion.p>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
                className="text-base md:text-lg max-w-2xl mb-8 leading-relaxed text-stone-700 dark:text-stone-300"
            >
                I build performant, scalable and maintainable software systems. I approach engineering end-to-end, from problem definition and system design to implementation, deployment, and documentation. My skillset sits at the intersection of <span className="text-accent font-semibold">software engineering</span>, <span className="text-accent font-semibold">cloud/DevOps</span>, and <span className="text-accent font-semibold">product-focused engineering</span>.
            </motion.p>
            <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
                 className="flex gap-4"
            >
                <a href="https://github.com/gatimugabriel" target="_blank" rel="noreferrer" className="px-6 py-2.5 rounded-full bg-foreground text-background font-medium hover:scale-[0.97] transition-transform duration-150 ease-out-fluid shadow-sm">
                    GitHub
                </a>
                <a href="https://www.linkedin.com/in/gabrielgatimu" target="_blank" rel="noreferrer" className="px-6 py-2.5 rounded-full border border-stone-200 dark:border-stone-800 font-medium hover:scale-[0.97] hover:bg-stone-50 dark:hover:bg-stone-900 transition-all duration-150 ease-out-fluid shadow-sm">
                    LinkedIn
                </a>
            </motion.div>
        </div>
    );
}

export default Intro;
