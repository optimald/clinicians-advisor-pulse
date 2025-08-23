export interface Video {
  id: string
  title: string
  description: string
  category: string
  duration: string
  views: number
  thumbnail: string
  videoUrl: string | null
  tags: string[]
  instructor?: string | null
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels'
  page?: number
}

export const categories = [
  { id: 'device-demos-training', name: 'Device Demos / Training', count: 72, icon: 'BookOpen' },
  { id: 'device-highlights', name: 'Device Highlights', count: 35, icon: 'Star' },
  { id: 'live-streams', name: 'Live Streams', count: 10, icon: 'Zap' },
  { id: 'medtech-podcast', name: 'MedTech Marketplace Podcast', count: 17, icon: 'MessageCircle' },
  { id: 'mrp-corp', name: 'MRP Corp', count: 3, icon: 'Shield' },
  { id: 'service-maintenance', name: 'Service & Maintenance', count: 4, icon: 'BarChart3' },
  { id: 'shorts-social', name: 'Shorts / Social', count: 16, icon: 'Users' },
  { id: 'testimonials', name: 'Testimonials', count: 2, icon: 'Award' },
  { id: 'webinars-industry', name: 'Webinars / Industry Knowledge', count: 37, icon: 'Globe' },
  { id: 'why-mrp', name: 'Why MRP', count: 4, icon: 'Star' }
]

// Real video data scraped from the referenced site
export const videos: Video[] = require('./enhanced-video-catalog.json').videos



// Helper function to get videos by category
export const getVideosByCategory = (categoryId: string): Video[] => {
  if (categoryId === 'all') return videos
  return videos.filter(video => video.category === categoryId)
}

// Helper function to get videos by page
export const getVideosByPage = (page: number): Video[] => {
  return videos.filter(video => video.page === page)
}

// Helper function to search videos
export const searchVideos = (query: string): Video[] => {
  const lowercaseQuery = query.toLowerCase()
  return videos.filter(video =>
    video.title.toLowerCase().includes(lowercaseQuery) ||
    video.description.toLowerCase().includes(lowercaseQuery) ||
    video.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
    (video.instructor && video.instructor.toLowerCase().includes(lowercaseQuery))
  )
}

// Helper function to get paginated videos
export const getPaginatedVideos = (videos: Video[], page: number, perPage: number) => {
  const startIndex = (page - 1) * perPage
  const endIndex = startIndex + perPage
  return videos.slice(startIndex, endIndex)
}
