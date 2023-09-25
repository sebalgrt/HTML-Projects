import React, { useEffect, useState } from 'react'
import { obtenerPersonajes } from '../services/rickandmortyApiService'

export default function Personajes() {

    const[personajes,setPersonajes] = useState([])

    useEffect(()=>{
        obtenerPersonajes().then(data => { 
          setPersonajes(data)
        })
    },[])

  return (
    <div>
      {
        personajes.map(personaje =><p>{personaje.name}</p>)
      }
    </div>
  )
}
