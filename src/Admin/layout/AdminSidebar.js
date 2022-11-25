import React from 'react';
import { Link } from 'react-router-dom';

function AdminSidebar(props) {
  return (
    <>

<div className="drawer-side">
          <label htmlFor="mobileMenu" className="drawer-overlay"></label>
          <ul className="menu p-7 w-80 bg-gray-100  text-base-content">
         
             
                <li> <Link to='/admin'>User</Link></li>
                <li> <Link to='/admin/add-product'>Add Product </Link></li>
                <li> <Link to='/admin/manage-product'>Manage Product </Link></li>
            
          </ul>
        </div>
      
    </>
  );
}

export default AdminSidebar;