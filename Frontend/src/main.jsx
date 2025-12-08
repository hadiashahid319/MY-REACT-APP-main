import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import App from "./App.jsx";
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'


createRoot(document.getElementById('root')).render(
 <StrictMode>
{/* //     <RouterProvider router={router}>
//       <App />
//     </RouterProvider> */}
    <App/>
     
  </StrictMode>
)
