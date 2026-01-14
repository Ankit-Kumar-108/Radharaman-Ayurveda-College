"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import "../../app/landing.css"

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);


    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <header>
                <nav>
                    <Link href="/">
                        <div className="header cursor-pointer">
                            <img src="/ASSETS/logo.png" alt="Radharaman College Logo" />
                        </div>
                    </Link>
                    <div className="links">
                        <a className="w-20" href="#About">About

                        </a>
                        <a className="w-22.5" href="#College">College</a>
                        <a className="w-25" href="/admin/students">Hospital</a>
                        <a className="w-21.25" href="/faculty">Faculty</a>
                        <a className="w-20" href="/notice">Notice</a>
                        <a className="w-20" href="/newsEvent">Event</a>
                        <a className="w-27.5" href="#Contact Us">Contact Us</a>
                        <Link href={"/admin/dashboard"}>
                            <button>LOGIN</button>
                        </Link>
                    </div>
                    <button
                        className="hamburger"
                        aria-label="Open navigation menu"
                        aria-expanded={menuOpen}
                        onClick={toggleMenu}
                    >
                        <img
                            src="/ASSETS/burger-menu-right-svgrepo-com.svg"
                            alt="Open menu"
                            height="30px"
                            width="30px"
                        />
                    </button>
                    <div
                        className={`menuISclicked ${menuOpen ? "open" : ""}`}
                        aria-hidden={!menuOpen}
                    >
                        <button
                            className="menu-close"
                            aria-label="Close menu"
                            onClick={closeMenu}
                        >
                            ✕
                        </button>
                        <ul className="mobile-menu">
                            <li>
                                <a href="#About" onClick={closeMenu}>
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#College" onClick={closeMenu}>
                                    College
                                </a>
                            </li>
                            <li>
                                <a href="/admin/student" onClick={closeMenu}>
                                    Hospital
                                </a>
                            </li>
                            <li>
                                <a href="/faculty" onClick={closeMenu}>
                                    Faculty
                                </a>
                            </li>
                            <li>
                                <a href="/notice" onClick={closeMenu}>
                                    Detail
                                </a>
                            </li>
                            <li>
                                <a href="/newsEvent" onClick={closeMenu}>
                                    Events
                                </a>
                            </li>
                            <li>
                                <a href="#Contact Us" onClick={closeMenu}>
                                    Contact
                                </a>
                            </li>
                            <li>
                                <Link href={"/admin/dashboard"}>
                                    <button>LOGIN</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
}