import { ThreeCircles } from 'react-loader-spinner';

export function Spinner() {
    return (
        <div className="bg-main w-100 top-0 bottom-0  position-fixed bg-opacity-25 d-flex flex-wrap justify-content-center align-content-center">
            <ThreeCircles
                visible={true}
                height="100"
                width="100"
                color="#f0f3f2"
                ariaLabel="three-circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
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
