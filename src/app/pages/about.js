// pages/index.js
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import about_com from "./components/about"
export default function About() {
  return (
    <>
      <Navbar />
      <about_com/>
      <Footer/>
    </>
  );
}
