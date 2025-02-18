import React, { useEffect, useState } from 'react';
import MenuItems from './MenuItems';

function MenuForms() {
  const[products, setProducts] = useState([]);

useEffect(()=>{
  fetchProductData();
})
const fetchProductData = ()=> {
  fetch("http://localhost:5000/menuList")
  .then ((response) => response.json())
  .then(data => setProducts(data));

};
// fetchProductData();
  return (
    <div>
    <MenuItems  menuProduct={products}/>
    </div>
  );
}

export default MenuForms;
