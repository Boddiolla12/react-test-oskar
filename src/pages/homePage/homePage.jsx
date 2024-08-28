import "../homePage/homePage.css";

import AlertFunction from "../../components/alert/alert";
import Greeting from "../../components/greeting/greeting";

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
      <Greeting />
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
