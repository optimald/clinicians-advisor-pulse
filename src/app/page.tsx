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
    title: "Content Discovery & Search",
    subtitle: "AI-Powered Learning Recommendations",
    description: "Advanced search and discovery system that helps learners find relevant content through intelligent categorization and personalized recommendations.",
    features: [
      "AI-Powered Content Recommendations",
      "Advanced Search & Filtering",
      "Smart Categorization & Tagging",
      "Trending & Popular Content"
    ],
    icon: <BookOpen className="w-16 h-16 text-blue-500" />,
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 3,
    title: "Assessment & Certification",
    subtitle: "Multi-Tiered Learning Validation",
    description: "Comprehensive assessment system with skill validation, accreditation integration, and adaptive learning paths for continuous professional development.",
    features: [
      "Multi-Tiered Assessments",
      "Skill Validation & Testing",
      "Accreditation & CEU Integration",
      "Adaptive Learning Paths"
    ],
    icon: <Award className="w-16 h-16 text-green-500" />,
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 4,
    title: "Live Learning & Interactive Features",
    subtitle: "Real-Time Collaborative Learning",
    description: "Interactive live sessions with Q&A, polls, breakout rooms, and comprehensive session management for engaging learning experiences.",
    features: [
      "Moderated Q&A Sessions",
      "Live Polls & Surveys",
      "Breakout Rooms & Groups",
      "Session Management Tools"
    ],
    icon: <Play className="w-16 h-16 text-red-500" />,
    color: "from-red-500 to-pink-500"
  },
  {
    id: 5,
    title: "Content Quality & Review Process",
    subtitle: "Maintaining Educational Excellence",
    description: "Rigorous content review system with peer validation, versioning, and continuous improvement to ensure the highest quality standards.",
    features: [
      "Content Standards & Guidelines",
      "Admin & Peer Review System",
      "Versioning & Update Management",
      "Quality Metrics & Analytics"
    ],
    icon: <Shield className="w-16 h-16 text-indigo-500" />,
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: 6,
    title: "Mobile Experience & Offline Access",
    subtitle: "Learning Anywhere, Anytime",
    description: "Native mobile applications with offline content access, mobile-optimized analytics, and seamless cross-device synchronization.",
    features: [
      "Native iOS & Android Apps",
      "Offline Content Download",
      "Mobile-Optimized Analytics",
      "Cross-Device Synchronization"
    ],
    icon: <Globe className="w-16 h-16 text-teal-500" />,
    color: "from-teal-500 to-blue-500"
  },
  {
    id: 7,
    title: "Analytics & Learning Progress",
    subtitle: "Data-Driven Learning Insights",
    description: "Comprehensive analytics for both learners and creators, with learning path recommendations and progress tracking for optimal outcomes.",
    features: [
      "Learner Progress Analytics",
      "Creator Performance Metrics",
      "Learning Path Recommendations",
      "Achievement Tracking"
    ],
    icon: <BarChart3 className="w-16 h-16 text-purple-500" />,
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 8,
    title: "Community Features & Networking",
    subtitle: "Building Professional Relationships",
    description: "Comprehensive community tools including forums, direct messaging, member directory, and knowledge sharing for professional networking.",
    features: [
      "Professional Forums & Discussions",
      "Direct Messaging System",
      "Member Directory & Profiles",
      "Knowledge Sharing Platform"
    ],
    icon: <Users className="w-16 h-16 text-orange-500" />,
    color: "from-orange-500 to-red-500"
  },
  {
    id: 9,
    title: "Internationalization & Localization",
    subtitle: "Global Medical Education",
    description: "Multi-language support with regional compliance, cultural adaptation, and localized content for international medical professionals.",
    features: [
      "Multi-Language Support",
      "Regional Compliance & Standards",
      "Cultural Adaptation & Localization",
      "International Content Partnerships"
    ],
    icon: <Globe className="w-16 h-16 text-cyan-500" />,
    color: "from-cyan-500 to-blue-500"
  },
  {
    id: 10,
    title: "Integration & API Capabilities",
    subtitle: "Seamless System Connectivity",
    description: "Comprehensive API ecosystem with third-party integrations, data export capabilities, and medical device integration for enhanced functionality.",
    features: [
      "Third-Party System Integration",
      "RESTful API & Webhooks",
      "Data Export & Import Tools",
      "Medical Device Integration"
    ],
    icon: <Zap className="w-16 h-16 text-yellow-500" />,
    color: "from-yellow-500 to-orange-500"
  },
  {
    id: 11,
    title: "Scalability & Performance",
    subtitle: "Enterprise-Grade Infrastructure",
    description: "Cloud-native architecture with CDN optimization, content management systems, and performance monitoring for reliable, scalable operations.",
    features: [
      "Cloud-Native Architecture",
      "CDN & Edge Optimization",
      "Content Storage & Management",
      "Performance Monitoring"
    ],
    icon: <Zap className="w-16 h-16 text-green-500" />,
    color: "from-green-500 to-teal-500"
  },
  {
    id: 12,
    title: "Security & Compliance",
    subtitle: "HIPAA & Medical Data Protection",
    description: "Enterprise-grade security with HIPAA compliance, data encryption, privacy controls, and audit trails for medical data protection.",
    features: [
      "HIPAA Compliance & Security",
      "Data Encryption & Protection",
      "Privacy Controls & Consent",
      "Audit Trails & Monitoring"
    ],
    icon: <Shield className="w-16 h-16 text-red-500" />,
    color: "from-red-500 to-orange-500"
  },
  {
    id: 13,
    title: "Customer Support & Success",
    subtitle: "Dedicated Professional Support",
    description: "Multi-channel support system with onboarding assistance, training programs, and success management for optimal user experience.",
    features: [
      "Multi-Channel Support System",
      "Onboarding & Training Programs",
      "Success Management & Optimization",
      "Professional Development Resources"
    ],
    icon: <MessageCircle className="w-16 h-16 text-blue-500" />,
    color: "from-blue-500 to-indigo-500"
  },
  {
    id: 14,
    title: "Monetization & Business Model",
    subtitle: "Sustainable Revenue Generation",
    description: "Flexible pricing models with creator revenue sharing, subscription tiers, and enterprise solutions for sustainable platform growth.",
    features: [
      "Flexible Pricing Models",
      "Creator Revenue Sharing",
      "Subscription Tiers & Plans",
      "Enterprise Solutions"
    ],
    icon: <BarChart3 className="w-16 h-16 text-emerald-500" />,
    color: "from-emerald-500 to-green-500"
  },
  {
    id: 15,
    title: "Future Roadmap & Innovation",
    subtitle: "Leading Edge Technology",
    description: "Cutting-edge innovations including VR/AR experiences, AI-generated content, blockchain integration, and industry partnerships for future growth.",
    features: [
      "VR/AR Learning Experiences",
      "AI-Generated Content & Tools",
      "Blockchain & Credentialing",
      "Industry Partnerships & Innovation"
    ],
    icon: <Star className="w-16 h-16 text-purple-500" />,
    color: "from-purple-600 to-pink-600"
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
      <main className="flex-1 flex items-center justify-center p-4">
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
              {/* Slide Content */}
              <div className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-4">
                    {slides[currentSlide].icon}
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {slides[currentSlide].title}
                  </h1>
                  <p className="text-xl text-gray-600 mb-4">
                    {slides[currentSlide].subtitle}
                  </p>
                  <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                    {slides[currentSlide].description}
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {slides[currentSlide].features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Slide Navigation */}
                <div className="flex justify-center space-x-2 mb-8">
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

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center">
                  <button
                    onClick={prevSlide}
                    className="flex items-center space-x-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    <span>Previous</span>
                  </button>

                  <div className="text-sm text-gray-500">
                    {currentSlide + 1} of {slides.length}
                  </div>

                  <button
                    onClick={nextSlide}
                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-colors"
                  >
                    <span>Next</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  )
}
