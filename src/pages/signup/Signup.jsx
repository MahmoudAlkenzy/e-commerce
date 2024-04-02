import { useFormik } from 'formik';
import { Container, Row } from 'react-bootstrap';
import * as yup from 'yup';
import { useSignup } from '../../hooks/useSignup';
import { useNavigate } from 'react-router-dom';
import { SpinnerMini } from '../../ui/spinners/Spinners';
const signupSchema = yup.object({
  name: yup
    .string()
    .required('name must be required')
    .min(3, 'name must be more than 3 letters ')
    .max(32, 'name must be less than 32 letters'),
  email: yup.string().required('email must be required').email('invalid email form'),
  password: yup
    .string()
    .required('password must be required')
    .matches(/[A-Z]/, 'password must have a upper case letter')
    .min(6)
    .max(32),
  rePassword: yup.string().oneOf([yup.ref('password'), null], 'Must match "password" field value'),
  phone: yup
    .string()
    .required('phone must be required')
    .matches(/^01[125][0-9]{8}/, 'must be egyption number'),
});
function SignUp() {
  const navigate = useNavigate();
  const { signup, isLoading } = useSignup();
  const userData = {
    name: '',
    email: '',
    password: '',
    rePassword: '',
    phone: '',
  };
  function submitHandler(userData) {
    signup(
      { userData },
      {
        onSuccess: () => navigate('/login'),
      }
    );
  }

  const { handleSubmit, handleChange, values, errors, touched, handleBlur } = useFormik({
    initialValues: userData,
    onSubmit: submitHandler,
    validationSchema: signupSchema,
  });
  return (
    <>
      <Container className="py-5">
        <Row className="w-75 mx-auto">
          <h2>Register Now :</h2>
          <form onSubmit={handleSubmit} className="d-flex  flex-column gap-2">
            <label htmlFor="name">name:</label>
            <input
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              id="name"
              type="text"
              className="form-control"
            />
            {errors.name && touched.name && <div className="alert-danger alert">{errors.name}</div>}

            <label htmlFor="email">email:</label>
            <input
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              id="email"
              type="text"
              className="form-control"
            />
            {errors.email && touched.email && <div className="alert-danger alert">{errors.email}</div>}

            <label htmlFor="password">password:</label>
            <input
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              id="password"
              type="password"
              className="form-control"
            />
            {errors.password && touched.password && <div className="alert-danger alert">{errors.password}</div>}

            <label htmlFor="rePassword">rePassword:</label>
            <input
              value={values.rePassword}
              onChange={handleChange}
              onBlur={handleBlur}
              id="rePassword"
              type="password"
              className="form-control"
            />
            {errors.rePassword && touched.rePassword && <div className="alert-danger alert">{errors.rePassword}</div>}

            <label htmlFor="phone">phone:</label>
            <input
              id="phone"
              type="tel"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              className="form-control"
            />
            {errors.phone && touched.phone && <div className="alert-danger alert">{errors.phone}</div>}

            <button type="submit" className="btn align-self-end bg-main text-white">
              {isLoading ? <SpinnerMini /> : <span> Register</span>}
            </button>
          </form>
        </Row>
      </Container>
    </>
  );
}

export default SignUp;
