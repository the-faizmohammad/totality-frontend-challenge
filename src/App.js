import React from 'react';
import PropertyList from './components/PropertyList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Property Rental App</h1>
      </header>
      <main>
        <PropertyList />
      </main>
    </div>
  );
}

export default App;
