import type { GameBoard, BoardFeature } from './types'

export const boardFeaturesData: BoardFeature[] = [
  {
    id: 'dice',
    icon: 'casino',
    title: 'Dynamic Dice',
    description: 'Roll fate with enchanted dice that shape your destiny.',
  },
  {
    id: 'cards',
    icon: 'cards',
    title: 'Spell Cards',
    description: 'Collect and cast powerful spells from your tactical deck.',
  },
  {
    id: 'mystery',
    icon: 'mystery',
    title: 'Mystery Tiles',
    description: 'Uncover hidden secrets in every corner of the board.',
  },
  {
    id: 'combat',
    icon: 'swords',
    title: 'Tactical Combat',
    description: 'Engage in turn-based battles with real-time VR flair.',
  },
  {
    id: 'gems',
    icon: 'crystal_ball',
    title: 'Aether Gems',
    description: 'Harness the power of ancient gems to fuel your abilities.',
  },
]

export const gameBoardData: GameBoard = {
  id: 'grand-board',
  name: 'The Grand Board',
  description: 'A living, breathing battlefield where every tile tells a story.',
  image: 'https://via.placeholder.com/1200x600/1a0b14/ec5b13?text=Grand+Board',
  features: boardFeaturesData,
  tiles: [],
}
