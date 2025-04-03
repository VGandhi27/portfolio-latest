'use client';
import { useState } from "react";
import posts from "../data/posts";
import Link from "next/link";
import Image from "next/image";

// Function to truncate the summary
const truncateSummary = (summary, wordLimit) => {
  const words = summary.split(" ");
  if (words.length > wordLimit) {
    return {
      truncated: words.slice(0, wordLimit).join(" ") + "...",
      full: summary,
    };
  }
  return {
    truncated: summary,
    full: summary,
  };
};

const BlogIndex = () => {
  const [expandedPosts, setExpandedPosts] = useState({});

  const toggleReadMore = (postId) => {
    setExpandedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId], // Toggle between true and false
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 text-left" style={{ marginTop: "5rem" }}>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-6 text-center">Blog</h1>
        <h2 className="text-xl font-bold mt-2 mb-6 text-center">
          A work-in-progress set of articles on things I've built
        </h2>

        {/* Blog List */}
        <div>
          {posts.map((post) => {
            const { truncated, full } = truncateSummary(post.summary, 20);
            const isExpanded = expandedPosts[post.id] || false;

            return (
              <div key={post.id} className="flex flex-wrap md:flex-nowrap items-start border-b pb-4 mb-4">
                {/* Text Section */}
                <div className="flex-1 pr-4 mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold">
                    <Link href={post.link} className="text-blue-500 hover:underline">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-2">{isExpanded ? full : truncated}</p>
                  
                  {truncated !== full && (
                    <button 
                      onClick={() => toggleReadMore(post.id)}
                      className="text-blue-500 hover:underline focus:outline-none"
                    >
                      {isExpanded ? "Show Less" : "Read More"}
                    </button>
                  )}

                  <span className="block mt-2 text-sm text-gray-500">{post.date}</span>
                </div>

                {/* Image Section */}
                <div className="flex-shrink-0 mb-4 md:mb-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={200}
                    height={150}
                    className="rounded w-full h-auto md:w-[200px] md:h-[150px]"
                    priority
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogIndex;
