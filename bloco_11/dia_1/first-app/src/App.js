import logo from './logo.svg';
import './App.css';

const task = (array) => {
    return (
      array.map( (value) =>{
       return(<li>{value}</li>)
      }
    )
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ol>
          {task(['Estudar MEFIII', 'Trybe', 'Limpar a Casa', 'Fazer comida'])}
        </ol>
      </header>
    </div>
  );
}

export default App;
