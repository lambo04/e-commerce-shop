import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Login failed');
      } else {
        localStorage.setItem('token', data.token);
        navigate('/dashboard');
      }
    } catch (err) {
      setError('An error occurred: ' + err.message); // Display detailed error
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <input 
          type="email"
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password"
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit" className="btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
