import './App.css';
import './condicao.css';

/*import Produto from './components/propriedades/Produto'
import Propriedades from './components/propriedades/propriedades';
import  Pessoa from './components/propriedades/Pessoa'
import Carro from './components/carro/Carro'
import Pai from './components/indireta/Pai'*/
import Familia from './components/ConhecendoChildren/Familia'
import Membro from './components/ConhecendoChildren/Membro'
import ParImpar from './components/renderizacaoCondiUm/ParImpar'
import UsuarioLogado from './components/renderizacaoCondDois/UsuarioLogado';
import ListaProdutos from './components/Produtos/ListProdutos';
import DigiteSeuNome from './components/ComponentesControlados/DigiteSeuNome'
import CadastroNome from './components/CadastronomeClasse/CadastroNome';
function App() {
  return (




<div>
  <h2>
    Usando Classe
  <CadastroNome nome="Teste"/>
  </h2>
  <DigiteSeuNome/>
  <ListaProdutos/>

<UsuarioLogado usuario={{ nome: 'Gui', email: 'gui@gui.com' }} />
<UsuarioLogado usuario={{ nome: 'Ana' }} />
<UsuarioLogado usuario={{ email: 'carlos@empresa.com' }} />
<UsuarioLogado usuario={null} />
<UsuarioLogado usuario={{}} />



<div className="condicao">
<ParImpar num={3}/>
<ParImpar num={2}/>
</div>


<Familia>
<Membro  nome="Kaique" sobrenome="Araujo" />
</Familia>
<Familia>
<Membro  nome="Ana" sobrenome="Silva" />
<Membro  nome="Leandro" sobrenome="Silva" />
</Familia>
<Familia>
<Membro  nome="Marcos" sobrenome="Pereira" />
<Membro  nome="Antonio" sobrenome="Pereira" />
<Membro  nome="Eduardo" sobrenome="Pereira" />
</Familia>

</div>


    //<div className="App">

      
   // <Pessoa nome="Kaique" idade="22" sexo="M" estado_civil="Solteiro"/>
      // <ul><Produto nome="Mouse" marca="tedge" valor="20,00"/></ul>
     //  <ul><Produto nome="Mouse" marca="tedge" valor="20,00"/></ul>
      // <ul><Produto nome="Mouse" marca="tedge" valor="20,00"/></ul>
      //<Propriedades nome="Kaique"/>
    
      // <ul><Carro modelo="Fusca" marca="Volskwagen" cor="Cinza" ano="2020" portas="2" combustivel="Gasolina" cambio="manual" tam_aro="15" potencia="30 Cavalos" preco="20.000"/></ul>
       //<ul><Carro modelo="RS Q3" marca="Audi" cor="Azul" ano="2020" portas="4" combustivel="Gasolina" cambio="Automatico" tam_aro="15" potencia="400" preco="300.000"/></ul>
      // <ul><Carro modelo="Fusca" marca="Volskwagen" cor="Cinza" ano="2020" portas="2" combustivel="Gasolina" cambio="manual" tam_aro="15" potencia="30 Cavalos" preco="20.000"/></ul>
      // <ul><Carro modelo="RS Q3" marca="Audi" cor="Azul" ano="2020" portas="4" combustivel="Gasolina" cambio="Automatico" tam_aro="15" potencia="400" preco="300.000"/></ul>
      //<Pai/>
   // </div>
  );
}

export default App;
