import React, { useState } from 'react';
import "./MenuItems.css";

function MenuItems({ menuProduct = [] }) { 
  const [selectedItem, setSelectedItem] = useState(null);

  const handleDescriptionClick = (itemId) => {
    setSelectedItem(selectedItem === itemId ? null : itemId);
  };

  return (
    <div className="menuitem-container">
      {menuProduct.map((item) => (
        <ul key={item.id}>
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={item.image} 
              className="card-img-top"
              alt={item.itemName}
            />
            <div className="card-body">
              <h4 className="card-title">{item.itemName}</h4>
              <h5 className="card-title">ksh{item.price}</h5>
              
              {/* Description Button */}
              <button 
                className="btn btn-primary" 
                onClick={() => handleDescriptionClick(item.id)}
              >
                Description
              </button>

             
              {selectedItem === item.id && (
                <p className="card-text">{item.description}</p>
              )}

              
              {Array.isArray(item.extras) && item.extras.length > 0 ? (
                <div className="extras">
                  <h6>Extras:</h6>
                  <ul>
                    {item.extras.map((extra, index) => (
                      <li key={index}>{extra}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p>No extras available.</p> 
              )}
            </div>
          </div>
        </ul>
      ))}
    </div>
  );
}

export default MenuItems;
