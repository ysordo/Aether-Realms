import { Card } from "@shared/ui/Card";
import { Icon } from "@shared/ui/Icon";
import { LazyImage } from "@shared/ui/LazyImage";
import { CheckCircle } from "lucide-react";

const boardFeatures = [
  {
    icon: "casino",
    title: "Dynamic Dice",
    description: "Roll fate with enchanted dice that shape your destiny.",
  },
  {
    icon: "cards",
    title: "Spell Cards",
    description: "Collect and cast powerful spells from your tactical deck.",
  },
  {
    icon: "mystery",
    title: "Mystery Tiles",
    description: "Uncover hidden secrets in every corner of the board.",
  },
  {
    icon: "swords",
    title: "Tactical Combat",
    description: "Engage in turn-based battles with real-time VR flair.",
  },
  {
    icon: "crystal_ball",
    title: "Aether Gems",
    description: "Harness the power of ancient gems to fuel your abilities.",
  },
];

export function GrandBoardSection() {
  return (
    <section className="bg-base-100 py-24! px-6! lg:px-40!" id="world">
      <div className="text-center mb-16! space-y-6!">
        <div className="flex items-center justify-center gap-2">
          <div className="h-1 w-12 bg-primary" />
          <span className="text-primary font-black uppercase tracking-[0.3em] text-sm">
            The Game Board
          </span>
          <div className="h-1 w-12 bg-primary" />
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-base-content uppercase italic">
          The Grand Board
        </h2>
        <p className="text-base-content/60 text-lg max-w-2xl mx-auto!">
          A living, breathing battlefield where every tile tells a story and
          every move shapes legend.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 mb-16! group">
        <div className="relative h-fit my-auto!">
          <div className="absolute -inset-2 bg-linear-to-r from-primary to-gold rounded-xl opacity-20 blur-xl group-hover:opacity-40 transition duration-1000" />
          <div className="relative h-fit rounded-xl border border-gold shadow-2xl overflow-hidden">
            <LazyImage
              src="/assets/plaza_bazar_flotante.jpg"
              alt="The Grand Board"
              aspectRatio="aspect-[1/1]"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <h2 className="text-2xl col-span-2 text-gold font-bold">
            Arcane Top-Down View
          </h2>
          <p className="text-base-content/60 text-sm col-span-2">
            Command the realm from a divine perspective. Our isometric 3D map
            offers a total strategic overview of the shattered floating islands,
            where every move is calculated and every tile is a gamble.
          </p>
          {boardFeatures.map((feature, index, { length }) => (
            <Card
              key={index}
              variant="elevated"
              padding="md"
              className={`space-y-3 ${index + 1 == length && (index + 1) % 2 ? "col-span-2" : ""} p-4! bg-base-content/5`}
            >
              <div className="flex gap-1.5 items-center">
                <Icon size="md" name={feature.icon} />
                <h3 className="text-base-content font-black uppercase tracking-widest text-sm">
                  {feature.title}
                </h3>
              </div>
              <p className="text-base-content/60 text-xs leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-24! grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6!">
          <div className="flex items-center gap-2">
            <div className="h-1 w-12 bg-gold" />
            <span className="text-gold font-black uppercase tracking-[0.3em] text-sm">
              Victory Path
            </span>
          </div>
          <h3 className="text-3xl md:text-5xl font-black text-base-content uppercase italic">
            The Golden Path
          </h3>
          <p className="text-base-content/60 text-lg leading-relaxed">
            Journey through enchanted realms, conquer territories, and claim
            your throne as the ultimate Aether Lord.
          </p>
          <ul className="space-y-3">
            {[
              "Conquer mystical territories",
              "Build your arcane empire",
              "Defeat rival factions",
              "Claim the Aether Throne",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="text-gold shrink-0" />
                <span className="text-base-content/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative group">
          <div className="absolute -inset-2 bg-linear-to-r from-accent-gold to-primary rounded-xl opacity-20 blur-xl group-hover:opacity-40 transition duration-1000" />
          <div className="relative rounded-xl gold-border shadow-2xl overflow-hidden">
            <LazyImage
              src="/assets/17_cofre_tesoro.jpg"
              alt="The Golden Path"
              aspectRatio="aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
