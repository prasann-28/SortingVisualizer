import React from 'react';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
import './App.css';

function App() {
  return (
    <div className="App" style={{"backgroundColor" : "grey"}}>
      <SortingVisualizer></SortingVisualizer>
    </div>
  );
}

export default App;