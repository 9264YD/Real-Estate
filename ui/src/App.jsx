import HomePage from "./page/homePage/homePage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListPage from "./page/listPage/listPage";
import Layout from "./page/layout/layout";
import SinglePage from "./page/singlePage/singlePage";
import LoginPage from "./page/login/login"; 

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage/>
        },
        {
          path: "/list",
          element: <ListPage/>
        },
        {
          path: "/:id",
          element: <SinglePage/>
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;