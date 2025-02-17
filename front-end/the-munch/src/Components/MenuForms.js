import React from 'react';

function MenuForms() {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://via.placeholder.com/150"
          className="card-img-top"
          alt="Delicious meal"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <a href="/" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  );
}

export default MenuForms;
