import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RootContext } from "./../../context/RootContext";
function AdminSidebar(props) {
  const { userRole } = useContext(RootContext);
  return (
    <>
      <div className="drawer-side">
        <label htmlFor="mobileMenu" className="drawer-overlay"></label>
        <ul className="menu p-7 w-80 bg-gray-100  text-base-content">
          <li>
            {" "}
            <Link to="/dashboard">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/dashboard/add-product">Add Product </Link>
          </li>
          <li>
            {" "}
            <Link to="/dashboard/manage-product">Manage Product </Link>
          </li>
          {userRole?.role === "admin" ? (
            <>
              <li>
                {" "}
                <Link to="/dashboard/sellers">Manage Sellers </Link>
              </li>
              <li>
                {" "}
                <Link to="/dashboard/buyers">Manage Buyers </Link>
              </li>
              <li>
                {" "}
                <Link to="/dashboard/profile">Profile </Link>
              </li>
            </>
          ) : (
            ""
          )}
        </ul>
      </div>
    </>
  );
}

export default AdminSidebar;
