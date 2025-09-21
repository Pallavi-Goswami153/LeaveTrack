import { Container, Row, Col, Button, FormGroup, Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as yup from "yup";
import { LeaveService } from "../Services/LeaveService";

// Validation schema using yup
const leaveSchema = yup.object().shape({
  type: yup.string().required("Leave type is required"),
  startDate: yup.date().required("Start date is required"),
  endDate: yup
    .date()
    .required("End date is required")
    .min(yup.ref("startDate"), "End date cannot be before start date"),
  reason: yup.string().required("Reason is required"),
});

export const LeaveForm = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "null");

  const formik = useFormik({
    initialValues: {
      type: "",
      startDate: "",
      endDate: "",
      reason: "",
    },
    validationSchema: leaveSchema,
    onSubmit: (values, { resetForm }) => {
      if (!currentUser) {
        alert("You must be logged in to apply for leave.");
        return;
      }
      const newLeave = LeaveService.applyLeave(values, currentUser.id);
      alert("Leave Applied Successfully!");
      console.log(newLeave);
      resetForm();
    },
  });

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col md={6}>
          <h3 className="text-center my-3">Apply for Leave</h3>
          <Form onSubmit={formik.handleSubmit}>
            {/* Leave Type */}
            <FormGroup className="mb-3">
              <Form.Label>Leave Type</Form.Label>
              <Form.Select
                name="type"
                {...formik.getFieldProps("type")}
                isInvalid={formik.touched.type && !!formik.errors.type}
              >
                <option value="">Select Leave Type</option>
                <option value="Casual">Casual Leave</option>
                <option value="Sick">Sick Leave</option>
                <option value="Earned">Earned Leave</option>
              </Form.Select>
              {formik.touched.type && formik.errors.type && (
                <div style={{ color: "red", fontSize: "14px" }}>
                  {formik.errors.type}
                </div>
              )}
            </FormGroup>

            {/* Start Date */}
            <FormGroup className="mb-3">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                name="startDate"
                {...formik.getFieldProps("startDate")}
                isInvalid={formik.touched.startDate && !!formik.errors.startDate}
              />
              {formik.touched.startDate && formik.errors.startDate && (
                <div style={{ color: "red", fontSize: "14px" }}>
                  {formik.errors.startDate}
                </div>
              )}
            </FormGroup>

            {/* End Date */}
            <FormGroup className="mb-3">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                name="endDate"
                {...formik.getFieldProps("endDate")}
                isInvalid={formik.touched.endDate && !!formik.errors.endDate}
              />
              {formik.touched.endDate && formik.errors.endDate && (
                <div style={{ color: "red", fontSize: "14px" }}>
                  {formik.errors.endDate}
                </div>
              )}
            </FormGroup>

            {/* Reason */}
            <FormGroup className="mb-3">
              <Form.Label>Reason</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter reason for leave"
                name="reason"
                {...formik.getFieldProps("reason")}
                isInvalid={formik.touched.reason && !!formik.errors.reason}
              />
              {formik.touched.reason && formik.errors.reason && (
                <div style={{ color: "red", fontSize: "14px" }}>
                  {formik.errors.reason}
                </div>
              )}
            </FormGroup>

            <Button type="submit" className="w-100">
              Apply Leave
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
