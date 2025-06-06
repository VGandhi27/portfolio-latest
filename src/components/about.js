// pages/index.js
export default function About_Com() {
  return (
    
    <div className=" min-h-[80vh] max-w-4xl mx-auto p-6 mt-10" style={{marginTop: '6rem' ,marginBottom: '2.2rem'}}>
     
    <h1 className="text-5xl text-center font-bold text-black-300 mb-8">
     A Glimpse <span className="text-purple-700">about me</span>
    </h1>

    <p className="text-lg mb-3 text-justify">
      👋 Hi! I&apos;m Vidushi! I&apos;m a Data Science Engineer at IKTARA Data Sciences, specializing in machine learning, 
      web development, and data analysis. I completed my studies at <strong>Echelon Institute of Technology, Faridabad</strong>, 
      and I hold a degree in Computer Science And Engineering.
    </p>
    <p className="text-lg mb-3 text-justify">
      During my time at university, I conducted research under Dr. Monika Goyal and Dr. Stuti Saxena, focusing on emerging 
      technologies and applications in data science. I published two research papers: <strong>&quot;SVM-Based Framework for Breast Cancer 
        Detection&quot;</strong> and <strong>&quot;Analysing the Causes of Mood Disorders: A Comprehensive Study.&quot;</strong>
    </p>
    <p className="text-lg mb-3 text-justify">
      As a GDSC Lead at the Google Developer Students Club, I lead tech initiatives and organize events like TECHLON, where my 
      project won second place. I also write tech blogs on Hashnode, exploring topics in AI and NLP.
    </p>
    <p className="text-lg mb-3 text-justify">
      In my free time, I enjoy exploring new technologies and contributing to open-source projects.
       Feel free to connect with me on LinkedIn!
    </p>

    <a
      href='/Vidushi_CV.pdf'
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      target="_blank"
      rel="noopener noreferrer"
    >
      Resume
    </a>
  </div>

  

  );
}
