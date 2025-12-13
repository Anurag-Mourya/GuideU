import styles from "./Services.module.scss";

const servicesList = [
    { title: "Career Guidance", desc: "Expert advice to choose the right educational journey.", icon: "🎯" },
    { title: "Loan Assistance", desc: "Simplifying the process of securing education loans.", icon: "💰" },
    { title: "Scholarships", desc: "Information about grants and financial benefits.", icon: "🎓" },
    { title: "Workshops", desc: "Skill development to equip you for professional success.", icon: "🛠️" },
    { title: "Personalized Guidance", desc: "From upskilling options to the best master’s programs, we’ll provide clarity that’s perfect for your unique goals.", icon: "✨" },
    { title: "Real Advice", desc: "Forget peer pressure. Get insights backed by industry experts.", icon: "💡" },
    { title: "Top Program Recommendations", desc: "Learn which degrees employers from TCS, Infosys, Amazon, and Deloitte actually value.", icon: "🏆" },
];

const Services = () => {
    return (
        <section id="services" className={styles.services}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2>What We Offer</h2>
                    <p>Comprehensive support from admission to career success.</p>
                </div>
                <div className={styles.grid}>
                    {servicesList.map((item, idx) => (
                        <div key={idx} className={styles.card}>
                            <div className={styles.icon}>{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
