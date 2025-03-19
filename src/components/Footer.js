import Link from "next/link";
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaGoogleScholar,
} from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

export default function Footer() {
  return (
    <>
      
      <footer className="bg-gradient-to-r from-[#1a0b1f] to-[#430c4d] text-white w-full py-4 px-4">
  <div className="flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto">
    {/* Left section: About */}
    <div className="text-center sm:text-left mb-4 sm:mb-0">
      <h2 className="text-xl font-bold">This website is open-source on GitHub</h2>
    </div>

    {/* Right section: Social Media Icons */}
    <div className="flex justify-center sm:justify-start space-x-4 mt-6 sm:mt-0">
      <a href="https://www.linkedin.com/in/vidushi-gandhi27/" target="_blank">
        <FaLinkedinIn size="30" />
      </a>
      <a href="https://github.com/VGandhi27" target="_blank">
        <FaGithub size="30" />
      </a>
      <a href="mailto:vidushi@example.com" target="_blank">
        <CiMail size="30" />
      </a>
      <a href="https://www.instagram.com/vgandhi72/" target="_blank">
        <FaInstagram size="30" />
      </a>
      <a href="https://scholar.google.com/citations?user=pHa-9woAAAAJ&hl=en" target="_blank">
        <FaGoogleScholar size="30" />
      </a>
    </div>
  </div>
</footer>


    </>
  );
}
