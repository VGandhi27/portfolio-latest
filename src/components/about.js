// pages/index.js
import Link from "next/link";
import "./globals.css"
export default function About_Com() {
  return (
    
    <div className="max-w-4xl mx-auto p-6 text-left mt-10" style={{marginTop: '5rem' }}>
     <div className="flex justify-between items-center">
    <h1 className="text-4xl font-bold mt-2 mb-6">About Me</h1>
    <a
      href="/path-to-resume.pdf" // Update with the actual path to your resume
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      target="_blank"
      rel="noopener noreferrer"
    >
      Resume
    </a>
    </div>
    <p className="text-lg mb-3 text-justify">
      👋 Hi! I’m Vidushi! I’m a Data Science Engineer at IKTARA Data Sciences, specializing in machine learning, 
      web development, and data analysis. I completed my studies at <strong>Echelon Institute of Technology, Faridabad</strong>, 
      and I hold a degree in Computer Science And Engineering.
    </p>
    <p className="text-lg mb-3 text-justify">
      During my time at university, I conducted research under Dr. Monika Goyal and Dr. Stuti Saxena, focusing on emerging 
      technologies and applications in data science. I published two research papers: <strong>"SVM-Based Framework for Breast Cancer 
        Detection"</strong> and <strong>"Analysing the Causes of Mood Disorders: A Comprehensive Study."</strong>
    </p>
    <p className="text-lg mb-3 text-justify">
      As a GDSC Lead at the Google Developer Students Club, I lead tech initiatives and organize events like TECHLON, where my 
      project won second place. I also write tech blogs on Hashnode, exploring topics in AI and NLP.
    </p>
    <p className="text-lg mb-3 text-justify">
      In my free time, I enjoy exploring new technologies and contributing to open-source projects.
       Feel free to connect with me on LinkedIn!
    </p>
  </div>

      

  );
}
