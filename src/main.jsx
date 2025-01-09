import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  data,
  RouterProvider,
} from 'react-router-dom';
import Root from './Layouts/Root/Root.jsx';
import Home from './Pages/Home.jsx';
import AllCategory from './Layouts/AllCatagory/AllCatagory.jsx';
import About from './Pages/About/About.jsx';
import Career from './Pages/Career/Career.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => {
          return fetch('../src/Deta/news.json')
            .then(res => res.json())
            .then(data => {
              // console.log(data);
              return data;
            })
            .catch(error => {
              console.error("Error fetching data:", error);
              return {};
            });
        }
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/career',
        element: <Career></Career>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
