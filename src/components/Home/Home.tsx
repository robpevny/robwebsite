import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import summerBike from "../../assets/summer.jpg";
import winterSki from "../../assets/winter.jpg";

export default function Home() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
      <Helmet>
        <title>Robert Pevny | Mountain Biking &amp; Skiing Coach</title>
        <meta name="description" content="Personalized coaching in mountain biking and cross-country skiing. Book a session with Robert Pevny." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Robert Pevny",
          "jobTitle": "Sports Coach",
          "description": "Personalized coaching in mountain biking and cross-country skiing.",
          "url": "https://learnwithrob.net",
          "sameAs": []
        })}</script>
      </Helmet>
      <header className="absolute top-0 left-0 right-0 z-20 p-4 sm:p-8 bg-gradient-to-b from-black/40 to-transparent">
        <h1 className="text-lg sm:text-3xl text-white text-center">Learn MTB and XC skiing with Rob</h1>
      </header>

      {/* Mobile: horizontal split */}
      <div className="absolute inset-0 flex flex-col sm:hidden">
        <Link to="/summer" className="flex-1 relative overflow-hidden group">
          <div
            className="summer-mobile-bg absolute inset-0 bg-cover transition-all duration-500 group-hover:brightness-110"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 200, 100, 0.2), rgba(255, 200, 100, 0.1)), url('${summerBike}')`,
              backgroundPosition: "50% 60%",
            }}
          />
          <div className="absolute bottom-6 right-6 text-right">
            <h2 className="text-xl font-bold text-white drop-shadow-lg">Summer</h2>
            <p className="text-sm text-white/90 mt-1 drop-shadow-md">Adventure awaits</p>
          </div>
        </Link>

        <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-white/80 shadow-2xl z-10" />

        <Link to="/winter" className="flex-1 relative overflow-hidden group">
          <div
            className="absolute inset-0 bg-cover transition-all duration-500 group-hover:brightness-110"
            style={{
              backgroundImage: `linear-gradient(rgba(100, 150, 255, 0.2), rgba(100, 150, 255, 0.1)), url('${winterSki}')`,
              backgroundPosition: "50% 40%",
            }}
          />
          <div className="absolute top-6 left-6">
            <h2 className="text-xl font-bold text-white drop-shadow-lg">Winter</h2>
            <p className="text-sm text-white/90 mt-1 drop-shadow-md">Embrace the cold</p>
          </div>
        </Link>
      </div>

      {/* Desktop: diagonal split */}
      <div className="absolute inset-0 hidden sm:block">
        <Link to="/summer">
          <div
            className="summer-diagonal-bg absolute inset-0 bg-cover transition-all duration-500 hover:brightness-110 hover:scale-[1.02] cursor-pointer"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 200, 100, 0.2), rgba(255, 200, 100, 0.1)), url('${summerBike}')`,
              backgroundPosition: "calc(50% - 20px) calc(50% - 50px)",
              clipPath: "polygon(0 0, 100% 0, 0 100%)",
            }}
          >
            <div className="absolute top-40 left-8 -translate-y-1/2">
              <h2 className="sm:text-3xl md:text-5xl font-bold text-white drop-shadow-lg">Summer</h2>
              <p className="sm:text-base md:text-xl text-white/90 mt-2 drop-shadow-md">Adventure awaits</p>
            </div>
          </div>
        </Link>

        <Link to="/winter">
          <div
            className="winter-diagonal-bg absolute inset-0 bg-cover transition-all duration-500 hover:brightness-110 hover:scale-[1.02] cursor-pointer"
            style={{
              backgroundImage: `linear-gradient(rgba(100, 150, 255, 0.2), rgba(100, 150, 255, 0.1)), url('${winterSki}')`,
              backgroundPosition: "50% calc(50% + 100px)",
              clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
            }}
          >
            <div className="absolute bottom-32 right-8 -translate-y-1/2">
              <h2 className="sm:text-3xl md:text-5xl font-bold text-white drop-shadow-lg">Winter</h2>
              <p className="sm:text-base md:text-xl text-white/90 mt-2 drop-shadow-md">Embrace the cold</p>
            </div>
          </div>
        </Link>

        <div
          className="absolute top-0 right-0 w-1 h-[141.42%] bg-white/80 shadow-2xl"
          style={{
            transformOrigin: "top right",
            transform: "rotate(-45deg) translateX(-50%)",
          }}
        />
      </div>

      <footer className="absolute bottom-0 left-0 right-0 z-20 p-6 sm:p-12 bg-gradient-to-t from-black/40 to-transparent">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-white/80">
          <Link to="/about" className="hover:text-white transition-colors">
            About
          </Link>
          <Link to="/book" className="hover:text-white transition-colors">
            Book a Coaching Session
          </Link>
          <Link to="/links" className="hover:text-white transition-colors">
            Useful Links
          </Link>
        </div>
      </footer>
    </div>
  );
}
