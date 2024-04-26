import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Users from './Pages/Users.jsx';
import Home from './Pages/Home.jsx';
import Update from './Pages/Update.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App> </App>,
    children: [
      {
        path: "/",
        element: <Home> </Home>,
      },
      {
        path:"/users",
        element: <Users> </Users>, 
        loader: () => fetch(`http://localhost:5000/users`)
      },
      {
        path:"/update/:id",
        element: <Update> </Update>, 
        loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} > </RouterProvider> 
    <ToastContainer />
  </React.StrictMode>,
)
