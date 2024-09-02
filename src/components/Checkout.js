import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, ValidationError } from '@formspree/react';
import { clearCart } from '../slices/cartSlice';
import '../Checkout.css';

const CheckoutForm = ({ onSuccess }) => {
  const [state, handleSubmit] = useForm('xyzgvgld');

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await handleSubmit(event);
    if (state.succeeded) {
      onSuccess();
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          required
        />
        <ValidationError
          prefix="Name"
          field="name"
          errors={state.errors}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          name="email"
          required
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
      </div>
      <div className="form-group">
        <label htmlFor="contact">Contact Number</label>
        <input
          id="contact"
          type="tel"
          name="contact"
          required
        />
        <ValidationError
          prefix="Contact"
          field="contact"
          errors={state.errors}
        />
      </div>
      <div className="form-group">
        <p>Please enter your card details</p>
      </div>
      <div className="form-group">
        <label htmlFor="cardNumber">Card Number</label>
        <input
          id="cardNumber"
          type="text"
          name="cardNumber"
          required
        />
        <ValidationError
          prefix="Card Number"
          field="cardNumber"
          errors={state.errors}
        />
      </div>
      <div className="form-group">
        <label htmlFor="expiryDate">Expiry Date</label>
        <input
          id="expiryDate"
          type="text"
          name="expiryDate"
          placeholder="MM/YY"
          required
        />
        <ValidationError
          prefix="Expiry Date"
          field="expiryDate"
          errors={state.errors}
        />
      </div>
      <div className="form-group">
        <label htmlFor="cvv">CVV</label>
        <input
          id="cvv"
          type="text"
          name="cvv"
          required
        />
        <ValidationError
          prefix="CVV"
          field="cvv"
          errors={state.errors}
        />
      </div>
      <button type="submit" disabled={state.submitting}>
        {state.submitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

CheckoutForm.propTypes = {
  onSuccess: PropTypes.func.isRequired,
};

const Checkout = () => {
  const { items, totalCost } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);

  const handleCheckoutClick = () => {
    if (items.length > 0) {
      setShowForm(true);
    } else {
      console.error('Your cart is empty.');
    }
  };

  const handleFormSuccess = () => {
    dispatch(clearCart());
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      {items.length > 0 ? (
        <>
          <div className="cart-summary">
            <h3>Order Summary</h3>
            <p>
              Total Cost: $
              {totalCost.toFixed(2)}
            </p>
          </div>
          {!showForm ? (
            <button type="button" onClick={handleCheckoutClick}>
              Checkout
            </button>
          ) : (
            <CheckoutForm onSuccess={handleFormSuccess} />
          )}
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Checkout;
