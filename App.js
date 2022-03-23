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

  //checks if the input boxes has at least something in them before you can submit login attempt
  function validateForm(){return state.uname.length > 0 && state.password.length > 0}

  function openMenu(){
    document.getElementById("open").style.display = "none";
    document.getElementById("menubar").style.display = "block";
  }

  function closeMenu(){
    document.getElementById("open").style.display = "block";
    document.getElementById("menubar").style.display = "none";
  }

  function aboutUs(){
    window.location.href = "https://pythialegal.com/about-us-1";
  }
  return (
    <div className="App">
      <header>
        <button id = "open" onClick={openMenu}>Open</button>
        <menu id = "menubar">
            <button id="create">Create Account</button>
            <button id = "aboutUs"onClick={aboutUs}>About Us</button>
            <button id="close" onClick={closeMenu}>Close</button>
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
          <button size ="lg" type ="submit" disabled = {!validateForm()}>Login</button>
        </form>   
        <div id="noAccount">
          <p>Don't have an account?</p> <button id="create">Get Started</button>
        </div>
        <footer>

        </footer>
      </main>
    </div>
  );
}

export default App;
