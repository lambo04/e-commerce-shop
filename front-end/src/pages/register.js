import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Register = () => {
  const [name, setName]         = useState('');
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');
  const [message, setMessage]   = useState('');
  const navigate              = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Registration failed');
      } else {
        setMessage('Registration successful! Redirecting to login...');
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h2>Register</h2>
        {error && <p className="error">{error}</p>}
        {message && <p className="success">{message}</p>}
        <input 
          type="text"
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
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
        <button type="submit" className="btn">Register</button>
      </form>
    </div>
  );
};

export default Register;
