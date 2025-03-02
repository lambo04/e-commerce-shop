// Frontend - pages/Dashboard.js
import { useEffect, useState } from 'react';
import '../App.css';

const Dashboard = () => {
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            fetch('http://localhost:5000/api/auth/me', { // Use the full URL
                headers: { Authorization: `Bearer ${token}` },
            })
                .then(res => res.json())
                .then(data => setUser(data))
                .catch(err => console.error('Error fetching user:', err)); // Optional: handle fetch errors
        }
    }, []);

    return (
        <div>
            <h2>Dashboard</h2>
            {user ? <p>Welcome, {user.name}!</p> : <p>Please log in.</p>}
        </div>
    );
};

export default Dashboard;
