import React, { useState } from "react";
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';
import {db} from './firebaseConfig'

let hideButtom = false;

const CountdownWrapper = () => {
  return <Countdown 
  date={Date.now() + 60000}
  onComplete = {()=>{
  hideButtom = true;
  }}
  />;
};

const MemoCountdown = React.memo(CountdownWrapper);


function App() {

  const [isLogin, setIsLogin] = useState(false)
  
  const [counter, setCounter] = useState(0)
  
  const [name, setName] = useState("")

  const submitName = () =>{
    setIsLogin(true)
    db.ref(`score/${name}`).set({
      score: 0
    })
  }
  
  const updateCounter  =()=>{
    db.ref(`score/${name}`).set({
      score: (counter+1)
    })
    setCounter(counter+1)
  }

 return (
    <div>    
        {!isLogin && (
          
          <div 
            className = "background"
            style={{ width:"100vw", height: "100vh", background:"green"}}
          >
            <h1
              className = "tieude">
              Tap_Tap!
            </h1>

          <input 
            className = "nameform"
            placeholder = "Input name here"
            value = {name}
            onChange = {e => setName(e.target.value)}
          />
          <br/>
          <button
            className = "go"
            onClick = {() => {
              submitName();             
            }}
          >BEGIN</button>
        </div>
        )}
        {isLogin && (
          <div
          className = "play_field"
          style={{ width:"100vw", height: "100vh", background:"yellow"}}>
            <h3
              style = {{margin:"auto",
              fontSize: "2em"
              }}
            >Hello <span
                    style = {{
                      fontSize : "80%",
                      background : "red"
                    }}
                  >{name}</span>
            </h3>
            <h3 
              style = {{fontSize: "2em"}}
            > Click counter: {counter}
            </h3>
            {!hideButtom && (
            <button className = "clickScore" 
              onClick = {() => {
                updateCounter();
              }}
            > Click Here!</button>)}
            <h3> TIME LEFT: <MemoCountdown/> </h3>
          </div>
        )}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);


export default App;
