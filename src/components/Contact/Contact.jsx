import styles from './Contact.module.scss';

const Contact = () => {
    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.container}>
                <div className={styles.contentWrapper}>
                    <span className={styles.tagline}>Get in Touch</span>
                    <h2>Contact Us</h2>
                    <div className={styles.contactDetails}>
                        <div className={styles.item}>
                            <span className={styles.icon}>📍</span>
                            <p>96/05 Chetan tower chunniganj chauraha, Kanpur.</p>
                        </div>
                        <div className={styles.item}>
                            <span className={styles.icon}>📞</span>
                            <p>8318978873, 7388208899</p>
                        </div>
                        <div className={styles.item}>
                            <span className={styles.icon}>📱</span>
                            <p>WhatsApp: 7388208899, 8795208899</p>
                        </div>
                        <div className={styles.item}>
                            <span className={styles.icon}>📩</span>
                            <p>guideuexpert@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
