'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight, Star } from 'lucide-react'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // Auto-redirect to concept route after 3 seconds
    const timer = setTimeout(() => {
      router.push('/concept')
    }, 3000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-6">
        <div className="mb-8">
          <Star className="w-20 h-20 text-yellow-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            CliniciansAdvisor
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            The Future of Medical Aesthetics Education
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <p className="text-lg text-gray-700 mb-6">
            Welcome to the CliniciansAdvisor platform concept. You'll be automatically redirected to our comprehensive platform overview in just a moment.
          </p>
          
          <button
            onClick={() => router.push('/concept')}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all font-medium"
          >
            <span>View Platform Concept</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <p className="text-sm text-gray-500">
          Redirecting automatically in 3 seconds...
        </p>
      </div>
    </div>
  )
}
