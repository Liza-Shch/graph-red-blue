import React from 'react';
import GraphInput from './components/GraphInput';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Check if a graph is red-blue colorable!</h1>
      <h2>Enter here paths of your graph in format a-b-c</h2>
      <h3>where a word is a node, a dash an edge and a new line or a comma a separation between paths</h3>
      <GraphInput />
    </div>
  );
}

export default App;
