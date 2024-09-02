import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../slices/cartSlice';
import '../App.css';

const PropertyDetail = ({ property, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    id = '0', 
  } = property;

  
  const propertyId = Number(id);

  const handleAddToCart = () => {
    dispatch(addToCart({
      title,
      price,
      location,
      image,
      landArea,
      id: propertyId,
    }));
    
  };

  const handleViewCart = () => {
    navigate('/cart');
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
          <button type="button" onClick={handleAddToCart} className="add-to-cart-button">
            Add to Cart
          </button>
          <button type="button" onClick={handleViewCart} className="view-cart-button">
            View Cart
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
    id: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PropertyDetail;
