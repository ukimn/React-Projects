import { useState } from 'react';
import './App.css';

let nextId = 5;
let nextIdTwo = 4;

export default function App() {
  let [input, setInput] = useState({
    formOne: "", 
    formTwo: "",
    formThree: ""
  });

  const [devices, setDevices] = useState([
    {id: 1, name: "Mac"}, 
    {id: 2, name: "Windows"},
    {id: 3, name: "Linux"},
    {id: 4, name: "OS"}
  ]);

  const [names, setNames] = useState([
    {id: 1, name: "moaath"},
    {id: 2, name: "mohummed"},
    {id: 3, name: "Osama"}
  ])

  const deviceList = devices.map((device) => {
    return <li style={{ margin: "30px" }} key={device.id}>{device.name} <button onClick={()=>{
      del(device.id)
    }}>X</button></li>;
  });

  const namesList = names.map((Name)=>{
    return <li style={{margin: "40px"}} key={Name.id}>{Name.name} <button onClick={()=>{
      delNames(Name.id)
    }}>X</button></li>
  })

  function addDeviceName() { // Clear the input field
    setDevices([...devices, {id: nextId, name: input.formOne}]); // Add the input to the devices array
    nextId += 1;
  }

  function del(id){

    const newDevices = devices.filter((device)=>{
      return device.id !== id; 
    })

    setDevices(newDevices)
  }

  function addNames(){
    setNames([...names, {id: nextIdTwo, name: input.formTwo}])
    nextIdTwo += 1;
  }

  function delNames(id){
    const newNames = names.filter((name)=>{
      return name.id !== id;
    })
    setNames(newNames)
  }

  return (
    <>
      {deviceList}

      <div>
        <input type="text" value={input.formOne} onChange={(e) => setInput({...input, formOne: e.target.value})} onKeyDown={(e)=>{if(e.key === "Enter"){addDeviceName()}}}/>
        <button onClick={addDeviceName}>Add Device</button>
      </div>

      {namesList}

      <div>
        <input type="text" value={input.formTwo} onChange={(e)=>{setInput({...input, formTwo: e.target.value})}} onKeyDown={(e)=>{if(e.key === "Enter"){addNames()}}}/>
        <button onClick={addNames}>Add Name</button>
      </div>

    </>
  );
}
