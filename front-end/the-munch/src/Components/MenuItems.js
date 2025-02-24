import React, { useState } from "react";
import MenuItemsModal from "./MenuItemsModal.js";
import "./MenuItems.css";

function MenuItems({ menuProduct = [], addToCart }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleDescriptionClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="menuitem-container">
      {menuProduct.map((item) => (
        <ul key={item.id}>
          <div className="card" style={{ width: "18rem" }}>
            <img src={item.image} className="card-img-top" alt={item.itemName} />
            <div className="card-body">
              <h4 className="card-title">{item.itemName}</h4>
              <h5 className="card-title">ksh {item.price}.00</h5>

              {/* Open Modal */}
              <button className="btn btn-primary" onClick={() => handleDescriptionClick(item)}>
                Description
              </button>

              {/* Add to Cart Button (without extras) */}
              <button className="btn btn-success mt-2" onClick={() => addToCart(item)}>
                Add to Cart
              </button>
            </div>
          </div>
        </ul>
      ))}

      {/* Modal with addToCart Function */}
      {selectedItem && (
        <MenuItemsModal item={selectedItem} onClose={closeModal} onAddToCart={addToCart} />
      )}
    </div>
  );
}

export default MenuItems;
