// Router/router.js

import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home  from '../home/Home';
import Shop from '../shop/Shop';
import About from '../components/About';
import Blog from '../components/Blog';
import SingleBook from '../shop/SingleBook';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import Dashboard from '../components/dashboard/Dashboard';
import UploadBook from '../components/dashboard/UploadBook';
import MangeBook from '../components/dashboard/MangeBook';
import EditBook from '../components/dashboard/EditBook';
import Signup from '../components/Signup';
import Login from '../components/Login';
import PrivateRoutes from '../private/PrivateRoutes';
import Logout from '../components/Logout';
import Exploer from '../components/Exploer';
import Profile from '../components/firebase/Profile';
import Cart from '../shop/Cart';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
        { 
            path: '/',
            element: <Home />
        },
        {
          path:'/shop',
          element:<Shop />
        },
        {
          path:'/about',
          element:<About  />
        },
        {
          path:'/blog',
          element:<Blog />
        },
        {
          path:'/exploer',
          element:<Exploer />
        },
        {
          path:'/profile',
          element:<Profile />
        },
        {
          path:'/cart',
          element:<Cart />
        },
        {
          path:'/book/:id',
          element:<SingleBook />,
          loader: ({ params }) => fetch(`http://localhost:3001/book/${params.id}`)
        },
        {
          path:'/admin/dashboard',
          element:<DashboardLayout />,
          children: [
            {
              path: '/admin/dashboard',
              element: <PrivateRoutes><Dashboard/></PrivateRoutes>
            },
            {
              path: '/admin/dashboard/upload',
              element: <UploadBook />
            },
            {
              path: '/admin/dashboard/manage',
              element: <MangeBook />
            },
            {
              path: '/admin/dashboard/edit',
              element: <EditBook />
            },
            {
              path: '/admin/dashboard/edit-book/:id',
              element: <EditBook />,
              loader: ({ params }) => fetch(`http://localhost:3001/book/${params.id}`)
            },
           
          ]
        },
    ]
  },
  {
    path: 'sign-up',
    element: <Signup />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: 'logout',
    element: <Logout />
  }
]);

export default router;
