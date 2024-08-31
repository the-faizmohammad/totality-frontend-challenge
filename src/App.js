import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PropertyList from './components/PropertyList';
// import other components as needed

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PropertyList />} />
        {/* Add more routes here */}
      </Routes>
    </div>
  );
}

export default App;
