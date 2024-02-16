import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';
import SignUp from './components/signUp/SignUp';
import Login from './components/login/Login';
import Cart from './components/cart/Cart';
import Home from './components/home/Home';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import { AuthContextProvider } from './context/AuthContext';

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
    const client = new QueryClient();
    return (
        <>
            <QueryClientProvider client={client}>
                <AuthContextProvider>
                    <RouterProvider router={router} />
                    <ReactQueryDevtools />
                    <Toaster
                        position="top-center"
                        gutter={12}
                        containerStyle={{ margin: '8px' }}
                        toastOptions={{
                            success: {
                                duration: 3000,
                            },
                            error: {
                                duration: 5000,
                            },
                            style: {
                                background: 'white',
                                color: 'var(--color-grey-700)',
                                fontSize: '16px',
                                padding: '16px 24px',
                                maxWidth: '500px',
                            },
                        }}
                    />
                </AuthContextProvider>
            </QueryClientProvider>
        </>
    );
}

export default App;
