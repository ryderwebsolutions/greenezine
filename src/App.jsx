import { Suspense, lazy } from 'react'
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const ComingSoon = lazy(() => import('./pages/ComingSoon'))
const Home = lazy(() => import('./pages/Home'))
const Archive = lazy(() => import('./pages/Archive'))
const IssueDetail = lazy(() => import('./pages/IssueDetail'))
const FeaturedBusinesses = lazy(() => import('./pages/FeaturedBusinesses'))
const About = lazy(() => import('./pages/About'))
const Advertise = lazy(() => import('./pages/Advertise'))
const Contact = lazy(() => import('./pages/Contact'))

function AppShell() {
  const location = useLocation()
  const isStandaloneLanding = location.pathname === '/coming-soon'

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {!isStandaloneLanding && <Navbar />}

      <main className="flex-1">
        <Suspense
          fallback={
            <div className="flex min-h-[50vh] items-center justify-center px-4 py-16">
              <div className="text-center">
                <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-sage-200 border-t-sage-700" />
                <p className="mt-4 font-serif text-2xl text-stone-900">Loading Greenezine</p>
                <p className="mt-2 text-sm text-stone-600">Preparing the next editorial section.</p>
              </div>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coming-soon" element={<ComingSoon />} />

            {/* Preserved full website routes */}
            <Route path="/preview/home" element={<Home />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/issues/:slug" element={<IssueDetail />} />
            <Route path="/featured-businesses" element={<FeaturedBusinesses />} />
            <Route path="/about" element={<About />} />
            <Route path="/advertise" element={<Advertise />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>

      {!isStandaloneLanding && <Footer />}
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  )
}

export default App
