import React, { useEffect, useState } from 'react'
import { db } from '../firebase/config'
import { collection, getDocs } from 'firebase/firestore'


export const ContextoProvider = React.createContext()

export const Contexto = ({children}) => {

  
  const [productos,setProductos] = useState([])
  const [contador, setContador] = useState(0);
  const [productosEnCarrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);


  const incrementarCantidad = (index) => {
    setCarrito((prevProductos) =>
      prevProductos.map((producto, i) =>
        i === index ? { ...producto, Cantidad: producto.Cantidad + 1 } : producto
      )
    );
    setContador((prevContador) => prevContador + 1);
  };

  const decrementarCantidad = (index) => {
    setCarrito((prevProductos) =>
      prevProductos
        .map((producto, i) =>
          i === index ? { ...producto, Cantidad: Math.max(0, producto.Cantidad - 1) } : producto
        )
        .filter((producto) => producto.Cantidad > 0)
    );
    setContador((prevContador) => Math.max(0, prevContador - 1));
  };

  const incrementarContador = () => {
    setContador((prevValor) => prevValor + 1);
  };



  const añadirProductoCarrito = (item) => {
    setCarrito((prevCarrito) => {
      const existente = prevCarrito.find((producto) => producto.Nombre === item.Nombre);

      if (existente) {
        return prevCarrito.map((producto) =>
          producto.Nombre === item.Nombre ? { ...producto, Cantidad: producto.Cantidad + 1 } : producto
        );
      } else {
        return [...prevCarrito, { ...item, Cantidad: 1 }];
      }
    });
  };


  const actualizarTotal = () => {
    const nuevoTotal = productosEnCarrito.reduce((acumulador, producto) => {
      return acumulador + producto.Precio * producto.Cantidad;
    }, 0);

    setTotal(nuevoTotal);
  };




  useEffect(() => {
    const productosRef = collection(db, "Productos");
    getDocs(productosRef).then((resp) => {
        setProductos(resp.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
        }));
        
    });

}, []);

useEffect(() => {
  actualizarTotal();
}, [productosEnCarrito]);


  return (<ContextoProvider.Provider value={{productos,incrementarContador,contador,añadirProductoCarrito,productosEnCarrito,incrementarCantidad,decrementarCantidad,total}}> {children} </ContextoProvider.Provider>)
}
