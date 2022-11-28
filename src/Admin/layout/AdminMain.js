import React from 'react';
import {  Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';

function AdminMain(props) {
  const data = { data:"minhaz "}
  return (
    <div >
    
      <div className="drawer drawer-mobile h-auto min-h-screen">
        <input id="mobileMenu" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content  h-auto w-full">
          <Outlet UserRole={data} > </Outlet>
        </div>
        <AdminSidebar> </AdminSidebar>
        
      </div>
    </div>
  );
}

export default AdminMain;