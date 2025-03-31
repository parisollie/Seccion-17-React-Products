import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
import { ProductApp } from './components/ProductApp.jsx'

//Vid 230, ponemos nuestro import de ProductApp
//Cid 233 ,  <ProductApp title={'Lista de Productos!'} />
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductApp title={'Lista de Productos!'} />
  </React.StrictMode>,
)
