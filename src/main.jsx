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
import Friends from './components/Friends/Friends';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';


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
        path:'friends',
        element:<Friends></Friends>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')

      },
      {

        path:'friend/:friendId',
        element:<FriendDetails></FriendDetails>,
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path:'contact',
        element:<Contact></Contact>,
      },

      {
        path:'posts',
        element:<Posts></Posts>,
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path:'post/:postId',
        element:<PostDetails></PostDetails>,
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)

      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Header></Header> */}
     <RouterProvider router={router} />
  </React.StrictMode>,
)
