import { useState } from "react";
import Dashboard from "./layout/Dashboard";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from "./layout/Login";
function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/" element = {<Dashboard/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
