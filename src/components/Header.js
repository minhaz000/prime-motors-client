import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { RootContext } from "../context/RootContext";

function Header(props) {
  const { user, LogOut, userRole } = useContext(RootContext);
  const HandleLogOut = (event) => {
    event.preventDefault();
    LogOut().then(() => toast.success(" Successfully Logged OUT"));
  };
  return (
    <div>
      <div className="navbar bg-base-100 px-10 mt-2">
        <div className="navbar-start">
          <div className="dropdown">
            <label htmlFor="mobileMenu" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
          </div>
          <Link to="/" className="cursor-pointer  text-2xl font-extrabold text-green-500 textuppercase ">
            Prime <span className=" text-black">Motors</span>{" "}
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/booking"> My bookings </Link>
            </li>
            <li>
              <Link to="/blog"> Blog </Link>
            </li>
            {userRole?.role === "admin" || userRole?.role === "seller" ? (
              <li>
                <Link to="/dashboard"> DashBoard </Link>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <img className=" rounded-full h-[40px] pr-2" src={user.photoURL} alt="" />
              <span className="pr-3 mb-2"> {user.displayName}</span>
              <Link onClick={HandleLogOut} className="btn btn-primary ">
                Log Out
              </Link>
            </>
          ) : (
            <Link to="/login" className="btn btn-primary ">
              {" "}
              Log in{" "}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
