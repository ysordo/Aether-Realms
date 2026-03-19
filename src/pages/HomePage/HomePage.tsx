import { HeroSection } from "@features/hero-section";
import { EpicStrategySection } from "@features/epic-strategy";
import { HeroGallerySection } from "@features/hero-gallery";
import { GrandBoardSection } from "@features/grand-board";
import { VideoPlayerSection } from "@features/video-player";
import { BiomeExplorerSection } from "@features/biome-explorer";
import { RoadmapSection } from "@features/roadmap";
import { CommunityFeedSection } from "@features/community-feed";
import { NewsletterSection } from "@features/newsletter";
import { CurveSeparator } from "@shared/ui/CurveSeparator";

export function HomePage() {
  return (
    <div className="home-page bg-base-content">
      <HeroSection />
      <CurveSeparator />
      <EpicStrategySection />
      <HeroGallerySection />
      <GrandBoardSection />
      <VideoPlayerSection />
      <BiomeExplorerSection />
      <RoadmapSection />
      <CommunityFeedSection />
      <NewsletterSection />
    </div>
  );
}
