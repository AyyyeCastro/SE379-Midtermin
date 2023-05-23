import { Link } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from "../context/themeContext";




const ProductsList = () => {

  // THEME
  const { theme } = useContext(ThemeContext);

  // PRODS
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/db.json')
      .then(response => response.json())
      .then(data => setProducts(data.products));
  }, []);

  return (
    <ul className="prodList" style={{ color: theme.foreground, background: theme.background, border: theme.border }}>
      {products.map(product => (
        <li key={product.id} className="prodItem" style={{ color: theme.foreground, background: theme.background, border: theme.border }}> 
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt="image.png" className ="thumbnails"/>
            <h2 style={{ color: theme.color}}>{product.title}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;