
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {

  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState("");

  function validate(e){
    if(name && password){
      e.preventDefault();
      setName("")
      setPassword("")
      setIsLoggedIn(true);
      setMessage("You are logged in!")
      return;
    }
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <div className="parent">
          <h1>Parent Component</h1>
          <div className="child">
            <form>
              <label htmlFor="name">Username: </label>
              <input type="text" id="name" onChange={(e)=>setName(e.target.value)} value={name}/>
              <br/><br/>
              <label htmlFor="password">Password: </label>
              <input type="password" id="password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
              <br/><br/>
              <button type="submit" onClick={validate}>Login</button>
            </form>
            <p>{message}</p>
          </div>
        </div>
    </div>
  )
}

export default App
