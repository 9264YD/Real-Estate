import HomePage from "./page/homePage/homePage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListPage from "./page/listPage/listPage";
import { Layout, RequireAuth } from "./page/layout/layout";
import SinglePage from "./page/singlePage/singlePage";
import LoginPage from "./page/login/login"; 
import RegisterPage from "./page/register/register"; 
import ProfilePage from "./page/profilePage/profile";
import ProfileUpdatePage from "./page/profileUpdatePage/profileUpdate";

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
        },
        {
          path: "/login",
          element: <LoginPage />
        },
        {
          path: "/register",
          element: <RegisterPage />
        },
      ],
    },
    {
      path:"/",
      element:<RequireAuth/>,
      children:[
        {
          path: "/profile",
          element: <ProfilePage/>
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage/>
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;