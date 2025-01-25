import './../styles/App.css';
import React from "react";

export default function ChildComponent2({ setSelectedOption }) {
  return (
    <div className="ChildComponent2">
      <h2>Child Component 2</h2>
      <button onClick={() => setSelectedOption("Option 2")}>Option 2</button>
    </div>
  );
}
