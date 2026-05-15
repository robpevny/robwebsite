import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";

export default function Speed() {
  return (
    <div className="size-full relative overflow-hidden bg-gradient-to-br from-orange-50 to-yellow-100">
      <Helmet>
        <title>Speed | Mountain Biking | Robert Pevny Coaching</title>
        <meta name="description" content="Build confidence to carry momentum through corners and technical mountain bike features." />
      </Helmet>
      <header className="absolute top-0 left-0 right-0 z-20 p-8 bg-gradient-to-b from-white/60 to-transparent backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <Link
            to="/summer"
            className="text-gray-800 hover:text-orange-600 transition-colors"
          >
            <ArrowLeft size={32} />
          </Link>
          <h1 className="text-5xl text-gray-800 font-nunito">Speed</h1>
        </div>
      </header>

      <div className="absolute inset-0 pt-32 pb-24 overflow-y-auto">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-orange-600 mb-6">
            Build Your Speed
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Develop confidence to carry momentum through corners and technical
            features.
          </p>
          <div className="space-y-4 text-lg text-gray-700">
            <p>
              Speed isn't about going fast everywhere—it's about knowing when
              and how to maintain momentum efficiently.
            </p>
            <p>
              Learn to pump terrain, choose the right lines, and trust your
              skills to carry speed where it counts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
