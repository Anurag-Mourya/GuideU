import styles from "./Stats.module.scss";

const localStats = [
    { val: "85%", label: "Professionals Stuck", sub: "In jobs they never wanted" },
    { val: "9/10", label: "Students Unsure", sub: "About life after graduation" },
    { val: "60%", label: "Unemployed", sub: "Graduates stuck in mismatched roles" },
];

const Stats = () => {
    return (
        <section className={styles.statsSection}>
            <div className={styles.container}>
                <h2>Don't Let Statistics Define Your Future</h2>
                <div className={styles.grid}>
                    {localStats.map((item, idx) => (
                        <div key={idx} className={styles.card}>
                            <span className={styles.number}>{item.val}</span>
                            <span className={styles.label}>{item.label}</span>
                            <span className={styles.sub}>{item.sub}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
