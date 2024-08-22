import "./App.css";
import "./css/global.css";

import Header from "./components/Header.jsx";

const App = () => {
  const name = "Oskar";
  const lastName = () => {
    return "Gjelstad";
  };

  const alertFunction = () => {
    alert("Kjapp deg vi er straks ferdig");
  };

  return (
    <>
      <Header>
        <h1>Vite + React</h1>
      </Header>
      <p>
        Name : {name} {lastName()}
      </p>

      <button onClick={alertFunction}>Click me</button>
    </>
  );
};

export default App;
