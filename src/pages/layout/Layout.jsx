import { Outlet } from 'react-router-dom';
import { NavBar } from '../../ui/nav/Navbar';
import Footer from '../../ui/footer/footer';

function Layout() {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;
