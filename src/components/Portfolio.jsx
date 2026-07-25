import portfolio from "./data/portfolio";
import PortfolioItem from "./PortfolioItem";
import { motion } from "framer-motion";

function Portfolio() {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="text-3xl md:text-5xl mb-12 font-bold tracking-tight"
      >
          Featured Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {portfolio.map((project, index) => (
          <PortfolioItem
            key={project.id}
            imgUrl={project.imgUrl}
            title={project.title}
            type={project.type}
            stack={project.stack}
            link={project.link}
            origin={project.origin}
            description={project.description}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;