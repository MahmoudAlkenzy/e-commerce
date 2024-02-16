import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';
import SignUp from './components/signUp/SignUp';
import Login from './components/login/Login';
import Cart from './components/cart/Cart';
import Home from './components/home/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'register', element: <SignUp /> },
            { path: 'login', element: <Login /> },
            { path: 'cart', element: <Cart /> },
            { path: 'register', element: <SignUp /> },
        ],
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
