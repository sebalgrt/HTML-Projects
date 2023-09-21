import React from 'react'

const Main1 = () => {
  return (
    <div>
        <Hijo nombre = "Seba"/>;
        <Hijo nombre = "Martinez"/>;
    </div>
  )
}

export default Main1

function Hijo(props) {
    return <h1>Hola, {props.nombre}</h1>
}
