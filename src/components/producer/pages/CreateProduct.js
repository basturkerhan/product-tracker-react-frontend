import React from "react";
import PageLayout from "../../panel/layout/PageLayout";
import {Form, Button} from "react-bootstrap";
import {Formik} from "formik";
import {usePTrackerContract} from "../../../hooks/usePTrackerContract";
import * as Yup from 'yup';

const CreateProduct = () => {
    const pTrackerContract = usePTrackerContract();

    const createProduct = async (values) => {
        console.log(values);
        try {
            const transaction = await pTrackerContract.addNewProduct(values.productName);
            await transaction.wait();
            console.log("success");
        } catch (error) {
            console.log(error);
        }
    }

    const validationSchema = Yup.object().shape({
        productName: Yup.string().required('*Product name required'),
      });

  return (
    <PageLayout page="Create Product">
    <Formik
       initialValues={{ productName: '' }}
       validationSchema={validationSchema}
       onSubmit={async (values, { setSubmitting }) => {
         await createProduct(values);
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
         <Form onSubmit={handleSubmit}>
            <Form.Group className="mt-3">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
                type="text" 
                name="productName" 
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.productName}
                placeholder="enter product name..." />
            </Form.Group>
           {errors.productName && touched.productName && <Form.Text className="text-danger">{errors.productName}</Form.Text>}

           <Form.Group className="mt-3">
            <Button size="sm" variant="success" type="submit" disabled={isSubmitting}>
                Create Product
            </Button>
           </Form.Group>
           
         </Form>
       )}
     </Formik>
    </PageLayout>
  );
};

export default CreateProduct;
