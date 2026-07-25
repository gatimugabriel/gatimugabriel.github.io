import { motion } from 'framer-motion';

function TimelineItem({ year, title, duration, details, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
      className="mb-10 ml-6 relative"
    >
      <div className="absolute w-3 h-3 bg-stone-300 dark:bg-stone-600 rounded-full mt-1.5 -left-[29px] border-2 border-white dark:border-[var(--background)] shadow-sm" />
      
      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
        <span className="inline-block px-2.5 py-1 text-xs font-bold text-accent bg-accent/10 rounded-md">
          {year}
        </span>
        <h3 className="text-xl font-bold text-stone-900 dark:text-stone-50">
          {title}
        </h3>
        <span className="text-sm font-medium text-stone-500 dark:text-stone-400">
          {duration}
        </span>
      </div>
      
      <p className="mt-3 text-base text-stone-600 dark:text-stone-400 leading-relaxed max-w-2xl">
        {details}
      </p>
    </motion.div>
  );
}

export default TimelineItem;
