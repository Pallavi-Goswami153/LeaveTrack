import {Row, Col, Button, FormGroup, Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as yup from "yup";
import { LeaveService } from "../Services/LeaveService";
import { useLeave } from "./ContextLevve";

// Validation schema using yup
const validate=yup.object().shape({
  type:yup.string().required("Leave type is required"),
  startDate:yup.date().required("Start date is required"),
  endDate:yup.date() .required("End date is required")
    .min(yup.ref("startDate"), "End date cannot be before start date"),
  reason:yup.string().required("Reason is required"),
});

export const LeaveForm=()=>{
  const currentUser=JSON.parse(localStorage.getItem("currentUser")||"null");
  const {applyLeaves}=useLeave();

  const formik=useFormik({
    initialValues: {
      type: "",
      startDate: "",
      endDate: "",
      reason: "",
    },
    validationSchema: validate,
    onSubmit:(values,{resetForm})=>{
  if(!currentUser){
    alert("Login first");
    return;
  }
  const newLeave={
    id:Date.now(),         
    type:values.type,
    startDate:values.startDate,
    endDate:values.endDate,
    reason:values.reason,
    appliedBy:currentUser.name,
    appliedById:currentUser.id,
    status:"Pending"         // admin will approve or reject the leave
  };
  applyLeaves(newLeave);       
  alert("leave applied successfully!!!!!!!");
  resetForm();
},

});

  return(
    <>
         <Row className="d-flex justify-content-center">
        <Col md={6}>
          <h3 className="text-center my-3">Apply for Leave</h3>
          <Form onSubmit={formik.handleSubmit}>
            {/* type of leave like - sick,casual etc */}
            <FormGroup className="mb-3">
              <Form.Label>Leave Type</Form.Label>
              <Form.Select name="type" {...formik.getFieldProps("type")} isInvalid={formik.touched.type && !!formik.errors.type}>
                <option value="">Select Leave Type</option>
                <option value="Casual">Casual Leave</option>
                <option value="Sick">Sick Leave</option>
                <option value="Earned">Earned Leave</option>
              </Form.Select>
              {formik.touched.type && formik.errors.type && (<div style={{color:"red",fontSize:"14px"}}>{formik.errors.type}</div>)}
            </FormGroup>

            {/* start date of leave*/}
            <FormGroup className="mb-3">
              <Form.Label>Start Date</Form.Label>
              <Form.Control type="date" name="startDate" {...formik.getFieldProps("startDate")} isInvalid={formik.touched.startDate && !!formik.errors.startDate}/>
              {formik.touched.startDate && formik.errors.startDate && (<div style={{color:"red",fontSize:"14px"}}>{formik.errors.startDate}</div>)}
            </FormGroup>

            {/* end date of leave  */}
            <FormGroup className="mb-3">
              <Form.Label>End Date</Form.Label>
              <Form.Control type="date" name="endDate" {...formik.getFieldProps("endDate")} isInvalid={formik.touched.endDate && !!formik.errors.endDate}/>
              {formik.touched.endDate && formik.errors.endDate && (<div style={{color:"red",fontSize:"14px"}}>{formik.errors.endDate}</div>)}
            </FormGroup>

            {/* reason why the leave is needed*/}
            <FormGroup className="mb-3">
              <Form.Label>Reason</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter reason for leave" name="reason" {...formik.getFieldProps("reason")} isInvalid={formik.touched.reason && !!formik.errors.reason}/>
              {formik.touched.reason && formik.errors.reason && (<div style={{color:"red",fontSize:"14px"}}>{formik.errors.reason}</div>)}
            </FormGroup>

            <Button type="submit">Apply Leave</Button>
          </Form>
        </Col>
      </Row>
     </>
  );
};
