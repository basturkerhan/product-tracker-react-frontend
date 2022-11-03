import { Navigate, Outlet } from 'react-router-dom';
import { useRole } from "../hooks/useRole";
import RoleEnum from "../enums/roles";
import Navbar from './panel/layout/Navbar';
import { Fragment } from 'react';
import ProducerMenu from "../data/producer/sidebarMenuData";

const ProducerPrivateRoute = () => {
  const role = useRole();
  if (role !== null) {
    const isAuthenticated = RoleEnum.Producer === role;
    return isAuthenticated ?
    <Fragment>
      <Navbar MenuData={ProducerMenu} />
        <Outlet /> 
    </Fragment>
    : <Navigate to={"/"} replace />; // or loading indicator, etc...
  }
  return <Navigate to={"/login"} replace />;
};

export default ProducerPrivateRoute;