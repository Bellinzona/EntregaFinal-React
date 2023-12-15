import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { ContextoProvider } from '../context/Contexto';
import { Navbar } from '../Componentes/Navbar/Navbar';
import "./ItemDetail.css"

export const ItemDetail = () => {
    const { productos } = useContext(ContextoProvider)
    const { itemID } = useParams();
    const [productoEncontrado,setProducto] = useState([])

    


    useEffect(() => {
        const fetchData = async () => {
          
          console.log(itemID)
          console.log(productos)
        
          const productoEncontrado = productos.find(
            (producto) => producto.id == itemID
          );
    
          setProducto(productoEncontrado);
        };
    
        fetchData();
      }, [itemID]);

      console.log(productoEncontrado)



  return (
    <div>


        <Navbar></Navbar>


        <div className="PrductoDetalle">

            <img src={productoEncontrado.Imagen} alt="" />


            <div className="Informacion">

                <p>{productoEncontrado.Nombre}</p>
                <p>{productoEncontrado.Detalle}</p>

                <Link to={"/"}><button className="Atras">Atras</button></Link>
                

            </div>






        </div>






    </div>
  )
}
