import React from "react";

function AddToCart() {
  return (
    <div className="cart-icon">
      <i className="bi bi-cart"></i> {/* Bootstrap cart icon */}
      <span className="cart-badge">3</span> {/* Example cart count */}
    </div>
  );
}

export default AddToCart;
