import { useState } from 'react'
import EmailSignup from './EmailSignup'
import SocialLinks from './SocialLinks'

export default function Hero() {
  return (
    <div className="flex-1 flex items-center justify-center px-4 py-20 md:py-32">
      {/* Subtle background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-forest-50 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-forest-100 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="w-full max-w-2xl animate-fade-in">
        {/* Brand Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-block px-4 py-1.5 bg-forest-50 border border-forest-200 rounded-full">
            <span className="text-forest-700 text-sm font-semibold tracking-wide">GREENEZINE</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 text-center mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Website Coming<br />
          <span className="text-forest-700">Soon</span>
        </h1>

        {/* Supporting Text */}
        <p className="text-lg sm:text-xl text-gray-600 text-center mb-12 leading-relaxed max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          We're currently building the new GreenEzine online experience. For partnerships, advertising enquiries, collaborations, or general contact, please reach out below.
        </p>

        {/* Email Signup Section */}
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <EmailSignup />
        </div>

        {/* Social Links */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <SocialLinks />
        </div>
      </div>
    </div>
  )
}
