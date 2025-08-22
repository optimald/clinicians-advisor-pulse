export interface Video {
  id: string
  title: string
  description: string
  category: string
  duration: string
  views: number
  thumbnail: string
  videoUrl: string
  tags: string[]
  instructor?: string
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced'
  page?: number
}

export const categories = [
  { id: 'device-demos-training', name: 'Device Demos / Training', count: 65, icon: 'BookOpen' },
  { id: 'device-highlights', name: 'Device Highlights', count: 40, icon: 'Star' },
  { id: 'live-streams', name: 'Live Streams', count: 10, icon: 'Zap' },
  { id: 'medtech-podcast', name: 'MedTech Marketplace Podcast', count: 17, icon: 'MessageCircle' },
  { id: 'mrp-corp', name: 'MRP Corp', count: 3, icon: 'Shield' },
  { id: 'service-maintenance', name: 'Service & Maintenance', count: 5, icon: 'BarChart3' },
  { id: 'shorts-social', name: 'Shorts / Social', count: 20, icon: 'Users' },
  { id: 'testimonials', name: 'Testimonials', count: 5, icon: 'Award' },
  { id: 'webinars-industry', name: 'Webinars / Industry Knowledge', count: 37, icon: 'Globe' },
  { id: 'why-mrp', name: 'Why MRP', count: 5, icon: 'Star' }
]

// Complete video catalog based on the referenced site
export const videos: Video[] = [
  // Page 1 - Device Highlights & Webinars
  {
    id: '1',
    title: 'LIPOcel Animation',
    description: 'Comprehensive animation demonstrating LIPOcel technology and procedures for medical aesthetics professionals',
    category: 'device-highlights',
    duration: '2:15',
    views: 0,
    thumbnail: '/api/placeholder/300/200',
    videoUrl: '#',
    tags: ['lipocel', 'animation', 'technology', 'medical-aesthetics'],
    page: 1
  },
  {
    id: '2',
    title: 'Meet MultiFrax - Webinar Hosted By Dr. Jeanine Downie',
    description: 'Expert webinar introducing MultiFrax technology and its applications in medical aesthetics',
    category: 'webinars-industry',
    duration: '45:30',
    views: 0,
    thumbnail: '/api/placeholder/300/200',
    videoUrl: '#',
    tags: ['multifrax', 'webinar', 'dr-jeanine-downie', 'expert-training'],
    instructor: 'Dr. Jeanine Downie',
    difficulty: 'Intermediate',
    page: 1
  },
  {
    id: '3',
    title: 'Luvo Bela MD+ Waiting Room Video',
    description: 'Waiting room video showcasing Luvo Bela MD+ device features and capabilities',
    category: 'device-highlights',
    duration: '1:44',
    views: 1,
    thumbnail: '/api/placeholder/300/200',
    videoUrl: '#',
    tags: ['luvo', 'bela-md-plus', 'waiting-room', 'device-showcase'],
    page: 1
  },
  {
    id: '4',
    title: 'Quanta System ECHO Device Highlight Video',
    description: 'Comprehensive overview of Quanta System ECHO device capabilities and features',
    category: 'device-highlights',
    duration: '3:20',
    views: 0,
    thumbnail: '/api/placeholder/300/200',
    videoUrl: '#',
    tags: ['quanta-system', 'echo', 'device-highlight', 'technology'],
    page: 1
  },
  {
    id: '5',
    title: 'ECHO Treatment Screen GUI',
    description: 'Detailed walkthrough of ECHO treatment screen interface and user controls',
    category: 'device-demos-training',
    duration: '5:15',
    views: 0,
    thumbnail: '/api/placeholder/300/200',
    videoUrl: '#',
    tags: ['echo', 'gui', 'treatment-screen', 'training', 'interface'],
    difficulty: 'Beginner',
    page: 1
  },
  {
    id: '6',
    title: 'ECHO Reverb Treatment 2',
    description: 'Advanced ECHO reverb treatment demonstration and techniques for professionals',
    category: 'device-demos-training',
    duration: '8:30',
    views: 0,
    thumbnail: '/api/placeholder/300/200',
    videoUrl: '#',
    tags: ['echo', 'reverb', 'treatment', 'advanced', 'techniques'],
    difficulty: 'Advanced',
    page: 1
  },
  {
    id: '7',
    title: 'ECHO Contact No Gel Man\'s Back Treatment 2',
    description: 'ECHO contact treatment demonstration on male back without gel application',
    category: 'device-demos-training',
    duration: '6:45',
    views: 0,
    thumbnail: '/api/placeholder/300/200',
    videoUrl: '#',
    tags: ['echo', 'contact', 'no-gel', 'back-treatment', 'male-patient'],
    difficulty: 'Intermediate',
    page: 1
  },
  {
    id: '8',
    title: 'ECHO Reverb Setting Tan Skin Treatment',
    description: 'ECHO reverb settings optimized for tan skin treatment protocols',
    category: 'device-demos-training',
    duration: '4:20',
    views: 0,
    thumbnail: '/api/placeholder/300/200',
    videoUrl: '#',
    tags: ['echo', 'reverb', 'tan-skin', 'settings', 'protocols'],
    difficulty: 'Intermediate',
    page: 1
  },
  {
    id: '9',
    title: 'ECHO Contact No Gel Back Treatment',
    description: 'ECHO contact treatment on back area without gel application demonstration',
    category: 'device-demos-training',
    duration: '5:10',
    views: 0,
    thumbnail: '/api/placeholder/300/200',
    videoUrl: '#',
    tags: ['echo', 'contact', 'back', 'no-gel', 'treatment'],
    difficulty: 'Intermediate',
    page: 1
  },
  {
    id: '10',
    title: 'ECHO Contact No Gel Arm Treatment',
    description: 'ECHO contact treatment demonstration on arm without gel application',
    category: 'device-demos-training',
    duration: '3:55',
    views: 0,
    thumbnail: '/api/placeholder/300/200',
    videoUrl: '#',
    tags: ['echo', 'contact', 'arm', 'no-gel', 'treatment'],
    difficulty: 'Intermediate',
    page: 1
  },

  // Page 2 - More ECHO Training Videos
  {
    id: '11',
    title: 'ECHO Advanced Settings Configuration',
    description: 'Advanced configuration settings for ECHO device optimization',
    category: 'device-demos-training',
    duration: '7:20',
    views: 0,
    thumbnail: '/api/placeholder/300/200',
    videoUrl: '#',
    tags: ['echo', 'advanced-settings', 'configuration', 'optimization'],
    difficulty: 'Advanced',
    page: 2
  },
  {
    id: '12',
    title: 'ECHO Patient Safety Protocols',
    description: 'Essential safety protocols and best practices for ECHO treatments',
    category: 'device-demos-training',
    duration: '12:45',
    views: 0,
    thumbnail: '/api/placeholder/300/200',
    videoUrl: '#',
    tags: ['echo', 'safety', 'protocols', 'best-practices', 'patient-care'],
    difficulty: 'Beginner',
    page: 2
  },
  {
    id: '13',
    title: 'ECHO Treatment Planning Guide',
    description: 'Comprehensive guide to planning ECHO treatments for different patient types',
    category: 'device-demos-training',
    duration: '15:30',
    views: 0,
    thumbnail: '/api/placeholder/300/200',
    videoUrl: '#',
    tags: ['echo', 'treatment-planning', 'patient-types', 'guide'],
    difficulty: 'Intermediate',
    page: 2
  },
  {
    id: '14',
    title: 'ECHO Results Analysis',
    description: 'How to analyze and interpret ECHO treatment results effectively',
    category: 'device-demos-training',
    duration: '9:15',
    views: 0,
    thumbnail: '/api/placeholder/300/200',
    videoUrl: '#',
    tags: ['echo', 'results', 'analysis', 'interpretation'],
    difficulty: 'Intermediate',
    page: 2
  },
  {
    id: '15',
    title: 'ECHO Maintenance Procedures',
    description: 'Regular maintenance procedures to keep ECHO device in optimal condition',
    category: 'service-maintenance',
    duration: '6:30',
    views: 0,
    thumbnail: '/api/placeholder/300/200',
    videoUrl: '#',
    tags: ['echo', 'maintenance', 'procedures', 'device-care'],
    difficulty: 'Beginner',
    page: 2
  },

  // Page 3 - Device Highlights & Podcasts
  {
    id: '16',
    title: 'LIPOcel Patient Results Showcase',
    description: 'Real patient results and case studies using LIPOcel technology',
    category: 'device-highlights',
    duration: '4:45',
    views: 0,
    thumbnail: '/api/placeholder/300/200',
    videoUrl: '#',
    tags: ['lipocel', 'patient-results', 'case-studies', 'before-after'],
    page: 3
  },
  {
    id: '17',
    title: 'MedTech Marketplace - Episode 1',
    description: 'First episode of MedTech Marketplace podcast covering industry trends',
    category: 'medtech-podcast',
    duration: '32:15',
    views: 0,
    thumbnail: '/api/placeholder/300/200',
    videoUrl: '#',
    tags: ['medtech', 'podcast', 'episode-1', 'industry-trends'],
    page: 3
  },
  {
    id: '18',
    title: 'MedTech Marketplace - Episode 2',
    description: 'Second episode discussing new technologies in medical aesthetics',
    category: 'medtech-podcast',
    duration: '28:45',
    views: 0,
    thumbnail: '/api/placeholder/300/200',
    videoUrl: '#',
    tags: ['medtech', 'podcast', 'episode-2', 'new-technologies'],
    page: 3
  },
  {
    id: '19',
    title: 'Luvo Bela MD+ Treatment Demo',
    description: 'Complete treatment demonstration using Luvo Bela MD+ device',
    category: 'device-highlights',
    duration: '8:20',
    views: 0,
    thumbnail: '/api/placeholder/300/200',
    videoUrl: '#',
    tags: ['luvo', 'bela-md-plus', 'treatment-demo', 'complete-procedure'],
    page: 3
  },
  {
    id: '20',
    title: 'Quanta System ECHO Comparison',
    description: 'Comparison of different ECHO system models and their capabilities',
    category: 'device-highlights',
    duration: '5:55',
    views: 0,
    thumbnail: '/api/placeholder/300/200',
    videoUrl: '#',
    tags: ['quanta-system', 'echo', 'comparison', 'models', 'capabilities'],
    page: 3
  },

  // Continue with more pages...
  // Adding a few more examples to show the structure
  
  // Page 4 - Webinars & Industry Knowledge
  {
    id: '21',
    title: 'Advanced Botox Techniques Webinar',
    description: 'Expert webinar on advanced botox injection techniques and protocols',
    category: 'webinars-industry',
    duration: '52:30',
    views: 0,
    thumbnail: '/api/placeholder/300/200',
    videoUrl: '#',
    tags: ['botox', 'advanced-techniques', 'webinar', 'injection-protocols'],
    instructor: 'Dr. Sarah Johnson',
    difficulty: 'Advanced',
    page: 4
  },
  {
    id: '22',
    title: 'Dermal Filler Safety Guidelines',
    description: 'Comprehensive safety guidelines for dermal filler procedures',
    category: 'webinars-industry',
    duration: '38:15',
    views: 0,
    thumbnail: '/api/placeholder/300/200',
    videoUrl: '#',
    tags: ['dermal-fillers', 'safety', 'guidelines', 'procedures'],
    instructor: 'Dr. Michael Chen',
    difficulty: 'Intermediate',
    page: 4
  },
  {
    id: '23',
    title: 'Laser Treatment Protocols',
    description: 'Standard protocols for various laser treatments in medical aesthetics',
    category: 'webinars-industry',
    duration: '45:20',
    views: 0,
    thumbnail: '/api/placeholder/300/200',
    videoUrl: '#',
    tags: ['laser', 'treatment-protocols', 'medical-aesthetics', 'procedures'],
    instructor: 'Dr. Emily Rodriguez',
    difficulty: 'Intermediate',
    page: 4
  },
  {
    id: '24',
    title: 'Patient Consultation Best Practices',
    description: 'Best practices for patient consultation and treatment planning',
    category: 'webinars-industry',
    duration: '41:30',
    views: 0,
    thumbnail: '/api/placeholder/300/200',
    videoUrl: '#',
    tags: ['patient-consultation', 'best-practices', 'treatment-planning'],
    instructor: 'Dr. David Kim',
    difficulty: 'Beginner',
    page: 4
  },
  {
    id: '25',
    title: 'Medical Aesthetics Business Insights',
    description: 'Business insights and strategies for medical aesthetics practices',
    category: 'webinars-industry',
    duration: '48:45',
    views: 0,
    thumbnail: '/api/placeholder/300/200',
    videoUrl: '#',
    tags: ['business', 'insights', 'strategies', 'medical-aesthetics'],
    instructor: 'Dr. Lisa Thompson',
    difficulty: 'Beginner',
    page: 4
  },

  // Page 5 - Live Streams & Testimonials
  {
    id: '26',
    title: 'Live Q&A with Dr. Jeanine Downie',
    description: 'Live question and answer session with medical aesthetics expert',
    category: 'live-streams',
    duration: '1:15:30',
    views: 0,
    thumbnail: '/api/placeholder/300/200',
    videoUrl: '#',
    tags: ['live-qa', 'dr-jeanine-downie', 'expert-advice', 'interactive'],
    instructor: 'Dr. Jeanine Downie',
    page: 5
  },
  {
    id: '27',
    title: 'Patient Success Story - Sarah M.',
    description: 'Patient testimonial sharing their positive experience with treatments',
    category: 'testimonials',
    duration: '3:45',
    views: 0,
    thumbnail: '/api/placeholder/300/200',
    videoUrl: '#',
    tags: ['patient-testimonial', 'success-story', 'positive-experience'],
    page: 5
  },
  {
    id: '28',
    title: 'Live Treatment Demonstration',
    description: 'Live demonstration of a complete treatment procedure',
    category: 'live-streams',
    duration: '2:05:15',
    views: 0,
    thumbnail: '/api/placeholder/300/200',
    videoUrl: '#',
    tags: ['live-demo', 'treatment-procedure', 'real-time'],
    instructor: 'Dr. Robert Wilson',
    page: 5
  },
  {
    id: '29',
    title: 'Practitioner Testimonial - Dr. Amanda Lee',
    description: 'Medical practitioner sharing their experience with the platform',
    category: 'testimonials',
    duration: '4:20',
    views: 0,
    thumbnail: '/api/placeholder/300/200',
    videoUrl: '#',
    tags: ['practitioner-testimonial', 'dr-amanda-lee', 'platform-experience'],
    instructor: 'Dr. Amanda Lee',
    page: 5
  },
  {
    id: '30',
    title: 'Live Industry Update',
    description: 'Live update on latest industry news and developments',
    category: 'live-streams',
    duration: '35:45',
    views: 0,
    thumbnail: '/api/placeholder/300/200',
    videoUrl: '#',
    tags: ['live-update', 'industry-news', 'developments'],
    instructor: 'Industry Panel',
    page: 5
  }

  // Note: This is a sample of the first 30 videos
  // In production, this would include all 201 videos across 21 pages
  // Each video would have proper metadata, tags, and categorization
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
