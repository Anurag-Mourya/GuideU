"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import logo from "../../../public/GuidEU_logo.png";
import ForDarklogo from "../../../public/darkEU.png";
import styles from "./Navbar.module.scss";
import Image from "next/image";

import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    console.log("scrolled", scrolled)
    console.log("theme", theme)

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
            <div className={styles.container}>

                <Link href="/" className={styles.logo}>

                    {scrolled ?
                        (theme === "light") ?
                            <Image src={logo} alt="GuideU Logo" priority /> :
                            <Image src={ForDarklogo} alt="GuideU Logo" priority />
                        :
                        (theme === "light") ?
                            <Image src={ForDarklogo} alt="GuideU Logo" priority />
                            :
                            (theme === "dark") ?
                                <Image src={ForDarklogo} alt="GuideU Logo" priority />
                                :
                                <Image src={logo} alt="GuideU Logo" priority />
                    }


                </Link>

                {/* Desktop Links */}
                <div className={styles.navLinks}>
                    <Link href="/">Home</Link>
                    <Link href="#about">About</Link>
                    <Link href="#services">Services</Link>
                    <Link href="#courses">Courses</Link>
                    <Link href="#contact">Contact</Link>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle Theme">
                        {theme === 'dark' ? '☀️' : '🌙'}
                    </button>
                    {/* <Link href="#register" className={styles.ctaBtn}>
                        Get Started
                    </Link> */}
                </div>

                {/* Mobile Toggle */}
                <div
                    className={styles.mobileMenuBtn}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? "✖" : "☰"}
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`${styles.mobileOverlay} ${mobileMenuOpen ? styles.open : ""}`}>
                <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                <Link href="#about" onClick={() => setMobileMenuOpen(false)}>About</Link>
                <Link href="#services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
                <Link href="#courses" onClick={() => setMobileMenuOpen(false)}>Courses</Link>
                <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                <Link href="#register" onClick={() => setMobileMenuOpen(false)} style={{ color: '#00D2D3' }}>Get Started</Link>
            </div>
        </nav>
    );
};

export default Navbar;
