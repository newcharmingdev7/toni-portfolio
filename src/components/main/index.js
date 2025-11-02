const Main = () => {
  return (
    <main id="home">
      <canvas id="bg-canvas"></canvas>
      <section id="hero" className="hero">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center align-items-center">
            <div>
              <div>
                <h2>Toni Stuckey</h2>
                <p className="text-center">
                  I&apos;m &nbsp;
                  <span
                    className="typed"
                    data-typed-items="a software developer, a team player, a problem solver"
                  ></span>
                  <span className="typed-cursor typed-cursor--blink"></span>
                </p>
                <div className="social-links text-center">
                  <a
                    href="https://www.linkedin.com/in/toni-stuckey-dreamdev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a
                    href="https://github.com/newcharmingdev7"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                  <a
                    href="https://pangea.app/toni-stuckey"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Pangea"
                  >
                    <i className="bi bi-telegram"></i>
                  </a>
                  <a
                    href="https://contra.com/tonisuperstar7_vdr0g3iz/about"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contra"
                  >
                    <i className="bi bi-box-arrow-up-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
