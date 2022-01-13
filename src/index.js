import { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <h2> Random Counter </h2>
      <h1> {value} </h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        {" "}
        Increament{" "}
      </button>
      <button className="btn" onClick={() => setValue(0)}>
        {" "}
        Reset{" "}
      </button>
      <button className="btn" onClick={() => setValue(value - 1)}>
        {" "}
        Decreament{" "}
      </button>
    </>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<UseStateCounter />, rootElement);
