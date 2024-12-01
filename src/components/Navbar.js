// "use client";
// import Link from "next/link";
// import { useState } from "react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className=" bg-white-800 text-black max-w-4xl mx-auto text-center ">
//       <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
//         <div className="text-2xl font-bold">
//           <Link href="/">
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className ="size-6">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
//             </svg>
// </Link>
//         </div>
//         <div className="hidden md:flex space-x-4">
         
//           <Link href="/about" className="hover:text-gray-400">
//             About
//           </Link>
//           <Link href="/blog" className="hover:text-gray-400">
//             Blog
//           </Link>
//           <Link href="/research" className="hover:text-gray-400">
//             Research 
//           </Link>
//           <Link href="/projects" className="hover:text-gray-400">
//             Projects
//           </Link>
//           <Link href="/contact" className="hover:text-gray-400">
//             Contact
//           </Link>
//         </div>
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="focus:outline-none">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               {isOpen ? (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               ) : (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//               )}
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden">
//           <div className="flex flex-col space-y-2 p-4 bg-gray-700">
//             <Link href="/" className="hover:text-gray-400" onClick={toggleMenu}>
//               Home
//             </Link>
//             <Link href="/about" className="hover:text-gray-400" onClick={toggleMenu}>
//               About
//             </Link>
//             <Link href="/projects" className="hover:text-gray-400" onClick={toggleMenu}>
//               Projects
//             </Link>
//             <Link href="/contact" className="hover:text-gray-400" onClick={toggleMenu}>
//               Contact
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = ({ currentPath }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const isActive = (path) => currentPath === path;

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/research", label: "Research" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white text-black max-w-4xl mx-auto text-center">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                isActive(link.href) ? "text-blue-500" : "hover:text-gray-400"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" role="menu">
          <div className="flex flex-col space-y-2 p-4 bg-gray-700 text-white">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-gray-300"
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
