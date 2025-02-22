import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/react.svg'

function Navbar() {
    return (
        <>
            <header style={{ paddingTop: 30, paddingBottom: 30, position: 'absolute', width: '100% ' }}>
                <nav style={{ display: "flex", maxWidth: 1200, margin: "auto", alignItems: "center", justifyContent: "space-between", gap: 30 }}>
                    <Link to="/">
                        <img src={Logo} alt="logo image" />
                    </Link>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 30 }}>
                        <Link to="/">
                            Home
                        </Link>
                        <Link to="/about">
                            About
                        </Link>
                        <Link to="/services">
                            Services
                        </Link>
                        <Link to="/contact">
                            Contact
                        </Link>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar
