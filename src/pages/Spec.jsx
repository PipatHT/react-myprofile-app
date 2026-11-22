const specializations = [
  {
    icon: "</>",
    title: "Front end-developer",
    description: "Front-end is where I weave code and creativity to shape captivating and user-centric digital experiences.",
  },
  {
    icon: "◎",
    title: "UI/UX Designer",
    description: "UI/UX design is my palette for blending art and user psychology into seamless and delightful interactions.",
  },
  {
    icon: "✳",
    title: "Graphic designer",
    description: "As a graphic designer, I transform ideas into visually striking and impactful designs.",
  },
];

export default function Spec() {
  return (
    <section className="page-content spec-page">
      <h1 className="page-title">My <span className="accent">Specializations</span></h1>
      <div className="specialization-list">
        {specializations.map((item) => (
          <article className="specialization-card" key={item.title}>
            <div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
            <span className="specialization-icon" aria-hidden="true">{item.icon}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
