import React, { useState } from 'react'
import  './estilo.css'


export default props => {

    function gerarNumero(){
        return Math.random()
    }
    return (
        <button onClick={function(){
            const n =gerarNumero()
            props.funcao('o valor é', n)
        }}
        >  Executar </button>
    )
}