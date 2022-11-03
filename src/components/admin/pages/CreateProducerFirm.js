import React from "react";
import PageLayout from "../../panel/layout/PageLayout";
import {Form, Button} from "react-bootstrap";
import {Formik} from "formik";
import {usePTrackerContract} from "../../../hooks/usePTrackerContract";
import * as Yup from 'yup';

const CreateProducerFirm = () => {
    const pTrackerContract = usePTrackerContract();

    const createFirm = async (values) => {
        console.log(values);
        try {
            const transaction = await pTrackerContract.createFirmAndOwner(values.firmOwner, values.firmName, values.firmLocation, true);
            await transaction.wait();
            console.log("success");
        } catch (error) {
            console.log(error);
        }
    }

    const validationSchema = Yup.object().shape({
        firmOwner: Yup.string().matches(/^0x[a-fA-F0-9]{40}$/, "*Wallet address is not valid").required('*Firm owner metamask wallet required'),
        firmName: Yup.string().required('*Firm name required'),
        firmLocation: Yup.string().required('*Firm location required')
      });

  return (
    <PageLayout page="Create Producer Firm">
    <Formik
       initialValues={{ firmOwner: '', firmName: '', firmLocation: '' }}
       validationSchema={validationSchema}
       onSubmit={async (values, { setSubmitting }) => {
         await createFirm(values);
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
         <form onSubmit={handleSubmit}>
            <Form.Group className="mt-3">
            <Form.Label>Üretici Firma Metamask Cüzdan Adresi</Form.Label>
            <Form.Control 
                type="text" 
                name="firmOwner" 
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firmOwner}
                placeholder="enter metamask wallet..." />
            </Form.Group>
           {errors.firmOwner && touched.firmOwner && <Form.Text className="text-danger">{errors.firmOwner}</Form.Text>}
           <Form.Group className="mt-3">
           <Form.Label>Üretici Firma Adı</Form.Label>
           <Form.Control 
                type="text" 
                name="firmName" 
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firmName}
                placeholder="enter firm name..." />
           </Form.Group>
           {errors.firmName && touched.firmName && <Form.Text className="text-danger">{errors.firmName}</Form.Text>}
           <Form.Group className="mt-3">
           <Form.Label>Üretici Firma Adresi</Form.Label>
           <Form.Control 
                as="textarea" rows={3}
                name="firmLocation" 
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firmLocation}
                placeholder="enter firm location..." />
           </Form.Group>
           {errors.firmLocation && touched.firmLocation && <Form.Text className="text-danger">{errors.firmLocation}</Form.Text>}
           <Form.Group className="mt-3">
            <Button size="sm" variant="success" type="submit" disabled={isSubmitting}>
                Create Producer Firm
            </Button>
           </Form.Group>
           
         </form>
       )}
     </Formik>
    </PageLayout>
  );
};

export default CreateProducerFirm;
