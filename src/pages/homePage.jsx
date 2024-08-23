import "../css/homePage.css";

import AlertFunction from "../components/alert";

const MainElement = ({ children }) => {
  return (
    <div id="mainElement" className="mainElement">
      {children}
    </div>
  );
};

const HomePage = () => {
  let alertMessage = "Bli ferdig snart";

  return (
    <>
      <MainElement>
        <h2>This is the main element</h2>
      </MainElement>
      <AlertFunction alertMessage={alertMessage} />
    </>
  );
};

export default HomePage;
