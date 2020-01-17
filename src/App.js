import React from "react";
import "./App.css";
import Navbar from "./Layout/Navbar/Navbar";
import Sidebar from "./Layout/Sidebar/Sidebar";
import Main from "./Layout/Main/Main";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="containers">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
