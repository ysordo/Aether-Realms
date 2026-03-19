export interface BoardFeature {
  id: string
  icon: string
  title: string
  description: string
}

export interface BoardTile {
  id: string
  type: 'terrain' | 'encounter' | 'treasure' | 'portal'
  name: string
  effects?: string[]
}

export interface GameBoard {
  id: string
  name: string
  description: string
  image: string
  features: BoardFeature[]
  tiles: BoardTile[]
}
