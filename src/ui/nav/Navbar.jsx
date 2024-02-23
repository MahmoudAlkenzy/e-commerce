import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Logo from '../../images/freshcart-logo.svg';
import SocialList from '../socialMediaList/SocialList';
import { useToken } from '../../context/AuthContext';
import { IoCartOutline } from 'react-icons/io5';

import SignOutButton from '../signoutButton/SignOutButton';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export function NavBar() {
    const { token } = useToken();
    const { numOfCartItem } = useContext(CartContext);
    return (
        <Navbar sticky="top" expand="lg" className="bg-main-light navbar-light">
            <Container>
                <Link to="/">
                    <img src={Logo} alt="" />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {token && (
                        <Nav className="me-auto  align-items-center fw-semibold">
                            <Link className=" nav-link" to="/products">
                                Home
                            </Link>

                            <Link className=" nav-link" to="/Categories">
                                Categories
                            </Link>
                            <Link className=" nav-link" to="Brands">
                                Brands
                            </Link>
                            <Link className=" nav-link" to="/allorders">
                                All orders
                            </Link>
                        </Nav>
                    )}

                    <Nav className="ms-auto align-items-center fw-semibold">
                        <SocialList />
                        {token ? (
                            <>
                                <Link
                                    className=" position-relative nav-link fs-4 mx-2 "
                                    to="/cart"
                                >
                                    <IoCartOutline />
                                    <span className="position-absolute fs-8 top-0 start-100  translate-middle-x badge rounded-pill bg-danger">
                                        {numOfCartItem}
                                    </span>
                                </Link>
                                <SignOutButton />
                            </>
                        ) : (
                            <>
                                <Link className="nav-link" to="/login">
                                    Login
                                </Link>

                                <Link className="nav-link" to="/register">
                                    Register
                                </Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
