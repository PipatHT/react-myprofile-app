import { FaFigma, FaGithub, FaHtml5, FaJs, FaReact } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";

const skills = [
  { name: "React", percent: "60%", type: "react", icon: FaReact },
  { name: "Figma", percent: "85%", type: "figma", icon: FaFigma },
  { name: "HTML/CSS", percent: "80%", type: "html", icon: FaHtml5 },
  { name: "Next.js", percent: "80%", type: "next", icon: SiNextdotjs },
  { name: "Java Script", percent: "60%", type: "javascript", icon: FaJs },
  { name: "GitHub", percent: "90%", type: "github", icon: FaGithub },
];

export default function Skill() {
  return (
    <section className="page-content skills-page">
      <h1 className="page-title">My <span className="accent">Skills</span></h1>
      <div className="skills-grid">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <article className="skill-card" key={skill.name}>
              <div className={`skill-orb${skill.type === "react" ? " active" : ""}`}>
                <Icon className={`skill-logo ${skill.type}-logo`} aria-hidden="true" />
                <strong>{skill.percent}</strong>
              </div>
              <span className="skill-name">{skill.name}</span>
            </article>
          );
        })}
      </div>
    </section>
  );
}
