import { Container, Row, Col, Button, FormGroup,Form } from "react-bootstrap";
import { Formik, useFormik } from "formik";
import * as yup from "yup"
const validateSchema=yup.object().shape({

    email:yup.string()
                .required("username cannot be empty")
                // .matches(/^[A-Za-z]{2,8}$/,"useranme should conatin 2-8 characters and alphabetic values only"),
   , password:yup.string()
                .required("password cannot be empty")
                .matches(/^[a-zA-Z0-9]{5,10}$/,"Password should conatin 5-10 characters and alphanumeric values only"),
})
export const LoginPage = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validationSchema: validateSchema
    })
         console.log(formik.errors.username)
    return (
        <>
            <Form onSubmit={formik.handleSubmit}>
            <Row className="d-flex justify-content-center">
                <Col md={4} >
                    <FormGroup>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email"
                            placeholder="enter Username"
                            name="email"
                            {...formik.getFieldProps("email")} />
                    </FormGroup>
                     {formik.touched.emailm && formik.errors.username && (
              <div style={{ color: "red" }}>{formik.errors.username}</div>
            )}
                    <FormGroup>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"
                            placeholder="enter Username"
                            name="password"
                            {...formik.getFieldProps("password")} />
                             {formik.touched.password && formik.errors.password && (
              <div style={{ color: "red" }}>{formik.errors.password}</div>
            )}
                    </FormGroup>
                    <Button type="submit">Login</Button>
                </Col>
            </Row>
            </Form>
        </>
    )
}

// export const LoginPage=()=>{
//     return(
//         <>
//         <h1>Login</h1></>
//     )
// }