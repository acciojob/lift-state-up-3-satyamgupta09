import React, { useState } from "react";
import ChildComponent1 from "./../components/ChildComponent1";
import ChildComponent2 from "./../components/ChildComponent2";
import './../styles/App.css';

const App = () => {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <ChildComponent1 setSelectedOption={setSelectedOption} />
      <ChildComponent2 setSelectedOption={setSelectedOption} />
      <p>Selected Option: {selectedOption}</p>
    </div>
  );
};

export default App;
