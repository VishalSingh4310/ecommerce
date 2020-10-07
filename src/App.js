import React from "react";
import "./App.css";
import Section1 from "./components/home/Section1";
import Footer from "./components/nav/Footer";
import Header from "./components/nav/Header";
import HeaderBody from "./components/nav/HeaderBody";

function App() {
  return (
    <div className="App">
      <Header />
      <HeaderBody />
      <Section1 />
      <Footer />
    </div>
  );
}

export default App;
