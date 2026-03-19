export type BiomeType =
  | "emerald-forest"
  | "golden-sands"
  | "frozen-reach"
  | "molten-core";

export type BiomeTheme = "green" | "orange" | "cyan" | "red";

export interface Biome {
  id: string;
  name: string;
  type: BiomeType;
  theme: BiomeTheme;
  icon: string;
  borderColor: string;
  glowColor: string;
  images: string[];
}
