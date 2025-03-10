const Experience = () => {
  return (
    <>
      <div className="container section-title">
        <div>
          <p className="text-center">Professional Experience</p>
        </div>
        <p className="text-center">Explore my career journey</p>
      </div>
      <section id="experience" className="resume section">
        <div className="container">
          <div className="resume-item">
            <h4>Software Developer and Team Lead</h4>
            <div className="d-flex justify-content-between">
              <p>
                <em>R/GA, Remote</em>
              </p>
              <h5>2022 - Present</h5>
            </div>
            <ul>
              <li>Led the development of an AI-powered social platform</li>
              <li>Mentored junior developers</li>
              <li>
                Actively participated in technical communities and collaborated
                with another peers
              </li>
              <li>
                Participated in interview with clients and stakeholders to
                expand my business insights.
              </li>
            </ul>
          </div>
          <div className="resume-item">
            <h4>Back End Developer</h4>
            <div className="d-flex justify-content-between">
              <p>
                <em>Specbee, Atlanta, GA</em>
              </p>
              <h5>2018 - 2022</h5>
            </div>
            <ul>
              <li>
                Built and maintained backend solution of Workforce Management
                Platform{" "}
              </li>
              <li>Designed APIs and documented them </li>
              <li>
                Refactored a legacy Node.js backend to Nest.js to improve
                project performance.
              </li>
            </ul>
          </div>
          <div className="resume-item">
            <h4>Front-End Performance Engineer and Front End Developer</h4>
            <div className="d-flex justify-content-between">
              <p>
                <em>VEH Enterprises Inc, Atlanta, GA</em>
              </p>
              <h5>2015 - 2018</h5>
            </div>
            <ul>
              <li>Developed a serverless SaaS platform </li>
              <li>Developed e-commerce platform for dress shop with Shopify </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
