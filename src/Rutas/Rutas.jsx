import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Paginas/Home'
import { ItemDetail } from '../Paginas/ItemDetail'
import { ProductoFiltrado } from '../Paginas/ProductoFiltrado'
import { Carrrito } from '../Paginas/Cart'

export const Rutas = () => {
  return (
    <BrowserRouter>

    <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/item/:itemID' element={<ItemDetail></ItemDetail>}></Route>
        <Route path='/Producto/:ProductoCategoria' element={<ProductoFiltrado></ProductoFiltrado>}></Route>
        <Route path='/Carrito' element={<Carrrito></Carrrito>}></Route>






    </Routes>
    

    </BrowserRouter>
  )
}
