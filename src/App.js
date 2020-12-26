import logo from './logo.svg';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
import Char from './Char/Char';
import { Component } from 'react';

class App extends Component {
   state={
    char:''
  }
  inputHandler=(event)=>{
    this.setState({char:event.target.value})
  }
  deleteChar=(index)=>{
    let char=this.state.char;
    let chars=char.split('')
    chars.splice(index,1);
    this.setState({char:chars.join('')})
    console.log(index);
    
  }
 
  render(){
    const chars=this.state.char.split('').map((ch,index)=>{
      return <Char click={()=>this.deleteChar(index)} char={ch} key={index} />
    })
    return (
      <div>
        <UserInput change={this.inputHandler} value={this.state.char}></UserInput>
       <p>{this.state.char}</p>
       <UserOutput length={this.state.char.length}></UserOutput>
       {chars}
      </div>
    );
  }
 
}

export default App;
