'use client'

import { useState, useRef, useEffect } from 'react'
import { X, Play, Pause, Volume2, VolumeX, Maximize2, Minimize2, SkipBack, SkipForward, Settings } from 'lucide-react'

import { Video } from '@/data/videos'

interface VideoPlayerProps {
  video: Video | null
  isOpen: boolean
  onClose: () => void
}

export default function VideoPlayer({ video, isOpen, onClose }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const [playbackRate, setPlaybackRate] = useState(1)
  
  const videoRef = useRef<HTMLVideoElement>(null)
  const playerRef = useRef<HTMLDivElement>(null)
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Reset player state when video changes and auto-play
  useEffect(() => {
    if (video) {
      setIsPlaying(false)
      setCurrentTime(0)
      setDuration(0)
      
      // Auto-play the video when modal opens
      const timer = setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play()
          setIsPlaying(true)
        }
      }, 100) // Small delay to ensure video element is ready
      
      return () => clearTimeout(timer)
    }
  }, [video])

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (!isOpen || !video) return
      
      switch (event.key.toLowerCase()) {
        case ' ':
          event.preventDefault()
          togglePlay()
          break
        case 'm':
          event.preventDefault()
          toggleMute()
          break
        case 'f':
          event.preventDefault()
          toggleFullscreen()
          break
        case 'escape':
          if (isFullscreen) {
            toggleFullscreen()
          } else {
            onClose()
          }
          break
        case 'arrowleft':
          event.preventDefault()
          seekBackward()
          break
        case 'arrowright':
          event.preventDefault()
          seekForward()
          break
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [isOpen, video, isFullscreen])

  // Auto-hide controls
  useEffect(() => {
    if (showControls && isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false)
      }, 3000)
    }
    
    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current)
      }
    }
  }, [showControls, isPlaying])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement && playerRef.current) {
      playerRef.current.requestFullscreen()
      setIsFullscreen(true)
    } else if (document.fullscreenElement) {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  const seekBackward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime - 10)
    }
  }

  const seekForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = Math.min(duration, videoRef.current.currentTime + 10)
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
    }
  }

  const handleVolumeChange = (newVolume: number) => {
    if (videoRef.current) {
      videoRef.current.volume = newVolume
      setVolume(newVolume)
      setIsMuted(newVolume === 0)
    }
  }

  const handleSeek = (newTime: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = newTime
      setCurrentTime(newTime)
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const handleMouseMove = () => {
    setShowControls(true)
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current)
    }
  }

  if (!isOpen || !video) return null

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div 
        ref={playerRef}
        className="relative w-full h-full bg-black"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => isPlaying && setShowControls(false)}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all ${
            showControls ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Video Element */}
        <video
          ref={videoRef}
          className="w-full h-full object-contain"
          poster={video.thumbnail}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onClick={togglePlay}
        >
          {/* Demo video source - replace with actual video URLs */}
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Video Info Overlay */}
        <div className={`absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 max-w-md transition-all ${
          showControls ? 'opacity-100' : 'opacity-0'
        }`}>
          <h3 className="text-white font-bold text-lg mb-1">{video.title}</h3>
          <p className="text-gray-300 text-sm mb-2">{video.description}</p>
          <div className="flex items-center space-x-4 text-xs text-gray-400">
            <span>{video.category}</span>
            <span>{video.views} views</span>
            {video.instructor && <span>By {video.instructor}</span>}
            {video.difficulty && <span>{video.difficulty}</span>}
          </div>
        </div>

        {/* Center Play Button */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={togglePlay}
              className="w-20 h-20 bg-amber-400/90 hover:bg-amber-400 rounded-full flex items-center justify-center transition-all transform hover:scale-110"
            >
              <Play className="w-8 h-8 text-black ml-1" />
            </button>
          </div>
        )}

        {/* Video Controls */}
        <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 transition-all ${
          showControls ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
        }`}>
          {/* Progress Bar */}
          <div className="mb-4">
            <input
              type="range"
              min="0"
              max={duration}
              value={currentTime}
              onChange={(e) => handleSeek(parseFloat(e.target.value))}
              className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #f59e0b 0%, #f59e0b ${(currentTime / duration) * 100}%, #4b5563 ${(currentTime / duration) * 100}%, #4b5563 100%)`
              }}
            />
          </div>

          {/* Control Bar */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Play/Pause */}
              <button
                onClick={togglePlay}
                className="w-12 h-12 bg-amber-400/90 hover:bg-amber-400 rounded-full flex items-center justify-center transition-all"
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 text-black" />
                ) : (
                  <Play className="w-6 h-6 text-black ml-1" />
                )}
              </button>

              {/* Skip Backward */}
              <button
                onClick={seekBackward}
                className="w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all"
              >
                <SkipBack className="w-5 h-5 text-white" />
              </button>

              {/* Skip Forward */}
              <button
                onClick={seekForward}
                className="w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all"
              >
                <SkipForward className="w-5 h-5 text-white" />
              </button>

              {/* Volume */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={toggleMute}
                  className="w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all"
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5 text-white" />
                  ) : (
                    <Volume2 className="w-5 h-5 text-white" />
                  )}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                  className="w-20 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #f59e0b 0%, #f59e0b ${volume * 100}%, #4b5563 ${volume * 100}%, #4b5563 100%)`
                  }}
                />
              </div>

              {/* Time Display */}
              <span className="text-white text-sm">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            <div className="flex items-center space-x-4">
              {/* Playback Speed */}
              <select
                value={playbackRate}
                onChange={(e) => {
                  const rate = parseFloat(e.target.value)
                  setPlaybackRate(rate)
                  if (videoRef.current) {
                    videoRef.current.playbackRate = rate
                  }
                }}
                className="bg-black/50 text-white text-sm px-2 py-1 rounded"
              >
                <option value="0.5">0.5x</option>
                <option value="0.75">0.75x</option>
                <option value="1">1x</option>
                <option value="1.25">1.25x</option>
                <option value="1.5">1.5x</option>
                <option value="2">2x</option>
              </select>

              {/* Fullscreen */}
              <button
                onClick={toggleFullscreen}
                className="w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all"
              >
                {isFullscreen ? (
                  <Minimize2 className="w-5 h-5 text-white" />
                ) : (
                  <Maximize2 className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
          </div>

          {/* Keyboard Shortcuts Help */}
          <div className="mt-2 text-xs text-gray-400 text-center">
            Space: Play/Pause • M: Mute • F: Fullscreen • ← →: Seek • Esc: Close
          </div>
        </div>
      </div>
    </div>
  )
}
