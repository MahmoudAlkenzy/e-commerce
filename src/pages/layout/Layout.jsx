import { Outlet } from 'react-router-dom';
import { NavBar } from '../../ui/nav/Navbar';
import Footer from '../../ui/footer/Footer.jsx';

function Layout() {
    return (
        <>
            <NavBar />
            <div className="min-vh-75">
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export default Layout;
