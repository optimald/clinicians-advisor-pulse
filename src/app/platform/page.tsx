'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  BookOpen, 
  Users, 
  Award, 
  Play, 
  Star, 
  ArrowRight, 
  CheckCircle,
  Shield,
  Zap,
  Globe,
  BarChart3,
  MessageCircle
} from 'lucide-react'

export default function PlatformPage() {
  const [pricingToggle, setPricingToggle] = useState<'monthly' | 'yearly'>('monthly')

  const courses = [
    {
      id: 1,
      title: "Advanced Botox Techniques",
      instructor: "Dr. Sarah Chen",
      description: "Master the latest botox injection techniques for natural-looking results",
      price: "$150",
      image: "/api/placeholder/300/200"
    },
    {
      id: 2,
      title: "Dermal Filler Mastery",
      instructor: "Dr. Michael Rodriguez",
      description: "Comprehensive guide to facial contouring with dermal fillers",
      price: "$200",
      image: "/api/placeholder/300/200"
    },
    {
      id: 3,
      title: "Laser Treatments & Safety",
      instructor: "Dr. Emily Watson",
      description: "Advanced laser procedures with emphasis on patient safety",
      price: "$175",
      image: "/api/placeholder/300/200"
    }
  ]

  const pricingPlans = [
    {
      name: "Free",
      price: pricingToggle === 'monthly' ? "$0" : "$0",
      period: "month",
      popular: false,
      features: [
        "Access to 1 Masterclass",
        "80% discount on live sessions",
        "1 Free Starter Class",
        "Basic community access"
      ],
      buttonText: "Get Started",
      buttonVariant: "outline"
    },
    {
      name: "Basic",
      price: pricingToggle === 'monthly' ? "$29" : "$290",
      period: pricingToggle === 'monthly' ? "month" : "year",
      popular: true,
      features: [
        "Access to 3 Masterclasses",
        "20% off certificates",
        "Access to all content",
        "Priority support",
        "Live Q&A sessions"
      ],
      buttonText: "Learn More",
      buttonVariant: "primary"
    },
    {
      name: "Premium",
      price: pricingToggle === 'monthly' ? "$79" : "$790",
      period: pricingToggle === 'monthly' ? "month" : "year",
      popular: false,
      features: [
        "Access to 5 Masterclasses",
        "30% off certificates",
        "Mentorship program",
        "Catalog of products",
        "Direct expert access",
        "Custom learning paths"
      ],
      buttonText: "Get Instant Access",
      buttonVariant: "primary"
    }
  ]

  const features = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Learn from Experts",
      description: "Access courses from verified medical aesthetics professionals"
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-600" />,
      title: "Universal Education",
      description: "Comprehensive training accessible worldwide"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-600" />,
      title: "Patient Outcomes",
      description: "Focus on improving patient results and safety"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Star className="w-8 h-8 text-yellow-500" />
              <h1 className="text-2xl font-bold">CliniciansAdvisor</h1>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#courses" className="hover:text-blue-400 transition-colors">Master Courses</a>
              <a href="#video-courses" className="hover:text-blue-400 transition-colors">Video Courses</a>
              <a href="#certificates" className="hover:text-blue-400 transition-colors">Awards & Certs</a>
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="/login" className="hover:text-blue-400 transition-colors">Login</a>
              <a href="/signup" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
                Sign Up
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Master aesthetic courses
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-200 mb-8 leading-relaxed"
            >
              Join the definitive digital ecosystem where verified medical aesthetics professionals 
              can build their brand, monetize their expertise, and cultivate a professional community.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-all font-medium"
            >
              Learn more
            </motion.button>
          </div>
        </div>
      </section>

      {/* Medical Aesthetics Courses */}
      <section id="courses" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Medical aesthetics courses</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from industry experts with hands-on experience and earn professional certification 
              to accelerate your career in medical aesthetics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {courses.map((course) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-blue-600 font-medium mb-2">{course.instructor}</p>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gray-900">{course.price}</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              View all courses
            </button>
          </div>
        </div>
      </section>

      {/* Career Acceleration & Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Accelerate your career in aesthetics training
            </h2>
            <p className="text-xl text-gray-600">Learn from industry experts, gain confidence, lead.</p>
          </div>

          {/* Pricing Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 rounded-lg p-1 flex">
              <button
                onClick={() => setPricingToggle('monthly')}
                className={`px-6 py-2 rounded-md transition-colors ${
                  pricingToggle === 'monthly'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setPricingToggle('yearly')}
                className={`px-6 py-2 rounded-md transition-colors ${
                  pricingToggle === 'yearly'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Yearly
              </button>
            </div>
          </div>

          {/* Pricing Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 ${
                  plan.popular 
                    ? 'bg-blue-600 text-white ring-4 ring-blue-200' 
                    : 'bg-white text-gray-900 border-2 border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                      Most popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-lg opacity-80">/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                    plan.buttonVariant === 'primary'
                      ? plan.popular
                        ? 'bg-white text-blue-600 hover:bg-gray-100'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Growth Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Your career growth starts here
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                CliniciansAdvisor provides the tools, knowledge, and community support you need 
                to advance your career in medical aesthetics. Join thousands of professionals 
                who have already transformed their practice.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Become a part of the aesthetic revolution
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
          >
            Shape the future of medical aesthetics education and join a community of innovators 
            and experts pushing the boundaries of what's possible.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-all font-medium"
          >
            Learn more
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Star className="w-8 h-8 text-yellow-500" />
                <span className="text-2xl font-bold">CliniciansAdvisor</span>
              </div>
              <p className="text-gray-400">
                The definitive digital ecosystem for medical aesthetics professionals.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Master courses</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Policies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Experts</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms and Conditions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>contact@cliniciansadvisor.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Medical Center Dr<br />Suite 100<br />New York, NY 10001</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 CliniciansAdvisor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
