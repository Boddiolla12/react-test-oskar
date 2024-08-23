import "../css/homePage.css";

import AlertFunction from "../components/alert";

const MainElement = ({ children }) => {
  return (
    <div id="mainElement" className="mainElement">
      {children}
    </div>
  );
};

const SubElement = ({ children }) => {
  return (
    <div id="subElement" className="subElement">
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
      <SubElement>
        <h3>Second item text</h3>
      </SubElement>
    </>
  );
};

export default HomePage;
