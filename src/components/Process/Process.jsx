import styles from "./Process.module.scss";

const processSteps = [
    {
        title: "Personalized Career Guidance",
        desc: "We assess each student’s unique interests, strengths, and aspirations to recommend the best-fit educational paths.",
        icon: "🧠"
    },
    {
        title: "Streamlined Admission Support",
        desc: "From form filling to final enrollment, we simplify every step of the admission process, ensuring a hassle-free experience.",
        icon: "📝"
    },
    {
        title: "Workshops and Counseling",
        desc: "Regularly conducted workshops and one-on-one counseling sessions provide students with the clarity they need to succeed.",
        icon: "🤝"
    },
    {
        title: "Industry Insights",
        desc: "Collaborating with leading colleges and universities, we keep students updated on emerging trends and opportunities in higher education.",
        icon: "🌐"
    }
];

const Process = () => {
    return (
        <section className={styles.process}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2>How We Work</h2>
                    <p>
                        At GuidEU, we pride ourselves on our structured and student-first approach.
                    </p>
                </div>

                <div className={styles.steps}>
                    {processSteps.map((step, idx) => (
                        <div key={idx} className={styles.step}>
                            <div className={styles.iconWrapper}>
                                {step.icon}
                            </div>
                            <div className={styles.content}>
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
