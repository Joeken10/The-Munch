import React from 'react';
import './CartModal.css';

const CartModal = ({ cartItems = [], onClose, username = "Guest", proceedToCheckout, removeItem }) => {
  console.log(username); // Debugging line to check username value

  // Aggregate cart items and update quantities
  const updatedCartItems = cartItems.reduce((acc, item) => {
    const existingItem = acc.find(cartItem => cartItem.item_name === item.item_name);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      acc.push({ ...item });
    }
    return acc;
  }, []);

  // Calculate total amount
  const totalAmount = updatedCartItems.reduce((total, item) => total + item.item_price * item.quantity, 0);

  return (
    <div className="cart-modal">
      <div className="modal-content">
        <h2>Cart Items</h2>
        {updatedCartItems.length > 0 ? (
          updatedCartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.item_image_url} alt={item.item_name} className="cart-item-image" />
              <div className="cart-item-details">
                <p>{item.item_name}</p>
                <p>Ksh {item.item_price.toFixed(2)}</p>
                <p>Qty: {item.quantity}</p>
                <button className="remove-button" onClick={() => removeItem(item.item_name)}>
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Hi, {username}, your cart is empty. Please add items!</p>
        )}
        
        <h3>Total: Ksh {totalAmount.toFixed(2)}</h3>
        
        <div className="cart-actions">
          <button className="close-button" onClick={onClose}>Close</button>
          {updatedCartItems.length > 0 && (
            <button className="checkout-button" onClick={() => proceedToCheckout(updatedCartItems, totalAmount)}>
              Proceed to Checkout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
