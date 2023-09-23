import React from 'react'

const Main2 = () => {
  return (
    <div>
      <Hijo nombre = "Martinez"/>;
    </div>
  )
}

export default Main2

function Hijo(props) {
    return <h1>Hola, {props.nombre}</h1>
}