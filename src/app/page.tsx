'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight, Star, BookOpen, Users, Globe, Play } from 'lucide-react'

export default function Home() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
      <div className="text-center max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <Star className="w-24 h-24 text-yellow-500 mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            CliniciansAdvisor
          </h1>
          <p className="text-2xl text-gray-600 mb-8">
            The Future of Medical Aesthetics Education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Concept Route */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-200">
            <BookOpen className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Platform Concept</h2>
            <p className="text-lg text-gray-700 mb-6">
              Explore our comprehensive platform overview with 15 detailed slides covering every aspect of CliniciansAdvisor.
            </p>
            
            <button
              onClick={() => router.push('/concept')}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all font-medium w-full justify-center"
            >
              <span>View Platform Concept</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Video Library Route */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-amber-200">
            <Play className="w-16 h-16 text-amber-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Free Video Library</h2>
            <p className="text-lg text-gray-700 mb-6">
              Access 201+ professional medical aesthetics videos covering device training, industry knowledge, and expert insights.
            </p>

            <button
              onClick={() => router.push('/videos')}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white rounded-lg transition-all font-medium w-full justify-center"
            >
              <span>Browse Videos</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Platform Route */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-green-200">
            <Users className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Live Platform</h2>
            <p className="text-lg text-gray-700 mb-6">
              Experience the actual CliniciansAdvisor platform with courses, pricing, and real functionality.
            </p>
            
            <button
              onClick={() => router.push('/platform')}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-lg transition-all font-medium w-full justify-center"
            >
              <span>Launch Platform</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">What's Available:</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
            <div className="flex items-start space-x-3">
              <Globe className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-gray-900">Platform Concept</h4>
                <p className="text-sm text-gray-600">15 comprehensive slides explaining the entire platform vision</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Play className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-gray-900">Free Video Library</h4>
                <p className="text-sm text-gray-600">201+ professional medical aesthetics videos</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <BookOpen className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-gray-900">Live Platform</h4>
                <p className="text-sm text-gray-600">Functional platform with courses, pricing, and real features</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Star className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-gray-900">Development</h4>
                <p className="text-sm text-gray-600">Active development following SPEC.md requirements</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          <p>Choose your path to explore CliniciansAdvisor</p>
        </div>
      </div>
    </div>
  )
}
