import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";

export default function Maneuvers() {
  return (
    <div className="size-full relative overflow-hidden bg-gradient-to-br from-orange-50 to-yellow-100">
      <Helmet>
        <title>Maneuvers | Mountain Biking | Robert Pevny Coaching</title>
        <meta name="description" content="Learn jumps, drops, and advanced mountain biking skills to elevate your riding." />
      </Helmet>
      <header className="absolute top-0 left-0 right-0 z-20 p-8 bg-gradient-to-b from-white/60 to-transparent backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <Link
            to="/summer"
            className="text-gray-800 hover:text-orange-600 transition-colors"
          >
            <ArrowLeft size={32} />
          </Link>
          <h1 className="text-5xl text-gray-800 font-nunito">Maneuvers</h1>
        </div>
      </header>

      <div className="absolute inset-0 pt-32 pb-24 overflow-y-auto">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-orange-600 mb-6">
            Advanced Maneuvers
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Learn jumps, drops, and advanced skills to elevate your riding.
          </p>
          <div className="space-y-4 text-lg text-gray-700">
            <p>
              Jumps, drops, and technical maneuvers are what make mountain
              biking truly exciting.
            </p>
            <p>
              Start small, master the fundamentals of timing and body movement,
              then gradually progress to bigger features as your confidence
              grows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
