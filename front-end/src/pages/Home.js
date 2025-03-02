import React from 'react';
import '../App.css';

const Home = () => (
  <div className="home">
    <section className="hero">
      <h1>Welcome to Our E-Commerce Store</h1>
      <p>
        Discover the best products at unbeatable prices. Shop now and enjoy exclusive deals,
        fast shipping, and secure checkout!
      </p>
      <a href="/products" className="btn">
        Shop Now
      </a>
    </section>
  </div>
);

export default Home;
