
import './App.css';
import Random from './components/atv'
import  Anon   from  './components/anonima'
import Primeiro from './components/primeiro'
import M, {Component1,Component2} from './components/multi'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Random/><Primeiro/><Anon/><M/><Component1/><Component2/>
      </header>
    </div>
  );
}

export default App;
