import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";

export default function Steeps() {
  return (
    <div className="size-full relative overflow-hidden bg-gradient-to-br from-orange-50 to-yellow-100">
      <Helmet>
        <title>Steeps | Mountain Biking | Robert Pevny Coaching</title>
        <meta name="description" content="Steep terrain is conquered with technique, not courage. Learn gradual, consistent, modulated braking and selective brake placement to ride steeps with control." />
      </Helmet>
      <header className="absolute top-0 left-0 right-0 z-20 p-8 bg-gradient-to-b from-white/60 to-transparent backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <Link
            to="/summer"
            className="text-gray-800 hover:text-orange-600 transition-colors"
          >
            <ArrowLeft size={32} />
          </Link>
          <h1 className="text-5xl text-gray-800 font-nunito">Steeps</h1>
        </div>
      </header>

      <div className="absolute inset-0 pt-32 pb-24 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-8 space-y-8">

          <div>
            <h2 className="text-4xl font-bold text-orange-600 mb-4">Using Your Brakes</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Steeps have a way of separating riders who feel in control from those who are just surviving. The pitch increases, speed builds fast, and suddenly everything feels harder to manage. The difference between these two experiences almost always comes down to one thing: how well you use your brakes. Not whether you use them. <em>How.</em>
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">What Braking Is Actually About</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Most riders think of braking as "slowing down." But on steep terrain, braking is about something bigger: <strong>speed control</strong> — which includes slowing down, yes, but also <em>not speeding up</em> in the first place, and maintaining a consistent, manageable pace through technical sections. When you're in control of your speed, everything else gets easier. Your position improves. Your line choice opens up. Your confidence goes up. Braking well is the unlock to riding steeps comfortably.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">How to Apply the Brakes</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">There are three words that describe good braking technique:</p>
            <div className="space-y-4">
              <div className="bg-white/50 rounded-xl p-5">
                <p className="font-semibold text-gray-800 mb-2">Gradual</p>
                <p className="text-lg text-gray-700 leading-relaxed">Never grab the brakes suddenly. Apply pressure progressively — light at first, then increase until you've reached the speed you want. Think of it like a dimmer switch, not a light switch. Modern disc brakes are powerful; a light squeeze goes a long way.</p>
              </div>
              <div className="bg-white/50 rounded-xl p-5">
                <p className="font-semibold text-gray-800 mb-2">Consistent</p>
                <p className="text-lg text-gray-700 leading-relaxed">Once you've found the right braking pressure for a section, hold it steady. Erratic on-off braking upsets the bike, reduces traction, and makes the ride feel chaotic. Smooth, consistent pressure keeps everything settled.</p>
              </div>
              <div className="bg-white/50 rounded-xl p-5">
                <p className="font-semibold text-gray-800 mb-2">Modulate</p>
                <p className="text-lg text-gray-700 leading-relaxed">The trail changes constantly. Adjust your braking pressure to match — ease off through rough sections where you need the wheels to roll freely, increase it on smoother ground where you can safely scrub more speed. This ongoing adjustment is called modulation, and it's what makes braking feel natural rather than mechanical.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Front Brake vs. Rear Brake</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>The front brake is your power brake.</strong> As you slow down, your weight naturally shifts forward, pressing the front wheel harder into the ground. More weight = more traction = more stopping power. The front brake can slow you down significantly and is your go-to for genuine speed reduction on steeps.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>The rear brake is your control brake.</strong> It's less powerful — as you brake, weight moves away from the rear wheel, reducing traction. But it's excellent for managing pace without skidding, holding a consistent speed through corners, and complementing the front brake in a balanced way.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Most of the time you'll use both, but the ratio shifts depending on how fast you need to slow down. Emergency stop? More front. Cruising through a steep corner to hold your pace? More rear. Learning to feel this balance is one of the most valuable skills you can develop.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Body Position When Braking</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Heavy braking changes where your weight wants to go — forward, toward the bars. Left unchecked, this tips you toward an over-the-bars situation and lifts the rear wheel off the ground. The counter is to <strong>brace and get low.</strong> Drop your heels, bend your arms, and resist the forward shift with your whole body. Your hips move slightly back, but not so far that you lose weight on the front wheel — you need that traction. A strong, low, centred position under braking is what keeps both wheels working and keeps you in control. This is why body position and braking are inseparable skills. One makes the other possible.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Selective Braking</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Here's the key insight that changes how riders approach steeps: <strong>braking has costs.</strong> When the brakes are on, suspension works less effectively, traction can reduce (especially in corners), and your arms and legs tighten up. On rough terrain, braking can actually make things harder to navigate.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The solution is <strong>selective braking</strong> — choosing <em>where</em> on the trail to brake, and where to let the bike roll freely. Smoother, straighter sections are your braking zones. Scrub speed there, before the technical stuff. Then release the brakes through the rough sections and corners, letting the wheels roll over obstacles freely and the suspension do its job.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              And one firm rule: <strong>no braking on jumps or drops.</strong> Ever. Braking mid-air or at the lip changes everything about how the bike behaves. Pick your speed before, commit, and ride it out.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">What to Work On</h3>
            <div className="space-y-4">
              <div className="bg-white/50 rounded-xl p-5">
                <p className="font-semibold text-gray-800 mb-2">Newer to riding</p>
                <p className="text-lg text-gray-700 leading-relaxed">Practice the gradual/consistent/modulate sequence on mellow terrain first. Get comfortable with how much power your front brake actually has. Many beginners are underusing it out of fear — a little progressive practice changes that fast.</p>
              </div>
              <div className="bg-white/50 rounded-xl p-5">
                <p className="font-semibold text-gray-800 mb-2">Intermediate rider</p>
                <p className="text-lg text-gray-700 leading-relaxed">Work on selective braking. Pick a trail you know well and consciously identify your braking zones. Where are you currently braking? Where could you release earlier and let the bike roll? The answer usually improves your flow significantly.</p>
              </div>
              <div className="bg-white/50 rounded-xl p-5">
                <p className="font-semibold text-gray-800 mb-2">Experienced rider</p>
                <p className="text-lg text-gray-700 leading-relaxed">Focus on braking under body position pressure. On steep, rough terrain, can you maintain a strong, centred position while modulating both brakes independently? That coordination under pressure is where the real refinement lives.</p>
              </div>
            </div>
          </div>

          <p className="text-lg italic text-gray-600 border-l-4 border-orange-400 pl-4">
            Steep trails aren't conquered with courage alone. They're conquered with technique — and great braking technique is where it starts.
          </p>

        </div>
      </div>
    </div>
  );
}
