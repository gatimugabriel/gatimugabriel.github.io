import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

function PortfolioItem({ title, imgUrl, type, stack, link, origin, description, index }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
      className="group relative flex flex-col bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl overflow-hidden hover:border-accent/50 transition-colors duration-300"
    >
      <div className="relative h-48 md:h-56 overflow-hidden bg-stone-200 dark:bg-stone-800">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out-fluid"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
          <span className="text-white font-medium flex items-center gap-2">
            View Project <ExternalLink size={16} />
          </span>
        </div>
      </div>
      <div className="flex flex-col flex-1 p-5">
        <div className="flex justify-between items-start mb-2 gap-2">
          <h3 className="text-xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-tight">
            {title}
          </h3>
        </div>
        <p className="text-xs font-medium text-accent mb-3 uppercase tracking-wider">
          {type} • {origin}
        </p>
        <p className="text-sm text-stone-600 dark:text-stone-400 mb-6 flex-1">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {stack.map((item) => (
            <span
              key={item}
              className="px-2.5 py-1 text-xs font-medium bg-stone-200/50 dark:bg-stone-800/50 text-stone-700 dark:text-stone-300 rounded-md backdrop-blur-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

export default PortfolioItem;