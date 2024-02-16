import { useFormik } from 'formik';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import * as yup from 'yup';
const signupSchema = yup.object({
    name: yup.string().required('name must be req').min(3).max(12),
    email: yup.string().email(),
    password: yup.string().required('password must be req').min(6).max(6),
    rePassword: yup.string().required('must be req').min(6).max(6),
    phone: yup
        .string()
        .required('phone must be req')
        .matches(/^01[125][0-9]{8}/),
});
function SignUp() {
    const userData = {
        name: '',
        email: '',
        password: '',
        rePassword: '',
        phone: '',
    };
    function submitHandler(values) {
        // console.log('submiting...0, ', values);
    }

    const { handleSubmit, handleChange, values, errors, touched, handleBlur } =
        useFormik({
            initialValues: userData,
            onSubmit: submitHandler,
            validationSchema: signupSchema,
        });
    return (
        <>
            <Container className="py-5">
                <Row className="w-75 mx-auto">
                    <h2>Register Now :</h2>
                    <form
                        onSubmit={handleSubmit}
                        className="d-flex  flex-column gap-2"
                    >
                        <label htmlFor="name">name:</label>
                        <input
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="name"
                            type="text"
                            className="form-control"
                        />
                        {errors.name && touched.name && (
                            <div className="alert-danger alert">
                                {errors.name}
                            </div>
                        )}

                        <label htmlFor="email">email:</label>
                        <input
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="email"
                            type="text"
                            className="form-control"
                        />
                        {errors.email && touched.email && (
                            <div className="alert-danger alert">
                                {errors.email}
                            </div>
                        )}

                        <label htmlFor="password">password:</label>
                        <input
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="password"
                            type="text"
                            className="form-control"
                        />
                        {errors.password && touched.password && (
                            <div className="alert-danger alert">
                                {errors.password}
                            </div>
                        )}

                        <label htmlFor="rePassword">rePassword:</label>
                        <input
                            value={values.rePassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="rePassword"
                            type="text"
                            className="form-control"
                        />
                        {errors.rePassword && touched.rePassword && (
                            <div className="alert-danger alert">
                                {errors.rePassword}
                            </div>
                        )}

                        <label htmlFor="phone">phone:</label>
                        <input
                            id="phone"
                            type="tel"
                            value={values.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="form-control"
                        />
                        {errors.phone && touched.phone && (
                            <div className="alert-danger alert">
                                {errors.phone}
                            </div>
                        )}

                        <button
                            type="submit"
                            className="btn align-self-end bg-main text-white"
                        >
                            Register
                        </button>
                    </form>
                </Row>
            </Container>
        </>
    );
}

export default SignUp;
