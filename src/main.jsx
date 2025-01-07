import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Root from './Layouts/Root/Root.jsx';
import Home from './Pages/Home.jsx';
import AllCategory from './Layouts/AllCatagory/AllCatagory.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => {
          fetch('../src/Deta/news.json')
            .then(res => res.json())
            .then(data => {
              console.log(data);
            })
        }
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
