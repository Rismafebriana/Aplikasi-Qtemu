import "./App.css";
import Navbar from "./components/navbar/Navbar";
import PopUp from "./components/popup/PopUp";
import About from "./components/About";
import Card from "./components/card/Card";
import Organizers from "./components/Organizers";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <PopUp/>
      <About/>
      <Card/>
      <Organizers/>
    </div>
  );
}

export default App;