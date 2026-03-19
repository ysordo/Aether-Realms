import { useState } from "react";
import { motion } from "framer-motion";
import { useAudio } from "./useAudio";
import { Card } from "@shared/ui/Card";
import { Button } from "@shared/ui/Button";
import { Volume2, VolumeX, Music, Pause, Play } from "lucide-react";

export function AudioSettings() {
  const {
    isPlaying,
    config,
    playBGM,
    stopBGM,
    playSFX,
    setBGMVolume,
    setSFXVolume,
    toggleMute,
  } = useAudio();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-40">
      {/* Settings Button */}
      <Button
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className="p-2! rounded-full bg-base-100/80 backdrop-blur border border-base-content/10 hover:border-primary/50"
      >
        {config.muted ? (
          <VolumeX className="w-5 h-5 text-base-content" />
        ) : (
          <Volume2 className="w-5 h-5 text-base-content" />
        )}
      </Button>

      {/* Settings Panel */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          className="absolute bottom-14 right-0 w-72"
        >
          <Card
            variant="elevated"
            padding="lg"
            className="bg-base-100/95 backdrop-blur border-primary/30"
          >
            <h3 className="text-base-content font-black uppercase tracking-widest text-sm mb-4">
              Audio Settings
            </h3>

            {/* Mute Toggle */}
            <div className="flex items-center justify-between mb-4!">
              <span className="text-base-content/80 text-xs uppercase tracking-widest">
                Master Mute
              </span>
              <Button
                variant={config.muted ? "outline" : "primary"}
                size="sm"
                onClick={toggleMute}
                className={`px-2! py-1! text-xs ${config.muted ? "" : "border border-transparent"}`}
              >
                {config.muted ? "Unmute" : "Mute"}
              </Button>
            </div>

            {/* BGM Volume */}
            <div className="mb-4!">
              <div className="flex items-center justify-between mb-2!">
                <div className="flex items-center gap-2">
                  <Music className="w-4 h-4 text-base-content/80" />
                  <span className="text-base-content/80 text-xs uppercase tracking-widest">
                    Music
                  </span>
                </div>
                <span className="text-base-content/80 text-xs font-mono">
                  {Math.round(config.bgmVolume * 100)}%
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={config.bgmVolume}
                onChange={(e) => setBGMVolume(parseFloat(e.target.value))}
                className="w-full h-2 bg-base-content/50 rounded-lg appearance-none cursor-pointer slider-track"
              />
            </div>

            {/* SFX Volume */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2!">
                <div className="flex items-center gap-2">
                  <Volume2 className="w-4 h-4 text-base-content/80" />
                  <span className="text-base-content/80 text-xs uppercase tracking-widest">
                    SFX
                  </span>
                </div>
                <span className="text-base-content/80 text-xs font-mono">
                  {Math.round(config.sfxVolume * 100)}%
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={config.sfxVolume}
                onChange={(e) => setSFXVolume(parseFloat(e.target.value))}
                className="w-full h-2 bg-base-content/50 rounded-lg appearance-none cursor-pointer slider-track"
              />
            </div>

            {/* Test Buttons */}
            <div className="flex gap-2 pt-4! border-t border-base-content/10">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => playSFX("buttonClick")}
                className="flex-1 text-xs px-2! py-1!"
              >
                Test SFX
              </Button>
              <Button
                variant={isPlaying ? "primary" : "outline"}
                size="sm"
                onClick={isPlaying ? stopBGM : playBGM}
                className={`flex-1 text-xs px-2! py-1! ${isPlaying && "border border-transparent"}`}
              >
                {isPlaying ? (
                  <span className="flex items-center gap-1">
                    <Pause className="w-3 h-3" /> Stop
                  </span>
                ) : (
                  <span className="flex items-center gap-1">
                    <Play className="w-3 h-3" /> Play
                  </span>
                )}
              </Button>
            </div>
          </Card>
        </motion.div>
      )}
    </div>
  );
}
