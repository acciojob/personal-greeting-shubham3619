
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
    let [name,setName] = useState("")


    function handleInput(e) {
      setName(e.target.value)
    }

    if(name) {
      name = "Hello " + name + "!"
    }
    


  return (
    <div>
        {/* Do not remove the main div */}
       

      <input
      onChange={handleInput}
      ></input>
      {/* {name ? <p>Hello {name}!</p> : ""} */}

      <p>{name}</p>

    </div>
  )
}

export default App
