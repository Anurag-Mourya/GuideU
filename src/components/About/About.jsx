import styles from "./About.module.scss";

const About = () => {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.container}>
                <div className={styles.contentWrapper}>
                    <span className={styles.tagline}>Right Career No Confusion</span>
                    <h2>A Proud Initiative of Takshashila Education Consultancy</h2>

                    <div className={styles.textGrid}>
                        <div>
                            <p>
                                GuidEU is the ultimate platform for career guidance. Designed to provide personalized support to students, GuidEU blends innovation with expertise to navigate the complexities of education and career choices.
                            </p>
                            <br />
                            <p>
                                From offering exclusive workshops to curating meaningful student interactions, GuidEU is a name synonymous with trust and clarity in the education sector.
                            </p>
                        </div>

                        <div className={styles.mission}>
                            <p>
                                <strong>Our Mission:</strong> To bridge the gap between students and the right educational opportunities, ensuring every individual is equipped to pursue a fulfilling and successful career.
                            </p>
                            <br />
                            <p>
                                By collaborating with esteemed institutions, colleges, and universities, we aim to create a seamless pathway for students to achieve their academic and professional aspirations.
                            </p>
                        </div>
                    </div>

                    <div className={styles.footerNote}>
                        Guiding Students, Empowering Institutions.
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
