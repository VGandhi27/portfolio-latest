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
  // Manage visibility of summaries per paper
  const [showFullSummaries, setShowFullSummaries] = useState({});

  const toggleSummary = (paperId) => {
    setShowFullSummaries((prev) => ({
      ...prev,
      [paperId]: !prev[paperId],
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 text-left" style={{ marginTop: "5rem" }}>
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Selected <span className="text-purple-700">Research Highlights</span>
      </h1>

      <div>
        {researchPapers.map((paper) => {
          const showFullSummary = showFullSummaries[paper.id] || false;

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
                    onClick={() => toggleSummary(paper.id)}
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
                  width={200}
                  height={200}
                  className="rounded w-full h-auto md:w-[200px] md:h-[200px]"
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
