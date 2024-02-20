import { Outlet } from 'react-router-dom';
import { NavBar } from '../../ui/nav/Navbar';
import Footer from '../../ui/footer/footer';

function Layout() {
    return (
        <>
            <NavBar />
            <div className="min-vh-100">
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export default Layout;
