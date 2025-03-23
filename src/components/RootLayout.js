'use client'; // Mark this as a client component

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar"; // Import the Navbar component
import Footer from "./Footer"; // Import the Footer component
import Loader from "./loader";

export default function RootLayout({ children }) {
  // Add loader functionality
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    handleStart();
    const timer = setTimeout(handleComplete, 3000); // Simulate delay
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {/* Add the Navbar component here */}
      
      {loading && <Loader />}
      <div className={loading ? "hidden" : ""}>
      <div className="navbar-margin">
       <Navbar />
        </div>
        {children}
        <Footer />
        </div>
      
    </>
  );
}
