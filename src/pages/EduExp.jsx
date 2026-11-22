const milestones = [
  {
    date: "2022 - Present",
    title: "UI/UX Designer",
    description: "Freelance",
    secondTitle: "Fullstack Web Developer",
    secondDescription: "Freelance",
  },
  {
    date: "2022 - 2025",
    title: "Bachelor Degree in Technology Digital and Innovation",
    description: "Southeast Asia University",
  },
  {
    date: "2016 - 2021",
    title: "High school",
    description: "Taweethapisek School",
  },
];

export default function EduExp() {
  return (
    <section className="page-content timeline-page">
      <h1 className="page-title">Education &amp; <span className="accent">Experience</span></h1>
      <div className="timeline">
        {milestones.map((item) => (
          <article className="timeline-item" key={item.title}>
            <p className="timeline-date">{item.date}</p>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            {item.secondTitle && (
              <>
                <h3>{item.secondTitle}</h3>
                <p>{item.secondDescription}</p>
              </>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
