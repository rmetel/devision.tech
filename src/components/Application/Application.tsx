import axios from "axios";
import React, { useState } from "react";
import { getApiUrl, showToast } from "~/helpers";

export const Application: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const [streetNumber, setStreetNumber] = useState<string>("");
  const [zip, setZip] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [buttonText, setButtonText] = useState<string>("Bewerbung senden");

  const apiUrl = getApiUrl();

  const handleClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();
    setButtonText("Bewerbung wird gesendet...");
    sendApplication();
  };

  const sendApplication = () => {
    const params = {
      firstName: firstName,
      lastName: lastName,
      street: street,
      streetNumber: streetNumber,
      zip: zip,
      city: city,
      email: email,
      phone: phone,
      message: message,
    };

    console.log(params);

    axios
      .post(apiUrl + "/application", params)
      .then(({ data }) => {
        showToast(data, "success");
        setMessage("");
        setButtonText("Bewerbung senden");
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
                        type="text"
                        name="firstName"
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
                        name="lastName"
                        placeholder="Nachame"
                        required={true}
                        onChange={(e) => setLastName(e.target.value)}
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
                        onChange={(e) => setStreet(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <input
                        type="text"
                        name="streetNumber"
                        placeholder="Hausnummer"
                        required={true}
                        onChange={(e) => setStreetNumber(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <input
                        type="text"
                        name="zip"
                        placeholder="PLZ"
                        required={true}
                        onChange={(e) => setZip(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="form-group">
                      <input
                        type="text"
                        name="city"
                        placeholder="Stadt"
                        required={true}
                        onChange={(e) => setCity(e.target.value)}
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
                        placeholder="Telefon"
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
