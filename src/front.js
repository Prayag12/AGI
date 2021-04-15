import React, { Component } from "react";
import "./page1.css";
import ic from './ic.png';
import { FaHandPointDown } from "react-icons/fa"
import { GoHome } from "react-icons/go";
class home extends Component {
    render() {
      return (

        <div className="container1">
          <div className="C1">
        <a href = "./home"> <GoHome style={{height: "50 px;"}}/> </a>
        </div>

        <div className="C2">
        <p>
        <img src={ic} className="App-logo" alt="logo" /> <br/>
           A.G.I Infotech<br/>
           Makes Your <code style={{fontFamily: "TimesNewRoman" }}>Life</code> Simple
           </p>
           <div className="end"> <a href='/home'>  Explore Us <FaHandPointDown /> </a>
            </div> 
         </div>
         </div>
  
  

      );
    }
}
export default home;
