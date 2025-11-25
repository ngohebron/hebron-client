import React from 'react'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from './pages/Home'
import ReactLenis from 'lenis/react'
import AboutUs from './pages/AboutUs'
import Ourwork from './pages/Ourwork'
import Campaign_page from './pages/Campaign_page'
import DonationFood from './pages/donationFood'
import ScrollToTop from './component/ScrollToTop'
import DonationHub from './pages/donationHub'


function App() {
 

  return (
    <Router>
      <ScrollToTop />
      <ReactLenis
      root options={
        {
          lerp: 0.1,
          duration: 1,
          orientation: 'vertical',
          gestureOrientation: 'vertical',
          smoothWheel: true,
          wheelMultiplier: 1,
          smoothTouch: false,
          touchMultiplier: 2,
        }}>
      
        
        <Routes>
          <Route path="/" element={<Home/>} />
           <Route path="/aboutus" element={<AboutUs/>} />
            <Route path="/ourwork" element={<Ourwork/>} />
            <Route path="/campaign" element={<Campaign_page/>} />
            <Route path="/donationhub" element={<DonationHub/>} />
             <Route path="/donationfood" element={<DonationFood/>} />
        </Routes>
      </ReactLenis>
    </Router>
  )
}

export default App
