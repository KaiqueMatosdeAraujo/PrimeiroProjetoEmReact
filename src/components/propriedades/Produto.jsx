import React, { useState } from "react"
import './Produto.css'
function Produto(props) {


      console.log(props.produto)

    return (
        <>
       <li className="item">
           <div  className="nome">{props.nome}</div>
           <div  className="marca">{props.marca}</div>
           <div  className="valor">R${props.valor}</div>
           <button  className="comprar">comprar</button>
       </li>
        </>

    )
}

export default Produto