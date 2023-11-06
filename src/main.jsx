import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Routes/Router';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './Provider/AuthProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} ></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
