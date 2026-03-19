import { Button } from "@shared/ui";
import { Icon } from "@shared/ui/Icon";
import { LazyImage } from "@shared/ui/LazyImage";
import { HERO_BACKGROUND } from "@shared/constants";
import { RectangleGoggles } from "lucide-react";
import { useSmoothScroll } from "@shared/hooks";

export function HeroSection() {
  const { scrollToSection } = useSmoothScroll();
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center p-4! overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-b from-base-100/30 via-base-100/70 to-base-100 z-10" />
        <LazyImage
          src={HERO_BACKGROUND}
          alt="Cinematic floating islands in a magical purple sky"
          aspectRatio="aspect-auto"
        />
      </div>

      <div className="relative z-20 text-center max-w-4xl mx-auto self-end">
        <div className="mb-6 inline-flex items-center gap-2 px-4! py-1! rounded-full border border-primary/50 bg-primary/10 backdrop-blur-md animate-fade-in-up">
          <RectangleGoggles className="text-primary text-sm animate-pulse" />
          <span className="text-primary text-xs font-black uppercase tracking-[0.2em]">
            Now Available in VR
          </span>
        </div>

        <h1 className="text-base-content text-5xl font-black leading-none tracking-tighter mb-6 uppercase italic text-glow">
          <span className="block text-3xl font-extrabold tracking-widest mb-2 opacity-90">
            STEP INTO THE
          </span>
          <span className="block text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-linear-to-r from-primary via-orange-400 to-accent-gold drop-shadow-[0_0_25px_rgba(236,91,19,0.6)]">
            AETHER REALMS
          </span>
        </h1>

        <p className="text-base-content/60 text-lg font-medium max-w-2xl mx-auto! mb-10 leading-relaxed">
          Experience the ultimate VR tabletop strategy game where magic meets
          legend. Command the board from above in immersive arcane environments.
        </p>

        <div className="relative flex flex-col sm:flex-row justify-center gap-8 mt-4!">
          <Button
            size="lg"
            className="text-base! shadow-2xl shadow-primary/40 p-4!"
          >
            Enter the Realm
          </Button>
          <Button
            variant="outline"
            className="bg-base-content/10 backdrop-blur-md border border-base-content/20! text-base-content! p-4! px-7! rounded-xl font-black uppercase tracking-widest hover:bg-white/20 transition-all text-base!"
            onClick={() => scrollToSection("#tutorials")}
          >
            Watch Trailer
          </Button>
        </div>
      </div>

      <div className="hidden sm:block absolute bottom-18 left-1/2 -translate-x-1/2 z-20 scroll-indicator">
        <Icon name="expand_more" size="md" />
      </div>
    </section>
  );
}
