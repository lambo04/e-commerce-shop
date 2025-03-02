import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Login from './pages/Login';
import Register from './pages/register';
// import Dashboard from './pages/Dashboard';

const App = () => (
  <Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
