import React, { Fragment, useEffect } from "react";
import PageLayout from "../../panel/layout/PageLayout";
import { usePTrackerContract } from "../../../hooks/usePTrackerContract";
import { useAddress } from "../../../hooks/useAddress";
import { batch, useDispatch } from "react-redux";
import { setFirmName, setFirmLocation } from "../../../store/slices/firm";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useFirmName } from "../../../hooks/useFirmName";
import { useFirmLocation } from "../../../hooks/useFirmLocation";
import "../../../styles/panelDetails.scss";

const Landing = () => {
  const pTracker = usePTrackerContract();
  const address = useAddress();
  const dispatch = useDispatch();
  const firmName = useFirmName();
  const firmLocation = useFirmLocation();

  const laodFirmInformations = async () => {
    try {
      const firmInfo = await pTracker.getFirmById(address);
      batch(() => {
        dispatch(setFirmName(firmInfo.firmName));
        dispatch(setFirmLocation(firmInfo.firmLocation));
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    laodFirmInformations();
  }, [pTracker]);

  return firmName && firmLocation && (
    <Container>
      <PageLayout page="">
        <div className="main-body">
          <Row className="gutters-sm">
            <Col md={4} className="mb-3">
              <Card>
                <Card.Body>
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                      alt="producer"
                      className="rounded-circle"
                      width="150"
                    />
                    <div className="mt-3">
                      <h4>{firmName}</h4>
                      <p className="text-secondary mb-1">Producer Firm</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
              <Card className="mt-3">
                <ListGroup variant="flush">
                  <ListGroup.Item className="d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-globe mx-2 icon-inline"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                      </svg>
                      Website
                    </h6>
                    <span className="text-secondary">https://website.com</span>
                  </ListGroup.Item>
                  
                 
                  <ListGroup.Item className="d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-instagram mx-2 icon-inline text-danger"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                      Instagram
                    </h6>
                    <span class="text-secondary">@instagram</span>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
            <Col md={8}>
              <Card className="mb-3">
                <Card.Body>
                  <Row>
                    <Col sm={3}>
                      <h6 className="mb-0">Firm Name</h6>
                    </Col>
                    <Col sm={9} className="text-secondary">
                      {firmName}
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col sm={3}>
                      <h6 className="mb-0">Firm Location</h6>
                    </Col>
                    <Col sm={9} className="text-secondary">
                      {firmLocation}
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </PageLayout>
    </Container>
  );
};

export default Landing;
