import { createBrowserRouter } from "react-router-dom";
import AdminMain from "../Admin/layout/AdminMain";
import AddProducts from "../Admin/Products/AddProducts";
import ManageProduct from "../Admin/Products/ManageProduct";
import ManageBuyer from "../Admin/User/ManageBuyer";
import Layout from "../layout/Layout";
import Blog from "../Pages/Blog/Blog";
import CategorySingle from "../Pages/category/Category.Single";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login.Register/Login";
import Register from "../Pages/Login.Register/Register";
import Seller from "../Pages/Login.Register/Seller";
import PrivateRoute from "./Private/PrivateRoute";
import ShowBooking from "../Pages/ShowBooking/ShowBooking";
import Wellcome from "../Admin/layout/Wellcome";
import ManageSeller from "../Admin/User/ManageSeller";
import Profile from "../Admin/User/Profile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout> </Layout>,
    children: [
      {
        path: "",
        element: <Home> </Home>,
      },
      {
        path: "/login",
        element: <Login> </Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/seller",
        element: <Seller> </Seller>,
      },
      {
        path: "/category/:ID",
        element: <CategorySingle> </CategorySingle>,
      },
      {
        path: "/booking",
        element: <ShowBooking> </ShowBooking>,
      },
      {
        path: "/blog",
        element: <Blog> </Blog>,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            {" "}
            <AdminMain> </AdminMain>{" "}
          </PrivateRoute>
        ),
        children: [
          {
            path: "",
            element: <Wellcome> </Wellcome>,
          },

          {
            path: "buyers",
            element: <ManageBuyer> </ManageBuyer>,
          },
          {
            path: "sellers",
            element: <ManageSeller></ManageSeller>,
          },
          {
            path: "add-product",
            element: <AddProducts> </AddProducts>,
          },
          {
            path: "manage-product",
            element: <ManageProduct> </ManageProduct>,
          },
          {
            path: "profile",
            element: <Profile> </Profile>,
          },
        ],
      },
    ],
  },
]);
export default router;
