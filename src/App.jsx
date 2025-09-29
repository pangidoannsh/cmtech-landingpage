import React, { useContext, useEffect, useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Partnership from './components/Partnership'
import Product from './components/Product'
import "primereact/resources/themes/saga-blue/theme.css";
import OurValues from './components/OurValues'
import Portfolio from './components/Portfolio'
import Address from './components/Address'
import Footer from './components/Footer'
import AreaWork from './components/AreaWork'
import Company from './components/Company'

const DEFAULT_DATA = {
  hero_heading: '',
  hero_subheading: '',
  hero_background: '',
  about_us: '',
  our_vision: '',
  partnership: [],
  navbarHeight: 204,
  our_values: [],
  products: [],
  portfolios: [],
  address: "",
  footer_paragraph: "",
  social_media: [],
  contacts: [],
  copyright: "",
  windowWidth: window.innerWidth,
  management_paragraph: "",
  structures: [],
  head_sctructures: [],
  values: ""
}
const AppContext = React.createContext(DEFAULT_DATA)

function App() {
  const [data, setData] = useState(DEFAULT_DATA)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  useEffect(() => {
    fetch('/config.json')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch(console.error)

    function handleResize() {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [])

  return (
    <AppContext value={{ ...data, windowWidth }}>
      <main className='overflow-x-hidden relative'>
        <Navbar />
        <Hero />
        <div className="bg-linear">
          <About />
          <div className="mt-10 md:mt-28"></div>
          <Partnership />
          <OurValues />
        </div>
        <Product />
        <Portfolio />
        <AreaWork />
        <Company />
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
