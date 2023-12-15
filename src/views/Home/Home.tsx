import React from "react";
import {
  Contact,
  Footer,
  Hero,
  Numbers,
  Portfolio,
  Services,
} from "~/components";

export const Home: React.FC = () => {
  return (
    <>
      <Hero
        headline="Willkommen"
        blc="bei"
        wordOne="Metzner Gruppe"
        wordTwo="Photovoltaik Experten"
      />
      <Services />
      <Numbers />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};
