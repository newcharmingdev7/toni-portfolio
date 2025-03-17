import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="container section-title">
        <div>
          <p className="text-center">About</p>
        </div>
        <p className="text-center text-[18px]">
          Hey there! I&apos;m Toni, a software developer with a passion for
          building scalable and efficient solutions.
        </p>
      </div>
      <section id="about" className="about section">
        <div className="container">
          <div className="row gy-4 justify-content-center">
            <div className="flex justify-content-center align-items-center">
              <Image
                src="/assets/img/profile-img.jpg"
                alt="Toni Stuckey"
                width={300}
                height={300}
              />
            </div>
            <div className="col-lg-8 content d-flex justify-content-center align-items-center">
              <div>
                <h2>Software Developer</h2>
                <p className="py-3 text-[18px]">
                  An experienced and reliable software developer with over a
                  decade of expertise in web, mobile, AI, Web3, and DevOps.
                  Known for delivering high-quality, scalable solutions through
                  innovative approaches and a broad technical vision. Always
                  learning and improving, and I love working as part of a team.
                  If you&apos;re looking for a developer who can turn your ideas
                  into reality, I&apos;m your person.
                </p>
                <div className="row">
                  <ul className="text-[18px]">
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Name:</strong> <span>Toni Stuckey</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Location:</strong> <span>Atlanta, GA USA</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>University:</strong>{" "}
                      <span>Georgia Institute of Technology</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Degree:</strong>{" "}
                      <span>Bachelor of Computer Science</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
