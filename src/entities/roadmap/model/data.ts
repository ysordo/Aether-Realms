import type { RoadmapPhase } from './types'

export const roadmapPhasesData: RoadmapPhase[] = [
  {
    id: 'foundation',
    phase: 'Phase 1',
    title: 'Foundation',
    date: 'Q3 2024',
    description: 'Core gameplay mechanics and VR integration',
    features: ['Basic movement', 'Card system', 'VR controls'],
    image: 'https://via.placeholder.com/500x300/1a0b14/ec5b13?text=Phase+1',
    align: 'left',
  },
  {
    id: 'expansion',
    phase: 'Phase 2',
    title: 'Expansion',
    date: 'Q1 2025',
    description: 'New biomes, characters, and multiplayer',
    features: ['4 New biomes', '8 Heroes', 'Online multiplayer'],
    image: 'https://via.placeholder.com/500x300/1a0b14/d4af37?text=Phase+2',
    align: 'right',
  },
  {
    id: 'evolution',
    phase: 'Phase 3',
    title: 'Evolution',
    date: 'Q3 2025',
    description: 'Advanced AI and campaign mode',
    features: ['AI opponents', 'Story campaign', 'Seasonal events'],
    image: 'https://via.placeholder.com/500x300/1a0b14/22c55e?text=Phase+3',
    align: 'left',
  },
  {
    id: 'legend',
    phase: 'Phase 4',
    title: 'Legend',
    date: 'Q1 2026',
    description: 'Complete edition and competitive scene',
    features: ['Ranked mode', 'Tournaments', 'Creator tools'],
    image: 'https://via.placeholder.com/500x300/1a0b14/3b82f6?text=Phase+4',
    align: 'right',
  },
]
