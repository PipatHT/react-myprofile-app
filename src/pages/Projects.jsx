import projectImage from "../assets/Project.JPG";

export default function Projects() {
  return (
    <section className="page-content project-page">
      <h1 className="page-title">Featured <span className="accent">Projects</span></h1>
      <h2 className="project-subtitle">Manage Task App - fullstack web development</h2>
      <p className="project-description">
        Here&apos;s my latest project built with Next.js and Laravel, using
        TailwindCSS on the front-end. Watch the video to see the responsive
        landing page in action.
      </p>

      <img className="project-preview" src={projectImage} alt="Manage Task App project screenshot" />
    </section>
  );
}
