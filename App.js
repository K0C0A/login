//Author: Christopher Balsillie
//Legal Pythia Login Page Project

import './App.css';
import React, {useState} from "react";

function App() {

  //Sets up username and password vars
  const [state, setState] = useState({
    uname: "",
    password: "",
  })
  
  //handles changes in the input boxes
  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  function showPassword(){
    var x = document.getElementById("password");
    if(x.type === "password"){
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  return (
    <div className="App">
      <header>
        <menu>

        </menu>
      </header>
      <main>
        <form>
          <label>
              <p>Username:</p> <br/>
                        <input 
                          type = "text" 
                          name = "uname"
                          onChange = {handleChange}
                          value  = {state.uname}           
                          />
          </label>
<br/>
          <label>
              <p>Password:</p> <br/>
                        <input
                          id = "password" 
                          type = "password" 
                          name = "password"
                          value  = {state.password}
                          onChange = {handleChange}
                          />
          </label>
<br/>          
          <p id = "checkbox">Show Password</p><input id = "checkbox" type = "checkbox" onClick={showPassword}/>
          <button>Login</button>
        </form>   
      </main>
    </div>
  );
}

export default App;
