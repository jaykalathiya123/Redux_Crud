import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  './App.css'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.js'
import { BrowserRouter as Router } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <Router>
    <App />
  </Router>
</Provider>
)
