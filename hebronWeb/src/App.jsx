import React from 'react'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from './pages/Home'
import ReactLenis from 'lenis/react'
import AboutUs from './pages/AboutUs'
import Ourwork from './pages/Ourwork'


function App() {
 

  return (
    <Router>
      {/* <ReactLenis
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
        }}> */}
      
        
        <Routes>
          <Route path="/" element={<Home/>} />
           <Route path="/aboutus" element={<AboutUs/>} />
            <Route path="/ourwork" element={<Ourwork/>} />
        </Routes>
      {/* </ReactLenis> */}
    </Router>
  )
}

export default App
