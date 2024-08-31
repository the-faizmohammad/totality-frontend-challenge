import React from 'react';
import '../App.css';

const PropertyCard = ({ property, onBookNow }) => {
  return (
    <div className="property-card">
      <img src={property.image} alt={property.title} />
      <h3>{property.title}</h3>
      <p>{property.description}</p>
      <p>Price: ${property.price}</p>
      <button onClick={() => onBookNow(property)}>Book Now</button>
    </div>
  );
};

export default PropertyCard;
