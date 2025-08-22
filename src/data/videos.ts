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
export const videos: Video[] = [
  {
    id: 'video-001',
    title: 'LIPOcel Animation',
    description: 'Comprehensive animation demonstrating LIPOcel technology and procedures for medical aesthetics professionals',
    category: 'device-highlights',
    duration: '2:15',
    views: 290,
    thumbnail: 'https://img.youtube.com/vi/jbWidiQOkgA/mqdefault.jpg',
    videoUrl: null,
    tags: ['lipocel', 'animation', 'device'],
    instructor: null,
    difficulty: 'All Levels',
    page: 1
  },
  {
    id: 'video-002',
    title: 'Meet MultiFrax - Webinar Hosted By Dr. Jeanine Downie',
    description: 'Expert webinar introducing MultiFrax technology and its applications in medical aesthetics',
    category: 'webinars-industry',
    duration: '45:30',
    views: 427,
    thumbnail: 'https://img.youtube.com/vi/blfoEQpoRHo/maxresdefault.jpg',
    videoUrl: null,
    tags: ['multifrax', 'webinar', 'dr. jeanine downie'],
    instructor: 'Dr. Jeanine Downie',
    difficulty: 'Intermediate',
    page: 1
  },
  {
    id: 'video-003',
    title: 'Luvo Bela MD+ Waiting Room Video',
    description: 'Waiting room video showcasing Luvo Bela MD+ device features and capabilities',
    category: 'device-highlights',
    duration: '1:44',
    views: 156,
    thumbnail: 'https://img.youtube.com/vi/X_lhmb-F3qI/maxresdefault.jpg',
    videoUrl: null,
    tags: ['bela md+', 'luvo', 'waiting room'],
    instructor: null,
    difficulty: 'All Levels',
    page: 1
  },
  {
    id: 'video-004',
    title: 'Quanta System ECHO Device Highlight Video',
    description: 'Comprehensive overview of Quanta System ECHO device capabilities and features',
    category: 'device-highlights',
    duration: '3:20',
    views: 312,
    thumbnail: 'https://img.youtube.com/vi/yiElNyuRtrc/maxresdefault.jpg',
    videoUrl: null,
    tags: ['quanta system', 'echo', 'device highlight'],
    instructor: null,
    difficulty: 'All Levels',
    page: 1
  },
  {
    id: 'video-005',
    title: 'ECHO Treatment Screen GUI',
    description: 'Detailed walkthrough of ECHO treatment screen interface and user controls',
    category: 'device-demos-training',
    duration: '5:15',
    views: 189,
    thumbnail: 'https://img.youtube.com/vi/xgMHgiiGRec/maxresdefault.jpg',
    videoUrl: null,
    tags: ['echo', 'gui', 'treatment screen', 'interface'],
    instructor: null,
    difficulty: 'Beginner',
    page: 1
  },
  {
    id: 'video-006',
    title: 'ECHO Reverb Treatment 2',
    description: 'Advanced ECHO reverb treatment demonstration and techniques for professionals',
    category: 'device-demos-training',
    duration: '8:30',
    views: 267,
    thumbnail: 'https://img.youtube.com/vi/Sd1SdSyqfAs/mqdefault.jpg',
    videoUrl: null,
    tags: ['echo', 'reverb', 'treatment', 'advanced'],
    instructor: null,
    difficulty: 'Advanced',
    page: 1
  },
  {
    id: 'video-007',
    title: 'ECHO Contact No Gel Man\'s Back Treatment 2',
    description: 'Demonstration of ECHO contact treatment without gel on male back',
    category: 'device-demos-training',
    duration: '6:45',
    views: 198,
    thumbnail: 'https://img.youtube.com/vi/eyJtk5QYNRE/maxresdefault.jpg',
    videoUrl: null,
    tags: ['echo', 'contact', 'no gel', 'back treatment'],
    instructor: null,
    difficulty: 'Intermediate',
    page: 1
  },
  {
    id: 'video-008',
    title: 'ECHO Reverb Setting Tan Skin Treatment',
    description: 'ECHO reverb treatment demonstration on tan skin with optimal settings',
    category: 'device-demos-training',
    duration: '7:20',
    views: 234,
    thumbnail: 'https://img.youtube.com/vi/6M2GceBQw5M/maxresdefault.jpg',
    videoUrl: null,
    tags: ['echo', 'reverb', 'tan skin', 'settings'],
    instructor: null,
    difficulty: 'Intermediate',
    page: 1
  },
  {
    id: 'video-009',
    title: 'ECHO Contact No Gel Back Treatment',
    description: 'ECHO contact treatment demonstration without gel application',
    category: 'device-demos-training',
    duration: '5:30',
    views: 176,
    thumbnail: 'https://img.youtube.com/vi/Nl_7iphoqAA/maxresdefault.jpg',
    videoUrl: null,
    tags: ['echo', 'contact', 'no gel', 'back treatment'],
    instructor: null,
    difficulty: 'Intermediate',
    page: 1
  },
  {
    id: 'video-010',
    title: 'ECHO Contact No Gel Arm Treatment',
    description: 'ECHO contact treatment demonstration on arm without gel application',
    category: 'device-demos-training',
    duration: '4:15',
    views: 145,
    thumbnail: 'https://img.youtube.com/vi/C3_jc7yk6rs/maxresdefault.jpg',
    videoUrl: null,
    tags: ['echo', 'contact', 'no gel', 'arm treatment'],
    instructor: null,
    difficulty: 'Intermediate',
    page: 1
  }
]

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
