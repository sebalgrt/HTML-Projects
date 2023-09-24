import React, { useState } from 'react'

const Principal = () => {
    const [num, setNum] = useState(0);
    const [texto, setTexto] = useState(0);

    function sumaNum(){
        setNum(num + 1);
    }

    function sumaTexto(){
        setTexto(texto + 1);
    }

  return (
    <div>
      <button onClick={sumaNum}>Apretá acá para sumar 1</button>
      <p>Apretaste {num} veces</p>
      <input type="text" onChange={sumaTexto}/>
      <p>La palabra tiene {texto} letras</p>
    </div>
  )
}

export default Principal
