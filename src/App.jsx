import React, { useContext, useEffect, useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Partnership from './components/Partnership'
import Product from './components/Product'
import Header from './components/Header'
import OurValues from './components/OurValues'
import Portfolio from './components/Portfolio'
import Address from './components/Address'
import Footer from './components/Footer'

const DEFAULT_DATA = {
  hero_heading: '',
  hero_subheading: '',
  hero_background: '',
  about_us: '',
  our_vision: '',
  vendors: [],
  navbarHeight: 204,
  our_values: [],
  products: [],
  portfolios: [],
  address: "",
  footer_paragraph: "",
  social_media: [],
  contacts: [],
  copyright: ""
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
      <main className='overflow-x-hidden relative'>
        <div className="fixed top-0 z-50">
          <Header />
          <Navbar />
        </div>
        <Hero />
        <About />
        <div className="mt-28"></div>
        <Partnership />
        <OurValues />
        <Product />
        <Portfolio />
        <Address />
        <Footer />
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
