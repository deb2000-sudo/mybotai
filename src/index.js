import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './index.css';
import Home from './pages/Home/Home.jsx';
import History from './pages/History/History.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Define the router with paths and components
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "history",
        element: <History />
      },
      {
        path: "/",
        element: <Home />
      }
    ]
  }
]);

// Get the root element and render the app
// const check=document.getElementById('root')
// console.log(check);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
