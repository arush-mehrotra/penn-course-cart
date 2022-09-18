import './App.css';
import Courses from './components/Courses';
import Receipt from './components/Receipt';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <div className = "App">
      <BrowserRouter>
          <Routes>
            <Route path = "/" element={<Courses />} />
            <Route path = "/receipt/:course1/:course2/:course3/:course4/:course5/:course6/:course7" element={<Receipt />} />
          </Routes>
        </BrowserRouter>
    </div>
    </>
  );
}

export default App;
