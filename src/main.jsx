import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import './index.css'
import App from './App.jsx'
import Contact from './Contact.jsx'

import { Analytics } from "@vercel/analytics/react"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Analytics/>
     <RouterProvider router={router} />
  </StrictMode>,
)
