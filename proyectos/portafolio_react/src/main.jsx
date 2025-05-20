import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/header/Header.jsx'
import Hero from './components/hero/Hero.jsx'

// Uso de componentes creados en React
createRoot(document.getElementById('header')).render(
  <StrictMode>
    <Header />
  </StrictMode>
)

createRoot(document.getElementById('hero')).render(
  <StrictMode>
    <Hero />
  </StrictMode>
)
