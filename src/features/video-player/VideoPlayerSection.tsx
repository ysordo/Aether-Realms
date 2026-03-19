import { useState, useRef, useEffect } from "react";
import { Card } from "@shared/ui/Card";
import { VIDEOS } from "@shared/constants";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Settings,
  SkipBack,
  SkipForward,
} from "lucide-react";

interface VideoInfo {
  duration: number;
  currentTime: number;
  title: string;
  description: string;
}

const videoMetadata = [
  {
    title: "Getting Started Guide",
    description: "Learn the basics of Aether Realms",
  },
  { title: "Advanced Combat", description: "Master the combat system" },
  {
    title: "Golden Knight Showcase",
    description: "See the Golden Knight in action",
  },
  { title: "Blue Mage Abilities", description: "Explore the Blue Mage powers" },
  { title: "Assassin Gameplay", description: "Master the art of stealth" },
  { title: "Fairy Queen Powers", description: "Nature magic unleashed" },
  { title: "Forge of Destiny", description: "Craft legendary items" },
  { title: "Forge Mechanics", description: "Deep dive into crafting" },
  { title: "Floating Bazaar Tour", description: "Explore the marketplace" },
  { title: "Bazaar Trading", description: "Trading tips and tricks" },
  { title: "Minigame Tower", description: "Challenge the tower" },
  { title: "Volcano Zone", description: "Survive the lava lands" },
];

const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
};

export function VideoPlayerSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [videoInfo, setVideoInfo] = useState<VideoInfo>({
    duration: 0,
    currentTime: 0,
    title: "",
    description: "",
  });
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      setVideoInfo((prev) => ({
        ...prev,
        duration: video.duration,
        title: videoMetadata[currentVideo]?.title || "Video Tutorial",
        description:
          videoMetadata[currentVideo]?.description || "Watch and learn",
      }));
    };

    const handleTimeUpdate = () => {
      setVideoInfo((prev) => ({
        ...prev,
        currentTime: video.currentTime,
      }));
    };

    const handleEnded = () => {
      setIsPlaying(false);
      // Auto-advance to next video
      if (currentVideo < VIDEOS.length - 1) {
        setCurrentVideo((prev) => prev + 1);
        setTimeout(() => {
          videoRef.current?.play();
          setIsPlaying(true);
        }, 500);
      }
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
    };
  }, [currentVideo]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    const container = videoRef.current?.parentElement;
    if (!container) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      container.requestFullscreen();
    }
  };

  const skipVideo = (direction: "forward" | "back") => {
    if (direction === "forward" && currentVideo < VIDEOS.length - 1) {
      setCurrentVideo((prev) => prev + 1);
      setIsPlaying(false);
    } else if (direction === "back" && currentVideo > 0) {
      setCurrentVideo((prev) => prev - 1);
      setIsPlaying(false);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const time = parseFloat(e.target.value);
    videoRef.current.currentTime = time;
    setVideoInfo((prev) => ({ ...prev, currentTime: time }));
  };

  return (
    <section className="bg-base-100 py-24! px-6! lg:px-40!" id="tutorials">
      <div className="text-center mb-16! space-y-6!">
        <div className="flex items-center justify-center gap-2">
          <div className="h-1 w-12 bg-primary" />
          <span className="text-primary font-black uppercase tracking-[0.3em] text-sm">
            Learn to Play
          </span>
          <div className="h-1 w-12 bg-primary" />
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-base-content uppercase italic">
          Master the Realms
        </h2>
        <p className="text-base-content/60 text-lg max-w-2xl mx-auto!">
          Watch our comprehensive tutorials and become an Aether legend in
          minutes.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto! mb-16!">
        <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-primary rounded-tl-lg" />
        <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-primary rounded-tr-lg" />
        <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-primary rounded-bl-lg" />
        <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-primary rounded-br-lg" />

        <div className="relative rounded-xl overflow-hidden gold-border bg-base-100/50 group">
          <div className="aspect-video relative">
            <video
              ref={videoRef}
              src={VIDEOS[currentVideo]}
              className="w-full h-full object-cover"
              onClick={togglePlay}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* Play/Pause Overlay */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <button
                  onClick={togglePlay}
                  className="group flex items-center justify-center w-24 h-24 rounded-full bg-primary/90 hover:bg-primary transition-all transform hover:scale-110 shadow-2xl shadow-primary/40"
                  aria-label="Play video"
                >
                  <Play className="w-12 h-12 text-base-content fill-base-content ml-1" />
                </button>
              </div>
            )}

            {/* Video Controls */}
            <div className="absolute bottom-0 left-0 right-0 p-4! bg-linear-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {/* Progress Bar */}
              <input
                type="range"
                min="0"
                max={videoInfo.duration || 100}
                value={videoInfo.currentTime}
                onChange={handleSeek}
                className="w-full h-1 bg-base-content/30 rounded-lg appearance-none cursor-pointer mb-3!
                         [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 
                         [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary
                         [&::-webkit-slider-thumb]:hover:scale-125 [&::-webkit-slider-thumb]:transition-transform"
              />

              {/* Controls Row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Play/Pause Button */}
                  <button
                    onClick={togglePlay}
                    className="text-base-content hover:text-primary transition-colors"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6" />
                    ) : (
                      <Play className="w-6 h-6" />
                    )}
                  </button>

                  {/* Skip Back */}
                  <button
                    onClick={() => skipVideo("back")}
                    className="text-base-content/80 hover:text-base-content transition-colors disabled:opacity-30"
                    disabled={currentVideo === 0}
                    aria-label="Previous video"
                  >
                    <SkipBack className="w-5 h-5" />
                  </button>

                  {/* Skip Forward */}
                  <button
                    onClick={() => skipVideo("forward")}
                    className="text-base-content/80 hover:text-base-content transition-colors disabled:opacity-30"
                    disabled={currentVideo === VIDEOS.length - 1}
                    aria-label="Next video"
                  >
                    <SkipForward className="w-5 h-5" />
                  </button>

                  {/* Volume */}
                  <button
                    onClick={toggleMute}
                    className="text-base-content/80 hover:text-base-content transition-colors"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? (
                      <VolumeX className="w-5 h-5" />
                    ) : (
                      <Volume2 className="w-5 h-5" />
                    )}
                  </button>

                  {/* Time Display */}
                  <span className="text-base-content/80 text-sm font-mono">
                    {formatTime(videoInfo.currentTime)} /{" "}
                    {formatTime(videoInfo.duration)}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  {/* Settings */}
                  <button
                    className="text-base-content/80 hover:text-base-content transition-colors"
                    aria-label="Settings"
                  >
                    <Settings className="w-5 h-5" />
                  </button>

                  {/* Fullscreen */}
                  <button
                    onClick={toggleFullscreen}
                    className="text-base-content/80 hover:text-base-content transition-colors"
                    aria-label="Fullscreen"
                  >
                    <Maximize className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Video Info */}
          <div className="p-4! bg-base-100/80 border-t border-base-content/10">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-base-content font-bold uppercase tracking-widest text-sm mb-1!">
                  {videoInfo.title}
                </h3>
                <p className="text-base-content/60 text-xs">
                  {videoInfo.description}
                </p>
              </div>
              <div className="flex items-center gap-2 text-base-content/60 text-xs">
                <span className="px-2! py-1! bg-primary/20 text-primary rounded text-xs font-bold uppercase">
                  Tutorial
                </span>
                {videoInfo.duration > 0 && (
                  <span className="font-mono">
                    {formatTime(videoInfo.duration)}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Video Thumbnails */}
        <div className="flex gap-2 mt-4! overflow-x-auto p-2! scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent">
          {VIDEOS.map((video, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentVideo(index);
                setIsPlaying(false);
              }}
              className={`shrink-0 w-32 h-20 rounded-lg overflow-hidden border-2 transition-all hover:scale-105 ${
                currentVideo === index
                  ? "border-primary shadow-lg shadow-primary/30"
                  : "border-transparent hover:border-base-content/30"
              }`}
            >
              <video
                src={video}
                className="w-full h-full object-cover"
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => e.currentTarget.pause()}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Tutorial Steps */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto!">
        <Card variant="outlined" padding="lg" className="text-center space-y-4!">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto!">
            <Play className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-base-content font-black uppercase tracking-widest">
            Watch
          </h3>
          <p className="text-base-content/60 text-sm leading-relaxed">
            Learn the basics through interactive tutorials
          </p>
        </Card>
        <Card variant="outlined" padding="lg" className="text-center space-y-4!">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto!">
            <Settings className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-base-content font-black uppercase tracking-widest">
            Interact
          </h3>
          <p className="text-base-content/60 text-sm leading-relaxed">
            Practice with guided VR interactions
          </p>
        </Card>
        <Card variant="outlined" padding="lg" className="text-center space-y-4!">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto!">
            <SkipForward className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-base-content font-black uppercase tracking-widest">
            Master
          </h3>
          <p className="text-base-content/60 text-sm leading-relaxed">
            Dominate the board with your new skills
          </p>
        </Card>
      </div>
    </section>
  );
}
