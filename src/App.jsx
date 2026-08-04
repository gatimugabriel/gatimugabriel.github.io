import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogSearchNav from "./components/BlogSearchNav";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Home from "./pages/Home";

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
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

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
        <main className="max-w-5xl w-[90%] mx-auto relative pt-16">
          <BlogSearchNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/tags/:tag" element={<Blog />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
