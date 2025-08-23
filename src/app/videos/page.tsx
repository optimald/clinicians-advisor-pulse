'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Play, 
  Search, 
  Filter, 
  Grid3X3, 
  List, 
  ChevronLeft, 
  ChevronRight,
  Eye,
  Clock,
  Tag,
  BookOpen,
  Users,
  Award,
  Globe,
  Shield,
  BarChart3,
  MessageCircle,
  Zap,
  Star,
  Volume2,
  Maximize2
} from 'lucide-react'
import { videos, categories, getVideosByCategory, searchVideos, getPaginatedVideos, type Video } from '@/data/videos'
import VideoPlayer from '@/components/VideoPlayer'

export default function VideosPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)
  const [isPlayerOpen, setIsPlayerOpen] = useState(false)
  const [videosPerPage, setVideosPerPage] = useState(50) // Increased default to show more videos
  const [showAllVideos, setShowAllVideos] = useState(false)

  // Video player functions
  const openVideo = (video: Video) => {
    setSelectedVideo(video)
    setIsPlayerOpen(true)
  }

  const closeVideo = () => {
    setSelectedVideo(null)
    setIsPlayerOpen(false)
  }

  // Filter videos based on category and search
  const filteredVideos = videos.filter(video => {
    const matchesCategory = selectedCategory === 'all' || video.category === selectedCategory
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         video.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
                         (video.instructor && video.instructor.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  // Pagination
  const totalPages = Math.ceil(filteredVideos.length / videosPerPage)
  const startIndex = showAllVideos ? 0 : (currentPage - 1) * videosPerPage
  const endIndex = showAllVideos ? filteredVideos.length : startIndex + videosPerPage
  const currentVideos = filteredVideos.slice(startIndex, endIndex)

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setCurrentPage(1)
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    setCurrentPage(1)
  }

  // Get icon component based on icon name
  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'BookOpen': <BookOpen className="w-5 h-5" />,
      'Star': <Star className="w-5 h-5" />,
      'Zap': <Zap className="w-5 h-5" />,
      'MessageCircle': <MessageCircle className="w-5 h-5" />,
      'Shield': <Shield className="w-5 h-5" />,
      'BarChart3': <BarChart3 className="w-5 h-5" />,
      'Users': <Users className="w-5 h-5" />,
      'Award': <Award className="w-5 h-5" />,
      'Globe': <Globe className="w-5 h-5" />
    }
    return iconMap[iconName] || <Star className="w-5 h-5" />
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black/90 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/CA logo transparent.png" 
                alt="CliniciansAdvisor Logo" 
                className="h-10 w-auto"
              />
              <h1 className="text-2xl font-bold">Video Library</h1>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="hover:text-amber-400 transition-colors">Home</a>
              <a href="/platform" className="hover:text-amber-400 transition-colors">Platform</a>
              <a href="/concept" className="hover:text-amber-400 transition-colors">Concept</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="text-white">FREE</span> <span className="text-amber-400">VIDEO LIBRARY</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Access 201+ professional medical aesthetics videos covering device training, 
            industry knowledge, and expert insights. All completely free.
          </motion.p>
          
          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400">201+</div>
              <div className="text-gray-400">Videos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400">10</div>
              <div className="text-gray-400">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400">Free</div>
              <div className="text-gray-400">Access</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400">24/7</div>
              <div className="text-gray-400">Available</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search videos..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-400"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-amber-400 text-black' 
                    : 'bg-gray-800 text-gray-400 hover:text-white'
                }`}
              >
                <Grid3X3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-amber-400 text-black' 
                    : 'bg-gray-800 text-gray-400 hover:text-white'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
              
              {/* Show All Videos Toggle */}
              <button
                onClick={() => setShowAllVideos(!showAllVideos)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  showAllVideos 
                    ? 'bg-amber-400 text-black' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {showAllVideos ? 'Show Paginated' : 'Show All Videos'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-black py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => handleCategoryChange('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-amber-400 text-black'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              All Videos (201)
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center space-x-2 ${
                  selectedCategory === category.id
                    ? 'bg-amber-400 text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {getIconComponent(category.icon)}
                <span>{category.name} ({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Display Counter */}
          <div className="flex items-center justify-between mb-6">
            <div className="text-gray-300">
              <span className="text-amber-400 font-semibold">{currentVideos.length}</span> of {filteredVideos.length} videos
              {showAllVideos ? ' (showing all)' : ` (page ${currentPage} of ${totalPages})`}
            </div>
            {!showAllVideos && (
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1 bg-gray-800 text-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700"
                >
                  Previous
                </button>
                <span className="text-gray-400 text-sm">
                  {currentPage} / {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 bg-gray-800 text-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700"
                >
                  Next
                </button>
              </div>
            )}
          </div>
          
          {currentVideos.length === 0 ? (
            <div className="text-center py-16">
              <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No videos found</h3>
              <p className="text-gray-500">Try adjusting your search or category filters</p>
            </div>
          ) : (
            <>
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                  : 'grid-cols-1'
              }`}>
                {currentVideos.map((video) => (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className={`bg-black/50 rounded-xl overflow-hidden border border-gray-800 hover:border-amber-400/50 transition-all group cursor-pointer ${
                      viewMode === 'list' ? 'flex' : ''
                    }`}
                    onClick={() => openVideo(video)}
                  >
                    {/* Thumbnail */}
                    <div className={`relative ${viewMode === 'list' ? 'w-48 h-32 flex-shrink-0' : 'h-48'}`}>
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
                        <Play className="w-12 h-12 text-amber-400 group-hover:scale-110 transition-transform" />
                      </div>
                      
                      {/* Play Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="w-12 h-12 bg-amber-400/90 rounded-full flex items-center justify-center">
                          <Play className="w-6 h-6 text-black ml-0.5" />
                        </div>
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
                    <div className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-xs bg-amber-400/20 text-amber-400 px-2 py-1 rounded">
                          {categories.find(c => c.id === video.category)?.name}
                        </span>
                        {video.difficulty && (
                          <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">
                            {video.difficulty}
                          </span>
                        )}
                      </div>
                      
                      <h3 className="font-semibold mb-2 group-hover:text-amber-400 transition-colors line-clamp-2">
                        {video.title}
                      </h3>
                      
                      <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                        {video.description}
                      </p>
                      
                      {video.instructor && (
                        <p className="text-amber-400 text-sm mb-3">
                          Instructor: {video.instructor}
                        </p>
                      )}
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        {video.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      {/* Removed Watch Now button - entire card is clickable */}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-2 mt-12">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        currentPage === page
                          ? 'bg-amber-400 text-black'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Request a Video Section */}
      <section id="request-video" className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Can't find what you're looking for?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Request a specific video topic, device training, or procedure demonstration. 
              We're constantly expanding our library based on your needs.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-black/50 rounded-2xl p-8 border border-gray-800"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="topic" className="block text-sm font-medium text-gray-300 mb-2">
                    Video Topic or Title *
                  </label>
                  <input
                    type="text"
                    id="topic"
                    name="topic"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                    placeholder="e.g., Advanced Botox Injection Techniques"
                  />
                </div>
                
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-2">
                    Preferred Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                  >
                    <option value="">Select a category</option>
                    <option value="device-demos-training">Device Demos / Training</option>
                    <option value="device-highlights">Device Highlights</option>
                    <option value="webinars-industry">Webinars / Industry Knowledge</option>
                    <option value="medtech-podcast">MedTech Marketplace Podcast</option>
                    <option value="live-streams">Live Streams</option>
                    <option value="shorts-social">Shorts / Social</option>
                    <option value="service-maintenance">Service & Maintenance</option>
                    <option value="mrp-corp">MRP Corp</option>
                    <option value="why-mrp">Why MRP</option>
                    <option value="testimonials">Testimonials</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
                  Detailed Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                  placeholder="Describe what you'd like to see in this video, including specific techniques, devices, or procedures..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="difficulty" className="block text-sm font-medium text-gray-300 mb-2">
                    Target Skill Level
                  </label>
                  <select
                    id="difficulty"
                    name="difficulty"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                  >
                    <option value="">Any level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="urgency" className="block text-sm font-medium text-gray-300 mb-2">
                    Priority Level
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                  >
                    <option value="low">Low - Would be nice to have</option>
                    <option value="medium">Medium - Important for my practice</option>
                    <option value="high">High - Critical for my current needs</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                    placeholder="Optional - for follow-up questions"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="name"
                    name="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                    placeholder="Optional - to notify you when video is available"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  className="w-4 h-4 text-amber-400 bg-gray-800 border-gray-700 rounded focus:ring-amber-400 focus:ring-2"
                />
                <label htmlFor="newsletter" className="text-sm text-gray-300">
                  Subscribe to our newsletter for updates on new videos and features
                </label>
              </div>

              <div className="text-center pt-4">
                <motion.button
                  type="submit"
                  className="px-8 py-4 bg-amber-400 text-black rounded-lg hover:bg-amber-500 transition-all font-bold text-lg"
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    boxShadow: "0 20px 40px rgba(245, 158, 11, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Submit Video Request
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-400 to-orange-500 text-black relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to advance your skills?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-8 max-w-3xl mx-auto"
          >
            Explore our premium courses and certifications to take your medical aesthetics practice to the next level.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-900 transition-all font-medium text-lg"
          >
            Explore Premium Courses
          </motion.button>
        </div>
      </section>

      {/* Video Player Modal */}
      <VideoPlayer
        video={selectedVideo}
        isOpen={isPlayerOpen}
        onClose={closeVideo}
      />
    </div>
  )
}
