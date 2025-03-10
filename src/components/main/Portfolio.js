const Portfolio = () => {
  return (
    <>
      <div className="container section-title">
        <div>
          <p className="text-center">Portfolio</p>
        </div>
        <p className="text-center">Explore my projects</p>
      </div>
      <section id="portfolio" className="portfolio section">
        <div className="container">
          <div
            className="isotope-layout"
            data-default-filter="*"
            data-layout="masonry"
            data-sort="original-order"
          >
            <div className="row gy-4 isotope-container">
              <div className="col-lg-4 col-md-12 portfolio-item isotope-item filter-web">
                <div className="portfolio-content h-100 rounded">
                  <a href="https://mindtrip.ai/" alt="mindtrip" target="_blank">
                    <img
                      src="assets/img/portfolio/mindtrip.jpg"
                      className="img-fluid"
                      alt="mindtrip"
                    />
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-12 portfolio-item isotope-item filter-ux">
                <div className="portfolio-content h-100 rounded">
                  <a href="https://www.findd.ai/" alt="findd" target="_blank">
                    <img
                      src="assets/img/portfolio/findd.jpg"
                      className="img-fluid"
                      alt="findd"
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 portfolio-item isotope-item filter-web">
                <div className="portfolio-content h-100 rounded">
                  <a
                    href="https://adadvance.com/"
                    alt="adadvance"
                    target="_blank"
                  >
                    <img
                      src="assets/img/portfolio/adadvance.jpg"
                      className="img-fluid"
                      alt="adadvance"
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 portfolio-item isotope-item filter-ux">
                <div className="portfolio-content h-100 rounded">
                  <a
                    href="https://www.frienzy.com/"
                    alt="frienzy"
                    target="_blank"
                  >
                    <img
                      src="assets/img/portfolio/frienzy.jpg"
                      className="img-fluid"
                      alt="frienzy"
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 portfolio-item isotope-item filter-web">
                <div className="portfolio-content h-100 rounded">
                  <a
                    href="https://tamaractech.com/"
                    alt="tamarac"
                    target="_blank"
                  >
                    <img
                      src="assets/img/portfolio/tamarac.jpg"
                      className="img-fluid"
                      alt="tamarac"
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 portfolio-item isotope-item filter-ux">
                <div className="portfolio-content h-100 rounded">
                  <a href="https://italic.com/" alt="dressshop" target="_blank">
                    <img
                      src="assets/img/portfolio/italic.jpg"
                      className="img-fluid"
                      alt="dressShopt"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
