
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Okay is this working now?
          <form><button onClick={()=>alert("clicked")}>click me</button></form>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
