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
            Looking to collaborate or have an open role? Let&apos;s talk.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          action="https://api.web3forms.com/submit"
          method="POST"
          className="flex flex-col gap-4 bg-stone-50 dark:bg-stone-900/50 p-2 py-4 md:p-4  rounded-2xl border border-stone-200 dark:border-stone-800"
        >
          {/* safe public key */}
          <input type="hidden" name="access_key" value="8def9868-d094-4545-81cf-05649ce2d218" />
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

      {/* PGP Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
        className="w-full md:w-8/12 lg:w-6/12 mt-12 text-center"
      >
        <h3 className="text-xl font-semibold mb-2">Secure Communication</h3>
        <p className="text-stone-600 dark:text-stone-400 mb-4 text-sm">
          If you need to send sensitive information, you can encrypt your message using my public PGP key and then paste the encrypted message in the above text box
        </p>
        <div className="bg-stone-100 dark:bg-stone-900/50 p-4 rounded-xl border border-stone-200 dark:border-stone-800 font-mono text-xs text-left overflow-x-auto text-stone-500 selection:bg-accent/20">
          <pre>
            {`-----BEGIN PGP PUBLIC KEY BLOCK-----


-----END PGP PUBLIC KEY BLOCK-----`}
          </pre>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
