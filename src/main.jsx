import React from 'react'
import ReactDOM from 'react-dom/client'

import { ProductApp } from './components/ProductApp.jsx'

//Cid 233 ,  <ProductApp title={'Lista de Productos!'} />
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/**Paso 1.1,ponemos el componente Principal ProductsApp */}
    <ProductApp title={'Lista de Productos!'} />
  </React.StrictMode>,
)
