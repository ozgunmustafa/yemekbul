import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CityIndex from "./pages/CityIndex";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Route path="/" exact component={HomePage}></Route>
      <Route path="/:id" exact component={CityIndex}></Route>
    </Router>
  );
}

export default App;
