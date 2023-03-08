import './App.css';
import {damage} from "./formAtack";
import {useState} from "react";
import ButtonComp from "./ButtonComp";
import InputAtk from "./InputAtk";

function App() {
    const [atkType,changType] = useState('');
    const [dfsType,bType] = useState('');
    const [atkstat,fatjstat] = useState(0);
    const [defstat,fdef] = useState(0);
    const [res,funkRez] = useState(0);
  return (
      <div >

       <ButtonComp type={atkType} changeType={changType}></ButtonComp>
          <InputAtk changeValue={fatjstat}></InputAtk>
          <ButtonComp type={dfsType} changeType={bType}></ButtonComp>
          <InputAtk changeValue={fdef}></InputAtk>

          <button onClick={()=>funkRez(damage(atkType, dfsType, atkstat, defstat))}>result</button>
          {res}
      </div>
  );
}
export default App;
