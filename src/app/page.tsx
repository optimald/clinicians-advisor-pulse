'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight, Star, BookOpen, Users, Globe, Play, Search, Filter, Clock, Eye, ChevronRight, Zap, MessageCircle, Shield, BarChart3, Award } from 'lucide-react'
import { videos, categories } from '@/data/videos'
import { motion } from 'framer-motion'

export default function Home() {
  const router = useRouter()

  // Get featured videos for homepage showcase
  const featuredVideos = videos.slice(0, 6) // First 6 videos as featured

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section - Free Video Library Focus */}
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-purple-500/10"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Play className="w-24 h-24 text-amber-400 mx-auto mb-6" />
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="text-white">FREE</span>{' '}
              <span className="text-amber-400">VIDEO LIBRARY</span>
            </h1>
            <p className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Access <span className="text-amber-400 font-semibold">201+ professional medical aesthetics videos</span> covering device training, 
              industry knowledge, and expert insights. All completely free.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400">201+</div>
              <div className="text-gray-400">Professional Videos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400">10</div>
              <div className="text-gray-400">Expert Categories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400">100%</div>
              <div className="text-gray-400">Free Access</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400">24/7</div>
              <div className="text-gray-400">Available</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => router.push('/videos')}
              className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-black rounded-lg transition-all font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Play className="w-6 h-6" />
              <span>Start Watching Now</span>
              <ArrowRight className="w-6 h-6" />
            </button>
            <button
              onClick={() => router.push('/platform')}
              className="inline-flex items-center space-x-3 px-8 py-4 bg-transparent border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black rounded-lg transition-all font-bold text-lg"
            >
              <BookOpen className="w-6 h-6" />
              <span>Explore Premium Courses</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Featured Videos Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Featured</span>{' '}
              <span className="text-amber-400">Videos</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start with these popular videos covering essential topics in medical aesthetics
            </p>
          </div>

          {/* Featured Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredVideos.map((video) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-black/50 rounded-xl overflow-hidden border border-gray-800 hover:border-amber-400/50 transition-all group cursor-pointer"
                onClick={() => router.push('/videos')}
              >
                {/* Thumbnail */}
                <div className="relative h-48">
                  <div className="w-full h-full bg-gradient-to-br from-amber-400/20 to-purple-500/20 flex items-center justify-center">
                    <Play className="w-16 h-16 text-amber-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="absolute top-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs">
                    {video.duration}
                  </div>
                  <div className="absolute bottom-2 left-2 bg-black/80 text-white px-2 py-1 rounded text-xs flex items-center space-x-1">
                    <Eye className="w-3 h-3" />
                    <span>{video.views}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-xs bg-amber-400/20 text-amber-400 px-2 py-1 rounded">
                      {categories.find(c => c.id === video.category)?.name}
                    </span>
                    {video.difficulty && (
                      <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">
                        {video.difficulty}
                      </span>
                    )}
                  </div>

                  <h3 className="font-semibold text-lg mb-3 group-hover:text-amber-400 transition-colors line-clamp-2">
                    {video.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {video.description}
                  </p>

                  {video.instructor && (
                    <p className="text-amber-400 text-sm mb-4">
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
                    <ChevronRight className="w-5 h-5 text-amber-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Videos CTA */}
          <div className="text-center">
            <button
              onClick={() => router.push('/videos')}
              className="inline-flex items-center space-x-3 px-8 py-4 bg-amber-400 text-black hover:bg-amber-500 rounded-lg transition-all font-bold text-lg"
            >
              <span>View All 201+ Videos</span>
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Expert</span>{' '}
              <span className="text-amber-400">Categories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive coverage of all aspects of medical aesthetics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {categories.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gray-900 rounded-xl p-6 text-center hover:bg-gray-800 transition-all cursor-pointer group"
                onClick={() => router.push('/videos')}
              >
                <div className="w-16 h-16 bg-amber-400/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-400/30 transition-all">
                  {getIconComponent(category.icon)}
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-amber-400 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-400 text-sm">
                  {category.count} videos
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Overview Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">Beyond Free Videos</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                While our free video library provides incredible value, our premium platform offers structured learning, 
                certifications, and advanced training programs to take your medical aesthetics practice to the next level.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Star className="w-6 h-6 text-amber-400" />
                  <span className="text-gray-300">Structured Learning Paths</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BookOpen className="w-6 h-6 text-amber-400" />
                  <span className="text-gray-300">Professional Certifications</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-amber-400" />
                  <span className="text-gray-300">Expert Community Access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-6 h-6 text-amber-400" />
                  <span className="text-gray-300">Live Training Sessions</span>
                </div>
              </div>

              <button
                onClick={() => router.push('/platform')}
                className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-lg transition-all font-bold text-lg"
              >
                <span>Explore Premium Platform</span>
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>

            <div className="bg-black/50 rounded-2xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold mb-6 text-center text-amber-400">
                Platform Concept Overview
              </h3>
              <p className="text-gray-300 mb-6 text-center">
                Get a comprehensive understanding of our complete platform vision
              </p>
              <button
                onClick={() => router.push('/concept')}
                className="w-full inline-flex items-center justify-center space-x-3 px-6 py-3 bg-amber-400 text-black hover:bg-amber-500 rounded-lg transition-all font-medium"
              >
                <BookOpen className="w-5 h-5" />
                <span>View Platform Concept</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-400 to-orange-500 text-black relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to advance your medical aesthetics career?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-8 max-w-3xl mx-auto"
          >
            Start with our free video library, then explore our premium courses and certifications 
            to take your practice to the next level.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => router.push('/videos')}
              className="inline-flex items-center space-x-3 px-8 py-4 bg-black text-white hover:bg-gray-900 transition-all font-bold text-lg rounded-lg"
            >
              <Play className="w-6 h-6" />
              <span>Start with Free Videos</span>
            </button>
            <button
              onClick={() => router.push('/platform')}
              className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-black hover:bg-gray-100 transition-all font-bold text-lg rounded-lg"
            >
              <BookOpen className="w-6 h-6" />
              <span>Explore Premium Courses</span>
            </button>
          </motion.div>
        </div>
      </section>
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
