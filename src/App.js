import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
        {/* <Button/>
        <Label/> */}
        <Form/>
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

function Form(){
  // Use State Variables
  const [form, setForm] = useState({name: "", email: "", age: 0, isStudent: false, info: ""})
  // the forms
  return(
    <form onSubmit={(e)=>{
      e.preventDefault();
      console.log(form)
    }}>
      {/* Name Form */}
      <label>Name:</label>
      <input type="text" value={form.name} onChange={(e)=>{setForm({...form, name: e.target.value})}}/>
      <hr />
      {/* Finished */}

      {/* Email Form */}
      <label>Email:</label>
      <input type="email" value={form.email} onChange={(e)=>{setForm({...form, email: e.target.value})}}/>
      <hr />
      {/* Finished */}

      {/* Age Form */}
      <label>Age:</label>
      <input type='number' value={form.age} onChange={(e)=>{setForm({...form, age: e.target.value})}}/>
      <hr />
      {/* Finished */}

      {/* Checkbox Form */}
      <label>Are You student</label>
      <input type="checkbox" checked={form.isStudent} onChange={(e)=>{setForm({...form, isStudent: e.target.checked})}}/>
      <hr />
      {/* finished */}

      {/* TextArea Form */}
      <textarea name="" id="" value={form.info} onChange={(e)=>{setForm({...form, info: e.target.value})}}></textarea>
      <hr />
      {/* finished */}

      <button type='submit'>submit</button>
    </form>
  )

}