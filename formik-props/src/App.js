import './App.css';
import React from 'react';
import { LoginContainer } from './Forms/Login/Login.container';
import { SignUpContainer } from './Forms/SignUp/SignUp.container';

function App() {
  return (
    <div className="App">
      <div className="Main"><h2>Formik Props</h2></div>
      <div className="Column">
        <div className="Main "><SignUpContainer /></div>
        <div className="Main"><LoginContainer /></div>
      </div>
    </div>
  );
}

export default App;
