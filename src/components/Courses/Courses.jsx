import Image from "next/image";
import styles from "./Courses.module.scss";

const Courses = () => {
    const fields = [
        "Management",
        "Engineering",
        "Art",
        "Science",
        "Computer"
    ];

    const degrees = [
        "BBA",
        "BCA",
        "B.Tech",
        "MBA",
        "MCA"
    ];

    // Helper to generate consistent random image
    const getImage = (seed) => `https://picsum.photos/seed/${seed}/400/300`;

    const Card = ({ title }) => (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image
                    src={getImage(title)}
                    alt={title}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className={styles.overlay}></div>
            </div>
            <div className={styles.content}>
                <h4>{title}</h4>
                <button className={styles.btn}>Explore</button>
            </div>
        </div>
    );

    return (
        <section id="courses" className={styles.courses}>
            <div className={styles.container}>
                <h2>Courses <span>Offered</span></h2>

                <div className={styles.section}>
                    <h3>Fields</h3>
                    <div className={styles.grid}>
                        {fields.map((item, index) => (
                            <Card key={index} title={item} />
                        ))}
                    </div>
                </div>

                <div className={styles.section}>
                    <h3>Degree Programs</h3>
                    <div className={styles.grid}>
                        {degrees.map((item, index) => (
                            <Card key={index} title={item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Courses;
