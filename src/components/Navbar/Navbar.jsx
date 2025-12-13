"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.scss";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    Guide<span>U</span>
                </Link>

                {/* Desktop Links */}
                <div className={styles.navLinks}>
                    <Link href="/">Home</Link>
                    <Link href="#about">About</Link>
                    <Link href="#services">Services</Link>
                    <Link href="#contact">Contact</Link>
                </div>

                <Link href="#register" className={styles.ctaBtn}>
                    Get Started
                </Link>

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
                <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                <Link href="#register" onClick={() => setMobileMenuOpen(false)} style={{ color: '#00D2D3' }}>Get Started</Link>
            </div>
        </nav>
    );
};

export default Navbar;
