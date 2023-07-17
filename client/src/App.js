import logo from './logo.svg';
import React from 'react';
import './App.css';
let cnt=0;
function List(props){
  return(<li onClick={ async ()=>{
    props.onClick("유저"+cnt,props.index);
    const video=document.getElementById("videoElement");
    const constraints = window.constraints = {
      audio: true,
      video: true
    };
    try{
      const stream=await navigator.mediaDevices.getUserMedia(constraints);
      console.log("받아옴");
      video.srcObject=stream;
    }catch(e){
      console.error(e);
    }
  }
  }>{props.title}
  <div>
    {console.log(props.index,"번방",props.RoomData.length)}
          {props.RoomData.map(value=>{
            //console.log(props.index,"번방",value);
            //console.log("확인용",value[1],props.index,value[1]==props.index,value[1]===props.index);
            if(value[1]==props.index){
              return (<div style={{ display: "flex", alignItems: "center" }} display="inline-block" key={value[0]}>
              <img src={logo} className="App-logo" alt="logo"/>
              <div>{value[0]}</div>
              </div>)
            }
          })}
    </div>
    </li>);
}
function Btn(props){
  return (<button onClick={props.onClick}>{props.title}</button>);
}
function App() {
  const [Room,modifiRoom]=React.useState([]);

  const handleRoom=(name,RoomNum) =>{
    const newRoom=[...Room,[name,RoomNum]];
    //console.log(newRoom);
    cnt++;
    modifiRoom(newRoom);
  }
  return (
    <div className="App">
      <header className="App-header">
        <ul className="chatroom">
            <List onClick={handleRoom} title={"1번 방"} key={1} index={1} RoomData={Room}/>
            <List onClick={handleRoom}title={"2번 방"} key={2} index={2} RoomData={Room}/>
            <List onClick={handleRoom}title={"3번 방"} key={3} index={3} RoomData={Room}/>
            <List onClick={handleRoom}title={"4번 방"} key={4} index={4} RoomData={Room}/>
            <List onClick={handleRoom}title={"5번 방"} key={5} index={5} RoomData={Room}/>
        </ul>
        <ul className="viewroom">
          <video id="videoElement" autoPlay></video>
        </ul>
      </header>
    </div>
  );
}

export default App;