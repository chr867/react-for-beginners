import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home/>,
  //   },
  //   {
  //     path: "/movie",
  //     element: <Detail/>,
  //   },
  // ]);

  return <RouterProvider router={
      createBrowserRouter([
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/movie/:id",
          element: <Detail/>,
        },
      ])
    }
  >
  </RouterProvider>;
}

export default App;
