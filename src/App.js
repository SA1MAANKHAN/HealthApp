import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import CovidTracker from './pages/covidTracker/covidTracker.page'
import Home from './pages/home/home.page'
import DiseasePrediction from "./components/DiseasePrediction/DiseasePrediction"
import About from './components/DiseasePrediction/sub-components/About'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/diseasePrediction" element={<DiseasePrediction/>}/>
        <Route path="/covidTracker" element={<CovidTracker/>}/>
        <Route path="/about" element={<About/>}/>    
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
  )
}

export default App
