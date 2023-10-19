import React from 'react';
import { Login } from './Auth/Login';
import { Browse } from './Browse';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import UserProfile from './Users/UserProfile';
import EditProfile from './Users/EditProfile';
import DeleteUser from './Users/DeleteUser';
import MovieView from './MovieView';
import Trailer from './Trailer';





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
      path: '/manage',
      element: <EditProfile />,
    },
    {
      path: '/account',
      element: <UserProfile />,
    
    },
    {
      path: "/profile",
      element: <EditProfile />,
    },
    {
      path: "/account/delete",
      element: <DeleteUser />,
    },
    {
      path: "/movie/:id",
      element: <MovieView />,
    },
    {
      path: "/trailer/:id/:title",
      element: <Trailer />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={allRoutes} />
    </div>
  );
};
