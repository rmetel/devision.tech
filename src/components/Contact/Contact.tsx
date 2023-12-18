import React, { useState } from "react";
import { getApiUrl, showToast } from "~/helpers";
import * as z from "zod";
import axios from "axios";

export const Contact: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [validFirstName, setValidFirstName] = useState<boolean>(true);
  const [validLastName, setValidLastName] = useState<boolean>(true);
  const [validEmail, setValidEmail] = useState<boolean>(true);
  const [validMessage, setValidMessage] = useState<boolean>(true);

  const [submit, setSubmit] = useState<boolean>(false);
  const [buttonText, setButtonText] = useState<string>("Nachricht senden");

  const apiUrl = getApiUrl();

  const handleClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();
    setSubmit(true);
    sendEmail();
  };

  const validateFirstName = (firstName: string): boolean => {
    const isValid = z
      .string()
      .min(2, "Bitte geben Sie Ihren Vornamen ein.")
      .safeParse(firstName).success;

    setValidFirstName(() => isValid);
    setFirstName(firstName);

    return isValid;
  };

  const validateLastName = (lastName: string): boolean => {
    console.log("validateLastName");
    const isValid = z
      .string()
      .min(2, "Bitte geben Sie Ihren Vornamen ein.")
      .safeParse(lastName).success;

    setValidLastName(() => isValid);
    setLastName(lastName);

    return isValid;
  };

  const validateEmail = (email: string): boolean => {
    const isValid = z
      .string()
      .email("Bitte geben Sie eine Email ein.")
      .safeParse(email).success;

    setValidEmail(() => isValid);
    setEmail(email);

    return isValid;
  };

  const validateMessage = (message: string): boolean => {
    const isValid = z
      .string()
      .min(1, "Bitte geben Sie eine Nachricht ein.")
      .safeParse(message).success;

    setValidMessage(() => isValid);
    setMessage(message);

    return isValid;
  };

  const validateForm = () => {
    const firstNameOk = validateFirstName(firstName);
    const lastNameOk = validateLastName(lastName);
    const emailOk = validateEmail(email);
    const messageOk = validateMessage(message);

    return firstNameOk && lastNameOk && emailOk && messageOk;
  };

  const sendEmail = () => {
    if (validateForm()) {
      setButtonText("Nachricht wird versendet...");

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
        .catch(() => {
          showToast(`Ein Fehler ist aufgetreten`, "error");
          setButtonText("Nachricht senden");
        });
    } else {
      showToast(
        "Bitte prüfen Sie Ihre Eingaben. Nicht alle Felder sind korrekt ausgefüllt.",
        "error",
      );
    }
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
                        onChange={(e) => {
                          validateFirstName(e.target.value);
                        }}
                        className={!validFirstName ? "invalid" : ""}
                      />
                      {!validFirstName && (
                        <div style={{ color: "rgb(221, 76, 76)" }}>
                          Bitte geben Sie Ihren Vornamen ein
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Nachname"
                        required={true}
                        onChange={(e) => validateLastName(e.target.value)}
                        className={!validLastName ? "invalid" : ""}
                      />
                      {!validLastName && (
                        <div style={{ color: "rgb(221, 76, 76)" }}>
                          Bitte geben Sie Ihren Nachnamen ein
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required={true}
                        onChange={(e) => validateEmail(e.target.value)}
                        className={submit && !validEmail ? "invalid" : ""}
                      />
                      {!validEmail && (
                        <div style={{ color: "rgb(221, 76, 76)" }}>
                          Bitte geben Sie eine Email ein
                        </div>
                      )}
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
                        onChange={(e) => {
                          validateMessage(e.target.value);
                        }}
                        value={message}
                        className={!validMessage ? "invalid" : ""}
                      ></textarea>
                      {!validMessage && (
                        <div style={{ color: "rgb(221, 76, 76)" }}>
                          Bitte geben Sie eine Nachricht ein
                        </div>
                      )}
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
