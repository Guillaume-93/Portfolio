import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../src/components/App/App.jsx'
import '../src/styles/index.scss'
import "@theme-toggles/react/css/Expand.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
