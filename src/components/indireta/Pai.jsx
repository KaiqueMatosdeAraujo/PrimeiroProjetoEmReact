import React, { useState } from 'react'
import Filho from './Filho'

export default props =>{
    const [texto,setTexto] = useState('')
    const [num,setNum] = useState(0)

    function setValores(texto,numeros) {
        setTexto(texto)
        setNum(numeros)
    }

    return(
    
    <>

    <h2>{texto} {num}</h2>
    <Filho funcao={setValores}/>

    </>
    )
}