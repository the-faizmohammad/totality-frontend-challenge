import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const PropertyCard = ({ property, onSeeDetails }) => (
  <div className="property-card">
    <img src={property.image} alt={property.title} />
    <h3>{property.title}</h3>
    <p>{property.description}</p>
    <h3 className="property-availability">
      {property.availability ? 'Available' : 'Not Available'}
    </h3>
    <button type="button" onClick={onSeeDetails}>
      See Details
    </button>
  </div>
);

PropertyCard.propTypes = {
  property: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    availability: PropTypes.bool.isRequired,
  }).isRequired,
  onSeeDetails: PropTypes.func.isRequired,
};

export default PropertyCard;
