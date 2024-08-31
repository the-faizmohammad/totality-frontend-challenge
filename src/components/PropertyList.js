import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListings } from '../features/listings/listingsSlice';

const PropertyList = () => {
  const dispatch = useDispatch();
  const { properties, status, error } = useSelector((state) => state.listings);
  
  const [filters, setFilters] = useState({
    city: '',
    priceRange: '',
    bedrooms: '',
    amenities: ''
  });

  useEffect(() => {
    dispatch(fetchListings(filters));
  }, [dispatch, filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Property Listings</h1>
      
      <div className="filters">
        <input
          type="text"
          name="city"
          placeholder="City"
          value={filters.city}
          onChange={handleFilterChange}
        />
        <input
          type="number"
          name="priceRange"
          placeholder="Max Price"
          value={filters.priceRange}
          onChange={handleFilterChange}
        />
        <input
          type="number"
          name="bedrooms"
          placeholder="Bedrooms"
          value={filters.bedrooms}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="amenities"
          placeholder="Amenities"
          value={filters.amenities}
          onChange={handleFilterChange}
        />
      </div>

      <div className="property-list">
        {properties.map((property) => (
          <div key={property.id} className="property">
            <img src={property.image} alt={property.title} />
            <h2>{property.title}</h2>
            <p>{property.description}</p>
            <p>Price: ${property.price}</p>
            <button>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
