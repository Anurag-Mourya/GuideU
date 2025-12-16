import Link from "next/link";
import styles from "./Hero.module.scss";

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1>
                    Transforming Education into a <br />
                    <span>Rewarding Career Adventure</span>
                </h1>
                <p>
                    Indispensable guidance for students and professionals. Unlock your full potential with personalized support and strategic future planning.
                </p>
                <div className={styles.btnGroup}>
                    <Link href="#contact" className={styles.primaryBtn}>
                        Book Free Consultation
                    </Link>
                    <Link href="#courses" className={styles.secondaryBtn}>
                        Explore Courses
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
