export type RoadmapPhaseId = 'foundation' | 'expansion' | 'evolution' | 'legend'

export type RoadmapAlign = 'left' | 'right'

export interface RoadmapPhase {
  id: RoadmapPhaseId
  phase: string
  title: string
  date: string
  description: string
  features: string[]
  image: string
  align: RoadmapAlign
}
