import { useState } from "react";
import toast from "react-hot-toast";

const defaultForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [contactForm, setContactForm] = useState(defaultForm);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!contactForm.name && !contactForm.email && !contactForm.message) {
      toast.error("Please fill all the fields");
      return;
    }

    if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(contactForm.email)
    ) {
      toast.error("Please enter a valid email");
      return;
    }

    try {
      setIsLoading(true);
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ contactForm }),
      });

      if (response.ok) {
        toast.success("Email sent successfully");
      } else {
        toast.error("Failed to send email. Please try again.");
      }
      setIsLoading(false);
      setContactForm(defaultForm);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to send email. Please try again.");
      setIsLoading(false);
      setContactForm(defaultForm);
    }
  };

  return (
    <>
      <div className="container section-title">
        <div>
          <p className="text-center">Get in touch</p>
        </div>
        <p className="text-center">Would love to hear from you</p>
      </div>
      <section id="contact" className="contact section">
        <div className="container">
          <div className="php-email-form form">
            <div className="row gy-4">
              <div className="col-md-6">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
                  value={contactForm.name}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, name: e.target.value })
                  }
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Your Email"
                  value={contactForm.email}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, email: e.target.value })
                  }
                />
              </div>
              <div className="col-md-12">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  placeholder="Subject"
                  value={contactForm.subject}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, subject: e.target.value })
                  }
                />
              </div>
              <div className="col-md-12">
                <textarea
                  className="form-control"
                  name="message"
                  rows="6"
                  placeholder="Message"
                  value={contactForm.message}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, message: e.target.value })
                  }
                ></textarea>
              </div>
              <div className="col-md-12 text-center">
                {isLoading ? (
                  <button type="submit" onClick={handleSubmit} className="animate-bounce">
                    Sending...
                  </button>
                ) : (
                  <button type="submit" onClick={handleSubmit}>
                    Send Message
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
