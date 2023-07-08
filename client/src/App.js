import logo from './logo.svg';
import React from 'react';
import './App.css';
function ListClicked(){
  console.log("방제클릭됌");
}
function List(props){
  return(<li onClick={ListClicked}>{props.title}
  <div>
        <div display="inline-block">
      {props.Users.map((User)=>(
        <img src={logo} className="App-logo" alt="logo"/>
          
      ))}</div>
    </div>
    </li>);
}
function Btn(props){
  return (<button onClick={props.onClick}>{props.title}</button>);
}
function App() {
  const [Room,modifiRoom]=React.useState([]);
  const [User,modifiUser]=React.useState([]);

  const handleRoom=() =>{
    const newRoom=[...Room,`${Room.length+1}`];
    modifiRoom(newRoom);
  }
  const handleUser =()=>{
    const newUser=[...User,`${User.length+1}`];
    modifiUser(newUser);
  }
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {Room.map((title,index)=>(
            <List title={title} key={index} Users={User}/>
          ))}
          <Btn title="임시 사용자추가" onClick={handleUser} />
          <Btn title="임시 방추가" onClick={handleRoom} />
        </ul>
      </header>
    </div>
  );
}

export default App;