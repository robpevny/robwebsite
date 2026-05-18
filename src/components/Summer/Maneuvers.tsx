import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";

export default function Maneuvers() {
  return (
    <div className="size-full relative overflow-hidden bg-gradient-to-br from-orange-50 to-yellow-100">
      <Helmet>
        <title>Maneuvers | Mountain Biking | Robert Pevny Coaching</title>
        <meta name="description" content="Front wheel lifts, rear wheel lifts, and the foundation of a bunnyhop. Learn the basic bike maneuvers that open up the trail and build a foundation for progression." />
      </Helmet>
      <header className="absolute top-0 left-0 right-0 z-20 p-8 bg-gradient-to-b from-white/60 to-transparent backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <Link
            to="/summer"
            className="text-gray-800 hover:text-orange-600 transition-colors"
          >
            <ArrowLeft size={32} />
          </Link>
          <h1 className="text-2xl sm:text-5xl text-gray-800 font-nunito">Maneuvers</h1>
        </div>
      </header>

      <div className="absolute inset-0 pt-32 pb-24 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 space-y-8">

          <div>
            <h2 className="text-2xl sm:text-4xl font-bold text-orange-600 mb-4">Basic Bike Maneuvers</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              There's a point in every rider's progression where the fundamentals are solid and a new question appears: <em>what can I actually do with this bike?</em> That's where maneuvers come in. Wheel lifts. Rear wheel lifts. Basic hops. These aren't tricks for the bike park crowd — they're practical tools that make you a more versatile, capable rider on any trail.
            </p>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">Skills vs. Maneuvers — Why It Matters</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Skills</strong> are the fundamental components of riding: balance, controls, terrain awareness, direction control, pressure control, timing. They're present in every single thing you do on a bike.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Maneuvers</strong> are specific moves that use those skills in particular combinations. A front wheel lift primarily draws on Pressure Control and Timing. A rear wheel lift requires Balance and Controls. A bunnyhop blends all of the above.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              This matters because if you're struggling with a maneuver, the answer is almost never "just try harder." The answer is usually to isolate which underlying skill needs work, develop it, and come back. Maneuver-based practice and skill-based practice feed each other — and together, they build a much more complete rider.
            </p>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">Front Wheel Lifts</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Lifting the front wheel is one of the most useful moves in mountain biking. Roll over obstacles more smoothly. Pop over roots and rocks instead of getting deflected. Set up for drops and jumps. Once you have it, you'll use it constantly without even thinking.
            </p>
            <div className="bg-white/50 rounded-xl p-5 space-y-3">
              <p className="text-lg text-gray-700 leading-relaxed"><strong>What's happening:</strong> You're shifting your weight and generating pressure through the pedals to unweight the front wheel, allowing it to rise off the ground.</p>
              <div>
                <p className="font-semibold text-gray-800 mb-2">Key movements:</p>
                <ul className="list-disc list-inside space-y-1 text-lg text-gray-700">
                  <li>Start from a centred, balanced position</li>
                  <li>Compress slightly (bending arms and legs), then drive through the pedals as you extend upward</li>
                  <li>Think of it as a push-down-to-lift-up motion — the pressure into the bike is what causes the front to rise</li>
                  <li>Heels down throughout to maintain control</li>
                  <li>Keep your eyes forward, not down at the wheel</li>
                </ul>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed"><strong>Common mistake:</strong> Pulling back on the bars with your arms instead of using your legs and body to generate the movement. The arms guide, the legs drive.</p>
              <p className="text-lg text-gray-700 leading-relaxed"><strong>Where to practice:</strong> Flat, smooth open ground first. Use a small stick or crack in the pavement as a target — roll toward it and lift just before you reach it. Build timing from there.</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">Rear Wheel Lifts</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Where front wheel lifts are about pressure and drive, rear wheel lifts are about unweighting — getting light on the back of the bike and allowing the rear wheel to come up.
            </p>
            <div className="bg-white/50 rounded-xl p-5 space-y-3">
              <p className="text-lg text-gray-700 leading-relaxed"><strong>What's happening:</strong> By shifting your weight forward and compressing the front of the bike, you release pressure on the rear wheel, allowing it to lift.</p>
              <div>
                <p className="font-semibold text-gray-800 mb-2">Key movements:</p>
                <ul className="list-disc list-inside space-y-1 text-lg text-gray-700">
                  <li>Compress the front of the bike by pushing into the bars and bending your arms</li>
                  <li>Simultaneously lighten your feet — think of your heels floating upward, not your knees driving into your chest</li>
                  <li>Your hips shift forward over the bars as the rear comes up</li>
                  <li>Stay balanced — control how high it goes with how far you commit forward</li>
                </ul>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed"><strong>What this builds:</strong> Rear wheel lifts are essential groundwork for bunnyhops, manuals, and navigating tight switchbacks. They also sharpen your sensitivity to weight distribution, which feeds directly back into your overall balance skills.</p>
              <p className="text-lg text-gray-700 leading-relaxed"><strong>Common mistake:</strong> Trying to lift the rear wheel with your legs instead of your body weight shift. This usually results in a small, jerky movement rather than a fluid, controlled lift.</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">Putting It Together: The Foundation of a Bunnyhop</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Once front and rear wheel lifts are feeling consistent, you have the raw ingredients of a bunnyhop — the ability to lift both wheels off the ground in sequence to clear an obstacle.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              A full bunnyhop is its own progression, but even at the basic stage, understanding that it's a <em>sequence</em> of movements rather than one simultaneous action is the critical insight. Front first. Rear follows. Timing is everything. Don't rush to the full thing — spend real time on each component lift individually. The more consistent each movement is on its own, the more naturally they'll flow together.
            </p>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">How to Learn Maneuvers Safely</h3>
            <div className="space-y-4">
              <div className="bg-white/50 rounded-xl p-5">
                <p className="font-semibold text-gray-800 mb-2">Use open areas</p>
                <p className="text-lg text-gray-700 leading-relaxed">Grass fields, carparks, skills areas — anywhere flat and obstacle-free is the right place to learn these movements. A controlled environment removes the pressure of navigation and lets you focus on the movement itself.</p>
              </div>
              <div className="bg-white/50 rounded-xl p-5">
                <p className="font-semibold text-gray-800 mb-2">Start slow</p>
                <p className="text-lg text-gray-700 leading-relaxed">Speed changes the timing of everything. Learning these movements at walking pace lets you feel what's happening and build the correct pattern. Speed comes later, once the movement is repeatable.</p>
              </div>
              <div className="bg-white/50 rounded-xl p-5">
                <p className="font-semibold text-gray-800 mb-2">Break it into steps</p>
                <p className="text-lg text-gray-700 leading-relaxed">Struggling? Go back a step. If the full wheel lift isn't working, go back to just the compression. If the compression feels off, go back to just your body position. There's always a smaller building block beneath the thing that's not clicking.</p>
              </div>
              <div className="bg-white/50 rounded-xl p-5">
                <p className="font-semibold text-gray-800 mb-2">Repetition with purpose</p>
                <p className="text-lg text-gray-700 leading-relaxed">Doing a move 50 times doesn't automatically make you better at it. Doing it with a specific focus — <em>this time I'm going to drive through my heels, this time I'm going to look further ahead</em> — is what actually creates improvement. Practice makes permanent; purposeful practice makes progress.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">What These Moves Unlock</h3>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
              <li><strong>More line options.</strong> You can roll over things you'd previously have to go around, opening up the trail in front of you.</li>
              <li><strong>Better flow.</strong> Instead of reacting to every obstacle, you start anticipating and navigating proactively.</li>
              <li><strong>More confidence.</strong> There's something about knowing you <em>can</em> do something that makes the trail feel less threatening, even when you're not actively doing it.</li>
              <li><strong>A foundation for progression.</strong> Jumps, drops, gaps — they all have roots in the same pressure control and timing skills you're building with basic maneuvers.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">What to Work On</h3>
            <div className="space-y-4">
              <div className="bg-white/50 rounded-xl p-5">
                <p className="font-semibold text-gray-800 mb-2">Newer to riding</p>
                <p className="text-lg text-gray-700 leading-relaxed">Start with the front wheel lift before anything else. Get 10 consistent reps on flat ground where the wheel comes up cleanly and you land in control. That's the benchmark. Don't move on until it's repeatable.</p>
              </div>
              <div className="bg-white/50 rounded-xl p-5">
                <p className="font-semibold text-gray-800 mb-2">Intermediate rider</p>
                <p className="text-lg text-gray-700 leading-relaxed">Work on rear wheel lifts and start experimenting with sequencing. Can you do a front lift, reset, then a rear lift? Eventually, can you do them back to back with minimal pause? That sequencing is what a bunnyhop becomes.</p>
              </div>
              <div className="bg-white/50 rounded-xl p-5">
                <p className="font-semibold text-gray-800 mb-2">Experienced rider</p>
                <p className="text-lg text-gray-700 leading-relaxed">Focus on timing and terrain application. Take the moves you have and practice them at different speeds, over different obstacles, approaching from different angles. Adaptability is the final layer of any maneuver — being able to use it when and where the trail demands it, not just in controlled conditions.</p>
              </div>
            </div>
          </div>

          <p className="text-lg italic text-gray-600 border-l-4 border-orange-400 pl-4">
            Maneuvers aren't the destination — they're the vocabulary. The more words you have, the more fluently you can speak the language of the trail.
          </p>

        </div>
      </div>
    </div>
  );
}
