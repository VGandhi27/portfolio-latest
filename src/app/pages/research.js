// pages/index.js
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Research_Paper from "./components/research"
export default function Research() {
  return (
    <>
      <Navbar />
      <Research_Paper/>
      <Footer/>
    </>
  );
}
