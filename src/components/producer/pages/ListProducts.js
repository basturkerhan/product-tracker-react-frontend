import React, { useEffect } from "react";
import PageLayout from "../../panel/layout/PageLayout";
import { Table } from "react-bootstrap";
import { usePTrackerContract } from "../../../hooks/usePTrackerContract";
import { useAddress } from "../../../hooks/useAddress";
import { useFirmName } from "../../../hooks/useFirmName";
import {convertBigNumberToNumber} from "../../../helpers/converter";

export const ListProducts = () => {
  const pTracker = usePTrackerContract();
  const firmName = useFirmName();
  const [products, setProducts] = React.useState(null);
  const address = useAddress();

  const getProducts = async () => {
    try {
      const products = await pTracker.getFirmProducts(address);
      console.log(products);
      setProducts(products);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, [pTracker, address]);

  return (
    <PageLayout page="Products List">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Last Location</th>
          </tr>
        </thead>
        <tbody>
        {
            products && products.length>0 && products.map(product => (
            <tr key={convertBigNumberToNumber(product.uid)}>
                <td>{convertBigNumberToNumber(product.uid)}</td>
                <td>{product.productName}</td>
                <td>{product.origin}</td>
              </tr>
            ))
        }
        </tbody>
      </Table>
    </PageLayout>
  );
};
