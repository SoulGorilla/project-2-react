import "./App.css";
import { useState, useEffect } from "react";
import Currency from "./Components/Currency.js";
import Nav from "./Components/Nav.js";
import This from "./Components/This.js";
import Footer from "./Components/Footer.js";
import SignUp from "./Components/SignUp.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/about" element={<Currency />}></Route>
        <Route path="/this" element={<This />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
