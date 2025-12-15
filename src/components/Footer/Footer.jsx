import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/GuidEU_logo.png";
import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer id="register" className={styles.footer}>
            <div className={styles.container}>
                {/* CTA Section */}
                <div className={styles.ctaSection}>
                    <h2>Ready to Level Up?</h2>
                    <p>Don't wait—make the smart move today. Fill out the form below and take the first step toward a brighter career!</p>
                    <form>
                        <input type="email" placeholder="Your Email Address" required />
                        <button type="submit">Get Free Consultation</button>
                    </form>
                </div>

                <div className={styles.links}>
                    <div className={styles.brand}>
                        <Link href="/">
                            <Image src={logo} alt="GuideU Logo" style={{ height: "80px", width: "auto", marginBottom: "1rem" }} />
                        </Link>
                        <p>Right Career No Confusion. Part of Takshashila Education Consultancy.</p>
                    </div>
                    <div className={styles.column}>
                        <h4>Menu</h4>
                        <Link href="#">Home</Link>
                        <Link href="#about">About</Link>
                        <Link href="#services">Services</Link>
                        <Link href="#courses">Courses</Link>
                        <Link href="#contact">Contact</Link>
                    </div>
                    <div className={styles.column}>
                        <h4>Contact Us</h4>
                        <p>96/05 Chetan tower chunniganj chauraha, Kanpur.</p>
                        <p>📞 8318978873, 7388208899</p>
                        <p>📱 WhatsApp: 7388208899, 8795208899</p>
                        <p>📩 guideuexpert@gmail.com</p>
                    </div>
                    <div className={styles.column}>
                        <h4>Socials</h4>
                        <Link href="#">Instagram</Link>
                        <Link href="#">Facebook</Link>
                        <Link href="#">LinkedIn</Link>
                        <Link href="#">WhatsApp</Link>
                    </div>
                </div>
                <div className={styles.copyright}>
                    &copy; {new Date().getFullYear()} GuideU. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
