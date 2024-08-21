import "./App.css";

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
      <h1>Vite + React</h1>

      <p>
        Name : {name} {lastName()}
      </p>

      <button onClick={alertFunction}>Click me</button>
    </>
  );
};

export default App;
