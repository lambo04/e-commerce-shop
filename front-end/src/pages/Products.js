import React, { useEffect, useState } from 'react';
import '../App.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch('http://localhost:5000/api/products', {
      headers: { Authorization: token }
    })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch products');
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="products">
      <h2>Products</h2>
      {error && <p className="error">{error}</p>}
      <div className="product-grid">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            {product.image && <img src={product.image} alt={product.name} className="product-img" />}
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
