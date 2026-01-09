import Aos from "aos";
import "aos/dist/aos.css";
import "../../app/landing.css";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        Aos.init({
            duration: 800,
            once: true,
            offset: 50,
            easing: "cubic-bezier(0.68, -0.55, 0.27, 1.55)" as any,
        });
    }, []);

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
                    <div className="header">
                        <img src="ASSETS/logo.png" alt="Radharaman College Logo" />
                    </div>
                    <div className="links">
                        <a className="w-[80px]" href="#About">About
                            
                        </a>
                        <a className="w-[90px]" href="#College">College</a>
                        <a className="w-[100px]" href="#Hospital">Hospital</a>
                        <a className="w-[85px]" href="#Faculty">Faculty</a>
                        <a className="w-[80px]" href="#Detail">Detail</a>
                        <a className="w-[80px]" href="#Events">Event</a>
                        <a className="w-[110px]" href="#Contact Us">Contact Us</a>
                        <button>LOGIN</button>{" "}
                    </div>
                    <button
                        className="hamburger"
                        aria-label="Open navigation menu"
                        aria-expanded={menuOpen}
                        onClick={toggleMenu}
                    >
                        <img
                            src="ASSETS/burger-menu-right-svgrepo-com.svg"
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
                                <a href="#Hospital" onClick={closeMenu}>
                                    Hospital
                                </a>
                            </li>
                            <li>
                                <a href="#Faculty" onClick={closeMenu}>
                                    Faculty
                                </a>
                            </li>
                            <li>
                                <a href="#Detail" onClick={closeMenu}>
                                    Detail
                                </a>
                            </li>
                            <li>
                                <a href="#Events" onClick={closeMenu}>
                                    Events
                                </a>
                            </li>
                            <li>
                                <a href="#Contact Us" onClick={closeMenu}>
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
}