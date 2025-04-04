import { useState } from "react";
import projects from "../data/project";
import Link from "next/link";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="max-w-6xl mx-auto p-8 text-center mt-16 relative">
      <h1 className="text-5xl font-bold text-black-300 mb-8">
        A small selection of <span className="text-purple-700">my projects</span>
      </h1>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gradient-to-br from-black via-[#39064a] to-black 
              p-6 rounded-3xl shadow-lg transition transform hover:-translate-y-2 
              hover:shadow-purple-500/50 duration-300 ease-in-out"
          >
            <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
            <p className="text-gray-400 mt-2">{project.description}</p>

            {/* Clickable Image */}
            <div className="mt-4 cursor-pointer" onClick={() => setActiveProject(project)}>
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="rounded-lg border border-gray-800 object-cover"
              />
            </div>

            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <Link href={project.link} target="_blank">
              <button className="mt-4 px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full transition">
                Check Live Site
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Modal Video */}
      {activeProject && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl aspect-video">
            <video
              src={activeProject.video}
              autoPlay
              muted
              controls
              className="w-full h-full rounded-lg shadow-lg object-cover"
            />
            <button
              onClick={() => setActiveProject(null)}
              className="absolute -top-4 -right-4 bg-white text-black p-2 rounded-full hover:bg-red-600 hover:text-white transition"
            >
             <IoClose size={22} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
