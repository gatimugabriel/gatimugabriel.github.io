function Footer() {
  const date = new Date().getFullYear();

  return (
    <div className="py-10 text-center border-t border-stone-200 dark:border-stone-800">
      <div className="container max-w-screen-lg mx-auto flex flex-col items-center gap-6">
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://twitter.com/gg_gatimu"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 bg-stone-100 dark:bg-stone-900 text-stone-600 dark:text-stone-400 rounded-full hover:bg-accent hover:text-white dark:hover:bg-accent dark:hover:text-white hover:scale-110 active:scale-95 transition-all duration-300 ease-out-bounce"
            aria-label="Twitter"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/gabrielgatimu"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 bg-stone-100 dark:bg-stone-900 text-stone-600 dark:text-stone-400 rounded-full hover:bg-accent hover:text-white dark:hover:bg-accent dark:hover:text-white hover:scale-110 active:scale-95 transition-all duration-300 ease-out-bounce"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 256 256">
              <path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.778 15.433-22.778 31.369v60.434h-37.931V95.966h36.414v16.694h.51c7.425-12.695 21.231-20.278 35.928-19.732 38.445 0 45.533 25.288 45.533 58.186v67.013zM56.955 79.269c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.002 22.014 9.853 22.016 22.01 0 12.158-9.854 22.013-22.008 22.015zM75.92 218.127H37.95V95.966h37.971v122.161zM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.121 10.315 8.575 18.582 18.89 18.473h218.144c10.335.128 18.822-8.138 18.965-18.473V18.455C255.852 8.124 247.364-.134 237.033.001z" />
            </svg>
          </a>
          <a
            href="https://github.com/gatimugabriel"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 bg-stone-100 dark:bg-stone-900 text-stone-600 dark:text-stone-400 rounded-full hover:bg-accent hover:text-white dark:hover:bg-accent dark:hover:text-white hover:scale-110 active:scale-95 transition-all duration-300 ease-out-bounce"
            aria-label="GitHub"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        </div>

        <p className="text-sm font-medium text-stone-500 dark:text-stone-400">
          &copy; {date} Gabriel Gatimu. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
