import Layout from './pages/layout/Layout';
import SignUp from './pages/signup/Signup';
import { Login } from './pages/login/Login';
import Cart from './pages/cart/Cart';
import Home from './pages/home/Home';
import Categories from './pages/categories/Categories';
import Brands from './pages/brands/Brands';
import ProtectedRoute from './ui/protectedRoute/ProtectedRoute';
import ProdaucDetails from './pages/prodaucDetails/ProdaucDetails';
import Payment from './pages/payment/Payment';
import AllOrders from './pages/allOrdres/AllOrders';
import Profile from './pages/profile/Profile';
import Category from './pages/category/Category';
import Brand from './pages/brand/Brand';

import { CartContextProvider } from './context/CartContext';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AuthContextProvider } from './context/AuthContext';

import { RouterProvider, createHashRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import Wishlist from './pages/whishlist/Wishlist';

const router = createHashRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: (
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                ),
            },
            {
                path: 'products',
                element: (
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                ),
            },
            {
                path: 'payment',
                element: (
                    <ProtectedRoute>
                        <Payment />
                    </ProtectedRoute>
                ),
            },
            {
                path: 'allorders',
                element: (
                    <ProtectedRoute>
                        <AllOrders />
                    </ProtectedRoute>
                ),
            },
            {
                path: 'productDetails/:id',
                element: (
                    <ProtectedRoute>
                        <ProdaucDetails />
                    </ProtectedRoute>
                ),
            },
            {
                path: 'profile',
                element: (
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                ),
            },
            { path: 'login', element: <Login /> },
            { path: 'register', element: <SignUp /> },
            {
                path: 'cart',
                element: (
                    <ProtectedRoute>
                        <Cart />
                    </ProtectedRoute>
                ),
            },
            {
                path: 'categories',
                element: (
                    <ProtectedRoute>
                        <Categories />
                    </ProtectedRoute>
                ),
            },
            {
                path: 'category/:category',
                element: (
                    <ProtectedRoute>
                        <Category />
                    </ProtectedRoute>
                ),
            },
            {
                path: 'Brands',
                element: (
                    <ProtectedRoute>
                        <Brands />
                    </ProtectedRoute>
                ),
            },
            {
                path: 'brand/:brand',
                element: (
                    <ProtectedRoute>
                        <Brand />
                    </ProtectedRoute>
                ),
            },
            {
                path: 'whishlist',
                element: (
                    <ProtectedRoute>
                        <Wishlist />
                    </ProtectedRoute>
                ),
            },
        ],
    },
]);
function App() {
    const client = new QueryClient();
    return (
        <>
            <QueryClientProvider client={client}>
                <AuthContextProvider>
                    <CartContextProvider>
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
                    </CartContextProvider>
                </AuthContextProvider>
            </QueryClientProvider>
        </>
    );
}

export default App;
