import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(15);

  function addValue() {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  }

  function remValue() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>Hello world!</h1>
      <h2>Counter: {counter}</h2>

      <button onClick={addValue} disabled={counter >= 20}>
        Add Value {counter}
      </button>
      <br />

      <button onClick={remValue} disabled={counter <= 0}>
        Remove Value {counter}
      </button>
    </>
  );
}

export default App;
