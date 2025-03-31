import React from 'react'
import ReactDOM from 'react-dom/client'

import { ProductApp } from './components/ProductApp.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/**
     * Paso 1.1,ponemos el componente Principal ProductsApp 
     * Paso 1.20,ponemos el title
    */}
    <ProductApp title={'Lista de Productos!'} />
  </React.StrictMode>,
)
