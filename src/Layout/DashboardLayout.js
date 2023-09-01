import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navber from '../Shared/Navber';



const DashboardLayout = () => {
  
  return (
    <div>
      <Navber></Navber>
      <div className="drawer drawer-mobile">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          <Outlet></Outlet>

        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content">

            <li><Link to='/dashboard'>My orders</Link></li>
            <li><Link to='/dashboard/addphoto'>Add Photo</Link></li>
           

          </ul>

        </div>
      </div>


    </div>
  );
};

export default DashboardLayout;