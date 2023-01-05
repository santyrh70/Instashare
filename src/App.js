import './App.css';
import { links } from "./constants/links";
import Home from '../src/pages/home/Home';
import Explore from "../src/pages/explore/Explore";
import Saved from "../src/pages/saved/Saved";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  useParams,
} from "react-router-dom";


import { ContextProvider } from "./utils/context";

const router = createBrowserRouter([
  {
    path: links.HOME,
    element: <Home/>,
    errorElement: <h1>Error</h1>,
  },
  {
    path: links.EXPLORE,
    element: <Explore/>,
  },
  {
    path: links.SAVED,
    element: <Saved/>
  }
]);

function App() {

  console.log(process.env.REACT_APP_PEXELS_API_KEY);
  console.log(process.env.NODE_ENV);
  return (
    <div className="App">
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>
    </div>
  );
}

export default App;
