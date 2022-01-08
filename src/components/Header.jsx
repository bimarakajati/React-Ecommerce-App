import React from "react";
import { NavLink } from "react-router-dom";
import CartBtn from "./buttons/CartBtn";
import Login from "./buttons/Login";
import Signup from "./buttons/Signup";

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid py-2">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">
                                    Beranda
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">
                                    Produk
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">
                                    Tentang
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/bukutamu">
                                    Buku Tamu
                                </NavLink>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav mx-auto">
                            <NavLink to="/">
                                {/* Supreme Store */}
                                <img src="/assets/images/logo.png" alt="Logo" height="35px" />
                            </NavLink>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Login />
                            </li>
                            <li className="nav-item">
                                <Signup />
                            </li>
                            <li className="nav-item">
                                <CartBtn />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
