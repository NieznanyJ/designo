import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './styles/navigation.css'
import './styles/home.css'
import './styles/design-cards.css'
import './styles/qualities.css'
import './styles/footer.css'
import './styles/getintouch.css'
import './styles/inner-page.css'
import './styles/location-list.css'
import './styles/locations-page.css'
import './styles/contact-page.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>

    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
)
