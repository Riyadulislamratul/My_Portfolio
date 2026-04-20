import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from './components/MainLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';
import ProjectSinglePage from './pages/ProjectSinglePage';
import NotFoundPage from './pages/NotFoundPage';
import BlogPage from './pages/BlogPage';
import BlogSinglePage from './pages/BlogSinglePage';
import ContactPage from './pages/ContactPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/about",
        element: <AboutPage />
      },
      {
        path: "/projects",
        element: <ProjectPage />
      },
      {
        path: "/projects/:id",
        element: <ProjectSinglePage />
      },
      {
        path: "*",
        element: <NotFoundPage />
      },
      {
        path: "/blog",
        element: <BlogPage />
      },
      {
        path: "/blog/:id",
        element: <BlogSinglePage />
      },
      {
        path: "/contact",
        element: <ContactPage />
      }
    ]
  },
]);


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App