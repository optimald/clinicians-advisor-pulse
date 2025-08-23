'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Star, BookOpen, Users, Globe, Play, Search, Filter, Clock, Eye, ChevronRight, Zap, MessageCircle, Shield, BarChart3, Award, CheckCircle, ChevronRight as ChevronRightIcon, ArrowUpRight, Calendar, CreditCard, Target, TrendingUp, Volume2, VolumeX, Maximize2, Settings, Pause, Minimize2, MessageSquare, Menu, X } from 'lucide-react'
import { videos, categories, Video } from '@/data/videos'
import VideoPlayer from '@/components/VideoPlayer'
import LaserParticles from '@/components/LaserParticles'
import React from 'react'

export default function Home() {
  const router = useRouter()
  const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null)
  const [isPlayerOpen, setIsPlayerOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Open video in modal player
  const openVideo = (video: typeof videos[0]) => {
    setSelectedVideo(video)
    setIsPlayerOpen(true)
  }

  // Close video player
  const closeVideo = () => {
    setSelectedVideo(null)
    setIsPlayerOpen(false)
  }



  // Get top 12 most viewed videos for homepage showcase
  const featuredVideos = videos
    .sort((a, b) => b.views - a.views) // Sort by views (descending)
    .slice(0, 12); // Top 12 most viewed videos

  // Platform data
  const courses = [
    {
      id: 1,
      title: 'Advanced Botox Techniques',
      instructor: 'Dr. Sarah Chen',
      description: 'Master the latest botox injection techniques for natural-looking results',
      duration: '4 hours',
      students: 1247,
      price: 150,
      category: 'Injectables'
    },
    {
      id: 2,
      title: 'Dermal Filler Mastery',
      instructor: 'Dr. Michael Rodriguez',
      description: 'Comprehensive guide to facial contouring with dermal fillers',
      duration: '6 hours',
      students: 892,
      price: 200,
      category: 'Injectables'
    },
    {
      id: 3,
      title: 'Laser Treatments & Safety',
      instructor: 'Dr. Emily Watson',
      description: 'Advanced laser procedures with emphasis on patient safety',
      duration: '5 hours',
      students: 1563,
      price: 175,
      category: 'Laser & Energy'
    }
  ]

  const stats = [
    { label: 'Medical Professionals', value: '15,000+', icon: Users },
    { label: 'Expert Instructors', value: '500+', icon: Star },
    { label: 'Success Rate', value: '95%', icon: TrendingUp },
    { label: 'Support Available', value: '24/7', icon: Clock }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Discover Your Goals',
      description: 'Identify your learning objectives and target patient demographics'
    },
    {
      step: '02',
      title: 'Choose Your Path',
      description: 'Select from specialized courses and certification programs'
    },
    {
      step: '03',
      title: 'Learn & Practice',
      description: 'Engage with expert-led content and hands-on training'
    },
    {
      step: '04',
      title: 'Get Certified',
      description: 'Earn professional credentials and advance your career'
    }
  ]

  const features = [
    {
      title: 'Targeted Learning',
      description: 'Specialized courses designed for your specific area of practice and skill level.',
      icon: Target
    },
    {
      title: 'Career Advancement',
      description: 'Professional certifications and advanced training to accelerate your career growth.',
      icon: TrendingUp
    },
    {
      title: 'Expert Community',
      description: 'Connect with industry leaders and peers in our exclusive professional network.',
      icon: Users
    }
  ]

  const testimonials = [
    {
      name: 'Dr. Jennifer Martinez',
      role: 'Dermatologist, Miami',
      content: 'CliniciansAdvisor transformed my practice. The advanced techniques I learned here have increased my patient satisfaction by 300%.'
    },
    {
      name: 'Dr. Robert Chen',
      role: 'Plastic Surgeon, LA',
      content: 'The quality of education here is unmatched. I\'ve been able to expand my services and grow my practice significantly.'
    }
  ]

  // Video preview data with actual content from scraped site
  const videoPreviews: Video[] = [
    {
      id: '1',
      title: 'LIPOcel Animation',
      description: 'Comprehensive animation demonstrating LIPOcel technology',
      thumbnail: 'https://img.youtube.com/vi/jbWidiQOkgA/mqdefault.jpg',
      duration: '2:15',
      views: 290,
      category: 'Device Highlights',
      videoUrl: null,
      tags: ['lipocell', 'animation', 'device'],
      instructor: null,
      difficulty: 'Beginner'
    },
    {
      id: '2',
      title: 'Meet MultiFrax - Webinar',
      description: 'Expert webinar hosted by Dr. Jeanine Downie',
      thumbnail: 'https://img.youtube.com/vi/blfoEQpoRHo/maxresdefault.jpg',
      duration: '45:30',
      views: 427,
      category: 'Webinars',
      videoUrl: null,
      tags: ['webinar', 'multifrax', 'Dr. Downie'],
      instructor: 'Dr. Jeanine Downie',
      difficulty: 'Intermediate'
    },
    {
      id: '3',
      title: 'ECHO Treatment Screen GUI',
      description: 'Detailed walkthrough of ECHO interface',
      thumbnail: 'https://img.youtube.com/vi/xgMHgiiGRec/maxresdefault.jpg',
      duration: '5:15',
      views: 189,
      category: 'Device Training',
      videoUrl: null,
      tags: ['echo', 'GUI', 'interface'],
      instructor: null,
      difficulty: 'Beginner'
    },
    {
      id: '4',
      title: 'Quanta System ECHO Device',
      description: 'Comprehensive overview of ECHO device capabilities',
      thumbnail: 'https://img.youtube.com/vi/yiElNyuRtrc/maxresdefault.jpg',
      duration: '3:20',
      views: 312,
      category: 'Device Highlights',
      videoUrl: null,
      tags: ['quanta', 'echo', 'device'],
      instructor: null,
      difficulty: 'All Levels'
    }
  ]



  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black/90 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <img
                src="/ca-logo-transparent.png"
                alt="CliniciansAdvisor Logo"
                className="h-10 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/request" className="hover:text-teal-400 transition-colors">Request Video</a>
              <a href="/videos" className="hover:text-teal-400 transition-colors">Browse Videos</a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-teal-400 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-800 py-4"
            >
              <nav className="flex flex-col space-y-4">
                <a 
                  href="/request" 
                  className="text-white hover:text-teal-400 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Request Video
                </a>
                <a 
                  href="/videos" 
                  className="text-white hover:text-teal-400 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Browse Videos
                </a>
              </nav>
            </motion.div>
          )}
        </div>
      </header>



      {/* Hero Section - Video-Centric like Vimeo */}
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 overflow-hidden">
        {/* Laser Particles Background */}
        <LaserParticles />
        
        {/* Background Elements with 3D Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-400/5 to-teal-500/5"></div>
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h1 
                className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 2
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                MASTER MEDICAL<br />
                <motion.span 
                  className="text-teal-400"
                  whileHover={{ 
                    scale: 1.05,
                    textShadow: "0 0 30px rgba(90, 155, 155, 0.5)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  AESTHETICS
                </motion.span><br />
                EDUCATION
              </motion.h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Access comprehensive educational content from industry experts, build your clinical skills through 
                verified training videos, and advance your medical aesthetics practice with evidence-based knowledge.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.button
                  onClick={() => router.push('/videos')}
                  className="inline-flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white rounded-lg font-bold text-lg shadow-lg"
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    boxShadow: "0 20px 40px rgba(90, 155, 155, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Play className="w-6 h-6" />
                  <span>EXPLORE VIDEOS</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  onClick={() => router.push('/request')}
                  className="inline-flex items-center justify-center space-x-3 px-8 py-4 bg-transparent border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white rounded-lg font-bold text-lg"
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: -5,
                    borderColor: "#5A9B9B",
                    boxShadow: "0 10px 30px rgba(90, 155, 155, 0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <MessageSquare className="w-6 h-6" />
                  <span>Request a Video</span>
                </motion.button>
              </div>


              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-teal-400" />
                  <span>{videos.length}+ Training Videos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-teal-400" />
                  <span>Expert Instructors</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-teal-400" />
                  <span>Professional Community</span>
                </div>
              </div>
            </div>

            {/* Right Panel - Video Preview Grid */}
            <div className="relative">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 shadow-2xl">
                <div className="text-center mb-6">
                  <Play className="w-16 h-16 text-teal-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-teal-400 mb-2">Featured Training</h3>
                  <p className="text-gray-400">Professional medical aesthetics content</p>
                </div>
                
                {/* Video Preview Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {videoPreviews.map((video) => (
                    <motion.div 
                      key={video.id} 
                      className="relative group cursor-pointer"
                      onClick={() => openVideo(video)}
                      whileHover={{ 
                        scale: 1.05,
                        rotateY: 5,
                        z: 50
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="relative h-20 bg-gradient-to-br from-amber-400/20 to-purple-500/20 rounded-lg overflow-hidden">
                        
                        {/* Video Thumbnail - Now properly displayed */}
                        {video.thumbnail ? (
                          <img 
                            src={video.thumbnail} 
                            alt={video.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              // Fallback to gradient if image fails to load
                              e.currentTarget.style.display = 'none';
                              const fallback = e.currentTarget.nextElementSibling;
                              if (fallback) {
                                (fallback as HTMLElement).style.display = 'flex';
                              }
                            }}
                          />
                        ) : null}
                        
                        {/* Fallback gradient background */}
                        <div className={`w-full h-full bg-gradient-to-br from-amber-400/30 to-purple-500/30 flex items-center justify-center ${video.thumbnail ? 'hidden' : 'flex'}`}>
                          <Play className="w-6 h-6 text-teal-400 group-hover:scale-110 transition-transform" />
                        </div>
                        
                        {/* Play Overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <div className="w-8 h-8 bg-amber-400/90 rounded-full flex items-center justify-center">
                            <Play className="w-4 h-4 text-black ml-0.5" />
                          </div>
                        </div>
                        
                        {/* Duration Badge */}
                        <div className="absolute bottom-1 right-1 bg-black/80 text-white px-1 py-0.5 rounded text-xs">
                          {video.duration}
                        </div>
                      </div>
                      
                      {/* Video Info */}
                      <div className="mt-1">
                        <h4 className="font-semibold text-white text-xs leading-tight line-clamp-2">
                          {video.title}
                        </h4>
                        <p className="text-gray-400 text-xs mt-1">
                          {video.category} • {video.views} views
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <button
                  onClick={() => router.push('/videos')}
                  className="w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 transition-all font-medium"
                >
                  Browse Full Collection
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-teal-400 mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Videos Section - Moved to be right after hero */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-white">Featured</span>{' '}
                                <span className="text-teal-400">Training Videos</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start with these top 12 most viewed videos covering key topics in medical aesthetics
            </p>
          </div>

          {/* Featured Videos Grid - Larger, More Prominent */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredVideos.map((video) => (
              <motion.div
                key={video.id}
                className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 hover:border-amber-400/50 cursor-pointer group"
                onClick={() => openVideo(video)}
                whileHover={{ 
                  scale: 1.03,
                  rotateY: 3,
                  z: 30,
                  borderColor: "#f59e0b"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Enhanced Video Thumbnail */}
                <div className="relative h-64">
                  {/* Display actual thumbnail if available */}
                  {video.thumbnail ? (
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to gradient if image fails to load
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.nextElementSibling;
                        if (fallback) {
                          (fallback as HTMLElement).style.display = 'flex';
                        }
                      }}
                    />
                  ) : null}
                  
                  {/* Fallback gradient background */}
                  <div className={`w-full h-full bg-gradient-to-br from-amber-400/20 to-purple-500/20 flex items-center justify-center ${video.thumbnail ? 'hidden' : 'flex'}`}>
                                            <Play className="w-20 h-20 text-teal-400 group-hover:scale-110 transition-transform" />
                  </div>
                  
                  {/* Play Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="w-16 h-16 bg-amber-400/90 rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-black ml-1" />
                    </div>
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="absolute top-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-xs">
                    {video.duration}
                  </div>
                  
                  {/* Views Badge */}
                  <div className="absolute bottom-3 left-3 bg-black/80 text-white px-2 py-1 rounded text-xs flex items-center space-x-1">
                    <Eye className="w-3 h-3" />
                    <span>{video.views}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-xs bg-teal-400/20 text-teal-400 px-2 py-1 rounded">
                      {categories.find(c => c.id === video.category)?.name}
                    </span>
                    {video.difficulty && (
                      <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">
                        {video.difficulty}
                      </span>
                    )}
                  </div>

                  <h3 className="font-semibold text-lg mb-3 group-hover:text-teal-400 transition-colors line-clamp-2">
                    {video.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {video.description}
                  </p>

                  {video.instructor && (
                    <p className="text-teal-400 text-sm mb-4 font-medium">
                      Instructor: {video.instructor}
                    </p>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {video.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ChevronRight className="w-5 h-5 text-teal-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View Full Collection CTA */}
          <div className="text-center">
            <button
              onClick={() => router.push('/videos')}
              className="inline-flex items-center space-x-3 px-8 py-4 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-all font-bold text-lg"
            >
              <span>View Full Video Collection</span>
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Video Categories Section - Show More Videos */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              EXPLORE VIDEOS BY<br />
              <span className="text-teal-400">CATEGORY</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse our complete library of 201+ videos organized by topic and expertise level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {categories.slice(0, 8).map((category) => {
              const categoryVideos = videos.filter(v => v.category === category.id).slice(0, 8)
              return (
                <div key={category.id} className="bg-black/50 rounded-xl overflow-hidden border border-gray-800">
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-teal-400/20 rounded-lg flex items-center justify-center">
                        {getIconComponent(category.icon)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{category.name}</h3>
                        <p className="text-teal-400 text-sm">{category.count} videos</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      {categoryVideos.map((video) => (
                        <motion.div
                          key={video.id}
                          className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg cursor-pointer group"
                          onClick={() => openVideo(video)}
                          whileHover={{ 
                            scale: 1.02,
                            rotateY: 2,
                            backgroundColor: "rgba(90, 155, 155, 0.1)"
                          }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="w-16 h-12 bg-gradient-to-br from-teal-400/20 to-teal-500/20 rounded overflow-hidden flex-shrink-0">
                            {video.thumbnail ? (
                              <img 
                                src={video.thumbnail} 
                                alt={video.title}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <Play className="w-6 h-6 text-teal-400" />
                              </div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-sm line-clamp-2 group-hover:text-teal-400 transition-colors">
                              {video.title}
                            </h4>
                            <p className="text-xs text-gray-400 mt-1">
                              {video.duration} • {video.views} views
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    
                    <button 
                      onClick={() => router.push('/videos')}
                      className="w-full py-3 bg-teal-400/10 text-teal-400 rounded-lg hover:bg-teal-400/20 transition-all font-medium"
                    >
                      View All {category.count} Videos
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center">
            <motion.button
              onClick={() => router.push('/videos')}
              className="px-8 py-4 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-all font-bold text-lg"
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 20px 40px rgba(90, 155, 155, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Browse Complete Video Library
            </motion.button>
          </div>
        </div>
      </section>

      {/* How We Can Help Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              HOW WE CAN HELP YOU WITH<br />
              <span className="text-amber-400">MEDICAL AESTHETICS EDUCATION</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive training programs designed to elevate your skills and advance your career in medical aesthetics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-amber-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-10 h-10 text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              OUR LEARNING PROCESS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-amber-400 text-black rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              MEDICAL AESTHETICS COURSES
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Learn from industry experts with hands-on experience and earn professional certification to accelerate your career in medical aesthetics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {courses.map((course) => (
              <div key={course.id} className="bg-black/50 rounded-xl overflow-hidden border border-gray-800 hover:border-amber-400/50 transition-all">
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-xs bg-amber-400/20 text-amber-400 px-2 py-1 rounded">
                      {course.category}
                    </span>
                  </div>

                  <h3 className="font-semibold text-xl mb-3">{course.title}</h3>
                  <p className="text-amber-400 text-sm mb-4 font-medium">
                    {course.instructor}
                  </p>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{course.students} students</span>
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-amber-400">${course.price}</div>
                    <button className="px-6 py-2 bg-amber-400 text-black rounded-lg hover:bg-amber-500 transition-all font-medium">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="px-8 py-4 bg-transparent border-2 border-amber-400 text-amber-400 rounded-lg hover:bg-amber-400 hover:text-black transition-all font-bold text-lg">
              View all courses
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              ACCELERATE YOUR CAREER IN<br />
              <span className="text-amber-400">AESTHETICS TRAINING</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Learn from industry experts, gain confidence, lead.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold mb-4">Free</h3>
              <div className="text-4xl font-bold text-amber-400 mb-6">$0<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-amber-400" />
                  <span className="text-gray-300">Access to 1 Masterclass</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-amber-400" />
                  <span className="text-gray-300">80% discount on live sessions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-amber-400" />
                  <span className="text-gray-300">1 Free Starter Class</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-amber-400" />
                  <span className="text-gray-300">Basic community access</span>
                </li>
              </ul>
              <button className="w-full bg-amber-400 text-black py-3 rounded-lg hover:bg-amber-500 transition-all font-medium">
                Get Started
              </button>
            </div>

            {/* Basic Plan */}
            <div className="bg-gray-900/50 rounded-xl p-8 border-2 border-amber-400 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-400 text-black px-4 py-2 rounded-full text-sm font-medium">
                Most popular
              </div>
              <h3 className="text-2xl font-bold mb-4">Basic</h3>
              <div className="text-4xl font-bold text-amber-400 mb-6">$29<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-amber-400" />
                  <span className="text-gray-300">Access to 3 Masterclasses</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-amber-400" />
                  <span className="text-gray-300">20% off certificates</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-amber-400" />
                  <span className="text-gray-300">Access to all content</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-amber-400" />
                  <span className="text-gray-300">Priority support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-amber-400" />
                  <span className="text-gray-300">Live Q&A sessions</span>
                </li>
              </ul>
              <button className="w-full bg-amber-400 text-black py-3 rounded-lg hover:bg-amber-500 transition-all font-medium">
                Learn More
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold mb-4">Premium</h3>
              <div className="text-4xl font-bold text-amber-400 mb-6">$79<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-amber-400" />
                  <span className="text-gray-300">Access to 5 Masterclasses</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-amber-400" />
                  <span className="text-gray-300">30% off certificates</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-amber-400" />
                  <span className="text-gray-300">Mentorship program</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-amber-400" />
                  <span className="text-gray-300">Catalog of products</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-amber-400" />
                  <span className="text-gray-300">Direct expert access</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-amber-400" />
                  <span className="text-gray-300">Custom learning paths</span>
                </li>
              </ul>
              <button className="w-full bg-amber-400 text-black py-3 rounded-lg hover:bg-amber-500 transition-all font-medium">
                Get Instant Access
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">TESTIMONIALS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-black/50 rounded-xl p-8 border border-gray-800">
                <p className="text-gray-300 mb-6 text-lg italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-lg">{testimonial.name}</div>
                  <div className="text-amber-400">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-400 to-orange-500 text-black relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Master Medical Aesthetics Education
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join the definitive platform for medical aesthetics professionals and advance your clinical skills through expert-led training and comprehensive resources.
          </p>
          <button className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-900 transition-all font-bold text-lg">
            Get Started Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="/ca-logo-transparent.png"
                  alt="CliniciansAdvisor Logo"
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-gray-400">
                The definitive digital ecosystem for medical aesthetics professionals.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/" className="hover:text-teal-400 transition-colors">Home</a></li>
                <li><a href="/videos" className="hover:text-teal-400 transition-colors">Video Library</a></li>
                <li><a href="/request" className="hover:text-teal-400 transition-colors">Request Video</a></li>
                <li><a href="/concept" className="hover:text-teal-400 transition-colors">Platform Concept</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">About</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Terms and Conditions</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Cookies</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>contact@cliniciansadvisor.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Medical Center Dr<br />Suite 100<br />New York, NY 10001</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 CliniciansAdvisor. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Video Player Modal */}
      <VideoPlayer
        video={selectedVideo}
        isOpen={isPlayerOpen}
        onClose={closeVideo}
      />
    </div>
  )
}

// Helper function to get icon component
function getIconComponent(iconName: string) {
  const iconMap: { [key: string]: React.ReactNode } = {
    'BookOpen': <BookOpen className="w-8 h-8 text-amber-400" />,
    'Star': <Star className="w-8 h-8 text-amber-400" />,
    'Zap': <Zap className="w-8 h-8 text-amber-400" />,
    'MessageCircle': <MessageCircle className="w-8 h-8 text-amber-400" />,
    'Shield': <Shield className="w-8 h-8 text-amber-400" />,
    'BarChart3': <BarChart3 className="w-8 h-8 text-amber-400" />,
    'Users': <Users className="w-8 h-8 text-amber-400" />,
    'Award': <Award className="w-8 h-8 text-amber-400" />,
    'Globe': <Globe className="w-8 h-8 text-amber-400" />
  }
  return iconMap[iconName] || <Star className="w-8 h-8 text-amber-400" />
}
