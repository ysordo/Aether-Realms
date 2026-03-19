export * from './images'

export const APP_NAME = 'Aether Realms'
export const APP_VERSION = '1.0.0'

export const ROUTES = {
  HOME: '/',
  CHARACTERS: '/characters',
  BIOMES: '/biomes',
  ROADMAP: '/roadmap',
} as const

export const SOCIAL_LINKS = {
  discord: 'https://discord.gg/aetherrealms',
  twitter: 'https://twitter.com/aetherrealms',
  youtube: 'https://youtube.com/aetherrealms',
  instagram: 'https://instagram.com/aetherrealms',
} as const

export const GAME_CONFIG = {
  maxPlayers: 4,
  minPlayers: 1,
  defaultLanguage: 'en',
} as const
