import { LazyImage } from "@shared/ui/LazyImage";
import { ROADMAP_PHASES } from "@shared/constants";
import { CheckCircle } from "lucide-react";

const roadmapPhases = [
  {
    phase: "Phase 1",
    title: "Foundation",
    date: "Q3 2024",
    description: "Core gameplay mechanics and VR integration",
    features: ["Basic movement", "Card system", "VR controls"],
    image: ROADMAP_PHASES.phase1,
    align: "left",
  },
  {
    phase: "Phase 2",
    title: "Expansion",
    date: "Q1 2025",
    description: "New biomes, characters, and multiplayer",
    features: ["4 New biomes", "8 Heroes", "Online multiplayer"],
    image: ROADMAP_PHASES.phase2,
    align: "right",
  },
  {
    phase: "Phase 3",
    title: "Evolution",
    date: "Q3 2025",
    description: "Advanced AI and campaign mode",
    features: ["AI opponents", "Story campaign", "Seasonal events"],
    image: ROADMAP_PHASES.phase3,
    align: "left",
  },
  {
    phase: "Phase 4",
    title: "Legend",
    date: "Q1 2026",
    description: "Complete edition and competitive scene",
    features: ["Ranked mode", "Tournaments", "Creator tools"],
    image: ROADMAP_PHASES.phase4,
    align: "right",
  },
];

export function RoadmapSection() {
  return (
    <section className="bg-base-100 py-24! px-6! lg:px-40!" id="roadmap">
      <div className="text-center mb-16! space-y-6!">
        <div className="flex items-center justify-center gap-2">
          <div className="h-1 w-12 bg-primary" />
          <span className="text-primary font-black uppercase tracking-[0.3em] text-sm">
            Development Path
          </span>
          <div className="h-1 w-12 bg-primary" />
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-base-content uppercase italic">
          Roadmap
        </h2>
        <p className="text-base-content/60 text-lg max-w-2xl mx-auto!">
          Join us on the journey to create the ultimate VR tabletop experience.
        </p>
      </div>

      <div className="max-w-6xl mx-auto! space-y-16!">
        {roadmapPhases.map((item, index) => (
          <div
            key={index}
            className={`grid lg:grid-cols-2 gap-12 items-center`}
          >
            <div
              className={`relative group ${item.align === "right" ? "lg:order-2" : "lg:order-1"}`}
            >
              <div className="absolute -inset-2 bg-linear-to-r from-primary to-accent-gold rounded-xl opacity-20 blur-xl group-hover:opacity-40 transition duration-1000" />
              <div className="relative rounded-xl gold-border shadow-2xl overflow-hidden">
                <LazyImage
                  src={item.image}
                  alt={item.title}
                  aspectRatio="aspect-[16/9]"
                />
              </div>
            </div>
            <div
              className={`space-y-6! ${item.align === "right" ? "lg:order-1 lg:text-right" : "lg:order-2"}`}
            >
              <div
                className={`inline-flex items-center gap-2 ${item.align === "right" ? "lg:flex-row-reverse" : ""}`}
              >
                <div className="h-1 w-12 bg-gold" />
                <span className="text-gold font-black uppercase tracking-[0.2em] text-sm">
                  {item.phase}
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl md:text-4xl font-black text-base-content uppercase italic">
                  {item.title}
                </h3>
                <p className="text-primary font-bold uppercase tracking-widest">
                  {item.date}
                </p>
              </div>
              <p className="text-base-content/60 text-lg leading-relaxed">
                {item.description}
              </p>
              <ul className="space-y-3!">
                {item.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className={`flex items-start gap-3 ${item.align === "right" ? "lg:flex-row-reverse" : ""}`}
                  >
                    <CheckCircle
                      className="text-gold shrink-0"
                    />
                    <span className="text-base-content/40">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
