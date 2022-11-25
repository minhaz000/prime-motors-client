import { createBrowserRouter } from "react-router-dom";
import AdminMain from "../Admin/layout/AdminMain";
import AddProducts from "../Admin/Products/AddProducts";
import ManageProduct from "../Admin/Products/ManageProduct";
import ManageUsers from "../Admin/User/ManageUsers";
import Layout from "../layout/Layout";
import Blog from "../Pages/Blog/Blog";
import CategorySingle from "../Pages/category/Category.Single";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login.Register/Login";
import Register from "../Pages/Login.Register/Register";
import Seller from "../Pages/Login.Register/Seller";
import PrivateRoute from "./Private/PrivateRoute";

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
        element: <Seller> </Seller>
      },
      {
        path: "/category/:ID",
        element: <CategorySingle> </CategorySingle>,
      },
      {
        path: "/blog",
        element: <Blog> </Blog>,
      },
      {
        path: "/admin",
        element: <PrivateRoute>  <AdminMain> </AdminMain> </PrivateRoute>,
        children: [
          { 
            path: "", 
            element: <ManageUsers> </ManageUsers> 
          },
          {
            path: "add-product",
            element: <AddProducts> </AddProducts>,
          },
          {
            path: "manage-product",
            element: <ManageProduct> </ManageProduct>,
          },
        ],
      },
    ],
  },
]);
export default router;
