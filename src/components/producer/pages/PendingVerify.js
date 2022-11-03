import React, { useEffect } from "react";
import PageLayout from "../../panel/layout/PageLayout";
import { Table, ButtonGroup, Button } from "react-bootstrap";
import { usePTrackerContract } from "../../../hooks/usePTrackerContract";
import { convertBigNumberToNumber } from "../../../helpers/converter";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import verifyStatusEnum from "../../../enums/verifyStatus";
import { useAddress } from "../../../hooks/useAddress";
import moment from "moment";

export const PendingVerify = () => {
  const pTracker = usePTrackerContract();
  const [pendingVerifies, setPendingVerifies] = React.useState(null);
  const address = useAddress();

  const handleVerify = async (e, uid, status) => {
    e.preventDefault();
    try {
      console.log(uid)
        const transaction = await pTracker.verifySubProduct(convertBigNumberToNumber(uid), status);
        await transaction.wait();
        console.log("success");
        setPendingVerifies(pendingVerifies.filter((event) => event.uid !== uid && event.verifyStatus === verifyStatusEnum.Waiting ));
    } catch (error) {
        console.log(error);
    }
  }

  const getVerifies = async () => {
    try {
      const verifies = await pTracker.getFirmVerifies(address);
      const waitingVerifies = await verifies.filter(verify => verify.verifyStatus === verifyStatusEnum.Waiting);
      setPendingVerifies(waitingVerifies);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getVerifies();
  }, [pTracker, address]);

  return (
    <PageLayout page="Pending Verify">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Parent Product ID</th>
            <th>Requesting</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {pendingVerifies &&
            pendingVerifies.length > 0 &&
            pendingVerifies.map((pendingVerify, index) => (
              <tr key={index}>
                <td>{convertBigNumberToNumber(pendingVerify.verifyParentProduct)}</td>
                <td>{convertBigNumberToNumber(pendingVerify.verifySubProduct)}</td>
                <td>{moment.unix(convertBigNumberToNumber(pendingVerify.verifyDate)).toString()}</td>
                <td>
                  <Button
                    onClick={e => handleVerify(e, pendingVerify.uid, verifyStatusEnum.Rejected)} 
                    size="sm"
                    style={{ marginRight: "0.3rem" }}
                    variant="danger"
                  >
                    <AiOutlineClose />
                  </Button>
                  <Button 
                  onClick={e => handleVerify(e, pendingVerify.uid, verifyStatusEnum.Verified)} 
                  size="sm" 
                  variant="success">
                    <AiOutlineCheck />
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </PageLayout>
  );
};
