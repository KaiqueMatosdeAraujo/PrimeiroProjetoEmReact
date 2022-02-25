import React from 'react';


function Familia(props) {

    return (
        <>

            <h2> Membros da Família </h2>
            {props.children}
            <h2>------------------------------------</h2>

        </>
    )


}

export default Familia

