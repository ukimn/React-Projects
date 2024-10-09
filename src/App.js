import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button/>
        <Label/>
      </header>
    </div>
  );
}

export default App;


function Button(){
  const [click, setClick] = useState(0)

  function handleClick(){
    setClick(click + 1);
  }

  return (
    <>
      <button onClick={handleClick} style={{margin: "20px"}}>You Clicked the button {click}</button>
    </>
  )
}

function Label(){
  const [value, setValue] = useState("");

  function input(event){
    setValue(event.target.value);
  }

  return(
    <>
      <input type="text" onChange={input} value={value} style={{margin: "20px"}}/>
      <p>{value}</p>
    </>
  )
}