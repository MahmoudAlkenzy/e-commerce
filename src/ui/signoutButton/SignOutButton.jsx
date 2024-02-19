import { Link } from 'react-router-dom';
import { IoIosLogOut } from 'react-icons/io';
import { useToken } from '../../context/AuthContext';

export default function SignOutButton() {
    const { setToken } = useToken();
    return (
        <Link
            onClick={() => {
                localStorage.removeItem('tkn');
                setToken(null);
            }}
            className="nav-link"
            to="/login"
        >
            SignOut <IoIosLogOut />
        </Link>
    );
}
