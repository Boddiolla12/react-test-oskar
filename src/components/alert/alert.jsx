const AlertFunction = ({ alertMessage }) => {
  const handleAlert = () => {
    alert(alertMessage);
  };

  return <button onClick={handleAlert}>Click me</button>;
};

export default AlertFunction;
