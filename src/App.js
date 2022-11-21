import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import DBProvider from "./Context/DBContext";

function App() {
  return (
    <div className="App">
      <Router>
        <DBProvider>
          <Routes>
            <Route path="/cliente/:cliente" element={<Home />} />
          </Routes>
        </DBProvider>
      </Router>
    </div>
  );
}

export default App;
