export default function Home() {
  return (
    <section className="page-content home-page">
      <div>
        <p className="home-greeting">Let&apos;s Work <span className="accent">Together!</span></p>
        <h1 className="page-title">
          Hi From <span className="accent">Pipat</span>,
          <br />
          Interactive Designer &amp; Fullstack Web Developer
        </h1>
        <p className="page-copy">
          I enjoy bringing ideas to life through thoughtful design and
          fullstack development, creating useful and engaging experiences for
          the web.
        </p>
      </div>
      <div className="home-stats" aria-label="Portfolio highlights">
        <div className="stat"><strong>3+</strong><span>Years of<br />Experience</span></div>
        <div className="stat"><strong>10+</strong><span>Projects<br />Completed</span></div>
      </div>
    </section>
  );
}
