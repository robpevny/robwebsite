import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";

export default function Classic() {
  return (
    <div className="size-full relative overflow-hidden bg-gradient-to-br from-orange-50 to-yellow-100">
      <Helmet>
        <title>Classic Skiing | Cross-Country Skiing | Robert Pevny Coaching</title>
        <meta name="description" content="Master classic cross-country skiing technique and endurance training with Robert Pevny." />
      </Helmet>
      <header className="absolute top-0 left-0 right-0 z-20 p-8 bg-gradient-to-b from-white/60 to-transparent backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <Link
            to="/winter"
            className="text-gray-800 hover:text-orange-600 transition-colors"
          >
            <ArrowLeft size={32} />
          </Link>
          <h1 className="text-5xl text-gray-800 font-nunito">Classic Skiing</h1>
        </div>
      </header>

      <div className="absolute inset-0 pt-32 pb-24 overflow-y-auto">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-orange-600 mb-6">
            Endurance Training
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            luctus urna sed urna ultricies ac tempor dui sagittis.
          </p>
          <div className="space-y-4 text-lg text-gray-700">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              ultrices nulla quis nibh.
            </p>
            <p>
              Quisque a lectus. Donec consectetuer ligula vulputate sem
              tristique cursus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
