import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropertyList from './components/PropertyList';
import PropertyDetail from './components/PropertyDetail';
import './App.css';

function App() {
  const [selectedProperty, setSelectedProperty] = useState(null);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PropertyList setSelectedProperty={setSelectedProperty} />
          }
        />
        <Route
          path="/property"
          element={
            <PropertyDetail property={selectedProperty} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
