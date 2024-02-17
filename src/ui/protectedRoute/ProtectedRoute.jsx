import React from 'react';
import { useToken } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

export default function ProtectedRoute({ children }) {
    const { token } = useToken();
    if (!token) return <Navigate to="/login" />;
    return <>{children}</>;
}
