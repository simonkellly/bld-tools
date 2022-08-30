import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home'
import './style/index.css'

document.getElementsByTagName('html')[0].setAttribute('data-theme', 'retro');

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/">
          {/* <Route index element={<Home />} /> */}
          <Route index element={<Navigate replace to="/UFR Corners/" />} />
          <Route path=":sheet" element={<Home />} />
        </Route>
        <Route path="*" element={<Navigate replace to="/UFR Corners/" />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
)