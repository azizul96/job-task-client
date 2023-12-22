import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import { Toaster } from 'react-hot-toast';
import Login from './pages/Login/Login';
import AuthProvider from './Context/AuthProvider';
import Register from './pages/Register/Register';
import Layout from './Layout/Layout';
import Dashboard from './Layout/Dashboard';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AllTask from './pages/Dashboard/AllTask/AllTask';
import AddTask from './pages/Dashboard/AddTask/AddTask';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Portfolio from './pages/Portfolio/Portfolio';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/portfolio",
        element: <Portfolio></Portfolio>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ]
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: "",
        element: <AllTask></AllTask>
      },
      {
        path: "add-task",
        element: <AddTask></AddTask>
      },
    ]
  }
]);

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
    <Toaster/>
  </React.StrictMode>,
)
