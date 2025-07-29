// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// // main.jsx or any file
// import { Header, Footer, Home, About, Contact, Login, SignUp } from './components';


// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<> <Header/><Home/><Footer/> </>
//   },
  
//   {
//     path:'/about',
//     element:<> <Header/><About/></>
//   },
//   {
//     path:'/contact',
//     element:<> <Header/><Contact/></>
//   },
//   {
//     path:'/login',
//     element:<> <Header/><Login/></>
//   },
//   {
//     path:'/signup',
//     element:<> <Header/><SignUp/></>
//   },
// ])
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     {/* <Header/> */}
//     <RouterProvider router={router} />
//     {/* <Footer/> */}
//   </StrictMode>,
// )


import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './index.css';
import { gitData } from './components/Github';
import {
  Layout,
  Home,
  About,
  Contact,
  Login,
  SignUp,
  User,
  Github
} from './components';
// import Layout from './components/Layout'; // also can be lazy-loaded if needed

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       { index: true, element: <Home /> },
//       { path: 'about', element: <About /> },
//       { path: 'contact', element: <Contact /> },
//       { path: 'login', element: <Login /> },
//       { path: 'signup', element: <SignUp /> },
//     ]
//   }
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index={true} element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:id' element={<User/>}/>
      <Route path='github/:userProfile?' loader={gitData} element={<Github/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
