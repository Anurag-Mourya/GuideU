import Image from "next/image";
import styles from "./Courses.module.scss";

const Courses = () => {
    // Map titles to specific Unsplash Image IDs
    const courseImages = {
        "Management": "1517245386807-bb43f82c33c4", // Meeting/Work
        "Engineering": "1581091226825-a6a2a5aee158", // Laptop/Tech
        "Art": "1560419015-7c427e8ae5ba", // Creative/Paint
        "Science": "1532094349884-543bc11b234d", // Lab/Test tubes
        "Computer": "1498050108023-c5249f4df085", // Coding/Macbook
        "BBA": "1523240795612-9a054b0db644", // Students/Group
        "BCA": "1571260899304-425eee4c7efc", // Study/Desk
        "B.Tech": "1531482615713-2afd69097998", // Workers/Tech
        "MBA": "1507679799987-c73779587ccf", // Professional/Suit
        "MCA": "1555099962-4199c345e5dd"  // Code/Screen
    };

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

    // Helper to generate image URL
    const getImage = (title) => {
        const id = courseImages[title];
        if (id) {
            return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=400&q=80`;
        }
        // Fallback if ID is missing
        return `https://picsum.photos/seed/${title}/400/300`;
    };

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
