//import React, {useState, useEffect} from 'react';
//import axios from "axios";

//import {useEffect} from "react"


import InputAndCalculate from "./components/input_and_calculate"


import './App.css';

function App() { 
	// <img src="animated-fire-image-0005.gif" alt="fire" width={40} height={40} />
  return (
    <div className="App">
		<header>  
			<h1><img src="pngegg.png" width={40} height={40} alt="Stop watch"/>Time To Burn
				<img src="pngegg.png" width={40} height={40} alt="Stop watch"/>
			</h1>
		</header>
	  
		<div>
			<InputAndCalculate /> 
		</div>
	  
		<footer>
			The-4-Returners
		</footer>
    </div>
  );
}

export default App;
