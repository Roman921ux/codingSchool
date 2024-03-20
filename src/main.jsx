import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// rtk
import { Root } from './Root.jsx'
import { store } from './feature/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root store={store} />
  </React.StrictMode>,
)
