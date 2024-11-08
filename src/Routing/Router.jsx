// import { createBrowserRouter } from "react-router-dom";

// import { Layout } from "antd";
// import SignUp from "../components/Auth/SignUp";
// import Login from "../components/Auth/Login";
// import EmployeeDashboard from "../components/Dashboard/EmployeeDashboard";

// const router = createBrowserRouter([
//     {
//         path:'/',
//         element:<Layout/>,
//         childer:[
//           {
//             path:'signup',
//             element:<SignUp/>
//           },
//           {
//             path:'login',
//             element:<Login/>
//           },
//           {
//             path:'employeeDashboard',
//             element:<EmployeeDashboard/>
//           }

//         ]

//     }
// ])

// export default router;
// src/Routing/Router.jsx
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import SignUp from "../components/Auth/SignUp";
import Login from "../components/Auth/Login";
import EmployeeDashboard from "../components/Dashboard/EmployeeDashboard";



const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout/>,
      children: [
        { path: 'signup', element: <SignUp /> },
        { path: 'Login', element: <Login /> },
        { path: 'employeeDashboard', element: <EmployeeDashboard /> },
      ],
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

export default router;
