import { useState } from "react";
import "./App.css";

function App() {
  const [hex, setHex] = useState("#000000");

  function handleHexChange(e) {
    setHex(e.target.value);
  }
  return (
    <div>
      <input type="color" value={hex} onChange={handleHexChange}/>
      <p>Hex Value : 
        <span>{hex}</span>
        </p>
    </div>
  );
}

export default App;
