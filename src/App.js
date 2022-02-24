import './App.css';

import Produto from './components/propriedades/Produto'
import Propriedades from './components/propriedades/propriedades';
import  Pessoa from './components/propriedades/Pessoa'
import Carro from './components/carro/Carro'
function App() {
  return (
    <div className="App">
      <Pessoa nome="Kaique" idade="22" sexo="M" estado_civil="Solteiro"/>
       <ul><Produto nome="Mouse" marca="tedge" valor="20,00"/></ul>
       <ul><Produto nome="Mouse" marca="tedge" valor="20,00"/></ul>
       <ul><Produto nome="Mouse" marca="tedge" valor="20,00"/></ul>
      <Propriedades nome="Kaique"/>
    
       <ul><Carro modelo="Fusca" marca="Volskwagen" cor="Cinza" ano="2020" portas="2" combustivel="Gasolina" cambio="manual" tam_aro="15" potencia="30 Cavalos" preco="20.000"/></ul>
       <ul><Carro modelo="RS Q3" marca="Audi" cor="Azul" ano="2020" portas="4" combustivel="Gasolina" cambio="Automatico" tam_aro="15" potencia="400" preco="300.000"/></ul>
       <ul><Carro modelo="Fusca" marca="Volskwagen" cor="Cinza" ano="2020" portas="2" combustivel="Gasolina" cambio="manual" tam_aro="15" potencia="30 Cavalos" preco="20.000"/></ul>
       <ul><Carro modelo="RS Q3" marca="Audi" cor="Azul" ano="2020" portas="4" combustivel="Gasolina" cambio="Automatico" tam_aro="15" potencia="400" preco="300.000"/></ul>
    
    </div>
  );
}

export default App;
