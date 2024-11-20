import "@theme-toggles/react/css/Expand.css"
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import App from '../src/components/App/App.jsx'
import '../src/styles/index.scss'
import LanguageProvider from './contexts/LanguageContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet>
        <title>Portfolio de Guillaume Bréchaire</title>
        <meta name="description" content="Portfolio de Guillaume Bréchaire, présentant des projets en développement web et des compétences en programmation." />
        <meta name="keywords" content="Guillaume Bréchaire, portfolio, développement web, programmation, web developer, projets, compétences" />
        <meta property="og:title" content="Portfolio de Guillaume Bréchaire" />
        <meta property="og:description" content="Découvrez les projets et compétences en développement web de Guillaume Bréchaire." />
        <meta property="og:image" content="https://guillaume-brechaire.netlify.app/images/portfolio.webp" />
        <meta property="og:url" content="https://guillaume-brechaire.netlify.app/" />
        <meta name="twitter:title" content="Portfolio de Guillaume Bréchaire" />
        <meta name="twitter:description" content="Découvrez les projets et compétences en développement web de Guillaume Bréchaire." />
        <meta name="twitter:image" content="https://guillaume-brechaire.netlify.app/images/portfolio.webp" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
