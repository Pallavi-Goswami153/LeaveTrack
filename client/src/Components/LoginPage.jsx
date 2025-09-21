import { Container, Row, Col, Button, FormGroup, Form } from "react-bootstrap";
import { useFormik } from "formik";
import { LeaveService } from "../Services/LeaveService";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

//Validation using yup
const validateSchema = yup.object().shape({
  email: yup.string()
            .email("Invalid email format")
             .required("Email cannot be empty"),
  password: yup.string()
    .required("Password cannot be empty")
    .matches(
      /^[a-zA-Z0-9]{5,10}$/,
      "Password should contain 5-10 characters and alphanumeric values only"
    ),
});

export const LoginPage = () => {
    const navigate=useNavigate();

    

  const formik = useFormik({
  initialValues: 
  { 
    email: "",
    password: "" 
},
 
 onSubmit: (values) => {
  const user = LeaveService.login(values.email, values.password);

  if (user) {
    // all the information of user is stored into the local storage
    localStorage.setItem("currentUser", JSON.stringify({
      id: user.id,
      email: user.email,
      role: user.role
    }));

    // redirect based on the admin pag
    if (user.role === "admin") {
      navigate("/admin-dashboard"); 
    } else {
      navigate("/dashboard"); // redirect on the employee page 
    }
  } 
},
   validationSchema: validateSchema,
});
  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col md={4}>
          <h3 className="text-center my-3">Login</h3>
          <Form onSubmit={formik.handleSubmit}>
            {/* email field for credentials  */}
            <FormGroup className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                name="email"
                {...formik.getFieldProps("email")}
                isInvalid={formik.touched.email && !!formik.errors.email}
              />
              {formik.touched.email && formik.errors.email && (
                <div style={{ color: "red", fontSize: "14px" }}>
                  {formik.errors.email}
                </div>
              )}
            </FormGroup>

            {/* password field for credentials */}
            <FormGroup className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                name="password"
                {...formik.getFieldProps("password")}
                isInvalid={formik.touched.password && !!formik.errors.password}
              />
              {formik.touched.password && formik.errors.password && (
                <div style={{ color: "red", fontSize: "14px" }}>
                  {formik.errors.password}
                </div>
              )}
            </FormGroup>
            <Button type="submit" className="w-100">Login</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
