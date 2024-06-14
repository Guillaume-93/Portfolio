import "@theme-toggles/react/css/Expand.css"
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import App from '../src/components/App/App.jsx'
import '../src/styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet>
        <title>Portfolio de Guillaume Bréchaire</title>
        <meta name="description" content="Portfolio de Guillaume Bréchaire, présentant des projets en développement web et des compétences en programmation." />
        <meta name="keywords" content="Guillaume Bréchaire, portfolio, développement web, programmation, web developer, projets, compétences" />
        <meta property="og:title" content="Portfolio de Guillaume Bréchaire" />
        <meta property="og:description" content="Découvrez les projets et compétences en développement web de Guillaume Bréchaire." />
        <meta property="og:image" content="https://guillaume-brechaire.netlify.app/images/portfolio-accueil.webp" />
        <meta property="og:url" content="https://guillaume-brechaire.netlify.app/" />
      </Helmet>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)
