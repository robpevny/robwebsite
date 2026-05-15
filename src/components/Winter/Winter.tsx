import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";

export default function Winter() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-orange-50 to-yellow-100">
      <Helmet>
        <title>Cross-Country Skiing | Robert Pevny Coaching</title>
        <meta name="description" content="Learn cross-country skiing fundamentals — classic, skate, hills, and waxing — with expert coaching from Robert Pevny." />
      </Helmet>
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20 p-8 bg-gradient-to-b from-white/60 to-transparent backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="text-gray-800 hover:text-orange-600 transition-colors"
          >
            <ArrowLeft size={32} />
          </Link>
          <div className="text-3xl flex-1 text-center">
            Let's learn the fundamentals of cross-country skiing!
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="absolute inset-0 pt-32 pb-24 overflow-y-auto">
        <div className="max-w-6xl mx-auto px-8">
          {/* Skills Square Box */}
          <div className="w-full aspect-square bg-white/60 backdrop-blur-sm rounded-2xl shadow-2xl grid grid-cols-2 grid-rows-2 gap-4 p-4">
            {/* Classic - Top Left */}
            <Link
              to="/winter/classic"
              className="p-6 bg-orange-100/80 rounded-xl hover:bg-orange-200/80 transition-all cursor-pointer"
            >
              <h3 className="text-3xl font-bold text-orange-600 mb-3">
                Classic Skiing
              </h3>
              <p className="text-gray-700">
                Fundamentals of classic and skate technique for efficient skiing
              </p>
            </Link>

            {/* Skate - Top Right */}
            <Link
              to="/winter/skate"
              className="p-6 bg-orange-100/80 rounded-xl hover:bg-orange-200/80 transition-all cursor-pointer"
            >
              <h3 className="text-3xl font-bold text-orange-600 mb-3">
                Skate Skiing
              </h3>
              <p className="text-gray-700">
                Build aerobic capacity and pacing for longer distances
              </p>
            </Link>

            {/* Hills - Bottom Left */}
            <Link
              to="/winter/hills"
              className="p-6 bg-orange-100/80 rounded-xl hover:bg-orange-200/80 transition-all cursor-pointer"
            >
              <h3 className="text-3xl font-bold text-orange-600 mb-3">Hills</h3>
              <p className="text-gray-700">
                Uphill and downhill techniques for efficient climb and safe
                descent
              </p>
            </Link>

            {/* Waxing - Bottom Right */}
            <Link
              to="/winter/waxing"
              className="p-6 bg-orange-100/80 rounded-xl hover:bg-orange-200/80 transition-all cursor-pointer"
            >
              <h3 className="text-3xl font-bold text-orange-600 mb-3">
                Waxing
              </h3>
              <p className="text-gray-700">
                Basics of ski prep, waxing, and glide vs grip choices
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 z-20 p-8 bg-gradient-to-t from-white/60 to-transparent backdrop-blur-sm">
        <div className="flex justify-center gap-8 text-gray-700">
          <Link to="/" className="text-l hover:text-orange-600 transition">
            Home
          </Link>
          <Link
            to="/winter/classic"
            className="text-l hover:text-orange-600 transition"
          >
            Classic Skiing
          </Link>
          <Link
            to="/winter/skate"
            className="text-l hover:text-orange-600 transition"
          >
            Skate Skiing
          </Link>
          <Link
            to="/winter/hills"
            className="text-l hover:text-orange-600 transition"
          >
            Hills
          </Link>
          <Link
            to="/winter/waxing"
            className="text-l hover:text-orange-600 transition"
          >
            Waxing
          </Link>
        </div>
      </footer>
    </div>
  );
}
