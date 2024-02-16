import { useFormik } from 'formik';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Yup from 'yup';

function SignUp() {
    const userData = {
        name: '',
        email: '',
        password: '',
        rePassword: '',
        phone: '',
    };
    function submitHandler(values) {
        console.log('submiting...0, ', values);
    }

    const { handleSubmit, handleChange, values } = useFormik({
        initialValues: userData,
        onSubmit: submitHandler,
    });
    return (
        <>
            <Container className="py-5">
                <Row className="w-75 mx-auto">
                    <h2>Register Now :</h2>
                    <form
                        onSubmit={handleSubmit}
                        className="d-flex align-items-start flex-column gap-2"
                    >
                        <label htmlFor="name">name:</label>
                        <input
                            value={values.name}
                            onChange={handleChange}
                            id="name"
                            type="text"
                            className="form-control"
                        />
                        <label htmlFor="email">email:</label>
                        <input
                            value={values.email}
                            onChange={handleChange}
                            id="email"
                            type="text"
                            className="form-control"
                        />
                        <label htmlFor="password">password:</label>
                        <input
                            value={values.password}
                            onChange={handleChange}
                            id="password"
                            type="text"
                            className="form-control"
                        />
                        <label htmlFor="rePassword">rePassword:</label>
                        <input
                            value={values.rePassword}
                            onChange={handleChange}
                            id="rePassword"
                            type="text"
                            className="form-control"
                        />
                        <label htmlFor="phone">phone:</label>
                        <input
                            id="phone"
                            type="tel"
                            value={values.phone}
                            onChange={handleChange}
                            className="form-control"
                        />
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
