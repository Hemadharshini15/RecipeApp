import App from "./App";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Recipedetails from "./components/RecipeDetail/Recipedetails";
  
 

  function Myrouter({name}){
    const router = createBrowserRouter([
      {
        path: "/",
        element: <App />,
      },
      {
          path:"/recipe/:name",
          element:<Recipedetails />
      }
    ]);
    return(
        <RouterProvider router={router} />
    )
  }
  export default Myrouter;