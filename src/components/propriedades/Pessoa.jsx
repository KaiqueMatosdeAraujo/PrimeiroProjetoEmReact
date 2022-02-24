import React, { useState } from "react"

function Pessoa(props) {


      console.log(props.nome)

    return (
        <>
        <hr/>
        <div>{props.nome}</div>
        <div>{props.sexo}</div>
        <div>{props.estado_civil}</div>
        <div>{props.idade}</div>
        <hr/>
        </>

    )
}

export default Pessoa