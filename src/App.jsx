import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import NoPage from "./Screens/NoPage";
import AboutPage from "./Screens/About";
import FirstPage from "./Screens/First";
import "./App.css";
const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage/>}/>
          <Route path="home" element={<Home />} />
          <Route path="*" element={<FirstPage />} />
          <Route path="about" element={<AboutPage/>}/>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
