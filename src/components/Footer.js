import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaGoogleScholar,
} from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#1a0b1f] to-[#430c4d] text-white w-full py-6 px-6 pb-4">
      <div className="flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto space-y-4 sm:space-y-0">
        {/* Left section: About */}
        <div className="text-center sm:text-left">
          <h2 className="text-lg sm:text-xl font-semibold">
            This website is open-source on{" "}
            <a
              href="https://github.com/VGandhi27"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6bc1ff] hover:underline"
            >
              GitHub
            </a>
          </h2>
        </div>

        {/* Right section: Social Media Icons */}
        <div className="flex justify-center items-center space-x-4">
          <a
            href="https://www.linkedin.com/in/vidushi-gandhi27/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0077B5] transition-transform duration-300 hover:scale-110"
          >
            <FaLinkedinIn size={24} />
          </a>
          <a
            href="https://github.com/VGandhi27"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-transform duration-300 hover:scale-110"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="mailto:vidushi@example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition-transform duration-300 hover:scale-110"
          >
            <CiMail size={24} />
          </a>
          <a
            href="https://www.instagram.com/vgandhi72/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-transform duration-300 hover:scale-110"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://scholar.google.com/citations?user=pHa-9woAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#4285F4] transition-transform duration-300 hover:scale-110"
          >
            <FaGoogleScholar size={24} />
          </a>
        </div>
      </div>

      {/* Bottom section for copyright and additional info */}
      <div className="mt-4 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Vidushi Gandhi. All rights reserved.
      </div>
    </footer>
  );
}
