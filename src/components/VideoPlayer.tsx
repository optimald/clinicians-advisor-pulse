'use client'

import { useState, useRef, useEffect } from 'react'
import { X, Play, Pause, Volume2, VolumeX, Maximize2, Minimize2, SkipBack, SkipForward, Settings, RotateCcw } from 'lucide-react'

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
  const [isMobile, setIsMobile] = useState(false)
  const [showMobileControls, setShowMobileControls] = useState(false)
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait')
  
  const videoRef = useRef<HTMLVideoElement>(null)
  const playerRef = useRef<HTMLDivElement>(null)
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null)

  // Mobile detection and orientation handling
  useEffect(() => {
    const checkMobile = () => {
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768
      setIsMobile(mobile)
    }

    const checkOrientation = () => {
      setOrientation(window.innerHeight > window.innerWidth ? 'portrait' : 'landscape')
    }

    checkMobile()
    checkOrientation()
    
    window.addEventListener('resize', () => {
      checkMobile()
      checkOrientation()
    })
    
    window.addEventListener('orientationchange', checkOrientation)
    
    return () => {
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('orientationchange', checkOrientation)
    }
  }, [])

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
      if (newVolume > 0 && isMuted) {
        setIsMuted(false)
      }
    }
  }

  // Mobile touch gesture handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
      time: Date.now()
    }
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartRef.current) return
    
    const touchEnd = {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY,
      time: Date.now()
    }
    
    const deltaX = touchEnd.x - touchStartRef.current.x
    const deltaY = touchEnd.y - touchStartRef.current.y
    const deltaTime = touchEnd.time - touchStartRef.current.time
    
    // Single tap to show/hide controls
    if (Math.abs(deltaX) < 10 && Math.abs(deltaY) < 10 && deltaTime < 300) {
      setShowControls(!showControls)
      setShowMobileControls(!showMobileControls)
      return
    }
    
    // Swipe left/right for seeking
    if (Math.abs(deltaX) > 50 && Math.abs(deltaY) < 100 && deltaTime < 500) {
      if (deltaX > 0) {
        seekForward()
      } else {
        seekBackward()
      }
    }
    
    // Swipe up/down for volume
    if (Math.abs(deltaY) > 50 && Math.abs(deltaX) < 100 && deltaTime < 500) {
      if (deltaY > 0) {
        // Swipe down - decrease volume
        handleVolumeChange(Math.max(0, volume - 0.1))
      } else {
        // Swipe up - increase volume
        handleVolumeChange(Math.min(1, volume + 0.1))
      }
    }
    
    touchStartRef.current = null
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
        style={{
          // Mobile-specific optimizations
          touchAction: 'none', // Prevent default touch behaviors
          WebkitUserSelect: 'none',
          userSelect: 'none'
        }}
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

        {/* Mobile Orientation Lock Button */}
        {isMobile && (
          <button
            onClick={() => {
              if (screen.orientation && 'lock' in screen.orientation) {
                if (orientation === 'portrait') {
                  (screen.orientation as any).lock('landscape').catch(() => {})
                } else {
                  (screen.orientation as any).unlock()
                }
              }
            }}
            className={`absolute top-4 left-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all ${
              showControls ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <RotateCcw className="w-5 h-5 text-white" />
          </button>
        )}

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
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Demo video source - replace with actual video URLs */}
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Video Info Overlay */}
        <div className={`absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 transition-all ${
          showControls ? 'opacity-100' : 'opacity-0'
        } ${isMobile ? 'max-w-[calc(100vw-2rem)] right-4' : 'max-w-md'}`}>
          <h3 className={`text-white font-bold mb-1 ${isMobile ? 'text-base' : 'text-lg'}`}>
            {video.title}
          </h3>
          <p className={`text-gray-300 mb-2 ${isMobile ? 'text-xs' : 'text-sm'}`}>
            {video.description}
          </p>
          <div className={`flex items-center space-x-4 text-xs text-gray-400 ${
            isMobile ? 'flex-wrap gap-2' : ''
          }`}>
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
              className={`bg-amber-400/90 hover:bg-amber-400 rounded-full flex items-center justify-center transition-all transform hover:scale-110 ${
                isMobile ? 'w-16 h-16' : 'w-20 h-20'
              }`}
            >
              <Play className={`text-black ml-1 ${isMobile ? 'w-6 h-6' : 'w-8 h-8'}`} />
            </button>
          </div>
        )}

        {/* Video Controls */}
        <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent transition-all ${
          showControls ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
        } ${isMobile ? 'p-4' : 'p-6'}`}>
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
                                <div className={`flex items-center ${isMobile ? 'space-x-2' : 'space-x-4'}`}>
                      {/* Play/Pause */}
                      <button
                        onClick={togglePlay}
                        className={`bg-amber-400/90 hover:bg-amber-400 rounded-full flex items-center justify-center transition-all ${
                          isMobile ? 'w-10 h-10' : 'w-12 h-12'
                        }`}
                      >
                        {isPlaying ? (
                          <Pause className={`text-black ${isMobile ? 'w-5 h-5' : 'w-6 h-6'}`} />
                        ) : (
                          <Play className={`text-black ml-1 ${isMobile ? 'w-5 h-5' : 'w-6 h-6'}`} />
                        )}
                      </button>

                      {/* Skip Backward */}
                      <button
                        onClick={seekBackward}
                        className={`bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all ${
                          isMobile ? 'w-8 h-8' : 'w-10 h-10'
                        }`}
                      >
                        <SkipBack className={`text-white ${isMobile ? 'w-4 h-4' : 'w-5 h-5'}`} />
                      </button>

                      {/* Skip Forward */}
                      <button
                        onClick={seekForward}
                        className={`bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all ${
                          isMobile ? 'w-8 h-8' : 'w-10 h-10'
                        }`}
                      >
                        <SkipForward className={`text-white ${isMobile ? 'w-4 h-4' : 'w-5 h-5'}`} />
                      </button>

                                    {/* Volume */}
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={toggleMute}
                          className={`bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all ${
                            isMobile ? 'w-8 h-8' : 'w-10 h-10'
                          }`}
                        >
                          {isMuted ? (
                            <VolumeX className={`text-white ${isMobile ? 'w-4 h-4' : 'w-5 h-5'}`} />
                          ) : (
                            <Volume2 className={`text-white ${isMobile ? 'w-4 h-4' : 'w-5 h-5'}`} />
                          )}
                        </button>
                        {!isMobile && (
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
                        )}
                      </div>

                                    {/* Time Display */}
                      <span className={`text-white ${isMobile ? 'text-xs' : 'text-sm'}`}>
                        {formatTime(currentTime)} / {formatTime(duration)}
                      </span>
                    </div>

                    <div className={`flex items-center ${isMobile ? 'space-x-2' : 'space-x-4'}`}>
                      {/* Playback Speed - Hidden on mobile to save space */}
                      {!isMobile && (
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
                      )}

                      {/* Fullscreen */}
                      <button
                        onClick={toggleFullscreen}
                        className={`bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all ${
                          isMobile ? 'w-8 h-8' : 'w-10 h-10'
                        }`}
                      >
                        {isFullscreen ? (
                          <Minimize2 className={`text-white ${isMobile ? 'w-4 h-4' : 'w-5 h-5'}`} />
                        ) : (
                          <Maximize2 className={`text-white ${isMobile ? 'w-4 h-4' : 'w-5 h-5'}`} />
                        )}
                      </button>
                    </div>
          </div>

          {/* Help Text */}
          <div className="mt-2 text-xs text-gray-400 text-center">
            {isMobile ? (
              <div>
                <div>Tap to show/hide controls</div>
                <div>Swipe left/right to seek • Swipe up/down for volume</div>
              </div>
            ) : (
              <div>Space: Play/Pause • M: Mute • F: Fullscreen • ← →: Seek • Esc: Close</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
