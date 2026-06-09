import { useState } from 'react'

export default function EmailSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle, loading, success, error
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!email) {
      setStatus('error')
      setMessage('Please enter your email address')
      return
    }

    setStatus('loading')
    setMessage('')

    // Simulate email submission (replace with actual API call)
    try {
      // Mock API call - replace with your actual endpoint
      await new Promise(resolve => setTimeout(resolve, 800))
      
      // In production, you would do:
      // const response = await fetch('/api/enquiries', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email })
      // })
      
      setStatus('success')
      setMessage('Thank you! We\'ll be in touch soon.')
      setEmail('')
      
      // Reset message after 5 seconds
      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 5000)
    } catch (error) {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Email Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-5 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-forest-700 focus:border-transparent transition-all"
            disabled={status === 'loading'}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn-primary whitespace-nowrap disabled:opacity-75"
          >
            {status === 'loading' ? (
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              'Email Us'
            )}
          </button>
        </div>
      </form>

      {/* Status Messages */}
      {message && (
        <div
          className={`text-center text-sm font-medium px-4 py-2 rounded-lg animate-fade-in ${
            status === 'success'
              ? 'text-forest-700 bg-forest-50 border border-forest-200'
              : 'text-red-700 bg-red-50 border border-red-200'
          }`}
        >
          {message}
        </div>
      )}

      {/* Direct Email Link */}
      <div className="text-center text-gray-600 text-sm">
        <span>or email us directly at </span>
        <a
          href="mailto:info@greenezine.com"
          className="text-forest-700 hover:text-forest-800 font-semibold transition-colors"
        >
          info@greenezine.com
        </a>
      </div>
    </div>
  )
}
