import React from "react";
import { Accordion } from "react-bootstrap";
import SidebarItem from "./SidebarItem";

export const SidebarDropdownItem = ({ menuItem, index, handleClose }) => {
  return (
      <Accordion.Item className="main-sidebar-menu-item" eventKey={index}>
        <Accordion.Button>
          <span>{menuItem.icon}</span>
          <span className="mx-2">{menuItem.name}</span>
        </Accordion.Button>
        <Accordion.Body>
          {
            menuItem.subMenuList.map((subMenu,index) => (
              <SidebarItem handleClose={handleClose} key={index} menuItem={subMenu} />
            ))
          }
        </Accordion.Body>
      </Accordion.Item>
  );
};

export default SidebarDropdownItem;
