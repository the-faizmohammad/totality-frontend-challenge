import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProperties } from '../slices/propertySlice';
import PropertyCard from './PropertyCard';
import '../App.css';

const PropertyList = () => {
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.properties.items);
  const status = useSelector((state) => state.properties.status);

  const [selectedProperty, setSelectedProperty] = useState(null);
  const [filters, setFilters] = useState({ location: '', priceRange: [0, 1000], availability: false });

  useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);

  const handleBookNow = (property) => {
    setSelectedProperty(property);
  };

  const handleFilterChange = (e) => {
    const {
      name, value, type, checked,
    } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const filteredProperties = properties.filter((property) => (
    property.location.includes(filters.location)
      && property.price >= filters.priceRange[0]
      && property.price <= filters.priceRange[1]
      && (!filters.availability || property.availability) // Corrected spelling
  ));

  return (
    <div className="container">
      <div className="filters">
        <input
          type="text"
          name="location"
          value={filters.location}
          onChange={handleFilterChange}
          placeholder="Location"
        />
        <input
          type="number"
          name="minPrice"
          value={filters.priceRange[0]}
          onChange={(e) => setFilters((prevFilters) => ({
            ...prevFilters,
            priceRange: [Number(e.target.value), prevFilters.priceRange[1]],
          }))}
          placeholder="Min Price"
        />
        <input
          type="number"
          name="maxPrice"
          value={filters.priceRange[1]}
          onChange={(e) => setFilters((prevFilters) => ({
            ...prevFilters,
            priceRange: [prevFilters.priceRange[0], Number(e.target.value)],
          }))}
          placeholder="Max Price"
        />
        <label>
          <input
            type="checkbox"
            name="availability"
            checked={filters.availability}
            onChange={handleFilterChange}
          />
          Available
        </label>
      </div>
      <div className="property-list">
        {status === 'loading' && <p>Loading...</p>}
        {status === 'failed' && <p>Error loading properties.</p>}
        {status === 'succeeded' && filteredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} onBookNow={handleBookNow} />
        ))}
      </div>
      {selectedProperty && (
        <div className="property-detail">
          <img src={selectedProperty.image} alt={selectedProperty.title} />
          <h2>{selectedProperty.title}</h2>
          <p>{selectedProperty.description}</p>
          <p>
            Price: $
            {selectedProperty.price}
          </p>
          <button type="button">Buy Now</button>
        </div>
      )}
    </div>
  );
};

export default PropertyList;
