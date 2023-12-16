import React, { useState } from "react";
import { getApiUrl, showToast } from "~/helpers";
import axios from "axios";

export const Contact: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [buttonText, setButtonText] = useState<string>("Nachricht senden");

  const apiUrl = getApiUrl();

  const handleClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();
    setButtonText("Nachricht wird versendet...");
    sendEmail();
  };

  const sendEmail = () => {
    const params = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      message: message,
    };

    axios
      .post(apiUrl + "/email", params)
      .then(({ data }) => {
        showToast(data, "success");
        setMessage("");
        setButtonText("Nachricht senden");
      })
      .catch((error) => {
        showToast(`${error.name}: ${error.message}`, "error");
      });
  };

  return (
    <section className="contact section-padding" data-scroll-index="3">
      <div className="container">
        <div className="row">
          <div className="section-head">
            <h3>Kontakt.</h3>
          </div>
          <div className="col-md-offset-1 col-md-10">
            <div className="info text-center mb-50">
              <div className="col-md-4">
                <div className="item">
                  <span className="icon">
                    <i className="fa fa-location-arrow" aria-hidden="true"></i>
                  </span>
                  <h6>Adresse</h6>
                  <p>
                    <strong>Scherrstraße 8a, 76137 Karlsruhe</strong>
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="item">
                  <span className="icon">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </span>
                  <h6>Email</h6>
                  <p>
                    <strong>
                      <a href="mailto:info@metzner-gruppe.com">
                        info@metzner-gruppe.com
                      </a>
                    </strong>
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="item">
                  <span className="icon">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                  </span>
                  <h6>Mobil</h6>
                  <p>
                    <strong>
                      <a href="tel:+4917684928260">+49 176 84928260</a>
                    </strong>
                  </p>
                </div>
              </div>
              <div className="clearfix"></div>
            </div>

            <form
              className="form"
              id="contact-form"
              method="post"
              action="contact.php"
            >
              <div className="messages"></div>

              <div className="controls">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Vorname"
                        required={true}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Nachname"
                        required={true}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required={true}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Telefon (optional)"
                        required={true}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        placeholder="Nachricht"
                        rows={4}
                        required={true}
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                      ></textarea>
                    </div>
                    <input
                      type="submit"
                      value={buttonText}
                      className="buton buton-bg"
                      onClick={handleClick}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
