import React, { useState, useEffect } from "react";
import "./MenuItemsModal.css";

function MenuItemsModal({ item, onClose, onAddToCart }) {
  const [selectedExtras, setSelectedExtras] = useState([]);

  // Close modal on "Escape" key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  // Toggle extra selection
  const handleExtraClick = (extra) => {
    setSelectedExtras((prevExtras) =>
      prevExtras.includes(extra) ? prevExtras.filter((e) => e !== extra) : [...prevExtras, extra]
    );
  };

  // Handle adding item to cart with selected extras
  const handleAddToCart = () => {
    if (typeof onAddToCart === "function") {
      const itemWithExtras = { ...item, selectedExtras };
      console.log("🛒 Item added to cart:", itemWithExtras);
      onAddToCart(itemWithExtras);
      onClose();
    } else {
      console.error("❌ onAddToCart is not a function");
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose} aria-label="Close Modal">
          &times;
        </button>
        <h2>{item.itemName}</h2>

        {item.image && <img src={item.image} alt={item.itemName} className="modal-image" />}

        <p>{item.description}</p>

        {Array.isArray(item.extras) && item.extras.length > 0 && (
          <div className="extras">
            <h6>Extras:</h6>
            <ul className="extras-list">
              {item.extras.map((extra, index) => (
                <li
                  key={index}
                  className={`extra-item ${selectedExtras.includes(extra) ? "selected" : ""}`}
                  onClick={() => handleExtraClick(extra)}
                >
                  {extra}
                </li>
              ))}
            </ul>
          </div>
        )}

        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default MenuItemsModal;
