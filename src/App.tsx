import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main-container">
      <div className="navbar-container"></div>
      <div className="body-container"></div>
    </div>
  );
}

export default App;
