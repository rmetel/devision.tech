import React from "react";

interface HeroProps {
  headline: string;
  blc: string;
  wordOne: string;
  wordTwo: string;
  applyButton?: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  headline,
  blc,
  wordOne,
  wordTwo,
  applyButton = false,
}) => {
  return (
    <section
      id="home"
      className="header"
      data-scroll-index="0"
      style={{
        backgroundImage: "url(img/tunnel-2033983_1280.jpg)",
      }}
      data-stellar-background-ratio="0.8"
    >
      <div className="v-middle">
        <div className="container">
          <div className="row">
            <div className="caption">
              <h5>{headline}</h5>
              <h1 className="cd-headline clip">
                <span className="blc">{blc}&nbsp;</span>
                <span className="cd-words-wrapper">
                  <b className="is-visible">{wordOne}</b>
                  <b>{wordTwo}</b>
                </span>
              </h1>

              {applyButton ? (
                <a href="#0" data-scroll-goto="100">
                  <span className="buton buton-bg">Jetzt bewerben</span>
                </a>
              ) : (
                <div className="social-icon">
                  <a href="#0">
                    <span>
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </span>
                  </a>
                  &nbsp;&nbsp;
                  <a href="#0">
                    <span>
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
