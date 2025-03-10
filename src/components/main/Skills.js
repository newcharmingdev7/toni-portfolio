const Skills = () => {
  return (
    <>
      <div className="container section-title">
        <div>
          <p className="text-center">Technical Expertise</p>
        </div>
        <p className="text-center">
          Highly skilled in a range of technologies.
        </p>
      </div>
      <section id="skills" className="about section">
        <div className="container">
          <div className="row gy-4 justify-content-center">
            <div className="container mx-auto" style={{ maxWidth: "450px" }}>
              <p>Frontend: React, Next.js, Angular, Remix</p>
              <p>Backend: Express microservices, Python, Node.js</p>
              <p>Database: MySQL, PostgreSQL, MongoDB, Redis, Firebase</p>
              <p>Performance Optimization: project Optimization, Caching +</p>
              <p>
                Infrastructure: AWS, Azure, GCP, Docker, K8, Serverless
                Architecture
              </p>
              <p>CI/CD: Jenkins, GitHub Actions, GitLab CI/CD</p>
              <p>DevOps: Agile Methodologies, Scrum, Git</p>
              <p>AI: Machine Learning, LLM, Google Cloud AI, OpenAI</p>
              <p>Mobile: React Native, Flutter, Ionic</p>
              <p>Web3: Ethereum, Solidity</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
