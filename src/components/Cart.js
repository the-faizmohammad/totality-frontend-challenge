import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { removeFromCart, updateQuantity } from '../slices/cartSlice';
import '../Cart.css';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize navigate
  const cart = useSelector((state) => state.cart);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleCheckout = () => {
    // Navigate to the checkout page
    navigate('/checkout');
  };

  return (
    <div className="cart-container">
      <h2>Cart Details</h2>
      {cart.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.items.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} style={{ width: '50px' }} />
                <div>
                  <h3>{item.title}</h3>
                  <p>
                    Location:
                    {' '}
                    {item.location}
                  </p>
                  <p>
                    Price: $
                    {item.price}
                  </p>
                  <p>
                    Land Area:
                    {' '}
                    {item.landArea}
                    {' '}
                    sq ft
                  </p>
                  <p>
                    Quantity:
                    <button
                      type="button"
                      onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    {item.quantity}
                    <button
                      type="button"
                      onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </p>
                  <button
                    type="button"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <p>
              Total Items:
              {' '}
              {cart.totalItems}
            </p>
            <p>
              Total Cost: $
              {cart.totalCost.toFixed(2)}
            </p>
            <button
              type="button"
              onClick={handleCheckout}
              className="checkout-button"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
