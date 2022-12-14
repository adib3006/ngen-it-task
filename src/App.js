import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import ContactTable from './pages/ContactTable';
import ContactUs from './pages/ContactUs';
import Dashbaord from './pages/Dashbaord';
import ProductInfo from './pages/ProductInfo';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<ProductInfo></ProductInfo>
        },
        {
          path:'/product-info',
          element:<ProductInfo></ProductInfo>
        },
        {
          path:'/dashboard',
          element:<Dashbaord></Dashbaord>
        },
        {
          path:'/contact-us',
          element:<ContactUs></ContactUs>
        },
        {
          path:'/contact-us/queries',
          element:<ContactTable></ContactTable>
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
}

export default App;
