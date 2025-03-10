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
                <p>
                  I&apos;m &nbsp;
                  <span
                    className="typed"
                    data-typed-items="a software developer, a team player, a problem solver"
                  ></span>
                  <span className="typed-cursor typed-cursor--blink"></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
