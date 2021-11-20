import "./App.css";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Login from "./components/Login";
import Contact from "./components/Contact";
// import StudentDashboard from "./components/StudentDashboard";
// import { Route } from "react-router";
// import { Routes } from "react-router";
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Navbar from "./components/Navbar";
function App() {
  return(
    <Router>
      <Navbar/>
      {/* <StudentDashboard/> */}
      <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Signup/>} />
          <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  )
}

export default App;
