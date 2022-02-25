import React, { useState } from 'react'

function ParImpar({ num = 0 }) {

    return (
        <div>
            <h2> O Resultado é :</h2>
            {num % 2 == 0 ? <h3>É PAR</h3> : <h3>É IMPAR</h3>}



        </div>

    )

}

export default ParImpar