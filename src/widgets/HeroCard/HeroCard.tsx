import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import type { Character } from "@entities/character/model";
import { Badge } from "@shared/ui/Badge";
import { AbilityUpgradeModal } from "@shared/ui/AbilityUpgradeModal";
import { useAbilityStore } from "@shared/hooks/useAbilityCooldown";
import { useAudio } from "@features/audio";
import {
  GiTimeTrap,
  GiBarrier,
  GiLightningArc,
  GiSparkles,
  GiPadlock,
  GiSwordsEmblem,
  GiCastle,
  GiBatteredAxe,
  GiHidden,
  GiDroplets,
  GiSmokeBomb,
  GiGhost,
  GiFlowers,
  GiWindSlap,
  GiOak,
  GiHearts,
  GiBearHead,
  GiSeedling,
  GiWoodenFence,
  GiMoon,
  GiWaterDrop,
  GiSun,
  GiOrbit,
  GiSkullMask,
  GiBrokenHeart,
  GiStopSign,
  GiCrossedSwords,
  GiMuscleUp,
  GiSandsOfTime,
} from "react-icons/gi";

interface HeroCardProps {
  character: Character;
  index?: number;
}

interface TooltipData {
  name: string;
  description: string;
  color: string;
  cooldown: number;
  x: number;
  y: number;
}

const classVariantMap: Record<
  string,
  "blue" | "gold" | "slate" | "green" | "red" | "purple" | "white"
> = {
  Spellcaster: "blue",
  Defender: "gold",
  Rogue: "slate",
  "Nature Guardian": "green",
  Berserker: "red",
  "Holy Priest": "white",
  "Dark Mage": "purple",
};

const rarityVariantMap: Record<string, "purple" | "gold" | "blue" | "slate"> = {
  Common: "slate",
  Rare: "blue",
  Epic: "purple",
  Legendary: "gold",
};

const iconMap: Record<string, typeof GiSparkles> = {
  chronos: GiTimeTrap,
  "aether-shield": GiBarrier,
  "space-warp": GiLightningArc,
  "mana-surge": GiSparkles,
  "time-lock": GiPadlock,
  smite: GiSwordsEmblem,
  bastion: GiCastle,
  resolve: GiBatteredAxe,
  taunt: GiBatteredAxe,
  "shield-bash": GiBarrier,
  "shadow-strike": GiHidden,
  "toxic-blade": GiDroplets,
  "smoke-screen": GiSmokeBomb,
  backstab: GiSwordsEmblem,
  vanish: GiGhost,
  "floral-heal": GiFlowers,
  "gale-winds": GiWindSlap,
  "natures-wrath": GiOak,
  blessing: GiHearts,
  entangle: GiWoodenFence,
  bloodlust: GiCrossedSwords,
  whirlwind: GiSparkles,
  revenge: GiMuscleUp,
  rampage: GiBatteredAxe,
  execute: GiSkullMask,
  "wild-shape": GiBearHead,
  regrowth: GiSeedling,
  "thorn-wall": GiWoodenFence,
  moonfire: GiMoon,
  tranquility: GiWaterDrop,
  "divine-light": GiSun,
  purify: GiSparkles,
  "holy-shield": GiBarrier,
  resurrection: GiOrbit,
  "smite-evil": GiSwordsEmblem,
  "raise-dead": GiSkullMask,
  "life-drain": GiBrokenHeart,
  curse: GiStopSign,
  "death-coil": GiSparkles,
  "lich-form": GiGhost,
};

const cooldowns: Record<string, number> = {
  chronos: 8,
  "aether-shield": 12,
  "space-warp": 6,
  "mana-surge": 10,
  "time-lock": 15,
  smite: 7,
  bastion: 14,
  resolve: 10,
  taunt: 8,
  "shield-bash": 9,
  "shadow-strike": 5,
  "toxic-blade": 8,
  "smoke-screen": 12,
  backstab: 6,
  vanish: 15,
  "floral-heal": 10,
  "gale-winds": 8,
  "natures-wrath": 12,
  blessing: 14,
  entangle: 10,
  bloodlust: 12,
  whirlwind: 8,
  revenge: 10,
  rampage: 15,
  execute: 20,
  "wild-shape": 14,
  regrowth: 8,
  "thorn-wall": 10,
  moonfire: 7,
  tranquility: 16,
  "divine-light": 12,
  purify: 10,
  "holy-shield": 14,
  resurrection: 30,
  "smite-evil": 8,
  "raise-dead": 15,
  "life-drain": 8,
  curse: 12,
  "death-coil": 10,
  "lich-form": 20,
};

function SkillTooltip({ data }: { data: TooltipData }) {
  return (
    <div
      className="fixed z-100 px-3! py-2! bg-base-100/95 backdrop-blur-sm border border-primary/30 rounded-lg shadow-lg shadow-primary/20 min-w-40 pointer-events-none"
      style={{
        left: data.x,
        top: data.y,
        transform: "translate(-50%, -100%)",
      }}
    >
      <div className="space-y-2!">
        <div className="flex items-center justify-between">
          <p className={`text-base-content font-bold text-[11px] uppercase`}>
            {data.name}
          </p>
        </div>
        <p className="text-base-content/70 text-[10px] leading-tight">
          {data.description}
        </p>
        {data.cooldown > 0 && (
          <div className="flex items-center gap-1.5 text-[9px] text-base-content/50">
            <span>Cooldown: {data.cooldown}s</span>
          </div>
        )}
        <div className="text-[9px] text-primary font-bold">
          Click to upgrade
        </div>
      </div>
      {/* Arrow */}
      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1! w-3 h-3 bg-base-100/95 border-r border-b border-primary/30 rotate-45" />
    </div>
  );
}

export function HeroCard({ character, index = 0 }: HeroCardProps) {
  const classBadgeVariant = classVariantMap[character.class] || "blue";
  const setCooldown = useAbilityStore((state) => state.setCooldown);
  const { playSFX } = useAudio();
  const [selectedAbility, setSelectedAbility] = useState<{
    abilityId: string;
    name: string;
    description: string;
    level: number;
  } | null>(null);
  const [tooltipData, setTooltipData] = useState<TooltipData | null>(null);
  const skillRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const getCooldownProgress = useAbilityStore(
    (state) => state.getCooldownProgress,
  );
  const [cooldawns, setCooldowns] = useState(() => {
    const initialCooldowns: Record<string, number> = {};
    character.skills.forEach((skill) => {
      initialCooldowns[skill.id] = 0;
    });
    return initialCooldowns;
  });
  useEffect(() => {
    if (Object.values(cooldawns).every((cd) => cd <= 0)) return;
    const interval = setInterval(() => {
      setCooldowns((prev) => {
        const updated: Record<string, number> = {};
        for (const key in prev) {
          const progress = getCooldownProgress(character.id, key) || 0;
          updated[key] = progress;
        }
        return updated;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [character.id, cooldawns, getCooldownProgress]);

  const handleAbilityUse = (abilityId: string, cooldown: number) => {
    playSFX("abilityUse");
    setCooldown(character.id, abilityId, cooldown);
    setCooldowns((prev) => ({
      ...prev,
      [abilityId]: cooldown,
    }));
  };

  const handleSkillMouseEnter = (
    skillId: string,
    skill: {
      name: string;
      description: string;
      color: string;
      cooldown: number;
    },
  ) => {
    const element = skillRefs.current[skillId];
    if (element) {
      const rect = element.getBoundingClientRect();
      setTooltipData({
        name: skill.name,
        description: skill.description,
        color: skill.color,
        cooldown: skill.cooldown,
        x: rect.left + rect.width / 2,
        y: rect.top - 8,
      });
    }
  };

  const handleSkillMouseLeave = () => {
    setTooltipData(null);
  };

  return (
    <>
      <motion.div
        className="group relative rounded-2xl gold-border"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="hover:shadow-[0_0_30px_rgba(236,91,19,0.3)] transition-shadow duration-300 rounded-2xl">
          <div className="aspect-3/4 overflow-hidden rounded-2xl">
            <motion.img
              alt={character.name}
              className="w-full h-full object-cover"
              src={character.image}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.7 }}
            />
          </div>
          <div className="absolute inset-0 bg-linear-to-t from-background-dark via-transparent to-transparent rounded-2xl" />
          <div className="absolute bottom-0 left-0 p-3! space-y-2!">
            <div className="flex gap-2 flex-wrap">
              <Badge variant={classBadgeVariant} className="p-1! rounded-md">
                {character.class}
              </Badge>
              <Badge
                variant={rarityVariantMap[character.rarity]}
                className="p-1! rounded-md"
              >
                {character.rarity}
              </Badge>
            </div>
            <h3
              className={`text-2xl font-black ${character.skills[0].color} uppercase italic`}
            >
              {character.name}
            </h3>
            <div className="grid grid-cols-5 gap-x-2 gap-y-1 mt-3! mb-1! flex-wrap ">
              {character.skills.map((skill) => {
                const IconComponent = iconMap[skill.icon] || GiSparkles;
                const skillCooldown = cooldowns[skill.id] || 0;
                return (
                  <div
                    key={skill.id}
                    ref={(el) => {
                      skillRefs.current[skill.id] = el;
                    }}
                    className="relative"
                    onMouseEnter={() =>
                      handleSkillMouseEnter(skill.id, {
                        name: skill.name,
                        description: skill.description,
                        color: skill.color,
                        cooldown: skillCooldown,
                      })
                    }
                    onMouseLeave={handleSkillMouseLeave}
                  >
                    <div
                      className={`flex flex-col items-center group/skill relative cursor-help ${cooldawns[skill.id] > 0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:scale-110"} transition-all`}
                      onClick={() => {
                        if (cooldawns[skill.id] <= 0)
                          handleAbilityUse(skill.id, skillCooldown);
                      }}
                    >
                      <div className="relative inline-flex items-center justify-center">
                        <div
                          className={`${skill.color} w-5 h-5 drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]`}
                        >
                          <IconComponent />
                        </div>
                        {cooldawns[skill.id] > 0 && (
                          <div className="absolute inset-0 bg-black/60 rounded-full flex items-center justify-center -top-1 -left-1">
                            <GiSandsOfTime className="w-3 h-3 text-white animate-spin" />
                          </div>
                        )}
                      </div>
                      <span
                        className={`text-[8px] uppercase font-extrabold ${skill.color} mt-1 opacity-0 group-hover/skill:opacity-100 transition-opacity`}
                      >
                        {skill.name.split(" ")[0]}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="text-white text-xs font-bold">
              {character.description}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Tooltip renderizado fuera del card usando portal */}
      {tooltipData &&
        typeof document !== "undefined" &&
        createPortal(<SkillTooltip data={tooltipData} />, document.body)}

      {selectedAbility && (
        <AbilityUpgradeModal
          isOpen={!!selectedAbility}
          onClose={() => setSelectedAbility(null)}
          abilityId={selectedAbility.abilityId}
          abilityName={selectedAbility.name}
          abilityDescription={selectedAbility.description}
          currentLevel={selectedAbility.level}
          onUpgrade={() => playSFX("levelUp")}
        />
      )}
    </>
  );
}
