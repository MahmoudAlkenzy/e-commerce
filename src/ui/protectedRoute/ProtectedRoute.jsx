import { useToken } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';
/* eslint-disable react/prop-types */ // TODO: upKgrade to latest eslint tooling

export default function ProtectedRoute({ children }) {
    if (localStorage.getItem('tkn') === null) return <Navigate to="/login" />;
    return <>{children}</>;
}
