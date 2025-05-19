import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/styles/index.scss'
import Header from './components/header/Header.jsx'

createRoot(document.getElementById('header')).render(
  <StrictMode>
    <Header />
  </StrictMode>,
)
