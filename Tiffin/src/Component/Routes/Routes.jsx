import { Avatar } from '@mui/material'
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

const router=createBrowserRouter(
  [
    {
      path:'/',
      element:<App />,
      children: [
        {
          path: '/',
        element: <TiffinProvider />},
        {
          path: '/',
        element: <Avatar/>}
      ]
    }
  ]
)
export default router;
