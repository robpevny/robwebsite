import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";

export default function Summer() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-orange-50 to-yellow-100">
      <Helmet>
        <title>Mountain Biking | Robert Pevny Coaching</title>
        <meta name="description" content="Learn mountain biking fundamentals — balance, speed, steeps, and maneuvers — with expert coaching from Robert Pevny." />
      </Helmet>
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20 p-4 sm:p-8 bg-gradient-to-b from-white/60 to-transparent backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="text-gray-800 hover:text-orange-600 transition-colors"
          >
            <ArrowLeft size={32} />
          </Link>
          <div className="text-lg sm:text-3xl flex-1 text-center">
            Let's learn the fundamentals of mountain biking!
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="absolute inset-0 pt-24 sm:pt-32 pb-24 overflow-y-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          {/* Skills Square Box */}
          <div className="w-full aspect-square bg-white/60 backdrop-blur-sm rounded-2xl shadow-2xl grid grid-cols-2 grid-rows-2 gap-2 sm:gap-4 p-2 sm:p-4">
            {/* Balance - Top Left */}
            <Link
              to="/summer/balance"
              className="p-3 sm:p-6 bg-orange-100/80 rounded-xl hover:bg-orange-200/80 transition-all cursor-pointer"
            >
              <h3 className="text-xl sm:text-3xl font-bold text-orange-600 mb-1 sm:mb-3">
                Balance
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                Master body positioning and weight distribution on technical terrain
              </p>
            </Link>

            {/* Speed - Top Right */}
            <Link
              to="/summer/speed"
              className="p-3 sm:p-6 bg-orange-100/80 rounded-xl hover:bg-orange-200/80 transition-all cursor-pointer"
            >
              <h3 className="text-xl sm:text-3xl font-bold text-orange-600 mb-1 sm:mb-3">Speed</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Build confidence to carry momentum through corners and features
              </p>
            </Link>

            {/* Steeps - Bottom Left */}
            <Link
              to="/summer/steeps"
              className="p-3 sm:p-6 bg-orange-100/80 rounded-xl hover:bg-orange-200/80 transition-all cursor-pointer"
            >
              <h3 className="text-xl sm:text-3xl font-bold text-orange-600 mb-1 sm:mb-3">
                Steeps
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                Conquer challenging descents with proper technique and control
              </p>
            </Link>

            {/* Maneuvers - Bottom Right */}
            <Link
              to="/summer/maneuvers"
              className="p-3 sm:p-6 bg-orange-100/80 rounded-xl hover:bg-orange-200/80 transition-all cursor-pointer"
            >
              <h3 className="text-xl sm:text-3xl font-bold text-orange-600 mb-1 sm:mb-3">
                Maneuvers
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                Learn jumps, drops, and advanced skills to elevate your riding
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 z-20 p-4 sm:p-8 bg-gradient-to-t from-white/60 to-transparent backdrop-blur-sm">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-8 text-gray-700">
          <Link
            to="/"
            className="text-l hover:text-orange-600 transition hover:drop-shadow-[0_0_6px_rgba(234,88,12,0.5)]"
          >
            Home
          </Link>
          <Link
            to="/summer/balance"
            className="text-l hover:text-orange-600 transition hover:drop-shadow-[0_0_6px_rgba(234,88,12,0.5)]"
          >
            Balance
          </Link>
          <Link
            to="/summer/speed"
            className="text-l hover:text-orange-600 transition hover:drop-shadow-[0_0_6px_rgba(234,88,12,0.5)]"
          >
            Speed
          </Link>
          <Link
            to="/summer/steeps"
            className="text-l hover:text-orange-600 transition hover:drop-shadow-[0_0_6px_rgba(234,88,12,0.5)]"
          >
            Steeps
          </Link>
          <Link
            to="/summer/maneuvers"
            className="text-l hover:text-orange-600 transition hover:drop-shadow-[0_0_6px_rgba(234,88,12,0.5)]"
          >
            Maneuvers
          </Link>
        </div>
      </footer>
    </div>
  );
}
