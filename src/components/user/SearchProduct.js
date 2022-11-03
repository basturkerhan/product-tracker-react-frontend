import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import * as Yup from "yup";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";

const SearchProduct = () => {

    const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    productId: Yup.string().required("*Product ID required"),
  });

  return (
    <div id="search-product-page">
      <Container>
        <Row className="height d-flex justify-content-center align-items-center">
          <Col md={6}>
            <Formik
              initialValues={{ productId: "" }}
              validationSchema={validationSchema}
              onSubmit={async (values, { setSubmitting }) => {
                navigate(`/product/${values.productId}`)
                setSubmitting(false);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <Form className="form" onSubmit={handleSubmit}>
                  <Form.Control
                    type="text"
                    className="form-input"
                    name="productId"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.productId}
                    placeholder="enter product id..."
                  />
                  <span className="left-pan">
                    <button className="search-button" type="submit" disabled={isSubmitting}>
                      <AiOutlineSearch />
                    </button>
                  </span>
                  {errors.productId && touched.productId && (
                    <Form.Text className="text-danger">
                      {errors.productId}
                    </Form.Text>
                  )}
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SearchProduct;
