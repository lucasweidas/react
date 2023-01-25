import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// We use the ReactDom.createRoot() to specify the "root" element in the HTML document
const root = ReactDOM.createRoot(document.getElementById('root'));
// And the render() method to render our react elements
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
