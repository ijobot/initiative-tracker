import React from "react";
import "./App.css";
import MenuDisplay from "./components/MenuDisplay";
import CombatDisplay from "./components/CombatDisplay";

function App() {
  return (
    <div className="app-container">
      <MenuDisplay />
      <CombatDisplay />
    </div>
  );
}

export default App;
