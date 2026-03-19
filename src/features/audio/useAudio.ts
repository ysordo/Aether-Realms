import { useEffect, useState } from 'react'
import { Howl, Howler } from 'howler'
import { getAssetUrl } from '@shared/utils/getAssetUrl'

interface AudioConfig {
  bgmVolume: number
  sfxVolume: number
  muted: boolean
}

interface SoundEffects {
  buttonClick: Howl
  abilityUse: Howl
  levelUp: Howl
  combat: Howl
}

class AudioManager {
  private bgm: Howl | null = null
  private sfx: Partial<SoundEffects> = {}
  private config: AudioConfig = {
    bgmVolume: 0.3,
    sfxVolume: 0.5,
    muted: false,
  }


  constructor() {
    this.loadConfig()
    this.init()
  }

  private loadConfig() {
    const saved = localStorage.getItem('aether-audio-config')
    if (saved) {
      this.config = JSON.parse(saved)
    }
  }

  private saveConfig() {
    localStorage.setItem('aether-audio-config', JSON.stringify(this.config))
  }

  private init() {
    // Initialize background music with seamless loop
    this.bgm = new Howl({
      src: [getAssetUrl('/audio/bgm-loop.mp3')],
      loop: true,
      volume: 0,
      html5: false,
      preload: true,
      autoplay: false,
      onload: () => {

        if (!this.config.muted) {
          this.bgm?.volume(this.config.bgmVolume)
        }
      },
      onloaderror: (_id, error) => {
        console.error('BGM load error:', error)
      },
    })

    // Initialize sound effects
    this.sfx.buttonClick = new Howl({
      src: [getAssetUrl('/audio/sfx-click.mp3')],
      volume: this.config.muted ? 0 : this.config.sfxVolume,
      preload: true,
    })

    this.sfx.abilityUse = new Howl({
      src: [getAssetUrl('/audio/sfx-ability.mp3')],
      volume: this.config.muted ? 0 : this.config.sfxVolume,
      preload: true,
    })

    this.sfx.levelUp = new Howl({
      src: [getAssetUrl('/audio/sfx-levelup.mp3')],
      volume: this.config.muted ? 0 : this.config.sfxVolume,
      preload: true,
    })

    this.sfx.combat = new Howl({
      src: [getAssetUrl('/audio/sfx-combat.mp3')],
      volume: this.config.muted ? 0 : this.config.sfxVolume,
      preload: true,
    })
  }

  playBGM() {
    if (!this.bgm) return

    // Only play if not already playing
    if (!this.bgm.playing()) {
      // Fade in from 0 to target volume
      this.bgm.volume(0)
      this.bgm.play()

      if (!this.config.muted) {
        // Smooth fade in over 2 seconds
        let currentVolume = 0
        const targetVolume = this.config.bgmVolume
        const fadeDuration = 2000
        const stepTime = 50
        const volumeStep = (targetVolume - currentVolume) / (fadeDuration / stepTime)

        const fadeInterval = setInterval(() => {
          currentVolume += volumeStep
          if (currentVolume >= targetVolume) {
            currentVolume = targetVolume
            clearInterval(fadeInterval)
          }
          this.bgm?.volume(Math.min(currentVolume, targetVolume))
        }, stepTime)
      }
    }
  }

  stopBGM() {
    if (!this.bgm) return

    const currentVolume = this.bgm.volume()
    this.bgm.fade(currentVolume, 0, 1000)
    setTimeout(() => {
      this.bgm?.stop()
      this.bgm?.seek(0)
    }, 1000)
  }

  playSFX(name: keyof SoundEffects) {
    const sound = this.sfx[name]
    if (sound && !this.config.muted) {
      // Stop any currently playing instance of this sound
      sound.stop()
      // Reset to beginning
      sound.seek(0)
      // Play immediately
      sound.play()
    }
  }

  setBGMVolume(volume: number) {
    this.config.bgmVolume = Math.max(0, Math.min(1, volume))
    if (!this.config.muted && this.bgm && this.bgm.playing()) {
      this.bgm.volume(this.config.bgmVolume)
    }
    this.saveConfig()
  }

  setSFXVolume(volume: number) {
    this.config.sfxVolume = Math.max(0, Math.min(1, volume))
    Object.values(this.sfx).forEach((sfx) => {
      if (sfx && !this.config.muted) {
        sfx.volume(this.config.sfxVolume)
      }
    })
    this.saveConfig()
  }

  toggleMute() {
    this.config.muted = !this.config.muted
    Howler.mute(this.config.muted)

    if (this.bgm) {
      this.bgm.mute(this.config.muted)
    }

    this.saveConfig()
    return this.config.muted
  }

  getConfig() {
    return { ...this.config }
  }
}

export const audioManager = new AudioManager()

export function useAudio() {
  const [config, setConfig] = useState<AudioConfig>(audioManager.getConfig())
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const checkPlaying = () => setIsPlaying(audioManager.getConfig().muted === false)
    checkPlaying()
  }, [])

  const playBGM = () => {
    audioManager.playBGM()
    setIsPlaying(true)
  }

  const stopBGM = () => {
    audioManager.stopBGM()
    setIsPlaying(false)
  }

  const playSFX = (name: keyof SoundEffects) => {
    audioManager.playSFX(name)
  }

  const setBGMVolume = (volume: number) => {
    audioManager.setBGMVolume(volume)
    setConfig(audioManager.getConfig())
  }

  const setSFXVolume = (volume: number) => {
    audioManager.setSFXVolume(volume)
    setConfig(audioManager.getConfig())
  }

  const toggleMute = () => {
    const muted = audioManager.toggleMute()
    setConfig(audioManager.getConfig())
    setIsPlaying(!muted)
    return muted
  }

  return {
    isPlaying,
    config,
    playBGM,
    stopBGM,
    playSFX,
    setBGMVolume,
    setSFXVolume,
    toggleMute,
  }
}

export default audioManager
