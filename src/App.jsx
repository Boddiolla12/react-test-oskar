import "./App.css";
import "./styles/global.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages//homePage/homePage.jsx";
import AboutPage from "./pages/aboutPage/aboutPage.jsx";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";

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

  return (
    <>
      <Header>
        <h1>Vite + React</h1>
      </Header>
      <Router>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
      <Footer>
        <p>
          Name : {name} {lastName()}
          <br />
          Contact : {phoneNumber()}
          <br />
          Email : {email()}
        </p>
      </Footer>
    </>
  );
};

export default App;
