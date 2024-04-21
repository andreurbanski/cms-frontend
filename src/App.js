import './App.css';
import Initial from './pages/initial';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom"
import UsersList from './pages/admin/users/List';
import Blogs from './pages/operation/Blogs';
import Header from './layout/header/header-component';
import SideBar from './layout/sidebar/sidebar-component';
import Layout from './layout/Layout';
import Condominial from './pages/operation/tjsp/condominial/index';

function App() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Initial />,
        },
        {
          path: "/blogs",
          element: <Blogs />,
        },
        {
            path: "/admin/users",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <UsersList />,
                },
                {
                    path: "list",
                    element: <UsersList />,
                },
            ],
          },
          {
            path: "/operation/tjsp/condominial",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <Condominial />,
                },
                {
                    path: "list",
                    element: <Condominial />,
                },
            ],
          },
      ])
    
      return (
          <RouterProvider router={router} />
      )
}

export default App;
