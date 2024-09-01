import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../slices/cartSlice';
import { useForm, ValidationError } from '@formspree/react';
import '../Checkout.css';

const CheckoutForm = ({ onSuccess }) => {
  const [state, handleSubmit] = useForm("xyzgvgld");

  const handleFormSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission
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
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <button type="submit" disabled={state.submitting}>
        {state.submitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

const Checkout = () => {
  const { items, totalCost } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);

  const handleCheckoutClick = () => {
    if (items.length > 0) {
      setShowForm(true);
    } else {
      alert("Your cart is empty.");
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
            <p>Total Cost: ${totalCost.toFixed(2)}</p>
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
