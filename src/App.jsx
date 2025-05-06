import React, { useContext, useEffect, useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Partnership from './components/Partnership'
import Product from './components/Product'

const DEFAULT_DATA = {
  hero_heading: '',
  hero_subheading: '',
  about_us: '',
  partnership: {
    operator: [],
    vendor: [],
    mitra: []
  }
}
const AppContext = React.createContext(DEFAULT_DATA)

function App() {
  const [data, setData] = useState(DEFAULT_DATA)
  useEffect(() => {
    fetch('/config.json')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch(console.error)
  }, [])

  return (
    <AppContext value={data}>
      <main className='overflow-x-hidden '>
        <div className="hero-circle-shape" />
        <Navbar />
        <Hero />
        <div className="mt-20" />
        <About />
        <div className="mt-36 bg-white border-y border-black h-3" />
        <Partnership />
        <div className="bg-primary-100">
          <Product />
          <div className="mt-36 bg-primary-500 border-y border-black h-3" />
        </div>
      </main>
    </AppContext>
  )
}

export const useAppData = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppData must be used within a AppProvider')
  }
  return context
}
export default App
