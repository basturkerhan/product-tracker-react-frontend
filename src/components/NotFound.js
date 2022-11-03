import React from 'react'
import {Link} from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-page">
        <h1>Page Not Found</h1>
        <h2 as={Link} to="/product">Go Home Page</h2>
    </div>
  )
}

export default NotFound;