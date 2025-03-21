import projects from "../data/project";
import Link from "next/link";
import Image from "next/image";

// Function to truncate the description
const truncateDescription = (description, wordLimit) => {
  const words = description.split(" ");
  if (words.length > wordLimit) {
    return {
      truncated: words.slice(0, wordLimit).join(" ") + "...",
      full: description,
    };
  }
  return {
    truncated: description,
    full: description,
  };
};

const ProjectIndex = () => {
  return (
    <div
      className="max-w-4xl mx-auto p-6 text-left"
      style={{ marginTop: "5rem" }}
    >
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-6 text-center">Projects</h1>
        <h2 className="text-xl font-bold mt-2 mb-6 text-center">
          A showcase of my featured work
        </h2>

        {/* Project List */}
        <div>
          {projects.map((project) => {
            const { truncated, full } = truncateDescription(
              project.description,
              20
            ); // Truncate to 20 words
            return (
              <div
                key={project.id}
                className="flex flex-wrap md:flex-nowrap items-start border-b pb-4 mb-4"
              >
                {/* Text Section */}
                <div className="flex-1 pr-4 mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold">
                    <Link
                      href={project.link}
                      className="text-blue-500 hover:underline"
                    >
                      {project.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-2">{truncated}</p>
                  {truncated !== full && (
                    <Link
                      href={project.link}
                      className="text-blue-500 hover:underline"
                    >
                      Read More
                    </Link>
                  )}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-200 text-sm px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="block mt-2 text-sm text-gray-500">
                    {project.date}
                  </span>
                </div>

                {/* Image Section */}
                <div className="flex-shrink-0 mb-4 md:mb-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={200}
                    height={150}
                    className="rounded w-full h-auto md:w-[200px] md:h-[150px]"
                    priority
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectIndex;
