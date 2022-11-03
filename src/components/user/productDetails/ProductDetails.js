import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Colors from "./Colors";
import { usePTrackerContract } from "../../../hooks/usePTrackerContract";
import { Row, Col } from "react-bootstrap";
import { convertBigNumberToNumber } from "../../../helpers/converter";
import { BackPageHeader } from "./BackPageHeader";
import TrackerContainer from "./TrackerContainer";
import Loading from "../../Loading";
import NotFound from "../../NotFound";

const ProductDetails = () => {
  const params = useParams();
  const pTracker = usePTrackerContract();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getProductDetails = async (productId) => {
    try {
      console.log(await pTracker.getProductById(productId))
      setProduct(await pTracker.getProductById(productId));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!pTracker) return;
    getProductDetails(params.id);

    pTracker.queryFilter("AddProduct").then((result) => {
      const events = result.filter(
        (event) =>
          convertBigNumberToNumber(event.args.uid).toString() === params.id
      );
      console.log("events: ", events);
    });
  }, [params.id, pTracker]);

  return isLoading ? <Loading /> 
  : (isLoading===false && convertBigNumberToNumber(product.uid)===0 && !product.productName) ? <NotFound />
  : (
    <Fragment>
      <BackPageHeader />
      {product && (
        <div className="app">
          <Row className="details">
            <Col className="box">
              <Row>
                <h2>{product.productName}</h2>
                <span>ID: {params.id}</span>
              </Row>
              <Colors color="red" />
              <p>
                <b>Producer:</b> {product.manufacturer}
              </p>
              <p>
                <b>Produced Location:</b> {product.origin}
              </p>
              <p>
                <b>Last Location:</b> {product.lastOrigin}
              </p>
            </Col>

            <Col className="box">
              <Row>
                <h4>Product Description</h4>
              </Row>
              <p>lorem ipsum dolor sit amet</p>
            </Col>
          </Row>
        </div>
      )}

      <TrackerContainer />
    </Fragment>
  );
};

export default ProductDetails;
