import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import RadarChart from './RadarChart';

const skillsData = [
  {
    category: "Languages",
    description: "Deep fluency across typed and dynamic languages",
    color: "#10b981", // emerald-500
    colorRgb: "16, 185, 129",
    skills: [
      // { label: "JavaScript", value: 5 },
      { label: "TypeScript", value: 5 },
      { label: "Python", value: 4 },
      { label: "Go", value: 2.5 },
      { label: "Java", value: 1 },
      // { label: "Kotlin", value: 2 },
      { label: "Dart", value: 1 },
    ]
  },
  {
    category: "Frontend & Mobile",
    description: "Building performant, accessible interfaces across web and mobile",
    color: "#f97316", // orange-500
    colorRgb: "249, 115, 22",
    skills: [
      { label: "React", value: 4 },
      { label: "Tailwind CSS", value: 4 },
      { label: "Next.js", value: 3 },
      { label: "Framer Motion", value: 2 },
      // { label: "Angular", value: 3 },
      { label: "React-Native", value: 3 },
      { label: "Flutter", value: 1 },
      { label: "Android SDK", value: 2 },
    ]
  },
  {
    category: "Backend & APIs",
    description: "Designing scalable services, APIs, and data pipelines",
    color: "#3b82f6", // blue-500
    colorRgb: "59, 130, 246",
    skills: [
      { label: "Node.js", value: 4 },
      { label: "PostgreSQL", value: 3 },
      { label: "MongoDB", value: 3 },
      { label: "Express", value: 4 },
      { label: "Redis", value: 3 },
      { label: "Flask", value: 2 },
      { label: "Golang", value: 2 },
    ]
  },
  {
    category: "Cloud & DevOps",
    description: "Infrastructure, CI/CD, and production reliability",
    color: "#a855f7", // purple-500
    colorRgb: "168, 85, 247",
    skills: [
      { label: "AWS", value: 2 },
      { label: "Docker", value: 3 },
      { label: "Kubernetes", value: 1 },
      { label: "CI/CD", value: 2 },
      // { label: "Azure", value: 2 },
      { label: "Firebase", value: 1 },
    ]
  },
  {
    category: "Architecture & Leadership",
    description: "System design, team leadership, and technical strategy",
    color: "#ec4899", // pink-500
    colorRgb: "236, 72, 153",
    skills: [
      { label: "System Design", value: 4 },
      // { label: "Microservices", value: 4 },
      { label: "REST", value: 5 },
      // { label: "GraphQL", value: 3 },
      { label: "Agile/Scrum", value: 2 },
      { label: "Code Reviews", value: 3 },
    ]
  },
];

function SkillCard({ data, index }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
      className="relative group flex flex-col p-8 bg-stone-50 dark:bg-stone-950 overflow-hidden transition-colors duration-300 min-h-[400px]"
    >
      {/* Dynamic Spotlight Effect */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(${data.colorRgb}, 0.15), transparent 40%)`
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        <h3 className="text-xl font-bold mb-2 text-stone-900 dark:text-stone-100">{data.category}</h3>
        <p className="text-sm text-stone-600 dark:text-stone-400 mb-8 leading-relaxed">
          {data.description}
        </p>

        <div className="flex-1 flex items-center justify-center -mx-4">
          <RadarChart data={data.skills} color={data.color} maxLevels={5} size={300} />
        </div>
      </div>
    </motion.div>
  );
}

function Skills() {
  return (
    <section className="py-16 w-[100vw] relative left-1/2 -translate-x-1/2 overflow-hidden bg-stone-50 dark:bg-stone-950">
      <div className="mb-16 max-w-5xl w-[90%] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="text-4xl md:text-5xl mb-6 font-bold tracking-tight"
        >
          What I Know & How I Apply It
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          className="text-lg md:text-xl text-stone-600 dark:text-stone-400 max-w-3xl leading-relaxed"
        >
          My technical stack and expertise, measured in years of hands-on, real-world application.
        </motion.p>
      </div>

      <div className="w-full border-y border-stone-200 dark:border-stone-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 bg-stone-200 dark:bg-stone-800 gap-[1px]">
          {skillsData.map((data, index) => (
            <SkillCard key={index} data={data} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
