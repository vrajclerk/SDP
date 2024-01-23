import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import router from './Component/Routes/Routes.jsx'
import store from './Component/redux/store.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
