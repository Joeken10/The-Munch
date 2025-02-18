import React from 'react'

function MenuItems() {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="/Images/Classic American Burger with Fried Egg.jpeg"
          className="card-img-top"
          alt="Classic Beef Burger"
        />
        <div className="card-body">
          <h5 className="card-title">Classic Beef Burger</h5>
          <p className="card-text">
          Accampanied with fries.
          </p>
          <a href="/" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  )
}

export default MenuItems
