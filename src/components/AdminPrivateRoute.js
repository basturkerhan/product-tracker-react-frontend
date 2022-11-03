import { Navigate, Outlet } from 'react-router-dom';
import { useRole } from "../hooks/useRole";
import RoleEnum from "../enums/roles";
import { Fragment } from 'react';
import Navbar from './panel/layout/Navbar';
import AdminMenu from "../data/admin/sidebarMenuData";

const AdminPrivateRoute = () => {
  const role = useRole();
  if (role !== null) {
    const isAuthenticated = RoleEnum.Owner === role;
    return isAuthenticated ? 
    <Fragment>
      <Navbar MenuData={AdminMenu} />
        <Outlet /> 
    </Fragment>
    : <Navigate to={"/"} replace />; // or loading indicator, etc...
  }
  return <Navigate to={"/login"} replace />;
};

export default AdminPrivateRoute;