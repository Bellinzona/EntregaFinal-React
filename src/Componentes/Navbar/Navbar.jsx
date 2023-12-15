import React from 'react'
import "./Navbar.css"
import { Carrito } from '../Carrito/Carrito'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>

        <div className="navBar">

            <div className="container">

            <Link to={"/"}><h1>Tienda Mateo</h1></Link>

            <div className="otros">

                <Link to={`/Producto/Tecnologia`} ><a href="">Tecnologia</a></Link>
                <Link to={`/Producto/Alimentos`} ><a href="">Alimentos</a></Link>
                <Link to={`/Producto/Muebles`} ><a href="">Muebles</a></Link>



                <Carrito></Carrito>


            </div>


            


                
        </div>

        </div>






        
    </div>
  )
}
