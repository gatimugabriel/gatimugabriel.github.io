import { motion } from 'framer-motion';
import {
    Code2,
    Database,
    Cloud,
    Smartphone,
    Terminal,
    Server,
    Layers,
    Container
} from 'lucide-react';

const skillsList = [

    { category: "Databases", items: "PostgreSQL, MySQL, MongoDB, Redis", icon: Database },
    { category: "Cloud & DevOps", items: "AWS, Kubernetes, Docker, CI/CD", icon: Cloud },
    { category: "Architecture", items: "REST, Microservices, GraphQL", icon: Container },
    { category: "Practices", items: "Agile, Code Reviews, Tech Docs", icon: Terminal },
    { category: "Languages", items: "Go, TypeScript, JavaScript, Python, Java", icon: Code2 },
    { category: "Backend", items: "Node.js, Express, Flask, FastAPI, Gin", icon: Server },
    { category: "Frontend", items: "React, Next.js, HTML/CSS, Tailwind", icon: Layers },
    { category: "Mobile", items: "React-Native, Jetpack Compose, PlayStore Publishing", icon: Smartphone },
];

function Skills() {
    return (
        <div className="flex flex-col items-center justify-center py-16">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                className="text-3xl md:text-5xl mb-12 font-bold tracking-tight"
            >
                Skills & Technologies
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                {skillsList.map((skill, index) => (
                    <motion.div
                        key={skill.category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.05, ease: [0.23, 1, 0.32, 1] }}
                        className="group flex flex-col items-start p-6 rounded-2xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-accent/50 transition-colors duration-300"
                    >
                        <div className="mb-4 p-3 rounded-lg bg-white dark:bg-stone-950 shadow-sm text-accent group-hover:scale-110 transition-transform duration-300 ease-out-bounce">
                            <skill.icon size={24} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{skill.category}</h3>
                        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                            {skill.items}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
