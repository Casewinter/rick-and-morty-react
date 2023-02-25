import React from 'react';
import './style.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import Root from './routes/root';
import Home from './routes/Home';
import AllCharacters from './routes/AllCharacters';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: 'home',
          element: <Home />,
        },
        {
          path: 'all',
          element: <AllCharacters />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
