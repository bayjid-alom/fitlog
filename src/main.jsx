import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router/dom';
import { router } from './router/Router';
import ExerciseProvider from './context/ExerciseProvider';
import { ToastContainer } from 'react-toastify';





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ExerciseProvider>

      <RouterProvider router={router}></RouterProvider>
      <ToastContainer></ToastContainer>
    </ExerciseProvider>
  </StrictMode>,
)
