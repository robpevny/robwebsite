import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ExternalLink } from "lucide-react";

const groups = [
  {
    heading: "Coaching & Certification",
    links: [
      {
        name: "PMBIA",
        description: "Professional Mountain Bike Instructors' Association",
        href: "https://pmbia.bike/",
      },
      {
        name: "CANSI",
        description: "Canadian Ski Instructors' Alliance",
        href: "https://cansi.ca",
      },
      {
        name: "GSMBC",
        description: "Global Syndicate of Mountain Bike Coaches",
        href: "https://www.gsmbc.pro/",
      },
    ],
  },
  {
    heading: "Mountain Biking",
    links: [
      {
        name: "CAMBA Canmore",
        description: "Canmore Area Mountain Bike Association — trail stewardship and advocacy",
        href: "https://camba.ca",
      },
      {
        name: "Trail Sports Canmore",
        description: "Local gear, rentals, and all things trail",
        href: "https://trailsports.com",
      },
    ],
  },
  {
    heading: "Cross-Country Skiing",
    links: [
      {
        name: "Canmore Nordic Centre",
        description: "World-class XC ski trails and facilities in the heart of Canmore",
        href: "https://www.albertaparks.ca/parks/kananaskis/canmore-nordic-centre-pp/",
      },
    ],
  },
];

export default function Links() {
  return (
    <div className="size-full relative overflow-hidden bg-gradient-to-br from-stone-50 to-stone-200">
      <Helmet>
        <title>Useful Links | Robert Pevny Coaching</title>
        <meta name="description" content="Useful links for mountain biking and cross-country skiing in Canmore, Alberta." />
      </Helmet>
      <header className="absolute top-0 left-0 right-0 z-20 p-8 bg-gradient-to-b from-white/60 to-transparent backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="text-gray-800 hover:text-orange-600 transition-colors"
          >
            <ArrowLeft size={32} />
          </Link>
          <h1 className="text-5xl text-gray-800 font-nunito">Useful Links</h1>
        </div>
      </header>

      <div className="absolute inset-0 pt-32 pb-24 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-8 space-y-10">
          {groups.map((group) => (
            <div key={group.heading}>
              <h2 className="text-xl font-bold text-gray-500 uppercase tracking-widest mb-4">
                {group.heading}
              </h2>
              <div className="space-y-3">
                {group.links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-white/60 hover:bg-white/90 transition-colors rounded-2xl px-6 py-5 group shadow-sm"
                  >
                    <div>
                      <p className="text-lg font-semibold text-gray-800 group-hover:text-orange-600 transition-colors">
                        {link.name}
                      </p>
                      <p className="text-sm text-gray-500 mt-0.5">{link.description}</p>
                    </div>
                    <ExternalLink size={20} className="text-gray-400 group-hover:text-orange-500 transition-colors flex-shrink-0 ml-4" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
