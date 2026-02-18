import './index.css';

function App() {
  return (
    <div>
      <header>
        <h1>Kadu Portfolio</h1>
      </header>

      <section className="section">
        <h2>Hello, I'm Kadu</h2>
        <p>DevOps & Web Developer</p>
      </section>

      <section className="section">
        <h2>Projects</h2>
        <div className="cards">
          <div className="card">AWS Deployment</div>
          <div className="card">Fleet Tracker</div>
          <div className="card">Streaming Server</div>
        </div>
      </section>

      <footer>
        © 2026 Kadu
      </footer>
    </div>
  );
}

export default App;
