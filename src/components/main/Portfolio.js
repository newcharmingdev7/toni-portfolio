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
                    href="https://hellosyncx.com/"
                    alt="Syncx"
                    target="_blank"
                  >
                    <img
                      src="assets/img/portfolio/syncx.png"
                      className="img-fluid"
                      alt="Syncx"
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
                    href="https://www.consumerdirectva.com/"
                    alt="consumerdirectva"
                    target="_blank"
                  >
                    <img
                      src="assets/img/portfolio/consumerdirectva.png"
                      className="img-fluid"
                      alt="consumerdirectva"
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 portfolio-item isotope-item filter-web">
                <div className="portfolio-content h-100 rounded">
                  <a
                    href="https://cerkitek-landing.vercel.app/"
                    alt="cerkitek"
                    target="_blank"
                  >
                    <img
                      src="assets/img/portfolio/cerkitek.png"
                      className="img-fluid"
                      alt="cerkitek"
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
