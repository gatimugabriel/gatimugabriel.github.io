import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

const services = [
  {
    title: "High-Performance Backends",
    description: "I build the invisible engines that power your applications, ensuring they run fast, stay secure, and never crash even under heavy load.",
    points: [
      { label: "Performance", value: "Optimized response times, efficient data management, and smart caching" },
      { label: "Infrastructure", value: "Reliable cloud architecture using AWS, Kubernetes, and automated deployments" }
    ]
  },
  {
    title: "Product Prototyping & MVPs",
    description: "I partner with founders and teams to turn ideas into functional, professional applications quickly. My goal is to translate your business needs into working software without the jargon.",
    points: [
      { label: "Focus", value: "User-friendly interfaces, fast delivery, and scalable foundations" },
      { label: "Execution", value: "End-to-end delivery from initial concept to a deployed, usable product" }
    ]
  },
  {
    title: "Payment Integrations",
    description: "End-to-end payment flows wired directly into your product—whether it's local mobile money (like M-Pesa), card gateways, or crypto transactions.",
    points: [
      { label: "Reliability", value: "Secure transactions, automated confirmations, and seamless checkouts" },
      { label: "Automation", value: "Real-time fulfillment and state management tied to confirmed payments" }
    ]
  }
];

function ServiceRow({ service, index }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const rowRef = useRef(null);

  const handleMouseMove = (e) => {
    if (rowRef.current) {
      const rect = rowRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <motion.div
      ref={rowRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
      className="relative group overflow-hidden bg-stone-50 dark:bg-stone-900 transition-colors duration-300"
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(120,119,198,0.08), transparent 40%)`
        }}
      />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 p-8 md:p-12">
        <div className="md:col-span-5 flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-bold text-stone-900 dark:text-stone-100">
            {service.title}
          </h3>
        </div>

        <div className="md:col-span-7 flex flex-col justify-center">
          <p className="text-lg text-stone-600 dark:text-stone-400 mb-6 leading-relaxed">
            {service.description}
          </p>

          <ul className="space-y-3">
            {service.points.map((point, i) => (
              <li key={i} className="text-sm md:text-base flex flex-col sm:flex-row sm:gap-2">
                <span className="font-semibold text-stone-800 dark:text-stone-200 shrink-0">{point.label}:</span>
                <span className="text-stone-500 dark:text-stone-400 leading-relaxed">{point.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

function EngineeringWork() {
  return (
    <section className="py-24">
      <div className="mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="text-4xl md:text-5xl mb-6 font-bold tracking-tight"
        >
          Recent Engineering Work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          className="text-lg md:text-xl text-stone-600 dark:text-stone-400 max-w-3xl leading-relaxed"
        >
          Here's what I've been focused on recently, and how I can help you build, launch and scale your next product.
        </motion.p>
      </div>

      <div className="flex flex-col bg-stone-200 dark:bg-stone-800 divide-y divide-accent border-y border-stone-200 dark:border-stone-800">
        {services.map((service, index) => (
          <ServiceRow key={index} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}

export default EngineeringWork;
