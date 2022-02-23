import React, { useState } from 'react'


function Contador(props) {

    const [numero,setNumero] = useState(props.inicial)

    const incremento = () => {
        if (numero == props.limiteMax) {
            alert("O número não pode ser superior a 10")
            return
        }
        setNumero(numero + props.passo)
    }
    const decremento = () => {
        if (numero == props.limiteMin) {
            alert("O número não pode ser inferior a 0")
            return
        }
        setNumero(numero - props.passo)

    }
      return (
         <>
           <h2>{numero}</h2>
           <button onClick={incremento}>+</button>
           <button onClick={decremento}>-</button>
         </>



      )


}
export default Contador