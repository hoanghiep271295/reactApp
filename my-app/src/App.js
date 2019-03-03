import React from 'react';
// import Zoom from 'react-reveal/Zoom';
import { Header } from './Header';
import { Content } from './Content';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class App extends React.Component {
 constructor(props){
   super(props);
   this.state={
    lst : []
   }
 }
 componentWillMount () {
   console.log("Compnentwilmount")
 }
 componentDidMount(){
   console.log('componentDidMount');
 }
 shouldComponentUpdate(nextProps, nextState) {
   
 }
 componentWillUpdate(){

 }
 
  
  render() {
    console.log("render");

    return (
      <div>
        <Header name="Hiep" />
        <Content  name ="Hiep" />
        <button onClick={()=>{this.setState({lst : [{'Code':0, "Name" : "Hiep"},{'Code':1 ,"Name" : "Nam"}]})}}> 
        Insert
        </button>
       
      </div>);
  }
}

export default App;