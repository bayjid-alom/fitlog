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
      <ToastContainer
        position="top-right"
        autoClose={2500}
        theme="dark"
        toastStyle={{
          background: '#15181F',
          color: '#F3F4F6',
          border: '1px solid #292D35',
          borderRadius: '12px',
          fontSize: '14px',
          fontWeight: '500',
        }}
        progressStyle={{
          background: '#C6FF00',
        }}
      />
    </ExerciseProvider>
  </StrictMode>,
)
