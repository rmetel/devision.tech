import React from "react";

export const Contact: React.FC = () => {
  return (
    <section className="contact section-padding" data-scroll-index="6">
      <div className="container">
        <div className="row">
          <div className="section-head">
            <h3>Kontakt.</h3>
          </div>
          <div className="col-md-offset-1 col-md-10">
            <div className="info text-center mb-50">
              <div className="col-md-4">
                <div className="item">
                  <span className="icon"><i className="fa fa-location-arrow" aria-hidden="true"></i></span>
                  <h6>Adresse</h6>
                  <p><strong>Scherrstraße 8a, 76137 Karlsruhe</strong></p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="item">
                  <span className="icon"><i className="fa fa-envelope" aria-hidden="true"></i></span>
                  <h6>Email</h6>
                  <p><strong><a href="mailto:info@metzner-gruppe.com">info@metzner-gruppe.com</a></strong></p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="item">
                  <span className="icon"><i className="fa fa-phone" aria-hidden="true"></i></span>
                  <h6>Mobil</h6>
                  <p><strong><a href="tel:+4917684928260">+49 176 84928260</a></strong></p>
                </div>
              </div>
              <div className="clearfix"></div>
            </div>

            <form className="form" id="contact-form" method="post" action="contact.php">
              <div className="messages"></div>

              <div className="controls">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input id="form_name" type="text" name="name" placeholder="Name" required={true} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input id="form_email" type="email" name="email" placeholder="Email" required={true} />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea id="form_message" name="message" placeholder="Nachricht" rows={4}
                                required={true}></textarea>
                    </div>
                    <input type="submit" value="Absenden" className="buton buton-bg" />
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
