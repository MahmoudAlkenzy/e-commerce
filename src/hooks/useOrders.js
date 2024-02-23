import { useState } from 'react';
import axios from 'axios';
import { BaseUrl } from '../services/baseUrl';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

export function useOrders() {
    const userId = localStorage.getItem('userId');
    async function getUserOrders() {
        try {
            const { data } = await axios.get(
                `${BaseUrl}/api/v1/orders/user/${userId}`
            );
            return data;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    const { isLoading, data: orders } = useQuery({
        queryFn: getUserOrders,
        queryKey: ['user-orders'],
    });
    return { isLoading, orders };
}
