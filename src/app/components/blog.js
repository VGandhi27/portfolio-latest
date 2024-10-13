// pages/blog/index.js
import posts from '../data/posts';
import Link from 'next/link';
import Image from 'next/image';

const BlogIndex = () => {
  // Function to truncate the summary
  const truncateSummary = (summary, wordLimit) => {
    const words = summary.split(' ');
    if (words.length > wordLimit) {
      return {
        truncated: words.slice(0, wordLimit).join(' ') + '...',
        full: summary,
      };
    }
    return {
      truncated: summary,
      full: summary,
    };
  };

  return (
    <div className='max-w-4xl mx-auto p-6 text-left '>
      <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
        <h2 className="text-1xl font-bold mt-2 mb-6">A work-in-progress set of articles on things I've built</h2>
        <div>
          {posts.map((post) => {
            const { truncated, full } = truncateSummary(post.summary, 20); // Truncate to 20 words
            return (
              <div key={post.id} className="flex items-start border-b pb-4 mb-4">
                <div className="flex-1 pr-4">
                  <h3 className="text-1xl font-semibold">
                    <Link href={post.link} className="text-blue-500 hover:underline">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-2">{truncated}</p>
                  {truncated !== full && ( // Show "Read More" button if truncated
                    <Link href={post.link} className="text-blue-500 hover:underline">
                      Read More
                    </Link>
                  )}
                  <span className="mx-2 text-sm text-gray-500">{post.date}</span>
                </div>
                <div className="flex-shrink-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={155} // Set the desired width
                    height={200} // Set the desired height
                    className="rounded"
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
