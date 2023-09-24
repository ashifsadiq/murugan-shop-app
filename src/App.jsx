import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import NoPage from "./Screens/NoPage";
const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
