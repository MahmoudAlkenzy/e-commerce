import { useFormik } from 'formik';
import { Container, Row, Col } from 'react-bootstrap';
import * as Yup from 'yup';
import { useLogin } from '../../hooks/useLogin';
import { Link, useNavigate } from 'react-router-dom';
import { SpinnerMini } from '../../ui/spinners/Spinners';

const loginSchema = Yup.object({
    email: Yup.string().required().email(),
    password: Yup.string().required().min(6).max(32),
});
export function Login() {
    const navigate = useNavigate();
    const { isLoading, login } = useLogin();
    const loginData = {
        email: '',
        password: '',
    };
    const { errors, handleBlur, handleChange, values, touched, handleSubmit } =
        useFormik({
            initialValues: loginData,
            validationSchema: loginSchema,
            onSubmit: (userData) => {
                login(
                    { userData },
                    {
                        onSuccess: () => navigate('/products'),
                    }
                );
            },
        });
    return (
        <Container>
            <Row className="w-75 mx-auto py-5">
                <h2>Log in:</h2>
                <form
                    className="d-flex flex-column gap-2 py-2"
                    onSubmit={handleSubmit}
                >
                    <label htmlFor="email">email:</label>
                    <input
                        id="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text"
                        className="form-control"
                    />
                    {errors.email && touched.email && (
                        <div className="alert alert-danger">
                            {' '}
                            {errors.email}
                        </div>
                    )}
                    <label htmlFor="password">password:</label>
                    <input
                        id="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="password"
                        className="form-control"
                    />
                    {errors.password && touched.password && (
                        <div className="alert alert-danger">
                            {' '}
                            {errors.password}
                        </div>
                    )}
                    <Col className="d-flex ">
                        <Link to="/forget-password">Forget password?</Link>
                        <button
                            type="submit"
                            className="btn bg-main ms-auto text-white"
                        >
                            {isLoading ? <SpinnerMini /> : 'Login'}
                        </button>
                    </Col>
                </form>
            </Row>
        </Container>
    );
}
