import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useAbilityStore } from '@shared/hooks/useAbilityCooldown'
import { Tooltip } from '@shared/ui/Tooltip'
import { Clock, TrendingUp } from 'lucide-react'

interface AbilityTooltipProps {
  abilityId: string
  characterId: string
  name: string
  description: string
  icon: React.ReactNode
  color: string
  cooldown?: number
  onUse?: () => void
}

export function AbilityTooltip({
  abilityId,
  characterId,
  name,
  description,
  icon,
  color,
  cooldown = 0,
  onUse,
}: AbilityTooltipProps) {
  const { isOnCooldown, getCooldownProgress } = useAbilityStore()
  const abilityLevel = useAbilityStore((state) => state.getAbilityLevel(abilityId))
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!isOnCooldown(characterId, abilityId)) {
      setProgress(0)
      return
    }

    const interval = setInterval(() => {
      setProgress(getCooldownProgress(characterId, abilityId))
    }, 100)

    return () => clearInterval(interval)
  }, [characterId, abilityId, isOnCooldown, getCooldownProgress])

  const onCooldown = isOnCooldown(characterId, abilityId)
  const canUpgrade = abilityLevel < 5

  return (
    <Tooltip
      position="top"
      content={
        <div className="min-w-50 space-y-2!">
          <div className="flex items-center justify-between">
            <p className={`text-base-content font-bold text-[11px] uppercase ${color}`}>{name}</p>
            {abilityLevel > 0 && (
              <span className="text-[9px] bg-primary/20 text-primary px-1.5 py-0.5 rounded">Lv.{abilityLevel}</span>
            )}
          </div>
          <p className="text-base-content/70 text-[10px] leading-tight">{description}</p>
          {cooldown > 0 && (
            <div className="flex items-center gap-1.5 text-[9px] text-slate-400">
              <Clock className="w-3 h-3" />
              <span>Cooldown: {cooldown}s</span>
            </div>
          )}
          {canUpgrade && (
            <div className="flex items-center gap-1.5 text-[9px] text-gold">
              <TrendingUp className="w-3 h-3" />
              <span>Click to upgrade</span>
            </div>
          )}
          {!canUpgrade && <div className="text-[9px] text-primary font-bold">MAX LEVEL</div>}
          {onCooldown && (
            <div className="w-full h-1 bg-slate-700 rounded-full overflow-hidden">
              <motion.div className="h-full bg-primary" initial={{ width: `${progress}%` }} animate={{ width: `${progress}%` }} transition={{ duration: 0.1 }} />
            </div>
          )}
        </div>
      }
    >
      <div
        className={`flex flex-col items-center group/skill relative cursor-help ${onCooldown ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:scale-110'} transition-all`}
        onClick={() => { if (!onCooldown) onUse?.() }}
      >
        <div className="relative">
          <div className={`${color} w-5 h-5 drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]`}>{icon}</div>
          {onCooldown && <div className="absolute inset-0 bg-black/60 rounded-full flex items-center justify-center"><Clock className="w-3 h-3 text-white" /></div>}
          {abilityLevel > 0 && !onCooldown && (
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full flex items-center justify-center">
              <span className="text-[6px] text-white font-bold">{abilityLevel}</span>
            </div>
          )}
        </div>
        <span className="text-[8px] uppercase font-bold text-blue-400/70 mt-1 opacity-0 group-hover/skill:opacity-100 transition-opacity">{name.split(' ')[0]}</span>
      </div>
    </Tooltip>
  )
}
