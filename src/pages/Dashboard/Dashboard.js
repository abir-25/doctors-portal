import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

export const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  // const [visible, setVisible] = useState(false);
  const [isAdmin] = useAdmin(user?.email);
  // useEffect(() => {
  //   setVisible(isAdmin);
  // }, [isAdmin]);
  // console.log("visible: ", visible);
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <h2 className="text-2xl font-bold text-purple-500">
          Welcome to your Dashboard
        </h2>

        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-48 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">My Appointments</Link>
          </li>
          {isAdmin === true ? (
            <>
              <li>
                <Link to="/dashboard/allUsers">All Users</Link>
              </li>
              <li>
                <Link to="/dashboard/addDoctor">Add Doctor</Link>
              </li>
            </>
          ) : (
            ""
          )}
        </ul>
      </div>
    </div>
  );
};
