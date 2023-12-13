import React from "react";

export const Services: React.FC = () => {
  return (
    <section className="services section-padding bg-gray text-center pb-70" data-scroll-index="1">
      <div className="container">
        <div className="section-head">
          <h3>Leistungen.</h3>
        </div>
        <div className="row wrapper" style={{ display: "flex", alignItems: "stretch" }}>
          <div className="col-xs-12 col-md-4">
            <div className="item">
              <span className="icon"><i className="fa fa-sun-o" aria-hidden="true"></i></span>
              <h6>Auf-Dach-Photovoltaik-Anlage</h6>
              <p>Für die Aufdachmontage sind fast alle Dachtypen geeignet, jedoch werden Auf­dach­anlagen am meisten auf
                einem Schrägdach installiert. Besonders bei der Nachrüstung einer Photovoltaikanlage erfreut sich diese
                Anlagenart allgemeiner Beliebt­heit, da sie schnell vonstattengeht. Bei der Aufdachmontage bleibt das
                Dach unverändert, sodass beim Schrägdach die Ziegel unter dem Modul erhalten bleiben können.</p>
            </div>
          </div>
          <div className="col-xs-12 col-md-4">
            <div className="item">
              <span className="icon"><i className="fa fa-plug" aria-hidden="true"></i></span>
              <h6>In-Dach-Photovoltaik-Anlage</h6>
              <p>Bei der Indachmontage werden die Module bündig in das Dach eingesetzt, was die bisherigen Dachziegel
                ersetzt. Dies kann sich bei einer Dachsanierung günstig auf die Baukosten auswirken. Diese Montageart
                besticht durch ihre Optik und setzt moderne Akzente. Einsetzbar bei allen gängigen Dacharten mit
                Ausnahme eines Flachdachs. Bei einem Flachdach müsste zunächst ein Gestell errichtet werden, welches die
                Auswahl des optimalen Neigungswinkels zur Sonne ermöglicht.</p>
            </div>
          </div>
          <div className="col-xs-12 col-md-4">
            <div className="item">
              <span className="icon"><i className="fa fa-phone" aria-hidden="true"></i></span>
              <h6>Angebot zum Festpreis</h6>
              <p>Für alle Fragen rund um die Montage Ihrer Photovoltaikanlage stehen wir Ihnen jederzeit gerne zur
                Verfügung. Natürlich können Sie auch Kontakt mit uns aufnehmen, wenn Sie ein konkretes Angebot
                brauchen.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};