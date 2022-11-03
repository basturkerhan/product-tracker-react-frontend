import React from 'react'

function NavbarButton({children, onClick}) {
  return (
    <button onClick={onClick} className="navbar-button">{children}</button>
  )
}

export default NavbarButton;