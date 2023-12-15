import React from "react";
import { Footer } from "../../components/Footer";
import { Hero } from "../../components/Hero";
import { Application } from "~/components";

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
