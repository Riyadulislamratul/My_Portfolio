import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from './components/MainLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
]);


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App