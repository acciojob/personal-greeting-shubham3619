
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
    let [name,setName] = useState("")


    function handleInput(e) {
      setName(e.target.value)
    }


  return (
    <div>
        {/* Do not remove the main div */}
       

      <input
      onChange={handleInput}
      />
      {name?<p>Hello {name}!</p>:""}

    </div>
  )
}

export default App
