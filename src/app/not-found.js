import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[90vh] items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-lg text-gray-600 mt-4">
          Oops! The page you&apos;re looking for does not exist.
        </p>
        <Link href="/" passHref>
          <button className="mt-6 px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-300">
            Go back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
