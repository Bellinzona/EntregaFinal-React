import React, { useContext, useState } from 'react'
import {ContextoProvider} from "../../context/Contexto"
import "./CartWidget.css"
import { Link } from 'react-router-dom'

export const CartWidget = () => {

    const {productos,incrementarContador,añadirProductoCarrito,productosEnCarrito} = useContext(ContextoProvider)
    const [cosas, setCosas] = useState(false)
    const [hoveredIndex, setHoveredIndex] = useState(null);


    

    


    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
        setCosas(true)
        console.log(`Mouse enter en el elemento ${index}`);
        
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
        setCosas(false);
      };

    console.log(productos)
    console.log(productosEnCarrito)

  return (
    <div>

        <div className="productosContainer">


            <div className="Productos">

                {productos.map((item,index) => (

                    <div key={index} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>


                        <div className="Producto">

                            <img src={item.Imagen} alt="" />

                            <p>{item.Nombre}</p>

                            <p>$ {item.Precio}</p>

                            <button onClick={() => {incrementarContador(),añadirProductoCarrito(item)}}>Añadir a carrito</button>


                            <Link to={`/item/${item.id}`}><p className='verMas' style={{ display: hoveredIndex === index && cosas ? 'flex' : 'none' }}>Ver +</p></Link>

                            







                        </div>










                    </div>







                ))}





            </div>










        </div>





    </div>
  )
}
