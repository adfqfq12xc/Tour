import React, { useState } from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import './index.scss';
import App from './App';
import { UserContext } from "./usercontext";
const Root = () => {
  const [user, setUser] = useState(null); // State for user
  const [data, setData] = useState(null); // State for data

  return (
    <UserContext.Provider value={{ user, setUser, data, setData }}>

      <App />
    </UserContext.Provider>
  );
};

// Render the Root component using createRoot from react-dom/client
const root = createRoot(document.getElementById('root'));
root.render(<Root />);
