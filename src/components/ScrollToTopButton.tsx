'use client';

export default function ScrollToTopButton() {
  return (
    <div className="flex justify-center">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium px-5 py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 group"
      >
        <span>Back to Top</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 transform transition-transform duration-300 group-hover:-translate-y-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </div>
  );
}
