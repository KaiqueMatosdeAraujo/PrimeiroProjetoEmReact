import produtos from './produtos'

function ListaProdutos(props) {

  function mostrarLista() {
      return produtos.map(p => {
          return (
              <li key={p.id}>
                {p.id} {p.nome} tem preco  R$ {p.preco}
              </li>
          )
      })
  }
     
  return(
      <>
      <h2> Lista de Produtos </h2>

      <ul>
          {mostrarLista()}
      </ul>      
      
      </>
  )

}

export default ListaProdutos