import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 pt-16 pb-8 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              Agil Desta Hernanda
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2">
              Full-stack Developer
            </p>
          </div>
          <div className="flex items-center gap-5">
            <a 
              href="https://github.com/Gilldess" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 hover:-translate-y-2 hover:scale-110 hover:shadow-lg transition-all duration-300"
            >
              <FiGithub className="text-xl" />
            </a>
            <a 
              href="https://linkedin.com/in/agil-desta-hernanda-161376396" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white hover:-translate-y-2 hover:scale-110 hover:shadow-lg transition-all duration-300"
            >
              <FiLinkedin className="text-xl" />
            </a>
            <a 
              href="https://instagram.com/agill_dss" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-3 rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:bg-pink-600 hover:text-white dark:hover:bg-pink-500 dark:hover:text-white hover:-translate-y-2 hover:scale-110 hover:shadow-lg transition-all duration-300"
            >
              <FiInstagram className="text-xl" />
            </a>

            <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=destcodde@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Email"
                className="p-3 rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:bg-red-500 hover:text-white dark:hover:bg-red-500 dark:hover:text-white hover:-translate-y-2 hover:scale-110 hover:shadow-lg transition-all duration-300"
            >
              <FiMail className="text-xl" />
            </a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
          <p>
            &copy; {currentYear} Agil Desta Hernanda. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with <span className="text-blue-500 font-medium">React</span> & <span className="text-teal-500 font-medium">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;