'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play, Users, BookOpen, Award, Globe, Shield, BarChart3, MessageCircle, Zap, Star } from 'lucide-react'

interface Slide {
  id: number
  title: string
  subtitle: string
  description: string
  features: string[]
  icon: React.ReactNode
  color: string
  image?: string
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Welcome to CliniciansAdvisor",
    subtitle: "The Future of Medical Aesthetics Education",
    description: "The definitive digital ecosystem where verified medical aesthetics professionals can build their brand, monetize their expertise, and cultivate a professional community.",
    features: [
      "Trust & Verification Foundation",
      "Creator Empowerment Tools",
      "Structured Learning System",
      "Professional Community Network"
    ],
    icon: <Star className="w-16 h-16 text-yellow-500" />,
    color: "from-blue-600 to-purple-600"
  },
  {
    id: 2,
    title: "Creator Onboarding & Verification",
    subtitle: "Building Trust Through Rigorous Standards",
    description: "Every expert is manually verified to ensure a safe, professional, and credible environment.",
    features: [
      "Multi-step credential verification",
      "Document upload & review",
      "Admin approval process",
      "Guided setup wizard"
    ],
    icon: <Shield className="w-16 h-16 text-green-500" />,
    color: "from-green-600 to-blue-600"
  },
  {
    id: 3,
    title: "Content Studio & Course Builder",
    subtitle: "Powerful Tools for Content Creation",
    description: "An intuitive, all-in-one toolkit that removes technical barriers and allows creators to focus on high-value content.",
    features: [
      "Drag & drop course builder",
      "Multi-format content support",
      "Live studio capabilities",
      "Content library management"
    ],
    icon: <BookOpen className="w-16 h-16 text-purple-500" />,
    color: "from-purple-600 to-pink-600"
  },
  {
    id: 4,
    title: "AI-Powered Discovery Engine",
    subtitle: "Intelligent Content Recommendations",
    description: "Advanced search and filtering with personalized recommendations based on user behavior and preferences.",
    features: [
      "Natural language search",
      "Faceted filtering system",
      "Personalized recommendations",
      "Trending content discovery"
    ],
    icon: <Zap className="w-16 h-16 text-yellow-500" />,
    color: "from-yellow-600 to-orange-600"
  },
  {
    id: 5,
    title: "Assessment & Certification System",
    subtitle: "Comprehensive Learning Validation",
    description: "Multi-tiered assessment framework with skill validation and professional accreditation integration.",
    features: [
      "Knowledge check quizzes",
      "Case study applications",
      "Practical demonstrations",
      "CME/CEU credit tracking"
    ],
    icon: <Award className="w-16 h-16 text-blue-500" />,
    color: "from-blue-600 to-indigo-600"
  },
  {
    id: 6,
    title: "Live Learning & Interactive Features",
    subtitle: "Real-Time Engagement & Collaboration",
    description: "Fully interactive environment for real-time learning with advanced session management.",
    features: [
      "Live Q&A with upvoting",
      "Real-time polls & surveys",
      "Breakout room sessions",
      "Automatic recording & transcription"
    ],
    icon: <Play className="w-16 h-16 text-red-500" />,
    color: "from-red-600 to-pink-600"
  },
  {
    id: 7,
    title: "Content Quality & Review Process",
    subtitle: "Maintaining Excellence Through Multi-Layer Review",
    description: "Ensuring all content meets the highest standards of medical accuracy and professional quality.",
    features: [
      "Admin review process",
      "Peer review system",
      "Content standards enforcement",
      "Version control & updates"
    ],
    icon: <Shield className="w-16 h-16 text-emerald-500" />,
    color: "from-emerald-600 to-teal-600"
  },
  {
    id: 8,
    title: "Mobile Experience & Offline Access",
    subtitle: "Learning Anywhere, Anytime",
    description: "Seamless mobile experience with offline capabilities for learning on the go.",
    features: [
      "Native iOS & Android apps",
      "Offline content download",
      "Mobile-optimized UI",
      "Cross-device synchronization"
    ],
    icon: <Globe className="w-16 h-16 text-indigo-500" />,
    color: "from-indigo-600 to-purple-600"
  },
  {
    id: 9,
    title: "Analytics & Progress Tracking",
    subtitle: "Data-Driven Learning Insights",
    description: "Comprehensive analytics for both learners and creators to track progress and optimize performance.",
    features: [
      "Personal learning dashboard",
      "Skill competency mapping",
      "Content performance metrics",
      "Audience insights & demographics"
    ],
    icon: <BarChart3 className="w-16 h-16 text-cyan-500" />,
    color: "from-cyan-600 to-blue-600"
  },
  {
    id: 10,
    title: "Community & Networking",
    subtitle: "Building Professional Relationships",
    description: "Vibrant professional network fostering collaboration, mentorship, and knowledge sharing.",
    features: [
      "Creator-led forums",
      "Direct messaging system",
      "Peer connection tools",
      "Virtual networking events"
    ],
    icon: <Users className="w-16 h-16 text-pink-500" />,
    color: "from-pink-600 to-rose-600"
  },
  {
    id: 11,
    title: "Internationalization & Compliance",
    subtitle: "Global Accessibility & Regional Standards",
    description: "Multi-language support with regional compliance for international medical practice standards.",
    features: [
      "Multi-language UI support",
      "Regional compliance features",
      "Cultural adaptation tools",
      "International payment methods"
    ],
    icon: <Globe className="w-16 h-16 text-teal-500" />,
    color: "from-teal-600 to-green-600"
  },
  {
    id: 12,
    title: "Integration & API Capabilities",
    subtitle: "Seamless Ecosystem Integration",
    description: "Comprehensive API access and third-party integrations for enterprise customers and medical systems.",
    features: [
      "RESTful API access",
      "Practice management integration",
      "Medical device databases",
      "Data export capabilities"
    ],
    icon: <Zap className="w-16 h-16 text-violet-500" />,
    color: "from-violet-600 to-purple-600"
  },
  {
    id: 13,
    title: "Monetization & Business Model",
    subtitle: "Sustainable Revenue for Creators",
    description: "Flexible pricing models with transparent revenue sharing to reward creators for their expertise.",
    features: [
      "Subscription tier system",
      "Pay-per-view options",
      "70/30 revenue sharing",
      "Performance-based bonuses"
    ],
    icon: <Star className="w-16 h-16 text-amber-500" />,
    color: "from-amber-600 to-orange-600"
  },
  {
    id: 14,
    title: "Security & Compliance",
    subtitle: "Enterprise-Grade Protection",
    description: "Highest standards of security and medical data compliance with regular audits and testing.",
    features: [
      "End-to-end encryption",
      "HIPAA compliance",
      "Regular security audits",
      "Privacy controls & GDPR"
    ],
    icon: <Shield className="w-16 h-16 text-emerald-500" />,
    color: "from-emerald-600 to-green-600"
  },
  {
    id: 15,
    title: "Ready to Transform Medical Education?",
    subtitle: "Join the CliniciansAdvisor Revolution",
    description: "Be part of the platform that's redefining how medical aesthetics professionals learn, grow, and succeed.",
    features: [
      "Start your creator journey today",
      "Join the learning community",
      "Access world-class education",
      "Build your professional brand"
    ],
    icon: <Zap className="w-16 h-16 text-blue-500" />,
    color: "from-blue-600 to-purple-600"
  }
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4 pt-8">
        <div className="max-w-6xl w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${slides[currentSlide].color} p-8 text-white`}>
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      {slides[currentSlide].icon}
                      <div>
                        <h2 className="text-4xl font-bold mb-2">{slides[currentSlide].title}</h2>
                        <p className="text-xl opacity-90">{slides[currentSlide].subtitle}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {slides[currentSlide].description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {slides[currentSlide].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={prevSlide}
                    className="flex items-center space-x-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    <span>Previous</span>
                  </button>

                  <div className="flex space-x-2">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentSlide
                            ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextSlide}
                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all"
                  >
                    <span>{currentSlide === slides.length - 1 ? 'Start Over' : 'Next'}</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-md border-t border-gray-200 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-gray-600">
            <p>© 2025 CliniciansAdvisor. All rights reserved.</p>
            <p className="text-sm mt-2">Transforming medical aesthetics education through technology and community.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
