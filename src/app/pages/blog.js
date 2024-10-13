// pages/index.js
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Blog from "./components/blog"
export default function Blog() {
  return (
    <>
      <Navbar />
      <Blog/>
      <Footer/>
    </>
  );
}
