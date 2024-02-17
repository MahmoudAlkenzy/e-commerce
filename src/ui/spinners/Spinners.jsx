import { ThreeCircles } from 'react-loader-spinner';

export function Spinner() {
    return (
        <ThreeCircles
            visible={true}
            height="100"
            width="100"
            color="#f0f3f2"
            ariaLabel="three-circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />
    );
}
export function SpinnerMini() {
    return (
        <ThreeCircles
            visible={true}
            height="30"
            width="30"
            color="#f0f3f2"
            ariaLabel="three-circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />
    );
}
