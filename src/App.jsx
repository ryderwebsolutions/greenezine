import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Archive from './pages/Archive'
import IssueDetail from './pages/IssueDetail'
import FeaturedBusinesses from './pages/FeaturedBusinesses'
import About from './pages/About'
import Advertise from './pages/Advertise'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/issues/:slug" element={<IssueDetail />} />
            <Route path="/featured-businesses" element={<FeaturedBusinesses />} />
            <Route path="/about" element={<About />} />
            <Route path="/advertise" element={<Advertise />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
