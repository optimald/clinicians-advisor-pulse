'use client'

import { useRouter } from 'next/navigation'
import { ArrowRight, Star, BookOpen, Users, Globe, Play, Search, Filter, Clock, Eye, ChevronRight, Zap, MessageCircle, Shield, BarChart3, Award, CheckCircle } from 'lucide-react'
import { videos, categories } from '@/data/videos'

export default function Home() {
  const router = useRouter()

  // Get featured videos for homepage showcase
  const featuredVideos = videos.slice(0, 6) // First 6 videos as featured

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Star className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">CliniciansAdvisor</h1>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="/videos" className="text-gray-600 hover:text-blue-600 transition-colors">Video Library</a>
              <a href="/platform" className="text-gray-600 hover:text-blue-600 transition-colors">Platform</a>
              <a href="/concept" className="text-gray-600 hover:text-blue-600 transition-colors">Concept</a>
            </nav>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.push('/videos')}
                className="px-4 py-2 text-blue-600 hover:text-blue-700 transition-colors"
              >
                Browse Videos
              </button>
              <button
                onClick={() => router.push('/platform')}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Medical Aesthetics Focus */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 to-purple-100/30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Advance Your Medical Aesthetics Career
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join the definitive digital ecosystem where verified medical aesthetics professionals can build their expertise, 
                earn certifications, and cultivate a professional community that drives patient outcomes and career growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={() => router.push('/videos')}
                  className="inline-flex items-center justify-center space-x-3 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl"
                >
                  <Play className="w-6 h-6" />
                  <span>Start with Free Videos</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => router.push('/platform')}
                  className="inline-flex items-center justify-center space-x-3 px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-all font-semibold text-lg"
                >
                  <BookOpen className="w-6 h-6" />
                  <span>Explore Platform</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>201+ Free Videos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Expert Instructors</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Professional Community</span>
                </div>
              </div>
            </div>

            {/* Right Panel - Video Preview */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                <div className="text-center mb-6">
                  <Play className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Video Library</h3>
                  <p className="text-gray-600">Access professional training content</p>
                </div>
                
                {/* Featured Video Preview */}
                <div className="bg-gray-100 rounded-lg p-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 text-sm">Featured: ECHO Treatment Protocols</h4>
                      <p className="text-gray-500 text-xs">Advanced training for medical professionals</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => router.push('/videos')}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Browse All Videos
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Videos Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Training Videos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start with these essential videos covering key topics in medical aesthetics
            </p>
          </div>

          {/* Featured Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredVideos.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group border border-gray-200"
                onClick={() => router.push('/videos')}
              >
                {/* Thumbnail */}
                <div className="relative h-48">
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <Play className="w-16 h-16 text-blue-600 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="absolute top-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-xs">
                    {video.duration}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-blue-600 text-white px-2 py-1 rounded text-xs flex items-center space-x-1">
                    <Eye className="w-3 h-3" />
                    <span>{video.views}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                      {categories.find(c => c.id === video.category)?.name}
                    </span>
                    {video.difficulty && (
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                        {video.difficulty}
                      </span>
                    )}
                  </div>

                  <h3 className="font-semibold text-lg mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {video.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {video.description}
                  </p>

                  {video.instructor && (
                    <p className="text-blue-600 text-sm mb-4 font-medium">
                      Instructor: {video.instructor}
                    </p>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {video.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ChevronRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Videos CTA */}
          <div className="text-center">
            <button
              onClick={() => router.push('/videos')}
              className="inline-flex items-center space-x-3 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-semibold text-lg"
            >
              <span>View All 201+ Videos</span>
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Training Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert-led content covering all aspects of medical aesthetics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                className="bg-gray-50 rounded-xl p-6 text-center hover:bg-blue-50 transition-all cursor-pointer group border border-gray-200"
                onClick={() => router.push('/videos')}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-all">
                  {getIconComponent(category.icon)}
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {category.count} videos
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Beyond Free Videos: Complete Professional Development
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                While our free video library provides incredible value, our premium platform offers structured learning, 
                certifications, and advanced training programs to take your medical aesthetics practice to the next level.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Star className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-700">Structured Learning Paths</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-700">Professional Certifications</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-700">Expert Community Access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-700">Live Training Sessions</span>
                </div>
              </div>

              <button
                onClick={() => router.push('/platform')}
                className="inline-flex items-center space-x-3 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-semibold text-lg"
              >
                <span>Explore Premium Platform</span>
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center text-blue-600">
                Platform Concept Overview
              </h3>
              <p className="text-gray-600 mb-6 text-center">
                Get a comprehensive understanding of our complete platform vision
              </p>
              <button
                onClick={() => router.push('/concept')}
                className="w-full inline-flex items-center justify-center space-x-3 px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-all font-medium"
              >
                <BookOpen className="w-5 h-5" />
                <span>View Platform Concept</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to advance your medical aesthetics career?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Start with our free video library, then explore our premium courses and certifications 
            to take your practice to the next level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => router.push('/videos')}
              className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 transition-all font-semibold text-lg rounded-lg"
            >
              <Play className="w-6 h-6" />
              <span>Start with Free Videos</span>
            </button>
            <button
              onClick={() => router.push('/platform')}
              className="inline-flex items-center space-x-3 px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all font-semibold text-lg rounded-lg"
            >
              <BookOpen className="w-6 h-6" />
              <span>Explore Premium Courses</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

// Helper function to get icon component
function getIconComponent(iconName: string) {
  const iconMap: { [key: string]: React.ReactNode } = {
    'BookOpen': <BookOpen className="w-8 h-8 text-blue-600" />,
    'Star': <Star className="w-8 h-8 text-blue-600" />,
    'Zap': <Zap className="w-8 h-8 text-blue-600" />,
    'MessageCircle': <MessageCircle className="w-8 h-8 text-blue-600" />,
    'Shield': <Shield className="w-8 h-8 text-blue-600" />,
    'BarChart3': <BarChart3 className="w-8 h-8 text-blue-600" />,
    'Users': <Users className="w-8 h-8 text-blue-600" />,
    'Award': <Award className="w-8 h-8 text-blue-600" />,
    'Globe': <Globe className="w-8 h-8 text-blue-600" />
  }
  return iconMap[iconName] || <Star className="w-8 h-8 text-blue-600" />
}
