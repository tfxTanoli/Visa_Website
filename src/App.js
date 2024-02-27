import Content from "./Components/Content";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
      {/* <Routes>
        <Route path="/" element={<Navbar />} />
      </Routes> */}
    </div>
  );
}

export default App;
