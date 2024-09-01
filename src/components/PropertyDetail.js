import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const PropertyDetail = ({ property }) => {
  const navigate = useNavigate();

  if (!property) {
    return <p>Property not found.</p>;
  }

  const {
    image = '',
    title = 'No Title',
    description = 'No Description',
    location: propLocation = 'Unknown Location',
    bedrooms = 0,
    amenities = 'No Amenities',
    price = '0.00',
    availability = false,
    landArea = 0,
  } = property;

  const handleBuyNow = () => {
    // Handle the Buy Now action
  };

  const handleContactUs = () => {
    // Handle the Contact Us action
  };

  return (
    <div className="property-detail-container">
      <button type="button" onClick={() => navigate('/')} className="back-button">
        Back
      </button>
      <div className="property-detail">
        <div className="image-slider">
          <img src={image} alt={title} />
          {/* Add slideshow functionality here if needed */}
        </div>
        <div className="property-info">
          <h2>{title}</h2>
          <table>
            <tbody>
              <tr>
                <th>Description:</th>
                <td>{description}</td>
              </tr>
              <tr>
                <th>Location:</th>
                <td>{propLocation}</td>
              </tr>
              <tr>
                <th>Bedrooms:</th>
                <td>{bedrooms}</td>
              </tr>
              <tr>
                <th>Amenities:</th>
                <td>{amenities}</td>
              </tr>
              <tr>
                <th>Price:</th>
                <td>
                  $
                  {price}
                </td>
              </tr>
              <tr>
                <th>Land Area:</th>
                <td>
                  {landArea}
                  {' '}
                  sq ft
                </td>
              </tr>
              <tr>
                <th>Availability:</th>
                <td>{availability ? 'Available' : 'Not Available'}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="property-actions">
          <button type="button" onClick={handleBuyNow} className="buy-now-button">
            Buy Now
          </button>
          <button type="button" onClick={handleContactUs} className="contact-us-button">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

PropertyDetail.propTypes = {
  property: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    location: PropTypes.string,
    bedrooms: PropTypes.number,
    amenities: PropTypes.string,
    price: PropTypes.string,
    landArea: PropTypes.number,
    availability: PropTypes.bool.isRequired,
  }).isRequired,
};

export default PropertyDetail;
