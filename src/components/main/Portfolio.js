const Portfolio = () => {
  return (
    <>
      <div className="container section-title">
        <div>
          <p className="text-center">Portfolio</p>
        </div>
        <p className="text-center text-[18px]">Explore my projects</p>
      </div>
      <section id="portfolio" className="portfolio section" data-aos="zoom-in">
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
                  <a href="https://www.findd.ai/" alt="findd" target="_blank">
                    <img
                      src="assets/img/portfolio/findd.jpg"
                      className="img-fluid"
                      alt="findd"
                    />
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-12 portfolio-item isotope-item filter-ux">
                <div className="portfolio-content h-100 rounded">
                  <a
                    href="https://www.nywholesalescarves.com/"
                    alt="nywholesalescarves"
                    target="_blank"
                  >
                    <img
                      src="assets/img/portfolio/nywholesalescarves.jpg"
                      className="img-fluid"
                      alt="nywholesalescarves"
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 portfolio-item isotope-item filter-web">
                <div className="portfolio-content h-100 rounded">
                  <a
                    href="https://www.projectyou.care/"
                    alt="projectyou"
                    target="_blank"
                  >
                    <img
                      src="assets/img/portfolio/projectyou.jpg"
                      className="img-fluid"
                      alt="projectyou"
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
