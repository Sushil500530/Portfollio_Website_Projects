import { createBrowserRouter } from "react-router-dom";
import MainLayouts from './layouts/MainLayouts';

const App = createBrowserRouter([
  {
    path:'/',
    element: <MainLayouts />, 
    children: [
      {
        
      }
    ]
  }
])
export default App;
