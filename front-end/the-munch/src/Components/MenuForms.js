import React, { useEffect, useState } from 'react';
import MenuItems from './MenuItems';

function MenuForms({ addToCart }) { // ✅ Receive addToCart as a prop
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/menuList")
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <MenuItems menuProduct={products} addToCart={addToCart} /> {/* ✅ Pass it down */}
    </div>
  );
}

export default MenuForms;
