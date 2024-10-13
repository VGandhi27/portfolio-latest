import Link from "next/link";
import { FaLinkedinIn ,FaGithub ,FaInstagram,FaGoogleScholar} from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
export default function Footer() {
  return (
    <>
    <hr/>
    <footer className="bg-white-800 text-black w-full py-4 max-w-4xl mx-auto">
    <div className="flex flex-col sm:flex-row justify-between items-center">
      
      {/* Left section: About */}
      <div className="text-center sm:text-left mb-4 sm:mb-0">
        <h2 className="text-xl font-bold">This website is open-source on GitHub</h2>
      </div>

      {/* Right section: Social Media Icons */}
      <div className="flex justify-center sm:justify-start space-x-4 mt-6 sm:mt-0">
        <a href="https://www.linkedin.com/in/vidushi-gandhi27/" ><FaLinkedinIn size ='30'/></a>
        <a href="https://github.com/Vidushi-Gandhi"><FaGithub size ='30' color = ''/></a>
        <a href="https://github.com/Vidushi-Gandhi"><CiMail size ='30'/></a>
        <a href="https://github.com/Vidushi-Gandhi"><FaInstagram size ='30'/></a>
        <a href="https://github.com/Vidushi-Gandhi"><FaGoogleScholar size ='30'/></a>
      </div>
    </div>
 
</footer>
</>
  );
}
