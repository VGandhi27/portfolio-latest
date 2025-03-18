"use client";
import Link from "next/link";
import React, { useState } from "react";
import "../app/style/Navbar.scss";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <div className="container">
        <Link href="/" className="logo">
          🚀 Vidushi's Portfolio
        </Link>
        <div className={`menu ${menuOpen ? "open" : ""}`}>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/research">Research</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/chat">Chatwithme</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
