import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../slices/cartSlice'; // Import your action creator
import '../App.css';

const PropertyDetail = ({ property, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Destructure property with default values
  const {
    image = '',
    title = 'No Title',
    description = 'No Description',
    location = 'Unknown Location',
    bedrooms = 0,
    amenities = 'No Amenities',
    price = '0.00',
    availability = false,
    landArea = 0,
    id = '0', // Default id as string
  } = property;

  // Convert id to number
  const propertyId = Number(id);

  const handleAddToCart = () => {
    dispatch(addToCart({
      title,
      price,
      location,
      image,
      landArea,
      id: propertyId, // Convert id to number
    }));
    // Optionally, you can display a message or perform other actions
  };

  const handleContactUs = () => {
    navigate('/cart'); // Navigate to the cart page
  };

  return (
    <div className="property-detail-container">
      <button type="button" onClick={onClose} className="close-popup-button">
        &times;
      </button>
      <div className="property-detail">
        <div className="image-slider">
          <img src={image} alt={title} style={{ height: '220px' }} />
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
                <td>{location}</td>
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
                <td>${price}</td>
              </tr>
              <tr>
                <th>Land Area:</th>
                <td>{landArea} sq ft</td>
              </tr>
              <tr>
                <th>Availability:</th>
                <td>{availability ? 'Available' : 'Not Available'}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="property-actions">
          <button type="button" onClick={handleAddToCart} className="add-to-cart-button">
            Add to Cart
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
    id: PropTypes.string.isRequired, // Accept id as a string
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PropertyDetail;
