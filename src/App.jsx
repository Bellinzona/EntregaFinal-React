import { useState } from 'react'
import './App.css'
import { Contexto, ContextoProvider } from './context/Contexto'
import { Rutas } from './Rutas/Rutas'

function App() {

  return (
    <div>

      <Contexto>


        <Rutas></Rutas>


      </Contexto>







    </div>
  )
}

export default App
