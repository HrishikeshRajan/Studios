import React from 'react';
import { Login } from './Login';
import { Browse } from './Browse';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import UserProfile from './UserProfile';
import EditProfile from './EditProfile';
import DeleteUser from './DeleteUser';
import MovieView from './MovieView';





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
  ]);

  return (
    <div className='bg-black'>
      <RouterProvider router={allRoutes} />
    </div>
  );
};
