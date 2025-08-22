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
  MessageCircle,
  ChevronRight,
  ArrowUpRight,
  Calendar,
  CreditCard,
  Target,
  TrendingUp
} from 'lucide-react'

export default function PlatformPage() {
  const [pricingToggle, setPricingToggle] = useState<'monthly' | 'yearly'>('monthly')
  const [activeTab, setActiveTab] = useState<'courses' | 'certificates' | 'community'>('courses')

  const courses = [
    {
      id: 1,
      title: "Advanced Botox Techniques",
      instructor: "Dr. Sarah Chen",
      description: "Master the latest botox injection techniques for natural-looking results",
      price: "$150",
      category: "Injectables",
      duration: "4 hours",
      students: 1247
    },
    {
      id: 2,
      title: "Dermal Filler Mastery",
      instructor: "Dr. Michael Rodriguez",
      description: "Comprehensive guide to facial contouring with dermal fillers",
      price: "$200",
      category: "Injectables",
      duration: "6 hours",
      students: 892
    },
    {
      id: 3,
      title: "Laser Treatments & Safety",
      instructor: "Dr. Emily Watson",
      description: "Advanced laser procedures with emphasis on patient safety",
      price: "$175",
      category: "Laser & Energy",
      duration: "5 hours",
      students: 1563
    }
  ]

  const stats = [
    { value: "15,000+", label: "Medical Professionals" },
    { value: "500+", label: "Expert Instructors" },
    { value: "95%", label: "Success Rate" },
    { value: "24/7", label: "Support Available" }
  ]

  const processSteps = [
    {
      number: "01",
      title: "Discover Your Goals",
      description: "Identify your learning objectives and target patient demographics"
    },
    {
      number: "02",
      title: "Choose Your Path",
      description: "Select from specialized courses and certification programs"
    },
    {
      number: "03",
      title: "Learn & Practice",
      description: "Engage with expert-led content and hands-on training"
    },
    {
      number: "04",
      title: "Get Certified",
      description: "Earn professional credentials and advance your career"
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
      icon: <Users className="w-8 h-8 text-amber-400" />,
      title: "Learn from Experts",
      description: "Access courses from verified medical aesthetics professionals"
    },
    {
      icon: <Globe className="w-8 h-8 text-amber-400" />,
      title: "Universal Education",
      description: "Comprehensive training accessible worldwide"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-amber-400" />,
      title: "Patient Outcomes",
      description: "Focus on improving patient results and safety"
    }
  ]

  const testimonials = [
    {
      name: "Dr. Jennifer Martinez",
      title: "Dermatologist, Miami",
      content: "CliniciansAdvisor transformed my practice. The advanced techniques I learned here have increased my patient satisfaction by 300%.",
      avatar: "/api/placeholder/60/60"
    },
    {
      name: "Dr. Robert Chen",
      title: "Plastic Surgeon, LA",
      content: "The quality of education here is unmatched. I've been able to expand my services and grow my practice significantly.",
      avatar: "/api/placeholder/60/60"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black/90 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Star className="w-8 h-8 text-amber-400" />
              <h1 className="text-2xl font-bold">CliniciansAdvisor</h1>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#courses" className="hover:text-amber-400 transition-colors">Master Courses</a>
              <a href="#certificates" className="hover:text-amber-400 transition-colors">Certificates</a>
              <a href="#community" className="hover:text-amber-400 transition-colors">Community</a>
              <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
              <a href="/login" className="hover:text-amber-400 transition-colors">Login</a>
              <a href="/signup" className="bg-amber-400 hover:bg-amber-500 text-black px-6 py-2 rounded-lg transition-all font-medium">
                Get Started
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 py-24">
        {/* Geometric Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-32 h-32 bg-amber-400/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
              >
                <span className="text-white">ADVANCE YOUR</span><br />
                <span className="text-amber-400">MEDICAL AESTHETICS</span><br />
                <span className="text-white">CAREER</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-300 mb-8 leading-relaxed"
              >
                Join the definitive digital ecosystem where verified medical aesthetics professionals 
                can build their expertise, earn certifications, and cultivate a professional community 
                that drives patient outcomes and career growth.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="bg-amber-400 text-black px-8 py-4 rounded-lg hover:bg-amber-500 transition-all font-medium text-lg">
                  START LEARNING
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-all font-medium text-lg">
                  View Courses
                </button>
              </motion.div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-400/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-amber-400/30">
                <div className="text-center">
                  <BookOpen className="w-16 h-16 text-amber-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">EXPERT-LED TRAINING</h3>
                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="bg-white/10 rounded p-3">
                      <div className="text-amber-400 font-semibold">500+</div>
                      <div>Expert Instructors</div>
                    </div>
                    <div className="bg-white/10 rounded p-3">
                      <div className="text-amber-400 font-semibold">15,000+</div>
                      <div>Professionals</div>
                    </div>
                    <div className="bg-white/10 rounded p-3">
                      <div className="text-amber-400 font-semibold">95%</div>
                      <div>Success Rate</div>
                    </div>
                    <div className="bg-white/10 rounded p-3">
                      <div className="text-amber-400 font-semibold">24/7</div>
                      <div>Support</div>
                    </div>
                  </div>
                  <button className="bg-amber-400 text-black px-6 py-2 rounded-lg font-medium">
                    Explore Platform
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Can Help Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold mb-6"
            >
              <span className="text-white">HOW WE CAN HELP YOU WITH</span><br />
              <span className="text-amber-400">MEDICAL AESTHETICS EDUCATION</span>
            </motion.h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive training programs designed to elevate your skills and advance your career in medical aesthetics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/50 rounded-2xl p-8 border border-gray-800">
              <Target className="w-16 h-16 text-amber-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Targeted Learning</h3>
              <p className="text-gray-300">Specialized courses designed for your specific area of practice and skill level.</p>
            </div>
            <div className="bg-black/50 rounded-2xl p-8 border border-gray-800">
              <TrendingUp className="w-16 h-16 text-amber-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Career Advancement</h3>
              <p className="text-gray-300">Professional certifications and advanced training to accelerate your career growth.</p>
            </div>
            <div className="bg-black/50 rounded-2xl p-8 border border-gray-800">
              <Users className="w-16 h-16 text-amber-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Expert Community</h3>
              <p className="text-gray-300">Connect with industry leaders and peers in our exclusive professional network.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-white">OUR</span> <span className="text-amber-400">LEARNING PROCESS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-amber-400 text-black w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-white">MEDICAL AESTHETICS</span> <span className="text-amber-400">COURSES</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
                className="bg-black/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-amber-400/50 transition-all group"
              >
                <div className="h-48 bg-gradient-to-br from-amber-400/20 to-purple-500/20 flex items-center justify-center relative overflow-hidden">
                  <BookOpen className="w-16 h-16 text-amber-400 group-hover:scale-110 transition-transform" />
                  <div className="absolute top-4 right-4 bg-amber-400 text-black px-3 py-1 rounded-full text-sm font-medium">
                    {course.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-400 transition-colors">{course.title}</h3>
                  <p className="text-amber-400 font-medium mb-2">{course.instructor}</p>
                  <p className="text-gray-300 mb-4 text-sm">{course.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span>{course.duration}</span>
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-amber-400">{course.price}</span>
                    <button className="bg-amber-400 text-black px-4 py-2 rounded-lg hover:bg-amber-500 transition-colors font-medium">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-amber-400 text-black px-8 py-3 rounded-lg hover:bg-amber-500 transition-colors font-medium text-lg">
              View all courses
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-white">ACCELERATE YOUR CAREER IN</span><br />
              <span className="text-amber-400">AESTHETICS TRAINING</span>
            </h2>
            <p className="text-xl text-gray-300">Learn from industry experts, gain confidence, lead.</p>
          </div>

          {/* Pricing Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-800 rounded-lg p-1 flex">
              <button
                onClick={() => setPricingToggle('monthly')}
                className={`px-6 py-2 rounded-md transition-colors ${
                  pricingToggle === 'monthly'
                    ? 'bg-amber-400 text-black'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setPricingToggle('yearly')}
                className={`px-6 py-2 rounded-md transition-colors ${
                  pricingToggle === 'yearly'
                    ? 'bg-amber-400 text-black'
                    : 'text-gray-300 hover:text-white'
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
                    ? 'bg-amber-400 text-black ring-4 ring-amber-400/30' 
                    : 'bg-gray-900 text-white border border-gray-800'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-black text-amber-400 px-4 py-2 rounded-full text-sm font-medium">
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
                        ? 'bg-black text-amber-400 hover:bg-gray-900'
                        : 'bg-amber-400 text-black hover:bg-amber-500'
                      : 'border-2 border-gray-600 text-gray-300 hover:border-amber-400 hover:text-amber-400'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-white">TESTIMONIALS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-black/50 rounded-2xl p-8 border border-gray-800"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-purple-500 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{testimonial.name}</h3>
                    <p className="text-amber-400">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{testimonial.content}</p>
              </motion.div>
            ))}
          </div>
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
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Become a part of the aesthetic revolution
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-8 max-w-3xl mx-auto"
          >
            Shape the future of medical aesthetics education and join a community of innovators 
            and experts pushing the boundaries of what's possible.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-900 transition-all font-medium text-lg"
          >
            Get Started Today
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Star className="w-8 h-8 text-amber-400" />
                <span className="text-2xl font-bold">CliniciansAdvisor</span>
              </div>
              <p className="text-gray-400">
                The definitive digital ecosystem for medical aesthetics professionals.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-amber-400 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Master courses</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Policies</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Experts</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Terms and Conditions</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Cookies</a></li>
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
