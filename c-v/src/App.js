import About from "./About/About";
import "./App.css";
import NavBar from "./header/NavBar";
import Main from "./Main/Main";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <hr/> */}
      <Main/>
      <About/>
    </div>
  );
}

export default App;
