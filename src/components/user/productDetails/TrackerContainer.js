import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { usePTrackerContract } from "../../../hooks/usePTrackerContract";
import { convertBigNumberToNumber } from "../../../helpers/converter";
import { TrackerItem } from "./TrackerItem";
import { Container, Table } from "react-bootstrap";

const TrackerContainer = () => {
  const params = useParams();
  const pTracker = usePTrackerContract();
  const [events, setEvents] = useState(null);

  useEffect(() => {
    if (!pTracker) return;

    pTracker.queryFilter("VerifyProduct").then((result) => {
      const filteredEvents = result.filter(
        (event) =>
          convertBigNumberToNumber(event.args.newProductId).toString() ===
          params.id
      );
      setEvents(filteredEvents);
      console.log("verify events: ", result);
    });
  }, [params.id, pTracker]);

  return (
    <Container>
      <Table striped bordered hover>
        <tbody>
          {events &&
            events.map((event, index) => {
              return <TrackerItem key={index} item={event.args} />;
            })}
        </tbody>
      </Table>
    </Container>
  );
};

export default TrackerContainer;
