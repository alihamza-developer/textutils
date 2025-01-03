import Navbar from "./components/Navbar.js";
import Converter from "./components/Converter.js";
import Alert from "./components/Alert.js";
import { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);

  const toggleAlert = (type, message) => {
    setAlert({ type, message });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
    
  }


  return (
    <>
      <Navbar heading="TextUtils" />
      <Alert alert={alert} />


      <div className="container">
        <Converter toggleAlert={toggleAlert} />
      </div>

    </>
  );
}

export default App;
