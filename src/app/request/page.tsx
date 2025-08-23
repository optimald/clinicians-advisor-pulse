'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { 
  ArrowLeft,
  Video,
  Star,
  Send,
  CheckCircle
} from 'lucide-react'

export default function RequestVideoPage() {
  const router = useRouter()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    topic: '',
    category: '',
    description: '',
    skillLevel: 'Any level',
    priority: 'Low - Would be nice to have',
    name: '',
    email: '',
    newsletter: false
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    setIsSubmitted(true)
  }

  const categories = [
    'Device Demos / Training',
    'Device Highlights', 
    'Live Streams',
    'MedTech Marketplace Podcast',
    'Service & Maintenance',
    'Webinars / Industry Knowledge',
    'Testimonials',
    'Why MRP',
    'Shorts / Social'
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-4">
        <div className="max-w-md mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-10 h-10 text-white" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-white mb-4"
          >
            Request Submitted!
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-300 mb-8"
          >
            Thank you for your video request. We'll review it and get back to you soon with updates on when it might be available.
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            onClick={() => router.push('/')}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-all font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </motion.button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <img
                src="/ca-logo-transparent.png"
                alt="CliniciansAdvisor Logo"
                className="h-10 w-auto"
              />
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="hover:text-teal-400 transition-colors">Home</a>
              <a href="/videos" className="hover:text-teal-400 transition-colors">Video Library</a>
              <span className="text-teal-400">Request Video</span>
            </nav>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.push('/videos')}
                className="px-4 py-2 text-teal-400 hover:text-teal-300 transition-colors"
              >
                Browse Videos
              </button>
              <button
                onClick={() => router.push('/')}
                className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors font-medium"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Button */}
        <div className="mb-8">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center space-x-2 text-teal-400 hover:text-teal-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>
        </div>

        {/* Page Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-3 mb-6"
          >
            <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center">
              <Video className="w-8 h-8 text-teal-400" />
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Can't find what you're looking for?
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Request a specific video topic, device training, or procedure demonstration. 
            We're constantly expanding our library based on your needs.
          </motion.p>
        </div>

        {/* Request Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Topic and Category Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="topic" className="block text-sm font-medium text-white mb-2">
                  Video Topic or Title <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="topic"
                  name="topic"
                  required
                  value={formData.topic}
                  onChange={handleInputChange}
                  placeholder="e.g., Advanced Botox Injection Techniques"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-white mb-2">
                  Preferred Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-white mb-2">
                Detailed Description <span className="text-red-400">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={4}
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Describe what you'd like to see in this video, including specific techniques, devices, or procedures..."
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
              />
            </div>

            {/* Skill Level and Priority */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="skillLevel" className="block text-sm font-medium text-white mb-2">
                  Target Skill Level
                </label>
                <select
                  id="skillLevel"
                  name="skillLevel"
                  value={formData.skillLevel}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="Any level">Any level</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="priority" className="block text-sm font-medium text-white mb-2">
                  Priority Level
                </label>
                <select
                  id="priority"
                  name="priority"
                  value={formData.priority}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="Low - Would be nice to have">Low - Would be nice to have</option>
                  <option value="Medium - Important for my practice">Medium - Important for my practice</option>
                  <option value="High - Critical for my work">High - Critical for my work</option>
                  <option value="Urgent - Needed ASAP">Urgent - Needed ASAP</option>
                </select>
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Optional - for follow-up questions"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Optional - to notify you when video is available"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="newsletter"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleInputChange}
                className="w-4 h-4 text-teal-600 bg-gray-800 border-gray-600 rounded focus:ring-teal-500 focus:ring-2"
              />
              <label htmlFor="newsletter" className="text-sm text-gray-300">
                Subscribe to our newsletter for updates on new videos and features
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-all font-bold text-lg shadow-lg"
              >
                <Send className="w-5 h-5" />
                <span>Submit Request</span>
              </motion.button>
            </div>
          </form>
        </motion.div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center mb-3">
                <Star className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Quality Content</h3>
              <p className="text-gray-400 text-sm">All videos are created by verified medical professionals</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center mb-3">
                <Video className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Regular Updates</h3>
              <p className="text-gray-400 text-sm">New content added weekly based on community requests</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center mb-3">
                <CheckCircle className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Fast Response</h3>
              <p className="text-gray-400 text-sm">Most requests are reviewed within 2-3 business days</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
