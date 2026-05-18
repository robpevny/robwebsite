import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";
import robPhoto from "../../assets/rob.jpg";

export default function About() {
  return (
    <div className="size-full relative overflow-hidden bg-gradient-to-br from-stone-50 to-stone-200">
      <Helmet>
        <title>About Me | Robert Pevny Coaching</title>
        <meta name="description" content="Rob Pevny — Level 2 PMBIA mountain bike coach and Level 2 CANSI XC ski coach based in Canmore, Alberta." />
      </Helmet>
      <header className="absolute top-0 left-0 right-0 z-20 p-8 bg-gradient-to-b from-white/60 to-transparent backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="text-gray-800 hover:text-orange-600 transition-colors"
          >
            <ArrowLeft size={32} />
          </Link>
          <h1 className="text-2xl sm:text-5xl text-gray-800 font-nunito">About Me</h1>
        </div>
      </header>

      <div className="absolute inset-0 pt-32 pb-24 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 space-y-8">

          <img
            src={robPhoto}
            alt="Rob Pevny"
            className="w-full max-h-[280px] sm:max-h-[650px] object-cover rounded-2xl shadow-md"
            style={{ objectPosition: "center calc(50% + 40px)" }}
          />

          <div className="space-y-2">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-800">Rob Pevny</h2>
            <p className="text-lg text-gray-600">Canmore, Alberta &mdash; originally from the Czech Republic</p>
            <div className="flex flex-col gap-1 pt-2">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-orange-700 bg-orange-100 rounded-full px-3 py-1 w-fit">
                Level 2 PMBIA Mountain Bike Coach
              </span>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full px-3 py-1 w-fit">
                Level 2 CANSI Cross-Country Ski Coach
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              Originally from the Czech Republic, I moved to Canada in 2018 — and that's when everything changed. Mountain biking and cross-country skiing weren't part of my life before Canmore. They became it after. There's something about picking up a sport as an adult, in a place this beautiful, that makes you pay attention to the learning process in a way you might not if you'd grown up doing it.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Coaching came naturally out of a passion for helping people get more from their time outside. Whether someone is rolling their first singletrack descent or trying to unlock a more efficient skate technique, the process is the same: break it down, build it back up, and make it stick. I hold a Level 2 certification with PMBIA for mountain biking and a Level 2 certification with CANSI for cross-country skiing — both grounded in sound technical frameworks that translate directly into better riding and skiing.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My sessions are small and focused. I work with individuals and small groups, and I tailor every lesson to where you actually are — not where a generic progression chart says you should be. If you want to get more confident on technical terrain, develop real skills rather than just mileage, and actually understand <em>why</em> something works, that's what I'm here for.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Canmore is a special place to learn. The trail network and ski tracks around town offer everything from mellow beginner terrain to seriously challenging conditions — all within minutes of each other. Whatever your goal, the playground is here. Let's make the most of it.
            </p>
          </div>

          <div className="bg-white/50 rounded-2xl p-6 space-y-3">
            <h3 className="text-xl font-bold text-gray-800">Credentials</h3>
            <ul className="space-y-2 text-lg text-gray-700">
              <li>Level 2 PMBIA — Professional Mountain Bike Instructors' Association</li>
              <li>Level 2 CANSI — Canadian Ski Instructors' Alliance (Cross-Country)</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
