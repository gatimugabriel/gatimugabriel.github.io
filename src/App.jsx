import Intro from "./components/Intro";
import Contact from "./components/Contact";
import Timeline from "./components/Timeline";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import Skills from "./components/Skills.jsx";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <button
        type="button"
        onClick={handleThemeToggle}
        className="fixed z-50 right-6 top-6 p-3 rounded-full bg-white/80 dark:bg-stone-900/80 backdrop-blur-md border border-stone-200 dark:border-stone-800 shadow-sm hover:scale-[0.97] transition-all duration-150 ease-out-fluid"
        aria-label="Toggle Theme"
      >
        <motion.div
          initial={false}
          animate={{ rotate: theme === "dark" ? 360 : 0 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5 text-accent" strokeWidth={2} />
          ) : (
            <Moon className="w-5 h-5 text-stone-700" strokeWidth={2} />
          )}
        </motion.div>
      </button>
      
      <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-inter transition-colors duration-300 selection:bg-accent/30">
        <main className="max-w-5xl w-[90%] mx-auto">
          <Intro />
          <Portfolio />
          <Skills />
          <Timeline />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
