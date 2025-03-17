import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Fireworks } from "fireworks-js";

const defaultForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [contactForm, setContactForm] = useState(defaultForm);
  const [state, handleSubmit] = useForm("mdkeklne");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (state.succeeded) {
      const container = document.getElementById("fireworks-container");
      const fireworks = new Fireworks(container, {
        sound: {
          enabled: true,
          files: ["/sounds/explosion.mp3"],
          volume: {
            min: 4,
            max: 8,
          },
        },
      });
      fireworks.start();

      // Stop fireworks after 5 seconds
      setTimeout(() => {
        fireworks.stop();
      }, 10000);
    }
  }, [state.succeeded]);

  return (
    <>
      {state.succeeded ? (
        <>
          <p className="text-center">Thanks for your message!</p>
          <div
            id="fireworks-container"
            style={{ position: "relative", width: "100%", height: "100vh" }}
          ></div>
        </>
      ) : (
        <>
          <div className="container section-title">
            <p className="text-center">Get in touch</p>
            <p className="text-center">Would love to hear from you</p>
          </div>
          <section id="contact" className="contact section">
            <div className="container">
              <div className="php-email-form form">
                <form onSubmit={handleSubmit} className="row gy-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      value={contactForm.name}
                      onChange={handleChange}
                    />
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Your Email"
                      value={contactForm.email}
                      onChange={handleChange}
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      placeholder="Subject"
                      value={contactForm.subject}
                      onChange={handleChange}
                    />
                    <ValidationError
                      prefix="Subject"
                      field="subject"
                      errors={state.errors}
                    />
                  </div>
                  <div className="col-md-12">
                    <textarea
                      name="message"
                      className="form-control"
                      rows="6"
                      placeholder="Message"
                      value={contactForm.message}
                      onChange={handleChange}
                    ></textarea>
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </div>
                  <div className="col-md-12 text-center">
                    <button type="submit" disabled={state.submitting}>
                      {state.submitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Contact;
