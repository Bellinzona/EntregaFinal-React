import React, { useContext } from 'react';
import { Navbar } from '../Componentes/Navbar/Navbar';
import { ContextoProvider } from '../context/Contexto';
import "./Cart.css";

export const Carrrito = () => {
    const { productosEnCarrito, decrementarCantidad, incrementarCantidad,total } = useContext(ContextoProvider);
    console.log(productosEnCarrito);

    return (
        <div>
            <Navbar></Navbar>

            <div className="containerCheck">

                {productosEnCarrito.length === 0 ? (
                    <div className="CarritoVacio">

                        <p>Carrito Vacio</p>



                    </div>
                ) : (
                    productosEnCarrito.map((item, index) => (
                        <div key={index} className="DetalleProductos">
                            <img src={item.Imagen} alt="" />
                            <div className="InfoProducto">
                                <p>{item.Nombre}</p>
                                <p>Categoria: {item.Categoria}</p>
                                <p>Cantidad: {item.Cantidad}</p>
                                <p>Precio: {item.Precio}</p>
                                <div className="botones">
                                    <button onClick={() => incrementarCantidad(index)}>+</button>
                                    <button onClick={() => decrementarCantidad(index)}>-</button>
                                </div>
                            </div>


                        </div>
                    ))
                )}

                <h2>Total: {total}</h2>
                <button className='btnComprar'>Comprar</button>
            </div>
        </div>
    );
};
