import "./App.css";
import "./css/global.css";

import Header from "./components/header.jsx";

import Footer from "./components/footer.jsx";

const App = () => {
  const name = "Oskar";
  const lastName = () => {
    return "Gjelstad";
  };

  const phoneNumber = () => {
    return "40001364";
  };

  const email = () => {
    return "Oskar.gjelstad@gmail.com";
  };

  const alertFunction = () => {
    alert("Kjapp deg vi er straks ferdig");
  };

  return (
    <>
      <Header>
        <h1>Vite + React</h1>
      </Header>
      <div className="content">
        <button onClick={alertFunction}>Click me</button>
      </div>
      <Footer>
        <p>
          Name : {name} {lastName()}
          Contact : {phoneNumber()}
          Email : {email()}
        </p>
      </Footer>
    </>
  );
};

export default App;
