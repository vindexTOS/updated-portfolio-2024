import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { HashRouter } from 'react-router-dom'
import { PortfolioContextProvider } from './context/PortfolioContext'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <PortfolioContextProvider>
      <App />
    </PortfolioContextProvider>
  </HashRouter>,
)
