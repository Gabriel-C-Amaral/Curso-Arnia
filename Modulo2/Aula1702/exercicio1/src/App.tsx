import { useCallback, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [input, SetInput] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("input foi montado ou atualizado");
    SumNumberCallback();
  }, [input]);

  const SumNumberCallback = useCallback(() => {
    // para melhorar desempenho, só atualiza quando o parametro mudar, nesse caso o count
    let num = 0;
    num = num + count;

    console.log(num);
  }, [count]);

  return (
    <div className="App">
      <input type="text" onChange={(event) => SetInput(event.target.value)} />

      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        valores de estado são {count} e {input}
      </p>
    </div>
  );
}

export default App;
