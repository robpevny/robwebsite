import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";

export default function Balance() {
  return (
    <div className="size-full relative overflow-hidden bg-gradient-to-br from-orange-50 to-yellow-100">
      <Helmet>
        <title>Balance | Mountain Biking | Robert Pevny Coaching</title>
        <meta name="description" content="Master body positioning and weight distribution for technical mountain bike terrain." />
      </Helmet>
      <header className="absolute top-0 left-0 right-0 z-20 p-8 bg-gradient-to-b from-white/60 to-transparent backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <Link
            to="/summer"
            className="text-gray-800 hover:text-orange-600 transition-colors"
          >
            <ArrowLeft size={32} />
          </Link>
          <h1 className="text-5xl text-gray-800 font-nunito">Balance</h1>
        </div>
      </header>

      <div className="absolute inset-0 pt-32 pb-24 overflow-y-auto">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-orange-600 mb-6">
            Master Your Balance
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Learn body positioning and weight distribution techniques for
            technical terrain.
          </p>
          <div className="space-y-4 text-lg text-gray-700">
            <p>
              Balance is the foundation of mountain biking. Proper body
              positioning allows you to navigate obstacles with confidence and
              control.
            </p>
            <p>
              Focus on keeping your weight centered over the bike, bending your
              knees and elbows, and staying loose to let the bike move beneath
              you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
