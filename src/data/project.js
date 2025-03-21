import portfolio from '../images/Portfolio.png'
import ans from '../images/ANS.webp'
const projects = [
    {
      id: 1,
      title: "AI Chatbot with Vector Search",
      description:
        "Developed an AI-powered chatbot using Next.js, Django backend, and PostgreSQL for storing vector embeddings.",
      image: portfolio,
      link: "/projects/ai-chatbot",
      technologies: ["Next.js", "Django", "PostgreSQL", "Hugging Face"],
      date: "March 2025",
    },
    {
      id: 2,
      title: "3D Portfolio Home Page",
      description:
        "Built an interactive 3D home page for a personal portfolio using Next.js and Three.js.",
      image: portfolio,
      link: "/projects/3d-portfolio",
      technologies: ["Next.js", "Three.js", "Tailwind CSS"],
      date: "February 2025",
    },
    {
      id: 3,
      title: "Autonomous Network Solution",
      description:
        "Developed an intent-driven autonomous network dashboard using data pipelines and real-time analytics.",
      image: ans,
      link: "/projects/autonomous-network",
      technologies: ["Django", "React", "Data Pipeline", "AI Models"],
      date: "January 2025",
    },
  ];
  
  export default projects;
  