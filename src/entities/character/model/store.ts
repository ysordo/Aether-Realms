import { create } from 'zustand'
import type { Character, CharacterRarity, CharacterType } from '@entities/character/model'
import { charactersData } from '@entities/character/model/data'

interface CharacterStore {
  characters: Character[]
  filter: CharacterType | 'All'
  rarityFilter: CharacterRarity | 'All'
  setFilter: (filter: CharacterType | 'All') => void
  setRarityFilter: (filter: CharacterRarity | 'All') => void
}

export const useCharacterStore = create<CharacterStore>((set) => ({
  characters: charactersData,
  filter: 'All',
  rarityFilter: 'All',
  setFilter: (filter) => set({ filter }),
  setRarityFilter: (filter) => set({ rarityFilter: filter }),
}))
