import React, { useContext } from 'react'
import { ContextoProvider } from '../../context/Contexto'
import carritoImagen from "../../assets/carrito.png"
import "./Carrito.css"
import { Link } from 'react-router-dom'

export const Carrito = () => {

  const {contador} = useContext(ContextoProvider)
  return (
    <div>

        <Link to={"/Carrito"}><div className="carritoContainer">

            <img src={carritoImagen} alt="" />

            <p>{contador}</p>








        </div> </Link>





    </div>
  )
}
