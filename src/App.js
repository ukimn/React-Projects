import { useState } from 'react';
import './App.css';

export default function App() {
  let [input, setInput] = useState({
    formOne: "", 
    formTwo: ""
  });

  const [devices, setDevices] = useState(["Mac", "Linux", "Microsoft", "Samsung"]);
  const [programming, setProgramming] = useState(["Python", "C#"])

  const deviceList = devices.map((device, index) => {
    return <li style={{ margin: "30px" }} key={index}>{device}</li>;
  });

  const programmingList = programming.map((item, index)=>{
    return <li key={index} style={{margin: "40px"}}>{item}</li>
  })

  function addDeviceName() {
    setInput({...input, formOne: ""}); // Clear the input field
    setDevices([...devices, input.formOne]); // Add the input to the devices array
  }

  function addLanguage() {
    setInput({...input, formTwo: ""}); // Clear the input field
    setProgramming([...programming, input.formTwo]); // Add the input to the programming array
  }

  return (
    <>
      {deviceList}

      <div>
        <input type="text" value={input.formOne} onChange={(e) => setInput({...input, formOne: e.target.value})} onKeyDown={(e)=>{if(e.key === "Enter"){addDeviceName()}}}/>
        <button onClick={addDeviceName}>Add Device</button>
      </div>

      {programmingList}

      <div>
        <input type="text" value={input.formTwo} onChange={(e) => setInput({...input, formTwo: e.target.value})} style={{marginBottom: "40px"}} onKeyDown={(e)=>{if(e.key === "Enter"){addLanguage()}}}/>
        <button onClick={addLanguage}>Add Language</button>
      </div>
    </>
  );
}
