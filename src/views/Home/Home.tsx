import React from "react";
import { Apps, Contact, Footer, Hero } from "~/components";

export const Home: React.FC = () => {
  return (
    <>
      <Hero
        headline="Welcome"
        blc="by"
        wordOne="Devision.tech"
        wordTwo="web development"
      />
      <Apps />
      <Contact />
      <Footer />
    </>
  );
};
