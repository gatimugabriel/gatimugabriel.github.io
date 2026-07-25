import TimelineItem from "./TimelineItem";
import timeline from "./data/timeline";
import { motion } from "framer-motion";

function Timeline() {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="w-full md:w-8/12 lg:w-6/12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="text-3xl md:text-5xl mb-12 font-bold tracking-tight text-center"
        >
          Experience
        </motion.h2>
        <div className="relative border-l border-stone-200 dark:border-stone-800 ml-3 md:ml-0 md:pl-8">
          {timeline.map((item, index) => (
            <TimelineItem
              key={item.title}
              year={item.year}
              title={item.title}
              duration={item.duration}
              details={item.details}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timeline;
