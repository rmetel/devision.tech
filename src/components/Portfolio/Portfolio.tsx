import React from "react";

export const Portfolio: React.FC = () => {
  const images = [
    "/img/portfolio/portfolio-1.jpg",
    "/img/portfolio/portfolio-1.jpg",
    "/img/portfolio/portfolio-1.jpg",
    "/img/portfolio/portfolio-1.jpg",
    "/img/portfolio/portfolio-1.jpg",
    "/img/portfolio/portfolio-1.jpg",
  ];

  return (
    <section
      className="portfolio section-padding pb-70 bg-gray"
      data-scroll-index="2"
    >
      <div className="container">
        <div className="row">
          <div className="section-head">
            <h3>Portfolio.</h3>
          </div>

          <div className="gallery text-center">
            {images.map((image) => {
              return (
                <>
                  <div className="col-md-4 col-sm-6 items graphic">
                    <div className="item-img">
                      <img src={image} alt="image" />
                      <div className="item-img-overlay">
                        <div className="overlay-info v-middle text-center">
                          <h6 className="sm-titl">SOLAR-PANEL</h6>
                          <div className="icons">
                            <span className="icon link">
                              <a href={image}>
                                <i
                                  className="fa fa-search-plus"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
