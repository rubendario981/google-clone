import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './Components/App'
import ErrorPage from './Components/ErrorPage'
import Results from './Components/Results'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/result",
    element: <Results />,
    errorElement: <ErrorPage />
  },
]);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>    
    <RouterProvider router={router} />
  </React.StrictMode>,
)
