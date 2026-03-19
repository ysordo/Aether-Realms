import { getAssetUrl } from '@shared/utils/getAssetUrl'

// Hero Section
export const HERO_BACKGROUND = getAssetUrl("/assets/22_islas_flotantes.jpg");

// Epic Strategy Section
export const STRATEGY_BOARD = getAssetUrl("/assets/24_casillas_tablero.jpg");

// Characters/Heroes
export const HERO_IMAGES = {
  "blue-mage": getAssetUrl("/assets/18_mago_azul.jpg"),
  "golden-knight": getAssetUrl("/assets/19_caballero_dorado.jpg"),
  assassin: getAssetUrl("/assets/20_picaro.jpg"),
  "fairy-queen": getAssetUrl("/assets/21_hada.jpg"),
  "red-warrior": getAssetUrl("/assets/27_guerrero_rojo.jpeg"),
  "green-druid": getAssetUrl("/assets/26_druida_verde.jpeg"),
  "white-cleric": getAssetUrl("/assets/25_clerido_blanco.jpeg"),
  "black-necromancer": getAssetUrl("/assets/28_necromance_negro.jpeg"),
};

// Biomes
export const BIOME_IMAGES = {
  "emerald-forest": [
    getAssetUrl("/assets/04_arbol_sabio.jpg"),
    getAssetUrl("/assets/05_puente_lianas.jpg"),
    getAssetUrl("/assets/06_casas_hongos.jpg"),
  ],
  "golden-sands": [
    getAssetUrl("/assets/07_piramide_pruebas.jpg"),
    getAssetUrl("/assets/08_oasis_caravana.jpg"),
    getAssetUrl("/assets/09_esfinge_parlante.jpg"),
  ],
  "frozen-reach": [
    getAssetUrl("/assets/10_iglus_brillantes.jpg"),
    getAssetUrl("/assets/11_puente_hielo.jpg"),
    getAssetUrl("/assets/23_cristales_hielo.jpg"),
  ],
  "molten-core": [
    getAssetUrl("/assets/13_templo_fuego.jpg"),
    getAssetUrl("/assets/14_puente_lava.jpg"),
    getAssetUrl("/assets/12_forja_destino.jpg"),
  ],
};

// Grand Board
export const BOARD_FEATURES = {
  dice: getAssetUrl("/assets/01_fuente_dados.jpg"),
  cards: getAssetUrl("/assets/03_crystal_card_shop.jpg"),
  mystery: getAssetUrl("/assets/17_cofre_tesoro.jpg"),
  combat: getAssetUrl("/assets/02_estatua_azr.jpg"),
  gems: getAssetUrl("/assets/23_cristales_hielo.jpg"),
};

// Video Tutorial
export const VIDEO_THUMBNAIL = getAssetUrl("/assets/15_torre_minijuegos.jpg");

// Roadmap
export const ROADMAP_PHASES = {
  phase1: getAssetUrl("/assets/16_taberna.jpg"),
  phase2: getAssetUrl("/assets/17_cofre_tesoro.jpg"),
  phase3: getAssetUrl("/assets/04_arbol_sabio.jpg"),
  phase4: getAssetUrl("/assets/22_islas_flotantes.jpg"),
};

// Community & Social
export const SOCIAL_IMAGES = {
  discord: getAssetUrl("/icons/discord.png"),
  x: getAssetUrl("/icons/x.png"),
};

// Icons
export const ICONS = {
  expand_more: getAssetUrl("/icons/expand_more.png"),
  cards: getAssetUrl("/icons/card.png"),
  swords: getAssetUrl("/icons/combat.png"),
  casino: getAssetUrl("/icons/dice.png"),
  mystery: getAssetUrl("/icons/mystery.png"),
  crystal_ball: getAssetUrl("/icons/gem.png"),
  emerald_forest: getAssetUrl("/icons/emerald_forest.png"),
  golden_sands: getAssetUrl("/icons/golden_sands.png"),
  frozen_reach: getAssetUrl("/icons/frozen_reach.png"),
  molten_core: getAssetUrl("/icons/molten_core.png"),
};

// Videos
export const VIDEOS = [
  getAssetUrl("/videos/preview_game.mp4"),
  getAssetUrl("/videos/preview_game_1.mp4"),
  getAssetUrl("/videos/caballero_dorado.mp4"),
  getAssetUrl("/videos/mago_azul.mp4"),
  getAssetUrl("/videos/picaro.mp4"),
  getAssetUrl("/videos/hada.mp4"),
  getAssetUrl("/videos/forja_del_destino.mp4"),
  getAssetUrl("/videos/forja_del_destino_1.mp4"),
  getAssetUrl("/videos/plaza_bazar_flotante.mp4"),
  getAssetUrl("/videos/plaza_bazar_flotante_1.mp4"),
  getAssetUrl("/videos/torre_minijuegos.mp4"),
  getAssetUrl("/videos/zona_volcano.mp4"),
];
