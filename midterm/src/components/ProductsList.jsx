import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


const ProductsList = () => {
  console.log("Test product list component");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/db.json')
      .then(response => response.json())
      .then(data => setProducts(data.products));
  }, []);

  return (
    <ul className="prodList">
      {products.map(product => (
        <li key={product.id} className="prodItem">
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt="image.png" className ="thumbnails"/>
            <h2>{product.title}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;