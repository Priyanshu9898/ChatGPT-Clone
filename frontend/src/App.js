import React from "react";
import Home from "./components/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./components/Login";

const App = () => {
  return(<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Home />}/>
      </Routes>

    </BrowserRouter>
  </>);
};

export default App;
