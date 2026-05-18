import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";

export default function Balance() {
  return (
    <div className="size-full relative overflow-hidden bg-gradient-to-br from-orange-50 to-yellow-100">
      <Helmet>
        <title>Balance | Mountain Biking | Robert Pevny Coaching</title>
        <meta name="description" content="Body position is the foundation every other skill is built on. Learn neutral stance, ready stance, and how staying centred makes everything else better." />
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
        <div className="max-w-3xl mx-auto px-8 space-y-8">

          <div>
            <h2 className="text-4xl font-bold text-orange-600 mb-4">Body Position</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              You can have the best bike on the mountain. Brand new components. Perfect suspension setup. But if your body position is off, none of it matters. Balance is the foundation every other skill is built on — and it's the one skill that pays dividends across <em>every</em> type of riding you'll ever do.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">What Is Balance, Really?</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Balance on a mountain bike is actually two things working together.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Stability</strong> is your ability to resist forces. The terrain is constantly pushing and pulling at you — roots, rocks, compressions, corners. A rider with good stability absorbs those forces without getting thrown around. It comes down to three factors: your position on the bike, your physical strength, and your efficiency (how well you conserve energy to stay strong throughout a ride).
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Balance</strong> is your ability to manage instability through movement. No rider is ever 100% stable — the trail won't allow it. What separates confident riders from those white-knuckling it through rough sections is their ability to move, react, and recover. That's range of movement (ROM), and it's trainable. Think of it this way: stability is your armour, balance is your agility. You need both.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">The Two Key Positions</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Neutral Stance</strong> is your default — a taller, more relaxed position that conserves energy and keeps your bones stacked efficiently. It's where you ride when the trail is straightforward and demands are lower. Less tiring, but it gives you less room to react.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Ready Stance</strong> is lower, more athletic, and loaded with range of movement. Arms bent, hips dropped, weight centred between both wheels. This is the position you move into when the trail demands attention — steep rollouts, rough terrain, anything where you need to react fast.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The goal isn't to ride permanently in either position. The best riders move <em>between</em> them constantly, conserving energy on the easier stuff and getting low and ready when it counts.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Centred Is Everything</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              The single most important concept in body position is staying centred. Chin roughly over the stem. Hips over the bottom bracket. Weight balanced across both wheels. When your weight shifts too far back, you lose front wheel traction and braking power. Too far forward and you risk going over the bars. Centred keeps both tires working, keeps your options open, and keeps you in <em>driving mode</em> — actively controlling the bike — rather than recovery mode, where you're just trying not to fall off.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Why This Makes Everything Else Better</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">Improve your balance and body position and watch what happens to the rest of your riding:</p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-4">
              <li>Corners become more confident — you have the stability to lean the bike properly</li>
              <li>Descents feel less scary — you're reacting to the trail instead of bracing against it</li>
              <li>Jumps and drops become more consistent — your position gives the bike room to move beneath you</li>
              <li>Technical climbs get easier — a centred position keeps rear wheel traction where you need it</li>
              <li>Any bike, any trail, any discipline — the same fundamentals apply</li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed">
              This is why body position is the first skill we work on, regardless of your level. It's not basic. It's foundational.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">What to Work On</h3>
            <div className="space-y-4">
              <div className="bg-white/50 rounded-xl p-5">
                <p className="font-semibold text-gray-800 mb-2">Newer to riding</p>
                <p className="text-lg text-gray-700 leading-relaxed">Focus on finding a centred position before you even hit the trail. Practice getting into Ready Stance and holding it. Notice how it feels different from standing tall. Get comfortable being lower.</p>
              </div>
              <div className="bg-white/50 rounded-xl p-5">
                <p className="font-semibold text-gray-800 mb-2">Intermediate rider</p>
                <p className="text-lg text-gray-700 leading-relaxed">Work on moving between positions dynamically. The skill isn't finding the right stance — it's knowing when to shift and how quickly. Start noticing where on the trail you tighten up or lean back, and ask yourself why.</p>
              </div>
              <div className="bg-white/50 rounded-xl p-5">
                <p className="font-semibold text-gray-800 mb-2">Experienced rider</p>
                <p className="text-lg text-gray-700 leading-relaxed">Explore your range of movement. How far can you move the bike beneath you while staying in control? Manuals, drops, and off-camber sections all demand a large ROM. The bigger your range, the more options you have.</p>
              </div>
            </div>
          </div>

          <p className="text-lg italic text-gray-600 border-l-4 border-orange-400 pl-4">
            Balance is never fully mastered — it's always being refined. Every ride is a chance to get a little more dialled.
          </p>

        </div>
      </div>
    </div>
  );
}
