import type { Biome } from "@entities/biome";
import { BIOME_IMAGES } from "@shared/constants";
import { BiomeGrid } from "@widgets/BiomeGrid";

const biomes: Biome[] = [
  {
    id: "emerald-forest",
    name: "Emerald Forest",
    icon: "emerald_forest",
    type: "emerald-forest",
    theme: "green",
    borderColor: "border-green-500",
    glowColor: "shadow-green-500/20",
    images: BIOME_IMAGES["emerald-forest"],
  },
  {
    id: "golden-sands",
    name: "Golden Sands",
    icon: "golden_sands",
    type: "golden-sands",
    theme: "orange",
    borderColor: "border-orange-500",
    glowColor: "shadow-orange-500/20",
    images: BIOME_IMAGES["golden-sands"],
  },
  {
    id: "frozen-reach",
    name: "Frozen Reach",
    icon: "frozen_reach",
    type: "frozen-reach",
    theme: "cyan",
    borderColor: "border-cyan-500",
    glowColor: "shadow-cyan-500/20",
    images: BIOME_IMAGES["frozen-reach"],
  },
  {
    id: "molten-core",
    name: "Molten Core",
    icon: "molten_core",
    type: "molten-core",
    theme: "red",
    borderColor: "border-red-500",
    glowColor: "shadow-red-500/20",
    images: BIOME_IMAGES["molten-core"],
  },
];

export function BiomeExplorerSection() {
  return (
    <section className="bg-base-100 py-24! px-6! lg:px-40!" id="biomes">
      <div className="text-center mb-16! space-y-6!">
        <div className="flex items-center justify-center gap-2">
          <div className="h-1 w-12 bg-primary" />
          <span className="text-primary font-black uppercase tracking-[0.3em] text-sm">
            Explore the World
          </span>
          <div className="h-1 w-12 bg-primary" />
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-base-content uppercase italic">
          Four Biomes
        </h2>
        <p className="text-base-content/60 text-lg max-w-2xl mx-auto!">
          Journey through diverse landscapes, each with unique challenges and
          rewards.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto!">
        {biomes.map((biome, index) => (
          <BiomeGrid key={index} biome={biome} index={index} />
        ))}
      </div>
    </section>
  );
}
