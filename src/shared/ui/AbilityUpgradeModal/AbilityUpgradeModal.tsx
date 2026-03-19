import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAbilityStore } from "@shared/hooks/useAbilityCooldown";
import { Card } from "@shared/ui/Card";
import { Button } from "@shared/ui/Button";
import { X, TrendingUp, Star } from "lucide-react";

interface AbilityUpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  abilityId: string;
  abilityName: string;
  abilityDescription: string;
  currentLevel: number;
  onUpgrade: () => void;
}

const upgradeEffects = [
  "+10% damage",
  "+5% cooldown reduction",
  "+15% effect duration",
  "+20% damage",
  "MAX POWER",
];

export function AbilityUpgradeModal({
  isOpen,
  onClose,
  abilityId,
  abilityName,
  abilityDescription,
  currentLevel,
  onUpgrade,
}: AbilityUpgradeModalProps) {
  const { upgradeAbility, getAbilityLevel } = useAbilityStore();
  const [isUpgrading, setIsUpgrading] = useState(false);

  const handleUpgrade = () => {
    if (currentLevel >= 5) return;

    setIsUpgrading(true);
    upgradeAbility(abilityId);

    setTimeout(() => {
      setIsUpgrading(false);
      onUpgrade();
      onClose();
    }, 800);
  };

  const nextLevel = currentLevel + 1;
  const effect = upgradeEffects[currentLevel] || "MAX POWER";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
          >
            <div className="pointer-events-auto">
              <Card
                variant="elevated"
                padding="lg"
                className="max-w-md w-[400px] bg-base-100 border-primary/30"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Star className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-white font-black uppercase tracking-widest text-lg">
                        {abilityName}
                      </h3>
                      <p className="text-slate-400 text-xs">
                        Level {currentLevel} →{" "}
                        {nextLevel > 5 ? "MAX" : nextLevel}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={onClose}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm mb-6">
                  {abilityDescription}
                </p>

                {/* Level Progress */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-slate-400 uppercase tracking-widest">
                      Progress
                    </span>
                    <span className="text-xs text-primary font-bold">
                      {currentLevel}/5
                    </span>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((level) => (
                      <div
                        key={level}
                        className={`flex-1 h-2 rounded-full transition-all ${
                          level <= currentLevel
                            ? "bg-primary shadow-lg shadow-primary/50"
                            : "bg-slate-700"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Next Upgrade Effect */}
                {currentLevel < 5 && (
                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      <span className="text-primary font-bold text-xs uppercase">
                        Next Upgrade
                      </span>
                    </div>
                    <p className="text-white font-bold text-sm">{effect}</p>
                  </div>
                )}

                {/* Max Level Info */}
                {currentLevel >= 5 && (
                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mb-6">
                    <p className="text-primary font-black text-center uppercase tracking-widest">
                      ★ MAXIMUM POWER ★
                    </p>
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    onClick={onClose}
                    className="flex-1"
                    disabled={isUpgrading}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="primary"
                    onClick={handleUpgrade}
                    disabled={currentLevel >= 5 || isUpgrading}
                    className="flex-1"
                  >
                    {isUpgrading ? (
                      <span className="flex items-center gap-2">
                        <Star className="w-4 h-4 animate-spin" />
                        Upgrading...
                      </span>
                    ) : currentLevel >= 5 ? (
                      "MAX LEVEL"
                    ) : (
                      <span className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        Upgrade
                      </span>
                    )}
                  </Button>
                </div>
              </Card>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
