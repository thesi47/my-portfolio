import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import data from './data/portfolioData.json'

/* Dynamically set favicon from JSON (assets.favicon) */
if (data.assets?.favicon) {
  const link = document.querySelector("link[rel='icon'][type='image/x-icon']")
  if (link) link.href = data.assets.favicon
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
