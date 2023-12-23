import React from "react";
import { Application, Footer, Hero } from "~/components";

export const Bewerbung: React.FC = () => {
  return (
    <>
      <Hero
        headline="Bewirb dich jetzt"
        blc="bei"
        wordOne="Metzner Gruppe"
        wordTwo="Photovoltaik Experten"
        applyButton
      />
      <Application />
      <Footer />
    </>
  );
};
