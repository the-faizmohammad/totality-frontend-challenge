import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import PropertyList from './components/PropertyList';
import PropertyDetail from './components/PropertyDetail';
import './App.css';

function App() {
  const [selectedProperty, setSelectedProperty] = useState(null);

  return (
    <Router>
      <div className="app-container">
        <Nav />
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
              selectedProperty ? (
                <PropertyDetail property={selectedProperty} />
              ) : (
                <div>Please select a property from the home page.</div>
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
