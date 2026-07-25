import { motion } from 'framer-motion';

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center py-16 mb-10">
      <div className="w-full md:w-8/12 lg:w-6/12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col items-center mb-8"
        >
          <h2 className="text-3xl md:text-5xl mb-4 font-bold tracking-tight text-center">
            Get In Touch
          </h2>
          <p className="text-stone-600 dark:text-stone-400 text-center text-lg">
            Looking to collaborate or have an open role? Let's talk.
          </p>
        </motion.div>
        
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          action="https://getform.io/f/194f316b-47d1-44db-942e-90cec1859e56"
          method="POST"
          className="flex flex-col gap-4 bg-stone-50 dark:bg-stone-900/50 p-6 md:p-8 rounded-2xl border border-stone-200 dark:border-stone-800"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-3 bg-white dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="p-3 bg-white dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300"
            required
          />
          <textarea
            name="message"
            placeholder="Your message"
            rows="6"
            className="p-3 bg-white dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300 resize-none"
            required
          />
          <button
            type="submit"
            className="mt-2 text-center w-full px-8 py-3.5 text-base font-medium rounded-xl text-white bg-accent hover:bg-accent/90 hover:scale-[0.99] active:scale-[0.97] transition-all duration-150 ease-out-fluid shadow-sm"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
}

export default Contact;
