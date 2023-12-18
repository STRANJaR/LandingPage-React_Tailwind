import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import LandingPage from './components/LandingPage'
import LandingPg from './components/LandingPg'
import TropicalAdventure from './components/TropicalAdventure'
import Card from './components/Card'
function App() {

  return (
    <div className="top-0 left-0">
      <Header/>
      {/* <LandingPage/> */}
      <LandingPg/>
      <TropicalAdventure/>
      <Card
        imageUrl="https://example.com/image.jpg"
        title="Card Title"
        description="This is a sample card description."
      />

    </div>
  )
}

export default App
