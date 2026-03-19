import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AbilityCooldown {
  abilityId: string
  characterId: string
  cooldownEnd: number
  maxCooldown: number
}

interface AbilityState {
  cooldowns: AbilityCooldown[]
  upgradedAbilities: Record<string, number>
  
  setCooldown: (characterId: string, abilityId: string, duration: number) => void
  removeCooldown: (characterId: string, abilityId: string) => void
  getCooldown: (characterId: string, abilityId: string) => AbilityCooldown | null
  isOnCooldown: (characterId: string, abilityId: string) => boolean
  getCooldownProgress: (characterId: string, abilityId: string) => number
  
  upgradeAbility: (abilityId: string) => void
  getAbilityLevel: (abilityId: string) => number
  resetAbilities: () => void
}

export const useAbilityStore = create<AbilityState>()(
  persist(
    (set, get) => ({
      cooldowns: [],
      upgradedAbilities: {},

      setCooldown: (characterId, abilityId, duration) => {
        const cooldownEnd = Date.now() + duration * 1000
        set((state) => ({
          cooldowns: [
            ...state.cooldowns.filter(
              (cd) => !(cd.characterId === characterId && cd.abilityId === abilityId)
            ),
            {
              abilityId,
              characterId,
              cooldownEnd,
              maxCooldown: duration,
            },
          ],
        }))
      },

      removeCooldown: (characterId, abilityId) => {
        set((state) => ({
          cooldowns: state.cooldowns.filter(
            (cd) => !(cd.characterId === characterId && cd.abilityId === abilityId)
          ),
        }))
      },

      getCooldown: (characterId, abilityId) => {
        const state = get()
        return (
          state.cooldowns.find(
            (cd) => cd.characterId === characterId && cd.abilityId === abilityId
          ) || null
        )
      },

      isOnCooldown: (characterId, abilityId) => {
        const cooldown = get().getCooldown(characterId, abilityId)
        if (!cooldown) return false
        return Date.now() < cooldown.cooldownEnd
      },

      getCooldownProgress: (characterId, abilityId) => {
        const cooldown = get().getCooldown(characterId, abilityId)
        if (!cooldown) return 0
        
        const remaining = cooldown.cooldownEnd - Date.now()
        if (remaining <= 0) return 0
        
        return (remaining / (cooldown.maxCooldown * 1000)) * 100
      },

      upgradeAbility: (abilityId) => {
        set((state) => ({
          upgradedAbilities: {
            ...state.upgradedAbilities,
            [abilityId]: (state.upgradedAbilities[abilityId] || 0) + 1,
          },
        }))
      },

      getAbilityLevel: (abilityId) => {
        return get().upgradedAbilities[abilityId] || 0
      },

      resetAbilities: () => {
        set({ upgradedAbilities: {} })
      },
    }),
    {
      name: 'aether-abilities',
      partialize: (state) => ({ upgradedAbilities: state.upgradedAbilities }),
    }
  )
)

export function useCharacterAbilities(characterId: string) {
  const cooldowns = useAbilityStore((state) =>
    state.cooldowns.filter((cd) => cd.characterId === characterId)
  )

  return {
    cooldowns,
    isOnCooldown: (abilityId: string) => useAbilityStore.getState().isOnCooldown(characterId, abilityId),
    getCooldownProgress: (abilityId: string) => useAbilityStore.getState().getCooldownProgress(characterId, abilityId),
  }
}
