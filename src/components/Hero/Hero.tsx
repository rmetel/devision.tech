import React from "react";
import { buildUrl } from "~/helpers";

interface HeroProps {
  headline: string;
  blc: string;
  wordOne: string;
  wordTwo: string;
}

export const Hero: React.FC<HeroProps> = ({
  headline,
  blc,
  wordOne,
  wordTwo,
}) => {
  return (
    <section
      id="home"
      className="header"
      data-scroll-index="0"
      style={{
        backgroundImage: `url(${buildUrl("/", "img/notebook-coffee.jpg")})`,
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
