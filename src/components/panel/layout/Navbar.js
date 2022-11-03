import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import NavbarButton from "../common/buttons/NavbarButton";
import { AiOutlineMenuUnfold, AiOutlineFullscreenExit } from "react-icons/ai";
import { MdNotificationsNone } from "react-icons/md";
import Sidebar from "./sidebar/Sidebar";
import DropdownProfileImage from "../common/profile/DropdownProfileImage";
import { MobileNavbar } from "./MobileNavbar";
import {SiPivotaltracker} from "react-icons/si";

const Navbar = ({MenuData}) => {
  const [show, setShow] = useState(false);
  const [isMobileDevice, setMobileDevice] = useState(false);

  const changeSidebarShowStatus = () => {
    setShow(!show);
  }

  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      setMobileDevice(true);
    } else {
      // false for not mobile device
      setMobileDevice(false);
    }
  }, []);

  const browserFullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.body.requestFullscreen();
    }
  };

  return (
    <div>
      <Row id="navbar">
        <Col>
          <NavbarButton onClick={changeSidebarShowStatus}>
            <AiOutlineMenuUnfold />
          </NavbarButton>
        </Col>

        <Col className="center">
          <div className="d-flex align-items-center">
            <SiPivotaltracker style={{marginRight:"0.5rem"}} />
            <span>PTracker</span>
          </div>
        </Col>

        {!isMobileDevice && (
          <Col className="right">
            <NavbarButton>
              <MdNotificationsNone />
            </NavbarButton>
            <NavbarButton onClick={browserFullScreen}>
              <AiOutlineFullscreenExit />
            </NavbarButton>
            <DropdownProfileImage />
          </Col>
        )}
      </Row>

      <Sidebar MenuData={MenuData} show={show} handleClose={changeSidebarShowStatus} />
      {isMobileDevice && <MobileNavbar onClick={changeSidebarShowStatus} />}
    </div>
  );
};

export default Navbar;
