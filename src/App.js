import './App.css';
/*import Random from './components/atv'
import  Anon   from  './components/anonima'
import Primeiro from './components/primeiro'
import M, {Component1,Component2} from './components/multi'
import Estilos from './components/Estilos'
import MinMax from './components/MinMax.jsx'
import Titulo from './components/Titulo'
import Botao from './components/botao/Botao'*/
import Contador from './components/Contador'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      
       <Contador inicial={5} passo={1} limiteMax={10} limiteMin={0}/>
       
      </header>
    </div>
  );
}

export default App;
