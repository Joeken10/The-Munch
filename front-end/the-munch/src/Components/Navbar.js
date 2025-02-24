import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { ShoppingBag } from 'lucide-react';
import { FaSearch } from 'react-icons/fa';
import MenuForms from './MenuForms';
import CartModal from './AddToCart';
import "./Navbar.css";

function Navbar() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">The Munch</Link>

          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/home">Restaurant</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/menu">Menu</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/description">Description</Link>
              </li>
            </ul>

            {/* 🔍 Search Form */}
            <form className="d-flex search-form" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search menu..."
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">
                <FaSearch />
              </button>
            </form>

            {/* 🛍️ Fancier Cart Icon with Counter */}
            <button className="cart-icon" onClick={() => setIsCartOpen(true)}>
            <ShoppingBag size={26} />. {/* Bigger and more stylish */}
              {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
            </button>
          </div>
        </div>

        <MenuForms addToCart={addToCart} /> 
      </nav>

      {isCartOpen && <CartModal cart={cart} onClose={() => setIsCartOpen(false)} />}
    </>
  );
}

export default Navbar;