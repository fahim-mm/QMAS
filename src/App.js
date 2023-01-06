
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Oldstudentregi from './Oldstudentregi';
import Rules from './Rules';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Oldstudentregi />} />
        <Route path="/rules" element={<Rules />} />
      </Routes>
    </div>
  );
}

export default App;
