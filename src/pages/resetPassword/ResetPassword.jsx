import useVerifyCode from '../../hooks/useVerifyCode';
import { Navigate, useNavigate } from 'react-router-dom';
import { SpinnerMini } from '../../ui/spinners/Spinners';
import { useResetPassword } from '../../hooks/useResetPassword';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useForgetPassword } from '../../hooks/useForgetPassword';
import { useContext } from 'react';
import { authContext } from '../../context/AuthContext';

export default function ResetPassword() {
    const { verifyState } = useVerifyCode();
    const { isReseting, reset } = useResetPassword();
    const { useremail } = useContext(authContext);
    const navigate = useNavigate();
    const validationSchema = yup.object({
        password: yup.string().required().min(6).max(32),
    });

    function submitHandler(values) {
        console.log({ useremail, values: values.password });
        reset(
            { userData: { email: useremail, newPassword: values.password } },
            {
                onSuccess: () => navigate('/'),
            }
        );
    }
    const initialValues = {
        password: '',
    };

    const { handleSubmit, values, handleBlur, handleChange, errors, touched } =
        useFormik({
            initialValues,
            onSubmit: submitHandler,
            validationSchema,
        });

    if (verifyState.status !== 'Success')
        return <Navigate to="/forget-password" />;

    return (
        <form
            onSubmit={handleSubmit}
            className="d-flex flex-column w-75  mx-auto justify-content-center gap-3 "
            style={{ minHeight: '75vh' }}
        >
            <div>
                <label htmlFor="verifyCode"> Enter your new password</label>

                <input
                    id="password"
                    className="form-control my-2"
                    placeholder="Password"
                    type="text"
                    disabled={isReseting}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                />
                {errors.password && touched.password && (
                    <div className="alert alert-danger ">{errors.password}</div>
                )}
            </div>
            <button
                type="submit"
                className="btn btn-primary align-self-start py-2"
            >
                {isReseting ? <SpinnerMini /> : 'update your password'}
            </button>
        </form>
    );
}
