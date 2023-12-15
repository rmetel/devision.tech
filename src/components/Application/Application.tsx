import axios from "axios";
import React, { useState } from "react";
import { getApiUrl, showToast } from "~/helpers";

export const Application: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const apiUrl = getApiUrl();

  const handleClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();
    showToast("Email wird versendet...", "info");
    sendEmail();
  };

  const sendEmail = () => {
    const params = {
      email: email,
      name: name,
      message: message,
    };

    axios
      .post(apiUrl + "/email", params)
      .then(({ data }) => {
        showToast(data, "success");
        setMessage("");
      })
      .catch((error) => {
        showToast(`${error.name}: ${error.message}`, "error");
      });
  };

  return (
    <section className="contact section-padding" data-scroll-index="100">
      <div className="container">
        <div className="row">
          <div className="section-head">
            <h3>Bewerbung.</h3>
          </div>
          <div className="col-md-offset-1 col-md-10">
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
                        id="form_name"
                        type="text"
                        name="name"
                        placeholder="Name"
                        required={true}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        required={true}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="form-group">
                      <input
                        id="form_email"
                        type="text"
                        name="street"
                        placeholder="Straße"
                        required={true}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <input
                        id="form_email"
                        type="text"
                        name="streetNumber"
                        placeholder="Hausnummer"
                        required={true}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <input
                        id="form_email"
                        type="text"
                        name="zip"
                        placeholder="PLZ"
                        required={true}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="form-group">
                      <input
                        id="form_email"
                        type="text"
                        name="city"
                        placeholder="Stadt"
                        required={true}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        id="form_message"
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
                      value="Bewerbung senden"
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
