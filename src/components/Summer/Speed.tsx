import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";

export default function Speed() {
  return (
    <div className="size-full relative overflow-hidden bg-gradient-to-br from-orange-50 to-yellow-100">
      <Helmet>
        <title>Speed | Mountain Biking | Robert Pevny Coaching</title>
        <meta name="description" content="Cornering is where riding gets addictive. Learn steering, leaning, and rotation to carry more speed and control through every corner." />
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
        <div className="max-w-3xl mx-auto px-8 space-y-8">

          <div>
            <h2 className="text-4xl font-bold text-orange-600 mb-4">Cornering</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Cornering is where riding gets addictive. Rail a berm perfectly, carry speed out of a switchback, link turns together with real flow — it's one of the best feelings in mountain biking. It's also one of the most skill-dependent parts of riding, which means it's one of the best areas to improve. The good news: cornering isn't just about going faster. It's about having more control at whatever speed you're riding. Get the fundamentals right and the speed will come naturally.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">What's Actually Happening in a Corner</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              When you ride through a corner, two main forces are acting on you. <strong>Gravity</strong> is pulling you straight down. <strong>Centrifugal force</strong> is pushing you to the outside of the turn. The faster you go and the tighter the corner, the stronger that outward push feels. To stay balanced through the corner, you need to lean into it — angling your body against that outward force so you stay centred and in control. Too little lean and you get pushed wide. Too much lean at slow speeds and you tip over. Getting that lean angle right for your speed and the corner radius is the core challenge of cornering.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">The Three Components of Direction Control</h3>
            <div className="space-y-4">
              <div className="bg-white/50 rounded-xl p-5">
                <p className="font-semibold text-gray-800 mb-2">Steering</p>
                <p className="text-lg text-gray-700 leading-relaxed">The starting point. At slower speeds, handlebar steering does more of the work. At higher speeds, the bars do less — but they're still essential for initiating turns and staying on your intended line. Steering is what kicks off the movement patterns that follow.</p>
              </div>
              <div className="bg-white/50 rounded-xl p-5">
                <p className="font-semibold text-gray-800 mb-2">Leaning</p>
                <p className="text-lg text-gray-700 leading-relaxed mb-3">Where the real cornering happens. There are two ways to lean.</p>
                <p className="text-lg text-gray-700 leading-relaxed mb-2"><em>Inclination</em> — leaning your body and bike together into the turn. This is the fundamental movement in most flowing and downhill corners. Your whole body angles into the corner as a unit, and when timed correctly, it keeps you balanced against the forces acting on you.</p>
                <p className="text-lg text-gray-700 leading-relaxed"><em>Angulation</em> — leaning the bike <em>more</em> than your body, creating separation between your torso and the bike. This is an advanced technique with huge benefits: more stability, more adjustability, and more traction. Most good cornering involves a blend of both.</p>
              </div>
              <div className="bg-white/50 rounded-xl p-5">
                <p className="font-semibold text-gray-800 mb-2">Rotation</p>
                <p className="text-lg text-gray-700 leading-relaxed">By rotating your hips and knees toward the inside of the turn — "pointing your belly button into the corner" — you help drive the bike through the turn. For beginner and intermediate riders this creates a more stable, centred position. For advanced riders, it becomes a powerful tool to actively direct the bike through tighter corners and berms.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Flat Corners vs. Berms</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Flat corners</strong> are the most common type on natural trails, and the most demanding. There's no bank to support the tires, so centrifugal force is constantly trying to push them sideways. Angulation becomes crucial here — leaning the bike underneath you keeps your weight over the contact patches and gives the tires the best chance of gripping.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Berms</strong> are banked corners — the trail is angled to support you through the turn. The banking provides more natural grip and support, which means you can lean more, carry more speed, and generally feel a lot more confident. Even in berms, though, some angulation and bike-body separation is nearly always beneficial. The physics don't disappear just because the trail is banked.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Look Where You're Going</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Terrain awareness is inseparable from cornering. The earlier you can see the exit of a corner, the sooner you can plan your line, the smoother your turn will be.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Scan early.</strong> As you approach a corner, your eyes should already be moving through it — looking for the apex, identifying your exit, reading the surface. Don't fixate on what's immediately in front of your wheel.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Line choice matters.</strong> The smooth line minimises obstacles. The direct line is the shortest path. The efficient (racing) line is typically a blend — entering wide, hitting the apex, and exiting wide again to maximise control and carry speed. Which line is right depends on the corner, your speed, and your goal.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Speed as a Teaching Tool</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Here's something counterintuitive: sometimes a little more speed actually makes cornering easier. Slow speeds mean less centrifugal force, which means less to lean against — which makes balancing through the corner harder. Finding the right speed for a given corner is part of the skill. That said, speed should always be introduced <em>gradually</em> and only after technique is dialled. Faster speeds change the timing of everything. What worked at a slow pace needs to be recalibrated when you increase your speed — lean angles, entry points, exit lines all shift. Increase one variable at a time, and technique always comes first.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">What to Work On</h3>
            <div className="space-y-4">
              <div className="bg-white/50 rounded-xl p-5">
                <p className="font-semibold text-gray-800 mb-2">Newer to riding</p>
                <p className="text-lg text-gray-700 leading-relaxed">Focus on looking through the corner — eyes to the exit before you get there. Practice braking before the corner, not during. These two habits alone will dramatically improve your cornering.</p>
              </div>
              <div className="bg-white/50 rounded-xl p-5">
                <p className="font-semibold text-gray-800 mb-2">Intermediate rider</p>
                <p className="text-lg text-gray-700 leading-relaxed">Work on angulation. In flat corners especially, consciously try to lean the bike beneath you while keeping your upper body more upright. It will feel strange at first — lean into that feeling, it's where the grip lives.</p>
              </div>
              <div className="bg-white/50 rounded-xl p-5">
                <p className="font-semibold text-gray-800 mb-2">Experienced rider</p>
                <p className="text-lg text-gray-700 leading-relaxed">Experiment with rotation. In tighter corners and berms, focus on driving your hips and knees into the turn. Notice how it changes the feel — that sense of actively directing the bike rather than just leaning through.</p>
              </div>
            </div>
          </div>

          <p className="text-lg italic text-gray-600 border-l-4 border-orange-400 pl-4">
            Every corner is a puzzle. The more tools you have, the more elegantly you can solve it — and the more speed you carry out the other side.
          </p>

        </div>
      </div>
    </div>
  );
}
