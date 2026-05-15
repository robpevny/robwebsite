import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-orange-50 to-yellow-100">
      <Helmet>
        <title>Page Not Found | Robert Pevny Coaching</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <header className="absolute top-0 left-0 right-0 z-20 p-8 bg-gradient-to-b from-white/60 to-transparent backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-gray-800 hover:text-orange-600 transition-colors">
            <ArrowLeft size={32} />
          </Link>
          <h1 className="text-5xl text-gray-800 font-nunito">Page Not Found</h1>
        </div>
      </header>

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 text-center px-8">
        <p className="text-8xl font-bold text-orange-300">404</p>
        <p className="text-2xl text-gray-700">That page doesn't exist.</p>
        <Link
          to="/"
          className="mt-4 px-6 py-3 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
