import { useMemo } from "react";
import { useCharacterStore } from "@entities/character/model/store";
import { HeroCard } from "@widgets/HeroCard";
import { Icon } from "@shared/ui/Icon";
import { Button } from "@shared/ui";

type FilterType = "All" | "Magic" | "Melee" | "Support";
type RarityType = "All" | "Common" | "Rare" | "Epic" | "Legendary";

const typeFilters: FilterType[] = ["All", "Magic", "Melee", "Support"];
const rarityFilters: RarityType[] = [
  "All",
  "Common",
  "Rare",
  "Epic",
  "Legendary",
];

export function HeroGallerySection() {
  const characters = useCharacterStore((state) => state.characters);
  const filter = useCharacterStore((state) => state.filter);
  const rarityFilter = useCharacterStore((state) => state.rarityFilter);
  const setFilter = useCharacterStore((state) => state.setFilter);
  const setRarityFilter = useCharacterStore((state) => state.setRarityFilter);

  const filteredCharacters = useMemo(() => {
    let result = characters;

    if (filter !== "All") {
      result = result.filter((char) => char.type === filter);
    }

    if (rarityFilter !== "All") {
      result = result.filter((char) => char.rarity === rarityFilter);
    }

    return result;
  }, [characters, filter, rarityFilter]);

  return (
    <section className="bg-base-100 py-24! px-6! lg:px-40! relative overflow-hidden" id="characters">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />

      {/* Header */}
      <div className="text-center mb-16! space-y-6!">
        <div className="space-y-4!">
          <h2 className="text-4xl md:text-6xl font-black text-base-content uppercase italic tracking-tighter">
            Legendary Characters
          </h2>
          <div className="h-1.5 w-32 bg-linear-to-r from-transparent via-primary to-transparent mx-auto!" />
          <p className="text-base-content/50 max-w-xl mx-auto!">
            Choose your champion and wield their unique powers to dominate the
            battlefield.
          </p>
        </div>

        {/* Type Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {typeFilters.map((f) => (
            <Button
              size="md"
              variant={filter === f ? "primary" : "ghost"}
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6! py-2! rounded-full text-xs font-black uppercase tracking-widest border transition-all`}
            >
              {f}
            </Button>
          ))}
        </div>

        {/* Rarity Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {rarityFilters.map((r) => (
            <Button
              key={r}
              size="md"
              variant={rarityFilter === r ? "primary" : "ghost"}
              onClick={() => setRarityFilter(r)}
              className={`px-6! py-2! rounded-full text-xs font-black uppercase tracking-widest border transition-all`}
            >
              {r}
            </Button>
          ))}
        </div>

        {/* Toggle Button */}
        <Button
          size="md"
          variant="ghost"
          className="mt-8 inline-flex items-center gap-2 text-primary p-2! font-black uppercase tracking-widest text-sm hover:gap-4 transition-all hover:bg-transparent rounded-md focus:outline-none focus:ring-0! focus:ring-offset-0! focus:ring-transparent!"
        >
          <span>View All Heroes</span>
          <Icon size="sm" name="expand_more" />
        </Button>
      </div>

      {/* Character Grid */}
      <div className="grid gap-8 max-w-7xl mx-auto! sm:grid-cols-2 lg:grid-cols-4">
        {filteredCharacters.map((character, index) => (
          <HeroCard key={character.id} character={character} index={index} />
        ))}
      </div>
    </section>
  );
}
