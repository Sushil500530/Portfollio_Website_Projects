import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../layouts/MainLayouts';
import HomeDefine from '../pages/Home/HomeDefine';

const Router =  createBrowserRouter([
    {
      path:'/',
      element: <MainLayouts />, 
      children: [
        {
          path:'/',
          element: <HomeDefine />
        }
      ]
    }
  ])

export default Router;