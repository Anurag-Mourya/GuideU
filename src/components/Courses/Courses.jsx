import styles from "./Courses.module.scss";

const Courses = () => {
    return (
        <section id="courses" className={styles.courses}>
            <div className={styles.container}>
                <h2>Courses <span>Offered</span></h2>

                <div className={styles.content}>
                    <div className={styles.section}>
                        <h3>Fields</h3>
                        <div className={styles.list}>
                            <span>Management</span>
                            <span>Engineering</span>
                            <span>Art</span>
                            <span>Science</span>
                            <span>Computer</span>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h3>Degree Programs</h3>
                        <div className={styles.list}>
                            <span>BBA</span>
                            <span>BCA</span>
                            <span>B.Tech</span>
                            <span>MBA</span>
                            <span>MCA</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Courses;
