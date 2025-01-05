import { useState } from "react";
import "./App.css";
const HISTORY_LIMIT = 200;

function App() {
  const [hex, setHex] = useState("#000000");
  const [history, setHistory] = useState([hex]);

  function handleHexChange(e) {
    setHex(e.target.value);
    if (history.length == HISTORY_LIMIT) {
      setHistory([e.target.value]);
    } else {
      setHistory([...history, e.target.value]);
    }
  }
  return (
    <div id="main">
      <h3>Color Picker</h3>
      <div id="header">
        <input type="color" value={hex} onInputCapture={handleHexChange} />
        <p>
          Hex Value :<span>{hex}</span>
        </p>
        <div>History </div>
      </div>

      
      <div id="history-wrapper">
        {history.map((color, index) => {
          return (
            <div
              className="history-div"
              key={color + "-" + index}
              style={{ backgroundColor: color }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
