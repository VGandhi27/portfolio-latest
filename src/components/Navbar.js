"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import "../app/style/Navbar.scss";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuOpen && !e.target.closest(".navbar")) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [menuOpen]);

  // Close menu after clicking a link
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <div className="container">
        <Link href="/" className="logo" onClick={handleLinkClick}>
          🚀 Vidushi's Portfolio
        </Link>
        <div className={`menu ${menuOpen ? "open" : ""}`}>
          <Link href="/about" onClick={handleLinkClick}>
            About
          </Link>
          <Link href="/blog" onClick={handleLinkClick}>
            Blog
          </Link>
          <Link href="/research" onClick={handleLinkClick}>
            Research
          </Link>
          <Link href="/projects" onClick={handleLinkClick}>
            Projects
          </Link>
          <Link href="/experience" onClick={handleLinkClick}>
            Experience
          </Link>
          <Link href="/chat" onClick={handleLinkClick}>
            Chatwithme
          </Link>
          <Link href="/contact" onClick={handleLinkClick}>
            Contact
          </Link>
        </div>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
