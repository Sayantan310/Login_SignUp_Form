import React from 'react'
import { ArrowRight, CheckCircle2, Zap, Shield, Smile } from 'lucide-react'

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">
      {/* Hero Section */}
      <section className="px-4 py-20 text-center">
        <h1 className="mb-4 text-5xl font-bold text-purple-800">Welcome to Our Amazing Product</h1>
        <p className="mb-8 text-xl text-gray-600">Revolutionize your workflow with our cutting-edge solution</p>
        <button className="rounded-full bg-purple-600 px-6 py-3 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
          Get Started
          <ArrowRight className="ml-2 inline-block h-5 w-5" />
        </button>
      </section>

      {/* Features Section */}
      <section className="bg-white px-4 py-16">
        <h2 className="mb-12 text-center text-3xl font-semibold text-purple-800">Why Choose Us?</h2>
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          <FeatureCard
            icon={<Zap className="h-8 w-8 text-purple-500" />}
            title="Lightning Fast"
            description="Experience unparalleled speed and efficiency"
          />
          <FeatureCard
            icon={<Shield className="h-8 w-8 text-purple-500" />}
            title="Secure & Reliable"
            description="Your data is safe with our top-notch security measures"
          />
          <FeatureCard
            icon={<Smile className="h-8 w-8 text-purple-500" />}
            title="User-Friendly"
            description="Intuitive interface designed for the best user experience"
          />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-purple-800 px-4 py-16 text-center text-white">
        <h2 className="mb-4 text-3xl font-bold">Ready to Transform Your Business?</h2>
        <p className="mb-8 text-xl">Join thousands of satisfied customers and take your operations to the next level</p>
        <button className="rounded-full bg-white px-6 py-3 text-purple-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-800">
          Start Your Free Trial
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 px-4 py-8 text-center text-gray-600">
        <p>&copy; 2024 Our Amazing Product. All rights reserved.</p>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="rounded-lg bg-gray-50 p-6 text-center shadow-md">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="mb-2 text-xl font-semibold text-purple-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

