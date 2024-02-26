import { useContext } from 'react';
import { authContext } from './../../context/AuthContext';
import { useQuery } from '@tanstack/react-query';
import { Spinner } from '../../ui/spinners/Spinners';
import { Container } from 'react-bootstrap';
import { getUserAddress } from '../../services/apiUserData';
import UpdatePassword from '../../ui/updatePassword/UpdatePassword';
import UserAddress from '../../ui/userAddress/UserAddress';

export default function Profile() {
    const { userData } = useContext(authContext);

    const { data, isLoading } = useQuery({
        queryFn: getUserAddress,
        queryKey: ['userAddress'],
    });
    if (isLoading) return <Spinner />;

    return (
        <>
            <Container className="py-5 ">
                <h2>
                    Hi {userData.name}
                    <span className="me-2 text-main fst-italic">
                        {' '}
                        ({userData.role})
                    </span>
                </h2>
                <UpdatePassword />
                <UserAddress data={data} />
            </Container>
        </>
    );
}
