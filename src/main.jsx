import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import ErrorPage from './components/Errorpage/Error';
import Header from './components/Header/Header';
import Home from './components/Home/Home';


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App></App>,
//   },
//   {
//     path:'/about',
//     element: <About></About>,
//   },
//   {
//     path:'/contact',
//     element: <Contact></Contact>,
//   },
//   {
//     path: "/",
//     errorElement:<ErrorPage></ErrorPage> ,
//   },
// ])

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home></Home> ,
    children:[
      {
        path:'about',
        element:<About></About>,

      },
      {
        path:'contact',
        element:<Contact></Contact>,
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Header></Header> */}
     <RouterProvider router={router} />
  </React.StrictMode>,
)
