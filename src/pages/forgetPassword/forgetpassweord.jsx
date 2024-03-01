import { useRef } from 'react';
import { Container } from 'react-bootstrap';
import { useForgetPassword } from '../../hooks/useForgetPassword';
import { SpinnerMini } from '../../ui/spinners/Spinners';
import useVerifyCode from '../../hooks/useVerifyCode';
import { useNavigate } from 'react-router-dom';

export default function Forgetpassweord() {
    const ref = useRef();
    const codeRef = useRef();
    const navigate = useNavigate();
    const { isLoading, resetPassword, data } = useForgetPassword();
    const { isVerifing, verifyCode, data: verifyData } = useVerifyCode();
    console.log('verifyData', verifyData);
    console.log(data?.statusMsg);
    function submitCodeHandler(e) {
        e.preventDefault();

        verifyCode(
            { resetCode: codeRef.current.value },
            {
                onSuccess: () => {
                    navigate('/reset-password');
                },
            }
        );
    }
    function submitEmailHandler(e) {
        e.preventDefault();
        resetPassword({ email: ref.current.value });
        // codeRef.current.value = ' ';
        ref.current.value = '';
    }

    return (
        <Container>
            {data?.statusMsg ? (
                <form
                    id="sa"
                    onSubmit={submitCodeHandler}
                    className="d-flex flex-column w-75  mx-auto justify-content-center gap-3 "
                    style={{ minHeight: '75vh' }}
                >
                    <label htmlFor="verifyCode"> Enter your Code</label>

                    <input
                        id="verifyCod"
                        ref={codeRef}
                        min={6}
                        className="form-control p-2"
                        placeholder="verify code.."
                        type="text"
                        disabled={isVerifing}
                        defaultValue=""
                    />
                    <button
                        type="submit"
                        className="btn btn-primary align-self-start py-2"
                    >
                        {isVerifing ? (
                            <SpinnerMini />
                        ) : (
                            'Check verification code'
                        )}
                    </button>
                </form>
            ) : (
                <form
                    id="as"
                    onSubmit={submitEmailHandler}
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
