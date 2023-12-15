import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ContextoProvider } from '../context/Contexto';
import { Navbar } from '../Componentes/Navbar/Navbar';

export const ProductoFiltrado = () => {
  const { productos } = useContext(ContextoProvider);
  const { ProductoCategoria } = useParams();
  const [ProductosFiltrados, setProductosFiltrados] = useState([]);


  console.log(ProductoCategoria)

  useEffect(() => {
    const fetchData = () => {
      const productosEncontrados = productos.filter(
        (producto) => producto.Categoria === ProductoCategoria
      );

      setProductosFiltrados(productosEncontrados);
    };

    fetchData();
  }, [ProductoCategoria, productos]);

  console.log(ProductosFiltrados);

  return (
    <div>
      <Navbar />

      <div className="productosContainer">


            <div className="Productos">

                {ProductosFiltrados.map((item,index) => (

                    <div key={index}>


                        <div className="Producto">

                            <img src={item.Imagen} alt="" />

                            <p>{item.Nombre}</p>

                            <p>$ {item.Precio}</p>




                        


                        </div>



                    </div>





                ))}


            </div>




        </div>


    </div>
  );
};
