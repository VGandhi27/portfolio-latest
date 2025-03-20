"use client";
import { useState } from "react";
import researchPapers from "../data/research";
import Link from "next/link";
import Image from "next/image";

// Helper function to truncate text to a certain number of words
const truncateText = (text, wordLimit) => {
  const words = text.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : text;
};

const Research = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-left" style={{ marginTop: "5rem" }}>
      <h1 className="text-3xl font-bold mb-6">Research Papers</h1>
      <div>
        {researchPapers.map((paper) => {
          const [showFullSummary, setShowFullSummary] = useState(false); // State to toggle full summary
          const toggleSummary = () => setShowFullSummary(!showFullSummary);

          return (
            <div
              key={paper.id}
              className="flex flex-wrap md:flex-nowrap items-start border-b pb-4 mb-4"
            >
              {/* Content Section */}
              <div className="flex-1 pr-4 mb-4 md:mb-0">
                <h2 className="text-xl font-semibold">
                  <Link
                    href={paper.link}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {paper.title}
                  </Link>
                </h2>
                <p className="text-gray-700 mb-2">
                  {showFullSummary ? paper.summary : truncateText(paper.summary, 50)}
                </p>
                {paper.summary.split(" ").length > 50 && (
                  <button
                    onClick={toggleSummary}
                    className="text-blue-500 hover:underline"
                  >
                    {showFullSummary ? "Show Less" : "Read More"}
                  </button>
                )}
                <p className="text-sm text-gray-600">
                  <strong>Co-authors:</strong> {paper.coAuthors.join(", ")}
                </p>
                <span className="text-sm text-gray-500">{paper.date}</span>
              </div>

              {/* Image Section */}
              <div className="flex-shrink-0 mb-4 md:mb-0">
                <Image
                  src={paper.image}
                  alt={paper.title}
                  width={200} // Default width
                  height={200} // Default height
                  className="rounded w-full h-auto md:w-[200px] md:h-[200px]" // Responsive image size
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Research;
