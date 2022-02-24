import React, { useState } from "react"
import './Carro.css'


function Carro(props) {


    console.log(props.Carro)

  return (
      <>
     <li className="itemCarro">
         <div  className="modelo">{props.modelo}</div>
         <div  className="marca">{props.marca}</div>
         <div  className="cor">{props.cor}</div>
         <div  className="ano">{props.ano}</div>
         <div  className="portas">{props.portas}</div>
         <div  className="combustivel">{props.combustivel}</div>
         <div  className="cambio">{props.cambio}</div>
         <div  className="tam_aro">{props.tam_aro}</div>
         <div  className="potencia">{props.potencia}</div>
         <div  className="preco">R${props.preco}</div>
         
     </li>
      </>

  )
}

export default Carro