import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const PropertyCard = ({ property, onBookNow }) => (
  <div className="property-card">
    <img src={property.image} alt={property.title} />
    <h3>{property.title}</h3>
    <p>{property.description}</p>
    <p>
      Price: $
      {property.price}
    </p>
    <button type="button" onClick={() => onBookNow(property)}>Book Now</button>
  </div>
);

// PropTypes validation
PropertyCard.propTypes = {
  property: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
  onBookNow: PropTypes.func.isRequired,
};

export default PropertyCard;
