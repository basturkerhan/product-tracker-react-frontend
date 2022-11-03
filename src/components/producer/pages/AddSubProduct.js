import React from "react";
import PageLayout from "../../panel/layout/PageLayout";
import {Form, Button} from "react-bootstrap";
import {Formik} from "formik";
import {usePTrackerContract} from "../../../hooks/usePTrackerContract";
import * as Yup from 'yup';

const AddSubProduct = () => {
    const pTrackerContract = usePTrackerContract();

    const addSubProduct = async (values) => {
        console.log(values);
        try {
            const transaction = await pTrackerContract.addSubProduct(values.newProductId, values.childProductId);
            await transaction.wait();
            console.log("success");
        } catch (error) {
            console.log(error);
        }
    }

    const validationSchema = Yup.object().shape({
        newProductId: Yup.string().required('*New Product Id required'),
        childProductId: Yup.string().required('*Child Product Id required'),
      });

  return (
    <PageLayout page="Add Sub Product">
    <Formik
       initialValues={{ newProductId: '', childProductId: '' }}
       validationSchema={validationSchema}
       onSubmit={async (values, { setSubmitting }) => {
         await addSubProduct(values);
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
            <Form.Label>New Product ID</Form.Label>
            <Form.Control
                type="text" 
                name="newProductId" 
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.newProductId}
                placeholder="enter product id..." />
            </Form.Group>
           {errors.newProductId && touched.newProductId && <Form.Text className="text-danger">{errors.newProductId}</Form.Text>}

           <Form.Group className="mt-3">
            <Form.Label>Child Product ID</Form.Label>
            <Form.Control
                type="text" 
                name="childProductId" 
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.childProductId}
                placeholder="enter product id..." />
            </Form.Group>
           {errors.childProductId && touched.childProductId && <Form.Text className="text-danger">{errors.childProductId}</Form.Text>}

           <Form.Group className="mt-3">
            <Button size="sm" variant="success" type="submit" disabled={isSubmitting}>
                Add Sub Product
            </Button>
           </Form.Group>
           
         </Form>
       )}
     </Formik>
    </PageLayout>
  );
};

export default AddSubProduct;
