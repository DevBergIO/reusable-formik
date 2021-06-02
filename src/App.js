import './App.css';
import React from "react";
import {LoginContainer} from "./Forms/SignIn/SignIn.container";
import {SignUpContainer} from "./Forms/SignUp/SignUp.container";

function App() {
  return (
    <div className="App">
        <div style={{display: "grid", placeItems: 'center', marginTop: '2rem'}}>Forms</div>
        <div style={{display: "grid", placeItems: 'center', marginTop: '2rem'}}><LoginContainer/></div>
        <div style={{display: "grid", placeItems: 'center', marginTop: '2rem'}}><SignUpContainer/></div>
    </div>
  );
}

export default App;
