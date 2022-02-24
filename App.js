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

  return (
    <div className="App">
      <header>
      </header>
      <main>
        <form>
          <label>
            Username: <input 
                        type = "text" 
                        name = "uname"
                        onChange = {handleChange}
                        value  = {state.uname}           
                        />
          </label>
<br/>
          <label>
            Password: <input 
                        type = "password" 
                        name = "password"
                        value  = {state.password}
                        onChange = {handleChange}
                        />
          </label>
        </form>   
      </main>
    </div>
  );
}

export default App;
