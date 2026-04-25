import { FiGithub, FiExternalLink } from "react-icons/fi";
import imgProject from "../../assets/project.png";
import imgProject1 from "../../assets/project1.png";
import imgProject2 from "../../assets/project2.png";

const Project = () => {
  const projectsData = [
    {
      id: 1,
      title: "EduCourse - Video Learning Platform",
      description: "Platform pembelajaran berbasis video, dan operasi CRUD interaktif.",
      image: imgProject1, 
      techStack: ["React", "Redux Toolkit", "Tailwind CSS", "mock.io"],
      githubUrl: "https://github.com/Gilldess/uiVideoBelajar",
      liveUrl: "https://ui-video-belajar.vercel.app/",
    },
    {
      id: 2,
      title: "E Shoop",
      description: "Platform e-commerce dengan fitur dan keranjang belanja, serta pemesanan produk.",
      image: imgProject2,
      techStack: ["React", "Tailwind CSS", "Redux Toolkit"],
      githubUrl: "https://github.com/Gilldess/e-shopp",
      liveUrl: "https://e-shopp-lime.vercel.app/",
    },
    {
      id: 3,
      title: "Introduction Bakery Landing Page",
      description: "Landing page responsif dan modern dengan fitur dark mode filter menu dan animasi mengunakan motion.",
      image: imgProject,
      techStack: ["React", "Tailwind CSS v4", "Framer Motion"],
      githubUrl: "https://github.com/Gilldess/landing-page-bakery",
      liveUrl: "https://landing-page-bakery-rho.vercel.app/",
    },
  ];

  return (
    <div id="projects" className="py-20 px-4 md:px-8 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Project Saya
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Kumpulan proyek pilihan yang menunjukkan eksplorasi saya dalam web development modern. Berfokus pada antarmuka yang responsif dan pengalaman pengguna yang interaktif.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div 
              key={project.id}
              className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-blue-900/20 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden bg-slate-200 dark:bg-slate-800">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Konten Card */}
              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 flex-grow text-sm">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                  <a
                    href={project.githubUrl} 
                    target="_blank"
                    className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    <FiGithub className="text-lg" /> Code
                  </a>
                  <a
                    href={project.liveUrl} 
                    target="_blank"
                    className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    <FiExternalLink className="text-lg" /> Live Demo
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Project;