import React, {useState} from 'react';
import "./App.css";

function App() {

const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header>
        <h1>The counter application with State/Hooks</h1>
      </header>
      <h2>The count is : {count}</h2>
      <button onClick={() => setCount(0)}>Reset Count</button>
      <button onClick={count < 10 ? () => setCount(count + 1): ""}>Increase Count</button>
      <button onClick={count == 0 ? "" : () => setCount(count - 1)}>Decrease Count</button>
    </div>

  );
}

export default App;