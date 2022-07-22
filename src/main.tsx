import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home'
import './style/index.css'

document.getElementsByTagName('html')[0].setAttribute('data-theme', 'retro');

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)