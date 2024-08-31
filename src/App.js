import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PropertyList from './components/PropertyList';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PropertyList />} />
    </Routes>
  );
}

export default App;
