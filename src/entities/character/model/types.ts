export type CharacterClass = 'Spellcaster' | 'Defender' | 'Rogue' | 'Nature Guardian' | 'Berserker' | 'Holy Priest' | 'Dark Mage'
export type CharacterType = 'Magic' | 'Melee' | 'Support'
export type CharacterRarity = 'Common' | 'Rare' | 'Epic' | 'Legendary'

export interface Skill {
  id: string
  name: string
  icon: string
  description: string
  color: string
}

export interface Character {
  id: string
  name: string
  class: CharacterClass
  type: CharacterType
  rarity: CharacterRarity
  description: string
  image: string
  skills: Skill[]
}
