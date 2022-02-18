import './App.css';
import Random from './components/atv'
import  Anon   from  './components/anonima'
import Primeiro from './components/primeiro'
import M, {Component1,Component2} from './components/multi'
import Estilos from './components/Estilos'
import MinMax from './components/MinMax.jsx'
import Titulo from './components/Titulo'
import Botao from './components/botao/Botao'
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <MinMax min ="1" max="100"/> 
       <MinMax min = {2} max={40}/>
       <Titulo um= "teste1" dois="teste2"/>
       <Titulo um= "teste1" dois="teste2"/>
   <Botao/>
      </header>
    </div>
  );
}

export default App;
