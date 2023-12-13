import React from "react";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="header"
      data-scroll-index="0"
      style={{
        backgroundImage: "url(img/tunnel-2033983_1280.jpg)",
      }}
      data-stellar-background-ratio="0.8">
      <div className="v-middle">
        <div className="container">
          <div className="row">
            <div className="caption">
              <h5>Willkommen</h5>
              <h1 className="cd-headline clip">
                <span className="blc">bei&nbsp;</span>
                <span className="cd-words-wrapper">
                  <b className="is-visible">Metzner Gruppe</b>
                  <b>Photovoltaik Experten</b>
                </span>
              </h1>

              <div className="social-icon">
                <a href="#0">
                  <span><i className="fa fa-facebook" aria-hidden="true"></i></span>
                </a>
                &nbsp;&nbsp;
                <a href="#0">
                  <span><i className="fa fa-instagram" aria-hidden="true"></i></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};