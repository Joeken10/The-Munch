import React from "react";
import { useNavigate } from "react-router-dom";
import "./AddToCart.css"; // Import styles

function AddToCart({ cart = [], onClose, username = "Guest" }) {
  const navigate = useNavigate(); // ✅ Navigation function

  // Group items by name and selected extras
  const groupedCart = cart.reduce((acc, item) => {
    const key = item.itemName + (item.selectedExtras ? item.selectedExtras.join(", ") : ""); 
    if (acc[key]) {
      acc[key].quantity += 1;
    } else {
      acc[key] = { ...item, quantity: 1 };
    }
    return acc;
  }, {});

  // Convert grouped object back to an array
  const cartItems = Object.values(groupedCart);

  // Calculate total price including extras
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + (item.price + (item.selectedExtras?.length || 0) * 50) * item.quantity, 
    0
  );

  // Handle Checkout
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty. Please add items before checking out.");
      return;
    }

    // ✅ Navigate to checkout page with cart details
    navigate("/checkout", { state: { cartItems, totalPrice } });
  };

  return (
    <div className="cart-modal">
      <div className="cart-modal-content">
        <h2>Your Cart</h2>

        {cartItems.length === 0 ? (
          <p>Hi, {username}, your cart is empty. Please add items!</p>
        ) : (
          <>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index} className="cart-item">
                  <img src={item.image} alt={item.itemName} className="cart-item-image" />
                  <div className="cart-item-details">
                    <strong>{item.itemName}</strong>
                    {item.selectedExtras?.length > 0 && (
                      <p className="extras">Extras: {item.selectedExtras.join(", ")}</p>
                    )}
                    <p>ksh {item.price}.00 x {item.quantity} = ksh {(item.price + (item.selectedExtras?.length || 0) * 100) * item.quantity}.00</p>
                  </div>
                </li>
              ))}
            </ul>
            <hr />
            <h3>Total: ksh {totalPrice}.00</h3> 
          </>
        )}

        <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default AddToCart;
