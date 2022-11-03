import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import {AiOutlineMenu} from 'react-icons/ai'
import NavbarButton from "../common/buttons/NavbarButton";
import { MdNotificationsNone } from "react-icons/md";

export const MobileNavbar = ({onClick}) => {

  console.log("navbar")
  return (
    <div id="mobile-navbar">
        <Row>
            <Col className="left">
            <NavbarButton>
              <MdNotificationsNone />
            </NavbarButton>
            </Col>
            <Col className="center">
                <Button onClick={onClick} id="mobile-navbar-button"><AiOutlineMenu /></Button>
            </Col>
            <Col className="right">
            <NavbarButton>
              <MdNotificationsNone />
            </NavbarButton>
            </Col>
        </Row>
    </div>
  )
}
