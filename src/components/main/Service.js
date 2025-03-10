const Service = () => {
  return (
    <>
      <div className="container section-title">
        <div>
          <p className="text-center">What I offer</p>
        </div>
        <p className="text-center">Services I provide</p>
      </div>
      <section id="services" className="services section">
        <div className="container">
          <div className="row gy-3">
            <div className="col-lg-4 col-md-6">
              <div className="service-item  position-relative">
                <div className="icon">
                  <i className="bi bi-code-slash"></i>
                </div>
                <h3>Web Development</h3>
                <p>
                  Create sleek, responsive websites and full-scale web
                  applications that are fast, scalable, and user-friendly.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-gear"></i>
                </div>
                <h3>DevOps Engineering</h3>
                <p>
                  Leveraging expertise in cloud platforms like AWS, Optimize
                  development with CI/CD pipelines, Docker, and Kubernetes,
                  ensuring smooth and reliable deployments.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-cpu"></i>
                </div>
                <h3>AI & Blockchain Integration</h3>
                <p>
                  From integrating machine learning models to developing secure
                  blockchain applications, Deliver cutting-edge innovation to
                  every project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
