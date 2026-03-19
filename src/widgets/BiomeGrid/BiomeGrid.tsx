import type { Biome } from "@entities/biome";
import { motion } from "framer-motion";
import { FadeIn } from "@shared/ui/FadeIn";
import { Icon } from "@shared/ui/Icon";

interface BiomeGridProps {
  biome: Biome;
  index?: number;
}

export function BiomeGrid({ biome, index = 0 }: BiomeGridProps) {

  return (
    <FadeIn direction="up" delay={index * 0.1}>
      <motion.div
        className={`group relative overflow-hidden rounded-xl bg-base-300/5 backdrop-blur-sm transition-all duration-500 border ${biome.borderColor}/20 hover:${biome.borderColor}/50 hover:${biome.glowColor} shadow-[0_0_60px_rgba(0,0,0,0.3)]`}
        whileHover={{ scale: 1.02 }}
      >
        {/* Header */}
        <div
          className={`flex items-center gap-3 p-4! border-b ${biome.borderColor}/20 group-hover:${biome.borderColor}/50`}
        >
          <Icon size="md" name={biome.icon} />
          <h3 className="text-base-content font-black uppercase tracking-widest text-lg">
            {biome.name}
          </h3>
        </div>

        {/* Image Grid - 1 large + 2 small */}
        <div className="p-4!">
          <div className="grid grid-cols-3 gap-2">
            <div className="col-span-2 row-span-2 overflow-hidden rounded-lg">
              <motion.img
                src={biome.images[0]}
                alt={`${biome.name} main`}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* Small image 1 */}
            <div className="overflow-hidden rounded-lg">
              <motion.img
                src={biome.images[1]}
                alt={`${biome.name} detail 1`}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* Small image 2 */}
            <div className="overflow-hidden rounded-lg">
              <motion.img
                src={biome.images[2]}
                alt={`${biome.name} detail 2`}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </FadeIn>
  );
}
