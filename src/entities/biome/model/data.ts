import type { Biome } from './types'

export const biomesData: Biome[] = [
  {
    id: 'emerald-forest',
    name: 'Emerald Forest',
    type: 'emerald-forest',
    theme: 'green',
    icon: 'forest',
    borderColor: 'border-green-500/50',
    glowColor: 'shadow-green-500/20',
    images: [
      'https://via.placeholder.com/400x300/1a4d2e/ffffff?text=Forest+1',
      'https://via.placeholder.com/200x200/2d6a4f/ffffff?text=Forest+2',
      'https://via.placeholder.com/200x200/40916c/ffffff?text=Forest+3',
    ],
  },
  {
    id: 'golden-sands',
    name: 'Golden Sands',
    type: 'golden-sands',
    theme: 'orange',
    icon: 'beach_access',
    borderColor: 'border-orange-500/50',
    glowColor: 'shadow-orange-500/20',
    images: [
      'https://via.placeholder.com/400x300/d4af37/1a0b14?text=Desert+1',
      'https://via.placeholder.com/200x200/f59e0b/1a0b14?text=Desert+2',
      'https://via.placeholder.com/200x200/fbbf24/1a0b14?text=Desert+3',
    ],
  },
  {
    id: 'frozen-reach',
    name: 'Frozen Reach',
    type: 'frozen-reach',
    theme: 'cyan',
    icon: 'ac_unit',
    borderColor: 'border-cyan-500/50',
    glowColor: 'shadow-cyan-500/20',
    images: [
      'https://via.placeholder.com/400x300/0891b2/ffffff?text=Ice+1',
      'https://via.placeholder.com/200x200/06b6d4/ffffff?text=Ice+2',
      'https://via.placeholder.com/200x200/22d3ee/ffffff?text=Ice+3',
    ],
  },
  {
    id: 'molten-core',
    name: 'Molten Core',
    type: 'molten-core',
    theme: 'red',
    icon: 'volcano',
    borderColor: 'border-red-500/50',
    glowColor: 'shadow-red-500/20',
    images: [
      'https://via.placeholder.com/400x300/991b1b/ffffff?text=Lava+1',
      'https://via.placeholder.com/200x200/dc2626/ffffff?text=Lava+2',
      'https://via.placeholder.com/200x200/ef4444/ffffff?text=Lava+3',
    ],
  },
]
