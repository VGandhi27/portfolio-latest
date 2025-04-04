import projects from "../data/project";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 text-center mt-16">
      <h1 className="text-5xl font-bold text-black-300 mb-8">
        A small selection of <span className="text-purple-700">my projects</span>
      </h1>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-6 rounded-3xl shadow-lg transition transform hover:-translate-y-2 hover:shadow-purple-500/50 project-card"
          >
            <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
            <p className="text-gray-300 mt-2">{project.description}</p>

            <div className="mt-4">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="rounded-lg border border-gray-800"
              />
            </div>

            {/* Tech Stack */}
            <div className="flex gap-4 mt-4 justify-center flex-wrap">
              {project.techStack.map((tech, index) => (
                <span key={index} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>

            {/* Button */}
            <Link href={project.link} target="_blank">
              <button className="mt-4 px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full transition">
                Check Live Site
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
