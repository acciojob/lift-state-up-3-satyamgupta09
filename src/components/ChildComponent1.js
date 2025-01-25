import './../styles/App.css';
import React from "react";

export default function ChildComponent1({ setSelectedOption }) {
  return (
    <div className="ChildComponent1">
      <h2>Child Component 1</h2>
      <button onClick={() => setSelectedOption("Option 1")}>Option 1</button>
    </div>
  );
}
