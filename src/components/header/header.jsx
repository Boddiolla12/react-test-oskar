import "../header/header.css";

const Header = ({ children }) => {
  return (
    <div id="header" className="header">
      {children}
    </div>
  );
};

export default Header;
