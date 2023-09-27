import React from 'react';
import { Login } from './Login';
import { Browse } from './Browse';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import UserProfile from './UserProfile';





export const Body = () => {
  const allRoutes = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/browse',
      element: <Browse />,
    },
    {
      path: '/profile',
      element: <UserProfile />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={allRoutes} />
    </div>
  );
};
