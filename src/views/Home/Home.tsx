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
      <Hero />
      <Services />
      <Numbers />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};
