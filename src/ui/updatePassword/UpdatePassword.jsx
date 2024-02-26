import { Row } from 'react-bootstrap';
import useUpdatePassword from '../../hooks/useUpdatePassword';
import { useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
export default function UpdatePassword() {
    const { isUpdating, update } = useUpdatePassword();

    const updatePasswordSchema = Yup.object({
        currentPassword: Yup.string().required().min(6),
        password: Yup.string().required().min(6).max(32),
        rePassword: Yup.string().required().min(6).max(32),
    });

    const initialValues = {
        currentPassword: '',
        password: '',
        rePassword: '',
    };
    function submitHandler(userPasswords) {
        update({ userPasswords });
    }
    const { handleSubmit, values, handleBlur, handleChange, errors, touched } =
        useFormik({
            initialValues,
            onSubmit: submitHandler,
            validationSchema: updatePasswordSchema,
        });
    return (
        <>
            <h5 className="fw-semibold my-4">Update your password</h5>
            <form onSubmit={handleSubmit}>
                <Row className="flex-column gap-3">
                    <input
                        id="currentPassword"
                        className="form-control w-50 me-auto"
                        type="text"
                        placeholder="Current Password"
                        value={values.currentPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.currentPassword && touched.currentPassword && (
                        <div className="alert w-50 alert-danger">
                            {errors.currentPassword}
                        </div>
                    )}
                    <input
                        id="password"
                        className="form-control w-50 me-auto"
                        type="password"
                        placeholder="New password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.password && touched.password && (
                        <div className="alert w-50 alert-danger">
                            {errors.password}
                        </div>
                    )}
                    <input
                        id="rePassword"
                        className="form-control w-50 me-auto"
                        type="password"
                        placeholder="Re password"
                        value={values.rePassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.rePassword && touched.rePassword && (
                        <div className="alert w-50 alert-danger">
                            {errors.rePassword}
                        </div>
                    )}
                    <button
                        className="btn btn-primary me-auto w-25"
                        type="submit"
                    >
                        Update
                    </button>
                </Row>
            </form>
        </>
    );
}
