import React from 'react';
import GraphInput from './components/GraphInput';
import Margin from './ui/Margin';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Check if a graph is red-blue colorable!</h1>
      <h2>
        Enter here paths of your graph in format a-b-c<br />
        where a word is a node, a dash an edge and a new line or a comma a separation between paths
      </h2>
      <Margin x={20} />
      <GraphInput />
    </div>
  );
}

export default App;
