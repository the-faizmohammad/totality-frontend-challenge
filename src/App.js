import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Nav from './components/Nav';
import PropertyList from './components/PropertyList';
import PropertyDetail from './components/PropertyDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import store from './store';
import './App.css';

function App() {
  const [selectedProperty, setSelectedProperty] = useState(null);

  return (
    <Provider store={store}>
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
            <Route
              path="/cart"
              element={<Cart />}
            />
            <Route
              path="/checkout"
              element={<Checkout />}
            />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
