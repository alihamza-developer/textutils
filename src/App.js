import Navbar from "./components/Navbar.js";
import Converter from "./components/Converter.js";
function App() {
  return (
    <>
      <Navbar heading="TextUtils" />

      <div className="container">
        <Converter />
      </div>

    </>
  );
}

export default App;
