import { useRef } from 'react';
import { Container } from 'react-bootstrap';
import { useForgetPassword } from '../../hooks/useForgetPassword';
import { SpinnerMini } from '../../ui/spinners/Spinners';

export default function Forgetpassweord() {
    const ref = useRef();
    const { isLoading, resetPassword, data } = useForgetPassword();
    console.log(data?.statusMsg);
    function submitHandler(e) {
        e.preventDefault();
        resetPassword({ email: ref.current.value });
    }
    return (
        <Container className="">
            {data?.statusMsg ? (
                'verify'
            ) : (
                <form
                    onSubmit={submitHandler}
                    className="d-flex flex-column w-75  mx-auto justify-content-center gap-3 "
                    style={{ minHeight: '75vh' }}
                >
                    <label className=" fs-4" htmlFor="email">
                        Enter your email
                    </label>
                    <input
                        id="email"
                        ref={ref}
                        className="form-control p-2"
                        placeholder="Your email"
                        type="email"
                        disabled={isLoading}
                    />
                    <button
                        type="submit"
                        className="btn btn-primary align-self-start py-2"
                    >
                        {isLoading ? <SpinnerMini /> : 'Send verification code'}
                    </button>
                </form>
            )}
        </Container>
    );
}
