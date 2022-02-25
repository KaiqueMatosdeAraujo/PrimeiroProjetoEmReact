import React, { useState } from 'react';
import If from './If'

function UsuarioLogado (props){

    const usuario = props.usuario || {}

   return(
   <>
   <If test={usuario && usuario.nome && usuario.email}>

        <h2> Usuário Logado: </h2>
        <h3>
            {usuario.nome} - {usuario.email}
        </h3>
   </If>

   <If test={!usuario || !usuario.nome || !usuario.email}>
       <h2>
           Bem Vindo, <a href="#">Faça seu Login </a>
       </h2>
   </If>
   </>
   )

}
export default UsuarioLogado