// pages/index.js
import "../app/style/home.scss"
export default function About_Com() {
  return (
    <div className="home min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="hero text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm Vidushi Gandhi</h1>
        <p className="text-lg text-gray-400">Data Science Engineer | AI & Network Automation | Technical Writer</p>
        <div className="mt-6">
          <a href="/resume.pdf" className="btn-primary">Download Resume</a>
          <a href="#projects" className="btn-secondary ml-4">Explore My Work</a>
        </div>
      </section>

      {/* About Section */}
      <section className="about py-10 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="max-w-2xl mx-auto text-gray-300">
          Passionate about AI-driven network solutions and technical writing. Currently working at Iktara Data Sciences, building Airtel’s Transmission System.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects py-10 px-6">
        <h2 className="text-2xl font-semibold text-center mb-6">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="project-card p-4 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-bold">Autonomous Network Solution</h3>
            <p className="text-gray-400 text-sm mt-2">Developing a Network Data Store and 360° Network Dashboard.</p>
          </div>
          <div className="project-card p-4 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-bold">Sentiment Analysis Dashboard</h3>
            <p className="text-gray-400 text-sm mt-2">Built using Django and Machine Learning models.</p>
          </div>
          <div className="project-card p-4 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-bold">Blockchain-Based Water Management</h3>
            <p className="text-gray-400 text-sm mt-2">Presented at IIT Delhi's Alt Hackathon.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact py-10 text-center">
        <h2 className="text-2xl font-semibold">Let's Connect</h2>
        <p className="text-gray-400">Reach out via email or connect on LinkedIn.</p>
        <a href="mailto:vidushi@example.com" className="btn-primary mt-4">Say Hello</a>
      </section>
    </div>

  );
}

// "use client";

// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Sphere,mesh } from "@react-three/drei";
// import { motion } from "framer-motion";

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
//       {/* Hero Section */}
//       <section className="w-full h-screen flex flex-col items-center justify-center text-center">
//         <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
//         <p className="text-lg text-gray-300 mt-2">Building the Future with Code & Creativity</p>

//         {/* 3D Model */}
//         <div className="w-full h-80 mt-10">
//           <Canvas>
//             <OrbitControls enableZoom={false} />
//             <ambientLight intensity={0.5} />
//             <directionalLight position={[2, 2, 2]} />
//             {/* <Sphere args={[1.5, 32, 32]}>
//               <meshStandardMaterial color="cyan" wireframe />
//             </Sphere> */}
//             <mesh>
//               <sphereGeometry args={[1.5, 32, 32]} />
//               <meshStandardMaterial color="cyan" wireframe />
//             </mesh>

//           </Canvas>
//         </div>
//       </section>

//       {/* About Section */}
//       <motion.section
//         className="w-full py-20 text-center"
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <h2 className="text-4xl font-semibold">About Me</h2>
//         <p className="text-gray-300 max-w-lg mx-auto mt-4">
//           I'm a software engineer specializing in 3D web experiences, AI, and full-stack development.
//         </p>
//       </motion.section>

//       {/* Projects Section */}
//       <motion.section
//         className="w-full py-20 text-center"
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <h2 className="text-4xl font-semibold">Projects</h2>
//         <p className="text-gray-300 max-w-lg mx-auto mt-4">
//           Here are some cool projects I’ve worked on.
//         </p>
//       </motion.section>

//       {/* Contact Section */}
//       <motion.section
//         className="w-full py-20 text-center bg-gray-800"
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <h2 className="text-4xl font-semibold">Contact Me</h2>
//         <p className="text-gray-300 max-w-lg mx-auto mt-4">Let's connect and build something amazing!</p>
//         <a
//           href="mailto:your-email@example.com"
//           className="mt-4 inline-block bg-cyan-500 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-cyan-600 transition"
//         >
//           Say Hello
//         </a>
//       </motion.section>
//     </div>
//   );
// }
