import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('Loading...');

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  useEffect(() => {
    fetch(`${API_URL}/api/data`)
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => setMessage('Backend not reachable'));
  }, [API_URL]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>MERN Industry Standard Deployment</h1>
      <div style={{ padding: '20px', border: '1px solid #ccc', display: 'inline-block' }}>
        <p>Status: <strong>{message}</strong></p>
      </div>
    </div>
  );
}

export default App;